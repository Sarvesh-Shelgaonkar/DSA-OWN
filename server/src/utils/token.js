import jwt from 'jsonwebtoken';

const isProd = process.env.NODE_ENV === 'production';
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

export function signToken(userId) {
  return jwt.sign({ uid: userId }, process.env.JWT_SECRET, { expiresIn: '30d' });
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

// Cross-site cookies (static frontend + separate API host) require
// SameSite=None + Secure in production; lax works for same-site local dev.
export const cookieOptions = {
  httpOnly: true,
  secure: isProd,
  sameSite: isProd ? 'none' : 'lax',
  maxAge: MAX_AGE_MS,
  path: '/',
};

export const COOKIE_NAME = 'mydsa_token';
