import { useCallback, useEffect, useState } from 'react';

const KEY = 'mydsa-lessons';

const read = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
};

/**
 * Tracks completed roadmap lessons/concepts, keyed by stage:
 *   { [stageId]: { [conceptIndex]: true } }
 * Persisted to localStorage and synced to the cloud for signed-in users.
 */
export function useLessons() {
  const [lessons, setLessons] = useState(read);

  useEffect(() => {
    const on = (e) => {
      if (e.key === KEY) setLessons(read());
    };
    window.addEventListener('storage', on);
    return () => window.removeEventListener('storage', on);
  }, []);

  const persist = useCallback((updater) => {
    setLessons((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* ignore quota */
      }
      return next;
    });
  }, []);

  const toggleLesson = useCallback(
    (stageId, idx) =>
      persist((prev) => {
        const stage = { ...(prev[stageId] || {}) };
        if (stage[idx]) delete stage[idx];
        else stage[idx] = true;
        return { ...prev, [stageId]: stage };
      }),
    [persist]
  );

  const isDone = useCallback((stageId, idx) => Boolean(lessons[stageId]?.[idx]), [lessons]);
  const stageDoneCount = useCallback((stageId) => Object.keys(lessons[stageId] || {}).length, [lessons]);

  return { lessons, toggleLesson, isDone, stageDoneCount };
}
