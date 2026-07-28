import { verifyToken, COOKIE_NAME } from '../utils/token.js';

// Accept the session token from the httpOnly cookie OR an Authorization: Bearer
// header. The header fallback keeps users signed in even when the browser drops
// cross-site cookies (a common cause of being logged out after a restart).
function getToken(req) {
  const cookieToken = req.cookies?.[COOKIE_NAME];
  if (cookieToken) return cookieToken;
  const header = req.headers?.authorization || '';
  if (header.startsWith('Bearer ')) return header.slice(7).trim();
  return null;
}

export function requireAuth(req, res, next) {
  const token = getToken(req);
  if (!token) return res.status(401).json({ error: 'Not authenticated' });
  try {
    const { uid } = verifyToken(token);
    req.userId = uid;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired session' });
  }
}
