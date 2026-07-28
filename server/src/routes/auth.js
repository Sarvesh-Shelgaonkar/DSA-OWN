import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { OAuth2Client } from 'google-auth-library';
import { User } from '../models/User.js';
import { UserData } from '../models/UserData.js';
import { requireAuth } from '../middleware/auth.js';
import { signToken, cookieOptions, COOKIE_NAME } from '../utils/token.js';

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const googleClient = GOOGLE_CLIENT_ID ? new OAuth2Client(GOOGLE_CLIENT_ID) : null;

// Issue a session: set the httpOnly cookie AND return the token so the client
// can persist it (Bearer fallback) for environments where cross-site cookies
// are blocked. Both mechanisms use the same signed JWT.
const issueSession = (res, userId) => {
  const token = signToken(userId);
  res.cookie(COOKIE_NAME, token, cookieOptions);
  return token;
};

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  try {
    const name = String(req.body?.name || '').trim();
    const email = String(req.body?.email || '').trim().toLowerCase();
    const password = String(req.body?.password || '');

    if (name.length < 2) return res.status(400).json({ error: 'Please enter your name.' });
    if (!EMAIL_RE.test(email)) return res.status(400).json({ error: 'Please enter a valid email.' });
    if (password.length < 6)
      return res.status(400).json({ error: 'Password must be at least 6 characters.' });

    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ error: 'An account with this email already exists.' });

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, passwordHash });
    await UserData.create({ user: user._id, username: name });

    const token = issueSession(res, user._id.toString());
    return res.status(201).json({ user: user.toSafeJSON(), token });
  } catch (err) {
    console.error('[signup]', err);
    return res.status(500).json({ error: 'Could not create account. Please try again.' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const email = String(req.body?.email || '').trim().toLowerCase();
    const password = String(req.body?.password || '');

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid email or password.' });

    if (!user.passwordHash) {
      return res.status(401).json({ error: 'This account uses Google Sign-In. Please continue with Google.' });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: 'Invalid email or password.' });

    const token = issueSession(res, user._id.toString());
    return res.json({ user: user.toSafeJSON(), token });
  } catch (err) {
    console.error('[login]', err);
    return res.status(500).json({ error: 'Could not sign in. Please try again.' });
  }
});

// POST /api/auth/google — verify a Google ID token (from Google Identity Services)
// and sign the user in, creating or linking an account as needed.
router.post('/google', async (req, res) => {
  try {
    if (!googleClient) {
      return res.status(503).json({ error: 'Google Sign-In is not configured on the server.' });
    }
    const credential = String(req.body?.credential || '');
    if (!credential) return res.status(400).json({ error: 'Missing Google credential.' });

    let payload;
    try {
      const ticket = await googleClient.verifyIdToken({
        idToken: credential,
        audience: GOOGLE_CLIENT_ID,
      });
      payload = ticket.getPayload();
    } catch {
      return res.status(401).json({ error: 'Could not verify Google account. Please try again.' });
    }

    if (!payload?.email || !payload.email_verified) {
      return res.status(401).json({ error: 'Your Google email is not verified.' });
    }

    const googleId = payload.sub;
    const email = payload.email.toLowerCase();
    const name = (payload.name || email.split('@')[0]).slice(0, 60);
    const avatar = payload.picture || '';

    // Match by Google ID first, then fall back to an existing email account (link it).
    let user = await User.findOne({ googleId });
    if (!user) user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, googleId, provider: 'google', avatar, passwordHash: '' });
      await UserData.create({ user: user._id, username: name });
    } else {
      // Link Google to an existing account and refresh the avatar.
      let dirty = false;
      if (!user.googleId) { user.googleId = googleId; user.provider = user.provider || 'google'; dirty = true; }
      if (avatar && user.avatar !== avatar) { user.avatar = avatar; dirty = true; }
      if (dirty) await user.save();
      const hasData = await UserData.exists({ user: user._id });
      if (!hasData) await UserData.create({ user: user._id, username: user.name });
    }

    const token = issueSession(res, user._id.toString());
    return res.json({ user: user.toSafeJSON(), token });
  } catch (err) {
    console.error('[google]', err);
    return res.status(500).json({ error: 'Could not sign in with Google. Please try again.' });
  }
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: undefined });
  return res.json({ ok: true });
});

// GET /api/auth/me
router.get('/me', requireAuth, async (req, res) => {
  const user = await User.findById(req.userId);
  if (!user) return res.status(401).json({ error: 'Not authenticated' });
  return res.json({ user: user.toSafeJSON() });
});

export default router;
