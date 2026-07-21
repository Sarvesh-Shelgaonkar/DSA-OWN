import { useCallback, useEffect, useState } from 'react';

const KEY = 'mydsa-bookmarks';

const read = () => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

/** Simple localStorage-backed bookmark store for problems. */
export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(read);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === KEY) setBookmarks(read());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const persist = useCallback((next) => {
    setBookmarks(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* ignore quota errors */
    }
  }, []);

  const toggleBookmark = useCallback(
    (id) => {
      setBookmarks((prev) => {
        const next = { ...prev };
        if (next[id]) delete next[id];
        else next[id] = true;
        try {
          localStorage.setItem(KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return next;
      });
    },
    []
  );

  const isBookmarked = useCallback((id) => Boolean(bookmarks[id]), [bookmarks]);

  return { bookmarks, toggleBookmark, isBookmarked, setBookmarks: persist };
}
