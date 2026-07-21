// Curated study-resource library.
//
// This catalogs the DSA/interview material collected in the project's study
// archives. To respect the original authors' copyright, MyDSA does NOT host
// their PDFs — each entry credits the creator and links to their official
// source so users can access the material legitimately.

export const resourceGroups = [
  {
    id: 'sheets',
    title: 'Sheets & Roadmaps',
    icon: 'route',
    blurb: 'Battle-tested problem sets and structured roadmaps to plan your practice end-to-end.',
    items: [
      {
        name: "Striver's A2Z DSA Course/Sheet",
        author: 'Raj Vikramaditya (TakeUForward)',
        desc: 'A complete A→Z path covering every topic from basics to advanced, ordered for steady progress.',
        href: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/',
        tags: ['Beginner→Advanced', '450+ problems'],
      },
      {
        name: "Striver's SDE Sheet",
        author: 'Raj Vikramaditya (TakeUForward)',
        desc: 'The classic ~190-problem interview crash sheet to revise core patterns before interviews.',
        href: 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/',
        tags: ['Interview crunch', '~190 problems'],
      },
      {
        name: 'Blind 75',
        author: 'Yangshun Tay',
        desc: 'The famous 75-problem list covering the highest-yield interview patterns.',
        href: 'https://takeuforward.org/interviews/blind-75-leetcode-problems-detailed-video-solutions',
        tags: ['High-yield', '75 problems'],
      },
      {
        name: 'DSA Sheet by Love Babbar (450)',
        author: 'Love Babbar',
        desc: 'The well-known 450-question set spanning all major topics for thorough coverage.',
        href: 'https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/',
        tags: ['Comprehensive', '450 problems'],
      },
      {
        name: 'TUF+ Pattern Sheet',
        author: 'TakeUForward',
        desc: 'A pattern-first revision sheet grouping problems by the technique they train.',
        href: 'https://takeuforward.org/plus',
        tags: ['Pattern-based', 'Revision'],
      },
    ],
  },
  {
    id: 'topic-notes',
    title: 'Topic-wise Notes & Playlists',
    icon: 'book',
    blurb: 'Deep-dive explanations for the toughest topics, straight from the creators who teach them best.',
    items: [
      {
        name: 'Dynamic Programming (Aditya Verma)',
        author: 'Aditya Verma',
        desc: 'The go-to DP playlist that teaches DP by recognizable patterns (knapsack, LCS, MCM, and more).',
        href: 'https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go',
        tags: ['DP', 'Pattern-based'],
      },
      {
        name: 'Strivers DP Series',
        author: 'Raj Vikramaditya (TakeUForward)',
        desc: 'A structured, problem-by-problem DP series from recursion → memoization → tabulation → space optimization.',
        href: 'https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/',
        tags: ['DP', 'Structured'],
      },
      {
        name: 'Graph Series (Striver)',
        author: 'Raj Vikramaditya (TakeUForward)',
        desc: 'End-to-end graphs: traversals, shortest paths, MST, topological sort, and disjoint sets.',
        href: 'https://takeuforward.org/graph/striver-graph-series-top-graph-interview-questions/',
        tags: ['Graphs'],
      },
      {
        name: 'Trees & Binary Trees (Striver)',
        author: 'Raj Vikramaditya (TakeUForward)',
        desc: 'Traversals, views, LCA, and tree DP explained with clean intuition and code.',
        href: 'https://takeuforward.org/data-structure/striver-tree-series-tree-data-structure/',
        tags: ['Trees'],
      },
      {
        name: 'Recursion & Backtracking (Striver)',
        author: 'Raj Vikramaditya (TakeUForward)',
        desc: 'Build a strong recursion mental model, then apply it to classic backtracking problems.',
        href: 'https://takeuforward.org/recursion/strivers-recursion-series-topic-wise-problems/',
        tags: ['Recursion', 'Backtracking'],
      },
      {
        name: 'DSA-Supreme (Love Babbar)',
        author: 'Love Babbar (CodeHelp)',
        desc: 'Course covering sorting, backtracking, BST, DP, graphs and bit manipulation with worked C++ solutions.',
        href: 'https://www.youtube.com/@CodeHelp',
        tags: ['Full course', 'C++'],
      },
    ],
  },
  {
    id: 'interview-prep',
    title: 'Interview Prep & Q&A',
    icon: 'sparkles',
    blurb: 'Company-oriented question banks and last-mile prep checklists.',
    items: [
      {
        name: 'MyDSA Company-wise Problems',
        author: 'MyDSA (in-app)',
        desc: 'The most-asked problems at 240+ companies, ranked by frequency — built into this app.',
        to: '/companies',
        tags: ['In-app', '240+ companies'],
      },
      {
        name: 'MyDSA Interview Session (AI)',
        author: 'MyDSA (in-app)',
        desc: 'Upload a resume for AI-driven interview prep plus SQL/OS/CN/Java question banks.',
        to: '/interview',
        tags: ['In-app', 'AI coach'],
      },
      {
        name: 'MyDSA Pattern Guide',
        author: 'MyDSA (in-app)',
        desc: 'Recognize which technique a problem needs from its clues and scenarios.',
        to: '/patterns',
        tags: ['In-app', 'Patterns'],
      },
      {
        name: 'LeetCode',
        author: 'LeetCode',
        desc: 'The primary judge for practicing and submitting all of the problems referenced above.',
        href: 'https://leetcode.com/',
        tags: ['Judge', 'Practice'],
      },
    ],
  },
];

export const resourceCredits =
  'All third-party sheets, notes, playlists and courses belong to their respective creators ' +
  '(TakeUForward / Raj Vikramaditya, Love Babbar / CodeHelp, Aditya Verma, and others). ' +
  'MyDSA links to their official sources and does not redistribute their material.';
