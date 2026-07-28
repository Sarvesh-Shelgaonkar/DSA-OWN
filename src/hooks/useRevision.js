import { useCallback, useEffect, useState } from 'react';

const KEY = 'mydsa-revision';

const read = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
};

/**
 * Revision store. For each problem the user has interacted with we keep:
 *   { rating: 0-5, reviseCount: number, lastRevised: ISO string | null }
 * Solved problems automatically appear in the Revision section; rating and
 * revise-count are managed here.
 */
export function useRevision() {
  const [revision, setRevision] = useState(read);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === KEY) setRevision(read());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const persist = useCallback((updater) => {
    setRevision((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* ignore quota */
      }
      return next;
    });
  }, []);

  const getEntry = useCallback(
    (id) => revision[id] || { rating: 0, reviseCount: 0, lastRevised: null },
    [revision]
  );

  const setRating = useCallback(
    (id, rating) =>
      persist((prev) => ({
        ...prev,
        [id]: { ...(prev[id] || { reviseCount: 0, lastRevised: null }), rating },
      })),
    [persist]
  );

  // Count another revision pass for a problem.
  const addRevision = useCallback(
    (id) =>
      persist((prev) => {
        const entry = prev[id] || { rating: 0, reviseCount: 0, lastRevised: null };
        return {
          ...prev,
          [id]: {
            ...entry,
            reviseCount: (entry.reviseCount || 0) + 1,
            lastRevised: new Date().toISOString(),
          },
        };
      }),
    [persist]
  );

  // Undo a revision pass (never goes below 0). Clears the timestamp at 0.
  const decreaseRevision = useCallback(
    (id) =>
      persist((prev) => {
        const entry = prev[id];
        if (!entry || !(entry.reviseCount > 0)) return prev;
        const nextCount = entry.reviseCount - 1;
        return {
          ...prev,
          [id]: {
            ...entry,
            reviseCount: nextCount,
            lastRevised: nextCount === 0 ? null : entry.lastRevised,
          },
        };
      }),
    [persist]
  );

  // Reset a problem's revision count (and timestamp) back to zero, keeping its rating.
  const resetCount = useCallback(
    (id) =>
      persist((prev) => {
        const entry = prev[id];
        if (!entry) return prev;
        return { ...prev, [id]: { ...entry, reviseCount: 0, lastRevised: null } };
      }),
    [persist]
  );

  const resetRevision = useCallback(
    (id) =>
      persist((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      }),
    [persist]
  );

  return { revision, getEntry, setRating, addRevision, decreaseRevision, resetCount, resetRevision };
}
