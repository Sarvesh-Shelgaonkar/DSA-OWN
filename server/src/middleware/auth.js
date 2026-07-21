import { verifyToken, COOKIE_NAME } from '../utils/token.js';

export function requireAuth(req, res, next) {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token) return res.status(401).json({ error: 'Not authenticated' });
  try {
    const { uid } = verifyToken(token);
    req.userId = uid;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired session' });
  }
}
