import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { api, getToken } from '../lib/api';

const AuthContext = createContext(null);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Resolve the current session. A 401 means definitively not logged in, so we
// stop immediately. Any other failure (network error / server cold start) is
// retried a few times so a transient blip on startup doesn't sign the user out.
async function resolveSession() {
  const maxRetries = getToken() ? 3 : 0;
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
        setUser(res.user);
        setStatus('authed');
      })
      .catch(() => {
        if (!alive) return;
        setUser(null);
        setStatus('guest');
      });
    return () => {
      alive = false;
    };
  }, []);

  const login = useCallback(async (email, password) => {
    const res = await api.login({ email, password });
    setUser(res.user);
    setStatus('authed');
    return res.user;
  }, []);

  const signup = useCallback(async (name, email, password) => {
    const res = await api.signup({ name, email, password });
    setUser(res.user);
    setStatus('authed');
    return res.user;
  }, []);

  const loginWithGoogle = useCallback(async (credential) => {
    const res = await api.google({ credential });
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
