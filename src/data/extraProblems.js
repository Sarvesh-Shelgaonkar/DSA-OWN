/**
 * EXTRA interview problems added on top of the user's own curated list.
 * These are must-know problems for interviews. They are kept in a SEPARATE file
 * and flagged `extra: true` (see lib/problems.js) so they are always visually
 * distinguishable from the user's original curation.
 */
export const extraProblems = [
  {
    topic: 'Arrays',
    problems: [
      { id: 'move-zeroes', title: 'Move Zeroes', link: 'https://leetcode.com/problems/move-zeroes/', difficulty: 'Easy' },
      { id: 'majority-element', title: 'Majority Element', link: 'https://leetcode.com/problems/majority-element/', difficulty: 'Easy' },
      { id: 'sort-colors', title: 'Sort Colors', link: 'https://leetcode.com/problems/sort-colors/', difficulty: 'Medium' },
      { id: 'next-permutation', title: 'Next Permutation', link: 'https://leetcode.com/problems/next-permutation/', difficulty: 'Medium' },
    ],
  },
  {
    topic: 'Strings',
    problems: [
      { id: 'find-the-index-of-the-first-occurrence-in-a-string', title: 'Find the Index of the First Occurrence in a String', link: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/', difficulty: 'Easy' },
      { id: 'group-anagrams', title: 'Group Anagrams', link: 'https://leetcode.com/problems/group-anagrams/', difficulty: 'Medium' },
      { id: 'string-to-integer-atoi', title: 'String to Integer (atoi)', link: 'https://leetcode.com/problems/string-to-integer-atoi/', difficulty: 'Medium' },
      { id: 'reverse-words-in-a-string', title: 'Reverse Words in a String', link: 'https://leetcode.com/problems/reverse-words-in-a-string/', difficulty: 'Medium' },
    ],
  },
  {
    topic: 'Linked List',
    problems: [
      { id: 'palindrome-linked-list', title: 'Palindrome Linked List', link: 'https://leetcode.com/problems/palindrome-linked-list/', difficulty: 'Easy' },
      { id: 'intersection-of-two-linked-lists', title: 'Intersection of Two Linked Lists', link: 'https://leetcode.com/problems/intersection-of-two-linked-lists/', difficulty: 'Easy' },
      { id: 'copy-list-with-random-pointer', title: 'Copy List with Random Pointer', link: 'https://leetcode.com/problems/copy-list-with-random-pointer/', difficulty: 'Medium' },
      { id: 'lru-cache', title: 'LRU Cache', link: 'https://leetcode.com/problems/lru-cache/', difficulty: 'Medium' },
    ],
  },
  {
    topic: 'Stacks and Queues',
    problems: [
      { id: 'min-stack', title: 'Min Stack', link: 'https://leetcode.com/problems/min-stack/', difficulty: 'Medium' },
      { id: 'implement-queue-using-stacks', title: 'Implement Queue using Stacks', link: 'https://leetcode.com/problems/implement-queue-using-stacks/', difficulty: 'Easy' },
      { id: 'daily-temperatures', title: 'Daily Temperatures', link: 'https://leetcode.com/problems/daily-temperatures/', difficulty: 'Medium' },
      { id: 'largest-rectangle-in-histogram', title: 'Largest Rectangle in Histogram', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', difficulty: 'Hard' },
    ],
  },
  {
    topic: 'Trees',
    problems: [
      { id: 'symmetric-tree', title: 'Symmetric Tree', link: 'https://leetcode.com/problems/symmetric-tree/', difficulty: 'Easy' },
      { id: 'balanced-binary-tree', title: 'Balanced Binary Tree', link: 'https://leetcode.com/problems/balanced-binary-tree/', difficulty: 'Easy' },
      { id: 'diameter-of-binary-tree', title: 'Diameter of Binary Tree', link: 'https://leetcode.com/problems/diameter-of-binary-tree/', difficulty: 'Easy' },
      { id: 'lowest-common-ancestor-of-a-binary-tree', title: 'Lowest Common Ancestor of a Binary Tree', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/', difficulty: 'Medium' },
    ],
  },
  {
    topic: 'Trie',
    problems: [
      { id: 'replace-words', title: 'Replace Words', link: 'https://leetcode.com/problems/replace-words/', difficulty: 'Medium' },
      { id: 'maximum-xor-of-two-numbers-in-an-array', title: 'Maximum XOR of Two Numbers in an Array', link: 'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/', difficulty: 'Medium' },
      { id: 'word-search-ii', title: 'Word Search II', link: 'https://leetcode.com/problems/word-search-ii/', difficulty: 'Hard' },
    ],
  },
  {
    topic: 'Heap',
    problems: [
      { id: 'kth-largest-element-in-an-array', title: 'Kth Largest Element in an Array', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', difficulty: 'Medium' },
      { id: 'k-closest-points-to-origin', title: 'K Closest Points to Origin', link: 'https://leetcode.com/problems/k-closest-points-to-origin/', difficulty: 'Medium' },
      { id: 'task-scheduler', title: 'Task Scheduler', link: 'https://leetcode.com/problems/task-scheduler/', difficulty: 'Medium' },
    ],
  },
  {
    topic: 'Graphs',
    problems: [
      { id: 'rotting-oranges', title: 'Rotting Oranges', link: 'https://leetcode.com/problems/rotting-oranges/', difficulty: 'Medium' },
      { id: 'network-delay-time', title: 'Network Delay Time', link: 'https://leetcode.com/problems/network-delay-time/', difficulty: 'Medium' },
      { id: 'word-ladder', title: 'Word Ladder', link: 'https://leetcode.com/problems/word-ladder/', difficulty: 'Hard' },
    ],
  },
  {
    topic: 'Dynamic Programming',
    problems: [
      { id: 'partition-equal-subset-sum', title: 'Partition Equal Subset Sum', link: 'https://leetcode.com/problems/partition-equal-subset-sum/', difficulty: 'Medium' },
      { id: 'maximal-square', title: 'Maximal Square', link: 'https://leetcode.com/problems/maximal-square/', difficulty: 'Medium' },
      { id: 'edit-distance', title: 'Edit Distance', link: 'https://leetcode.com/problems/edit-distance/', difficulty: 'Medium' },
      { id: 'house-robber-ii', title: 'House Robber II', link: 'https://leetcode.com/problems/house-robber-ii/', difficulty: 'Medium' },
    ],
  },
  {
    topic: 'Bit Manipulation',
    problems: [
      { id: 'single-number', title: 'Single Number', link: 'https://leetcode.com/problems/single-number/', difficulty: 'Easy' },
      { id: 'sum-of-two-integers', title: 'Sum of Two Integers', link: 'https://leetcode.com/problems/sum-of-two-integers/', difficulty: 'Medium' },
      { id: 'bitwise-and-of-numbers-range', title: 'Bitwise AND of Numbers Range', link: 'https://leetcode.com/problems/bitwise-and-of-numbers-range/', difficulty: 'Medium' },
    ],
  },
];
