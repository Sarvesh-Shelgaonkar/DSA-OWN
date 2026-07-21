// Base URL for the API. In dev, Vite proxies "/api" to the local server
// (see vite.config.js). In production, set VITE_API_URL to the deployed API,
// e.g. https://mydsa-api.onrender.com/api
const BASE = import.meta.env.VITE_API_URL || '/api';

async function request(path, { method = 'GET', body, keepalive = false } = {}) {
  let res;
  try {
    res = await fetch(`${BASE}${path}`, {
      method,
      credentials: 'include',
      keepalive,
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error('Network error — is the server running?');
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || `Request failed (${res.status})`);
    err.status = res.status;
    throw err;
  }
  return data;
}

export const api = {
  signup: (body) => request('/auth/signup', { method: 'POST', body }),
  login: (body) => request('/auth/login', { method: 'POST', body }),
  google: (body) => request('/auth/google', { method: 'POST', body }),
  logout: () => request('/auth/logout', { method: 'POST' }),
  me: () => request('/auth/me'),
  getData: () => request('/data'),
  putData: (body, opts = {}) => request('/data', { method: 'PUT', body, ...opts }),
  analyzeResume: (body) => request('/interview/analyze', { method: 'POST', body }),
};
