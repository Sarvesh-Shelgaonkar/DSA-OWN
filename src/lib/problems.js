import { dsaProblems } from '../data/dsaProblems';
import { extraProblems } from '../data/extraProblems';

// Merge the user's curated problems with the EXTRA interview problems.
// Originals are flagged extra:false, additions extra:true — the source file
// (dsaProblems.js) is never modified.
const extrasByTopic = Object.fromEntries(extraProblems.map((t) => [t.topic, t.problems]));
const mergedTopics = dsaProblems.map((t) => ({
  topic: t.topic,
  problems: [
    ...t.problems.map((p) => ({ ...p, extra: false })),
    ...(extrasByTopic[t.topic] || []).map((p) => ({ ...p, extra: true })),
  ],
}));

/** Metadata for the topics that exist in the dataset. */
export const TOPIC_META = {
  Arrays: { icon: 'grid', blurb: 'Traversal, two-pointers, prefix sums & sliding window.' },
  Strings: { icon: 'code', blurb: 'Pattern matching, parsing and manipulation.' },
  'Linked List': { icon: 'layers', blurb: 'Pointers, reversal, cycle detection & merging.' },
  'Stacks and Queues': { icon: 'layers', blurb: 'LIFO/FIFO structures, monotonic stacks.' },
  Trees: { icon: 'route', blurb: 'Traversals, recursion and tree DP.' },
  Trie: { icon: 'route', blurb: 'Prefix trees for fast lookups.' },
  Heap: { icon: 'chart', blurb: 'Priority queues, top-K and scheduling.' },
  Graphs: { icon: 'route', blurb: 'BFS/DFS, shortest paths and union-find.' },
  'Dynamic Programming': { icon: 'grid', blurb: 'Memoisation, tabulation and optimisation.' },
  'Bit Manipulation': { icon: 'bolt', blurb: 'Bitwise tricks and masks.' },
};

const TOPIC_ORDER = Object.keys(TOPIC_META);

/** Deterministic pseudo-random helper so "acceptance/frequency" stay stable per id. */
const hash = (str) => {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
};

/** Flatten the nested topic structure into a single enriched array. */
export const allProblems = mergedTopics.flatMap((t) =>
  t.problems.map((p, i) => {
    const h = hash(p.id);
    return {
      ...p,
      topic: t.topic,
      // Derived (deterministic) display-only metadata — clearly not live analytics.
      acceptance: 35 + (h % 55), // 35%–90%
      frequency: 20 + ((h >> 3) % 80), // 20–100
    };
  })
);

export const TOTAL_PROBLEMS = allProblems.length;

export const topicSummaries = mergedTopics.map((t) => {
  const counts = { Easy: 0, Medium: 0, Hard: 0 };
  t.problems.forEach((p) => {
    counts[p.difficulty] = (counts[p.difficulty] || 0) + 1;
  });
  return {
    topic: t.topic,
    total: t.problems.length,
    extraCount: t.problems.filter((p) => p.extra).length,
    counts,
    ...(TOPIC_META[t.topic] || { icon: 'grid', blurb: '' }),
  };
});

export const DIFFICULTY_META = {
  Easy: { key: 'Easy', className: 'text-easy', dot: 'bg-easy', soft: 'bg-easy/10' },
  Medium: { key: 'Medium', className: 'text-medium', dot: 'bg-medium', soft: 'bg-medium/10' },
  Hard: { key: 'Hard', className: 'text-hard', dot: 'bg-hard', soft: 'bg-hard/10' },
};

export const getProblemById = (id) => allProblems.find((p) => p.id === id);

/** Deterministic day-of-year index so the "daily challenge" is stable per day. */
const dayOfYear = (date = new Date()) => {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date - start) / 86400000);
};

export const getDailyProblem = (date = new Date()) =>
  allProblems[dayOfYear(date) % allProblems.length];

export const getWeeklyProblems = (date = new Date(), count = 5) => {
  const base = dayOfYear(date) - (date.getDay() || 7) + 1; // Monday-anchored
  return Array.from({ length: count }, (_, i) => allProblems[(base + i * 7) % allProblems.length]);
};

export { TOPIC_ORDER };
