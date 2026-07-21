/**
 * Bridges the browser's localStorage with the server's UserData document.
 * Maps each server field to its localStorage key and provides read / write /
 * merge helpers so anonymous local data and cloud data can be reconciled.
 */

// server field -> localStorage key
export const KEY_MAP = {
  progress: 'dsa-progress',
  bookmarks: 'mydsa-bookmarks',
  revision: 'mydsa-revision',
  timers: 'mydsa-timers',
  puzzlesReviewed: 'mydsa-puzzles-reviewed',
  lessonsCompleted: 'mydsa-lessons',
  username: 'mydsa-username',
};

const OBJECT_FIELDS = ['progress', 'bookmarks', 'revision', 'timers', 'puzzlesReviewed'];

const parse = (raw, fallback) => {
  if (raw === null || raw === undefined) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
};

export function readLocal() {
  const out = {};
  for (const [field, key] of Object.entries(KEY_MAP)) {
    const fallback = field === 'username' ? '' : {};
    out[field] = parse(localStorage.getItem(key), fallback);
  }
  return out;
}

export function writeLocal(data) {
  for (const [field, key] of Object.entries(KEY_MAP)) {
    if (data[field] === undefined) continue;
    localStorage.setItem(key, JSON.stringify(data[field]));
  }
}

const earlier = (a, b) => {
  if (!a) return b;
  if (!b) return a;
  return new Date(a) <= new Date(b) ? a : b;
};
const later = (a, b) => {
  if (!a) return b;
  if (!b) return a;
  return new Date(a) >= new Date(b) ? a : b;
};

function mergeProgress(local = {}, server = {}) {
  const out = { ...server };
  for (const [id, entry] of Object.entries(local)) {
    const existing = out[id];
    if (!existing) out[id] = entry;
    else
      out[id] = {
        ...existing,
        ...entry,
        solved: existing.solved || entry.solved,
        solvedAt: earlier(existing.solvedAt, entry.solvedAt),
      };
  }
  return out;
}

function mergeRevision(local = {}, server = {}) {
  const out = { ...server };
  for (const [id, entry] of Object.entries(local)) {
    const existing = out[id] || {};
    out[id] = {
      rating: Math.max(existing.rating || 0, entry.rating || 0),
      reviseCount: Math.max(existing.reviseCount || 0, entry.reviseCount || 0),
      lastRevised: later(existing.lastRevised, entry.lastRevised),
    };
  }
  return out;
}

function mergeMaxNumbers(local = {}, server = {}) {
  const out = { ...server };
  for (const [id, val] of Object.entries(local)) {
    out[id] = Math.max(Number(out[id]) || 0, Number(val) || 0);
  }
  return out;
}

const mergeUnion = (local = {}, server = {}) => ({ ...server, ...local });

// Two-level union so completed lessons from both devices are preserved per stage.
function mergeLessons(local = {}, server = {}) {
  const out = { ...server };
  for (const [stage, map] of Object.entries(local)) {
    out[stage] = { ...(out[stage] || {}), ...map };
  }
  return out;
}

/**
 * Merge local (anonymous) data with server (cloud) data without losing
 * progress from either side. Returns { merged, changed } where `changed`
 * is true if the merged result differs from what is currently in localStorage.
 */
export function mergeData(local, server) {
  const merged = {
    progress: mergeProgress(local.progress, server.progress),
    bookmarks: mergeUnion(local.bookmarks, server.bookmarks),
    revision: mergeRevision(local.revision, server.revision),
    timers: mergeMaxNumbers(local.timers, server.timers),
    puzzlesReviewed: mergeUnion(local.puzzlesReviewed, server.puzzlesReviewed),
    lessonsCompleted: mergeLessons(local.lessonsCompleted, server.lessonsCompleted),
    username:
      local.username && local.username !== 'Learner' ? local.username : server.username || local.username || '',
  };

  const changed = Object.keys(KEY_MAP).some(
    (field) => JSON.stringify(merged[field]) !== JSON.stringify(local[field])
  );

  return { merged, changed };
}

// Stable string used to detect local changes for debounced pushes.
export function snapshot() {
  const local = readLocal();
  return JSON.stringify(local);
}

export { OBJECT_FIELDS };
