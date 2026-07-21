import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';

const TimerContext = createContext(null);

const TIMES_KEY = 'mydsa-timers';
const ACTIVE_KEY = 'mydsa-timer-active';

const readTimes = () => {
  try {
    return JSON.parse(localStorage.getItem(TIMES_KEY)) || {};
  } catch {
    return {};
  }
};
const readActive = () => {
  try {
    return JSON.parse(localStorage.getItem(ACTIVE_KEY)) || null;
  } catch {
    return null;
  }
};

/**
 * Practice-timer store. One problem can be timed at a time; elapsed seconds are
 * accumulated per problem in localStorage so timing survives navigation, reloads
 * and tab switches (time spent on a hidden tab is not counted).
 */
export function TimerProvider({ children }) {
  const [times, setTimes] = useState(readTimes);
  // active = { id, startedAt } | null. startedAt is null while paused (e.g. hidden tab).
  const [active, setActive] = useState(readActive);
  const [, setTick] = useState(0);

  const timesRef = useRef(times);
  const activeRef = useRef(active);
  timesRef.current = times;
  activeRef.current = active;

  useEffect(() => {
    try {
      localStorage.setItem(TIMES_KEY, JSON.stringify(times));
    } catch {
      /* ignore quota */
    }
  }, [times]);

  useEffect(() => {
    try {
      if (active) localStorage.setItem(ACTIVE_KEY, JSON.stringify(active));
      else localStorage.removeItem(ACTIVE_KEY);
    } catch {
      /* ignore */
    }
  }, [active]);

  // Re-render every second while a timer is actively running.
  useEffect(() => {
    if (!active || !active.startedAt) return undefined;
    const iv = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(iv);
  }, [active]);

  const bank = useCallback(() => {
    const a = activeRef.current;
    if (a && a.startedAt) {
      const add = Math.floor((Date.now() - a.startedAt) / 1000);
      if (add > 0) {
        setTimes((t) => ({ ...t, [a.id]: (t[a.id] || 0) + add }));
      }
    }
  }, []);

  const toggle = useCallback(
    (id) => {
      const a = activeRef.current;
      if (a && a.id === id) {
        bank();
        setActive(null);
      } else {
        if (a && a.startedAt) bank();
        setActive({ id, startedAt: Date.now() });
      }
    },
    [bank]
  );

  const reset = useCallback((id) => {
    if (activeRef.current && activeRef.current.id === id) setActive(null);
    setTimes((t) => {
      const next = { ...t };
      delete next[id];
      return next;
    });
  }, []);

  const elapsedOf = useCallback(
    (id) => {
      const base = times[id] || 0;
      if (active && active.id === id && active.startedAt) {
        return base + Math.floor((Date.now() - active.startedAt) / 1000);
      }
      return base;
    },
    [times, active]
  );

  const isRunning = useCallback((id) => Boolean(active && active.id === id && active.startedAt), [active]);

  // Pause when the tab is hidden; resume when visible again. Bank on unload.
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) {
        const a = activeRef.current;
        if (a && a.startedAt) {
          bank();
          setActive({ id: a.id, startedAt: null });
        }
      } else {
        const a = activeRef.current;
        if (a && !a.startedAt) setActive({ id: a.id, startedAt: Date.now() });
      }
    };
    const onUnload = () => {
      const a = activeRef.current;
      if (a && a.startedAt) {
        const add = Math.floor((Date.now() - a.startedAt) / 1000);
        const t = readTimes();
        t[a.id] = (t[a.id] || 0) + add;
        try {
          localStorage.setItem(TIMES_KEY, JSON.stringify(t));
        } catch {
          /* ignore */
        }
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('beforeunload', onUnload);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('beforeunload', onUnload);
    };
  }, [bank]);

  const value = { times, active, elapsedOf, isRunning, toggle, reset };
  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTimer = () => {
  const ctx = useContext(TimerContext);
  if (!ctx) throw new Error('useTimer must be used within a TimerProvider');
  return ctx;
};

export const formatDuration = (secs) => {
  const s = Math.max(0, Math.floor(secs));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  return `${m}:${String(sec).padStart(2, '0')}`;
};
