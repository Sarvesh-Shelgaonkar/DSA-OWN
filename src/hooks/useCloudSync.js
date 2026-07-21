import { useEffect, useRef } from 'react';
import { api } from '../lib/api';
import { useAuth } from '../context/AuthContext';
import { readLocal, writeLocal, mergeData, snapshot } from '../lib/userData';

/**
 * Keeps localStorage and the server's UserData in sync for signed-in users.
 * - On login: pull cloud data, merge with local (nothing lost), push back.
 *   If the merge changed local data, reload once so all hooks re-read.
 * - While signed in: debounced push whenever local data changes.
 * - On tab hide / unload: best-effort flush.
 * Anonymous users are untouched (pure localStorage).
 */
export function useCloudSync() {
  const { isAuthed, user } = useAuth();
  const pulledFor = useRef(null);
  const lastPushed = useRef(null);
  const pushTimer = useRef(null);

  // Initial pull + merge when a user signs in.
  useEffect(() => {
    if (!isAuthed || !user) {
      pulledFor.current = null;
      lastPushed.current = null;
      return;
    }
    if (pulledFor.current === user.id) return;
    pulledFor.current = user.id;

    (async () => {
      try {
        const { data } = await api.getData();
        const local = readLocal();
        const { merged, changed } = mergeData(local, data);
        writeLocal(merged);
        await api.putData(merged);
        lastPushed.current = snapshot();
        if (changed) window.location.reload();
      } catch (err) {
        console.warn('[sync] initial pull failed:', err.message);
        pulledFor.current = null; // allow retry
      }
    })();
  }, [isAuthed, user]);

  // Debounced push loop while signed in.
  useEffect(() => {
    if (!isAuthed) return undefined;

    const maybePush = () => {
      const snap = snapshot();
      if (snap === lastPushed.current) return;
      clearTimeout(pushTimer.current);
      pushTimer.current = setTimeout(async () => {
        try {
          await api.putData(readLocal());
          lastPushed.current = snapshot();
        } catch {
          /* retry on next poll */
        }
      }, 1000);
    };

    const poll = setInterval(maybePush, 2500);

    const onHidden = () => {
      if (document.visibilityState !== 'hidden') return;
      const snap = snapshot();
      if (snap === lastPushed.current) return;
      // Fire-and-forget with keepalive so it survives the tab closing.
      api.putData(readLocal(), { keepalive: true }).catch(() => {});
      lastPushed.current = snap;
    };

    document.addEventListener('visibilitychange', onHidden);
    window.addEventListener('pagehide', onHidden);

    return () => {
      clearInterval(poll);
      clearTimeout(pushTimer.current);
      document.removeEventListener('visibilitychange', onHidden);
      window.removeEventListener('pagehide', onHidden);
    };
  }, [isAuthed]);
}
