import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { api } from '../lib/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // 'loading' until we know; then 'authed' or 'guest'
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let alive = true;
    api
      .me()
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
