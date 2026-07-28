// Base URL for the API. In dev, Vite proxies "/api" to the local server
// (see vite.config.js). In production, set VITE_API_URL to the deployed API,
// e.g. https://mydsa-api.onrender.com/api
const BASE = import.meta.env.VITE_API_URL || '/api';

// Persisted session token (Bearer fallback). This keeps the user signed in
// across browser/PC restarts even when the httpOnly auth cookie is dropped —
// e.g. when the browser blocks cross-site cookies (frontend and API on
// different domains).
const TOKEN_KEY = 'mydsa-token';

export function getToken() {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

function setToken(token) {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
  } catch {
    /* ignore quota / privacy mode */
  }
}

function clearToken() {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* ignore */
  }
}

async function request(path, { method = 'GET', body, keepalive = false } = {}) {
  const headers = {};
  if (body) headers['Content-Type'] = 'application/json';
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  let res;
  try {
    res = await fetch(`${BASE}${path}`, {
      method,
      credentials: 'include',
      keepalive,
      headers: Object.keys(headers).length ? headers : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error('Network error — is the server running?');
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    // A rejected session means the stored token is no longer valid.
    if (res.status === 401) clearToken();
    const err = new Error(data.error || `Request failed (${res.status})`);
    err.status = res.status;
    throw err;
  }
  // Persist any freshly issued session token (login/signup/google).
  if (data.token) setToken(data.token);
  return data;
}

export const api = {
  signup: (body) => request('/auth/signup', { method: 'POST', body }),
  login: (body) => request('/auth/login', { method: 'POST', body }),
  google: (body) => request('/auth/google', { method: 'POST', body }),
  logout: async () => {
    try {
      return await request('/auth/logout', { method: 'POST' });
    } finally {
      clearToken();
    }
  },
  me: () => request('/auth/me'),
  getData: () => request('/data'),
  putData: (body, opts = {}) => request('/data', { method: 'PUT', body, ...opts }),
  analyzeResume: (body) => request('/interview/analyze', { method: 'POST', body }),
};
