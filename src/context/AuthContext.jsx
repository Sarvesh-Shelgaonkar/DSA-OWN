import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { api, getToken } from '../lib/api';

const AuthContext = createContext(null);
const USER_KEY = 'mydsa-user';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function cacheUser(user) {
  try {
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
    else localStorage.removeItem(USER_KEY);
  } catch {
    /* ignore */
  }
}

function readCachedUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// Resolve the current session. A 401 means definitively not logged in, so we
// stop immediately. Any other failure (network error / server cold start) is
// retried a few times so a transient blip on startup doesn't sign the user out.
async function resolveSession() {
  const maxRetries = getToken() ? 5 : 1;
  for (let attempt = 0; ; attempt++) {
    try {
      return await api.me();
    } catch (err) {
      if (err.status === 401 || attempt >= maxRetries) throw err;
      await sleep(800 * (attempt + 1));
    }
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // 'loading' until we know; then 'authed' or 'guest'
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let alive = true;
    resolveSession()
      .then((res) => {
        if (!alive) return;
        cacheUser(res.user);
        setUser(res.user);
        setStatus('authed');
      })
      .catch((err) => {
        if (!alive) return;
        // Only a real 401 means "logged out". Network / proxy blips (API still
        // starting) used to wipe the UI session on every reload — keep the
        // cached user when we still have a token.
        if (err.status === 401 || !getToken()) {
          cacheUser(null);
          setUser(null);
          setStatus('guest');
          return;
        }
        const cached = readCachedUser();
        if (cached) {
          setUser(cached);
          setStatus('authed');
        } else {
          setUser(null);
          setStatus('guest');
        }
      });
    return () => {
      alive = false;
    };
  }, []);

  const login = useCallback(async (email, password) => {
    const res = await api.login({ email, password });
    cacheUser(res.user);
    setUser(res.user);
    setStatus('authed');
    return res.user;
  }, []);

  const signup = useCallback(async (name, email, password) => {
    const res = await api.signup({ name, email, password });
    cacheUser(res.user);
    setUser(res.user);
    setStatus('authed');
    return res.user;
  }, []);

  const loginWithGoogle = useCallback(async (credential) => {
    const res = await api.google({ credential });
    cacheUser(res.user);
    setUser(res.user);
    setStatus('authed');
    return res.user;
  }, []);

  const logout = useCallback(async () => {
    try {
      await api.logout();
    } catch {
      /* ignore — clear locally regardless */
    }
    cacheUser(null);
    setUser(null);
    setStatus('guest');
  }, []);

  return (
    <AuthContext.Provider value={{ user, status, isAuthed: status === 'authed', login, signup, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
