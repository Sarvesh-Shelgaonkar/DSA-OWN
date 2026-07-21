/**
 * Curated external practice sheets (TakeUForward / Striver).
 * These are battle-tested problem lists we link out to for structured practice.
 * Topic counts are from the official sheets and used only for display.
 */
export const sheets = [
  {
    id: 'a2z',
    name: "Striver's A2Z DSA Sheet",
    provider: 'TakeUForward',
    icon: 'route',
    total: 474,
    difficulty: { easy: 152, medium: 186, hard: 136 },
    href: 'https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z',
    tagline: 'Learn DSA from A to Z, free & structured.',
    description:
      'The most complete beginner-to-advanced roadmap — 18 steps that take you from language basics all the way to advanced DP, graphs and tries. Follow it top-to-bottom and you cover everything an interview can throw at you.',
    best: 'Best for: building DSA from scratch in a structured order.',
    topics: [
      { name: 'Basics', count: 54 },
      { name: 'Sorting Techniques', count: 7 },
      { name: 'Arrays [Easy → Hard]', count: 40 },
      { name: 'Binary Search [1D/2D/Search Space]', count: 32 },
      { name: 'Strings [Basic & Medium]', count: 15 },
      { name: 'Linked List', count: 31 },
      { name: 'Recursion [Pattern-wise]', count: 25 },
      { name: 'Bit Manipulation', count: 18 },
      { name: 'Stack & Queues', count: 30 },
      { name: 'Sliding Window & Two Pointer', count: 12 },
      { name: 'Heaps', count: 17 },
      { name: 'Greedy Algorithms', count: 15 },
      { name: 'Binary Trees', count: 38 },
      { name: 'Binary Search Trees', count: 16 },
      { name: 'Graphs', count: 53 },
      { name: 'Dynamic Programming', count: 55 },
      { name: 'Tries', count: 7 },
      { name: 'Strings [Advanced]', count: 9 },
    ],
  },
  {
    id: 'blind75',
    name: 'Blind 75',
    provider: 'TakeUForward',
    icon: 'target',
    total: 75,
    difficulty: { easy: 20, medium: 40, hard: 15 },
    href: 'https://takeuforward.org/dsa/blind-75-leetcode-problems-detailed-video-solutions',
    tagline: 'The 75 most-asked LeetCode problems.',
    description:
      'A tried-and-tested shortlist of 75 problems that has helped thousands clear Google, Amazon, Microsoft and Meta interviews. When you are short on time, this is the highest-signal list to grind.',
    best: 'Best for: last-few-weeks interview crunch.',
    topics: [
      { name: 'Array', count: 10 },
      { name: 'Binary', count: 5 },
      { name: 'Dynamic Programming', count: 11 },
      { name: 'Graph', count: 8 },
      { name: 'Interval', count: 6 },
      { name: 'Linked List', count: 6 },
      { name: 'Matrix', count: 4 },
      { name: 'String', count: 10 },
      { name: 'Tree', count: 13 },
      { name: 'Heap', count: 2 },
    ],
  },
  {
    id: 'tuf-revision',
    name: 'TUF+ DSA Quick Revision',
    provider: 'TakeUForward Plus',
    icon: 'reset',
    total: null,
    difficulty: null,
    href: 'https://takeuforward.org/plus/dsa/problems/3-sum?subject=dsa-quick-revision&sidebar=open',
    tagline: 'A 10-day rapid-revision track.',
    description:
      'A focused revision plan on TUF+ that resurfaces the must-know problems across 10 days. Perfect for the final sprint — revise a day at a time to keep every pattern fresh right before interviews.',
    best: 'Best for: revising everything quickly before D-day.',
    topics: Array.from({ length: 10 }, (_, i) => ({ name: `Day ${i + 1}` })),
  },
];
