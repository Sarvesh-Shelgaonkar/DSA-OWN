/**
 * DSA pattern-recognition guide.
 *
 * Transcribed from the user's "Pattern Type" reference sheets — one sheet per
 * DSA topic. For every topic we list its patterns; each pattern records:
 *   - scenarios : when the pattern applies
 *   - clue      : the tell-tale hint in a problem statement
 *   - questions : representative practice problems (title + link)
 *
 * Most links point to LeetCode; a few point to other judges (e.g. InterviewBit)
 * where the sheet referenced them. The Patterns page derives a matching
 * TakeUForward (TUF+) link for every LeetCode problem automatically.
 */
export const patternTopics = [
  {
    id: 'arrays',
    name: 'Arrays',
    icon: 'grid',
    patterns: [
      {
        id: 'arr-two-pointers',
        name: 'Two Pointers',
        icon: 'route',
        scenarios:
          'Look for problems where you need to iterate through the array with two pointers, typically starting from different ends or positions within the array. Consider tasks that involve comparing or manipulating elements from two different parts of the array simultaneously.',
        clue:
          'Look for problem descriptions mentioning a sorted array or the need to compare elements from both ends of the array.',
        questions: [
          { title: 'Two Sum', link: 'https://leetcode.com/problems/two-sum/' },
          { title: '3Sum', link: 'https://leetcode.com/problems/3sum/' },
          { title: '3Sum Closest', link: 'https://leetcode.com/problems/3sum-closest/' },
          { title: 'Remove Duplicates from Sorted Array', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/' },
          { title: 'Squares of a Sorted Array', link: 'https://leetcode.com/problems/squares-of-a-sorted-array/' },
        ],
      },
      {
        id: 'arr-merge-intervals',
        name: 'Merge Intervals',
        icon: 'layers',
        scenarios:
          'Identify problems involving intervals or ranges of values, such as time intervals, scheduling, or overlapping events. Look for tasks where you need to combine or compare intervals, merge overlapping intervals, or find intersections between them.',
        clue:
          'Look for problems where the input involves intervals represented as pairs of start and end points, and the task revolves around combining or manipulating these intervals.',
        questions: [
          { title: 'Merge Intervals', link: 'https://leetcode.com/problems/merge-intervals/' },
          { title: 'Insert Interval', link: 'https://leetcode.com/problems/insert-interval/' },
          { title: 'Non-overlapping Intervals', link: 'https://leetcode.com/problems/non-overlapping-intervals/' },
          { title: 'Interval List Intersections', link: 'https://leetcode.com/problems/interval-list-intersections/' },
        ],
      },
      {
        id: 'arr-sorting',
        name: 'Sorting',
        icon: 'filter',
        scenarios:
          'Consider problems where arranging elements in a specific order can simplify searching, counting, or comparing elements efficiently. Look for tasks where sorting elements according to certain criteria can lead to a solution or optimize subsequent operations.',
        clue:
          'Look for problems mentioning that the array needs to be sorted first or hints that sorting might facilitate the solution process.',
        questions: [
          { title: 'Sort Colors', link: 'https://leetcode.com/problems/sort-colors/' },
          { title: 'Meeting Rooms II', link: 'https://leetcode.com/problems/meeting-rooms-ii/' },
          { title: 'Largest Number', link: 'https://leetcode.com/problems/largest-number/' },
          { title: 'Wiggle Sort II', link: 'https://leetcode.com/problems/wiggle-sort-ii/' },
          { title: 'Merge Sorted Array', link: 'https://leetcode.com/problems/merge-sorted-array/' },
        ],
      },
      {
        id: 'arr-sliding-window',
        name: 'Sliding Window',
        icon: 'grid',
        scenarios:
          'Identify problems involving contiguous subarrays or substrings where you need to maintain a window of elements and slide it across the array. Look for tasks where you need to track a subset of elements within the array that satisfies specific conditions.',
        clue:
          'Look for problems involving contiguous subarrays, hints that a "window" needs to slide through the array, or mention of properties like "maximum sum" or "minimum length."',
        questions: [
          { title: 'Minimum Size Subarray Sum', link: 'https://leetcode.com/problems/minimum-size-subarray-sum/' },
          { title: 'Longest Mountain in Array', link: 'https://leetcode.com/problems/longest-mountain-in-array/' },
          { title: 'Longest Continuous Increasing Subsequence', link: 'https://leetcode.com/problems/longest-continuous-increasing-subsequence/' },
          { title: 'Maximum Points You Can Obtain from Cards', link: 'https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/' },
          { title: 'Maximum Product Subarray', link: 'https://leetcode.com/problems/maximum-product-subarray/' },
        ],
      },
      {
        id: 'arr-prefix-sums',
        name: 'Prefix Sums',
        icon: 'chart',
        scenarios:
          'Consider problems where you need to compute cumulative sums or averages of elements in subarrays or answer queries about subarray sums efficiently. Look for tasks where precomputing sums or other aggregate values can help reduce the time complexity of operations involving subarrays.',
        clue:
          'Look for problems mentioning subarray sums, cumulative sums, or range sums, and hints that precomputing sums might optimize the solution.',
        questions: [
          { title: 'Count of Smaller Numbers After Self', link: 'https://leetcode.com/problems/count-of-smaller-numbers-after-self/' },
          { title: 'Range Sum Query - Mutable', link: 'https://leetcode.com/problems/range-sum-query-mutable/' },
          { title: 'Count of Range Sum', link: 'https://leetcode.com/problems/count-of-range-sum/' },
          { title: 'Subarray Product Less Than K', link: 'https://leetcode.com/problems/subarray-product-less-than-k/' },
          { title: 'Find All Duplicates in an Array', link: 'https://leetcode.com/problems/find-all-duplicates-in-an-array/' },
        ],
      },
    ],
  },
  {
    id: 'strings',
    name: 'Strings',
    icon: 'code',
    patterns: [
      {
        id: 'str-two-pointers',
        name: 'Two Pointers',
        icon: 'route',
        scenarios:
          'Utilize two pointers when the problem involves searching for pairs or triplets of characters within a string that satisfy specific conditions, particularly in sorted strings or when the order matters.',
        clue:
          'Look for problem descriptions mentioning the need to compare characters from both ends of the string or to traverse the string simultaneously with two pointers. Phrases like "pair of characters," "triplet of characters," or "sorted string" indicate the potential application of two pointers.',
        questions: [
          { title: 'Valid Palindrome', link: 'https://leetcode.com/problems/valid-palindrome/' },
          { title: 'Reverse Words in a String', link: 'https://leetcode.com/problems/reverse-words-in-a-string/' },
          { title: 'Longest Palindromic Substring', link: 'https://leetcode.com/problems/longest-palindromic-substring/' },
          { title: 'Implement strStr()', link: 'https://leetcode.com/problems/implement-strstr/' },
          { title: 'Remove Duplicates from Sorted Array', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/' },
        ],
      },
      {
        id: 'str-sliding-window',
        name: 'Sliding Window',
        icon: 'grid',
        scenarios:
          'Apply sliding window technique when you encounter a problem involving a substring within the string with specific properties (e.g., maximum sum, minimum size, longest length) and you can adjust the window size dynamically as you traverse the string.',
        clue:
          'Problems involving contiguous substrings often hint at the use of sliding window technique. Look for phrases like "substring," "contiguous characters," "sliding window," or hints that a window needs to slide through the string.',
        questions: [
          { title: 'Minimum Window Substring', link: 'https://leetcode.com/problems/minimum-window-substring/' },
          { title: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
          { title: 'Longest Substring with At Most K Distinct Characters', link: 'https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/' },
          { title: 'Find All Anagrams in a String', link: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/' },
          { title: 'Longest Repeating Character Replacement', link: 'https://leetcode.com/problems/longest-repeating-character-replacement/' },
        ],
      },
      {
        id: 'str-hashmaps',
        name: 'Hashmaps',
        icon: 'book',
        scenarios:
          'Employ hashmaps when the problem involves frequency counting, grouping characters based on some property, or checking for the existence of certain characters in the string. Hashmaps offer efficient storage and retrieval of characters by keys.',
        clue:
          'Phrases like "count," "frequency," "group," or "exist" suggest the potential use of hashmaps in the problem. Problems requiring counting occurrences, grouping similar characters, or checking for the presence of specific characters often indicate the application of hashmaps.',
        questions: [
          { title: 'Group Anagrams', link: 'https://leetcode.com/problems/group-anagrams/' },
          { title: 'First Unique Character in a String', link: 'https://leetcode.com/problems/first-unique-character-in-a-string/' },
          { title: 'Valid Anagram', link: 'https://leetcode.com/problems/valid-anagram/' },
          { title: 'Longest Palindromic Substring', link: 'https://leetcode.com/problems/longest-palindromic-substring/' },
          { title: 'String Compression', link: 'https://leetcode.com/problems/string-compression/' },
        ],
      },
      {
        id: 'str-manipulation',
        name: 'String Manipulation',
        icon: 'code',
        scenarios:
          'Utilize string manipulation techniques when tasked with operations such as reversing, splitting, joining, or converting strings into different formats. These techniques are useful for parsing input, formatting output, or transforming strings according to specific rules.',
        clue:
          'Problem descriptions mentioning operations like "manipulate," "convert," "parse," or specific string operations (e.g., reversing, splitting) indicate the need for string manipulation techniques.',
        questions: [
          { title: 'Reverse String', link: 'https://leetcode.com/problems/reverse-string/' },
          { title: 'Reverse Integer', link: 'https://leetcode.com/problems/reverse-integer/' },
          { title: 'String to Integer (atoi)', link: 'https://leetcode.com/problems/string-to-integer-atoi/' },
          { title: 'Count and Say', link: 'https://leetcode.com/problems/count-and-say/' },
          { title: 'Implement strStr()', link: 'https://leetcode.com/problems/implement-strstr/' },
        ],
      },
      {
        id: 'str-regex',
        name: 'Regular Expressions',
        icon: 'search',
        scenarios:
          'Apply regular expressions when the problem involves pattern matching or string validation based on specific rules, especially complex patterns or constraints. Regular expressions provide a powerful way to search, validate, and manipulate text efficiently.',
        clue:
          'Look for phrases like "pattern," "validation," "matching," or specific patterns (e.g., email addresses, phone numbers) in problem descriptions. Problems requiring validation of input strings against specific patterns or constraints often suggest the application of regular expressions.',
        questions: [
          { title: 'Regular Expression Matching', link: 'https://leetcode.com/problems/regular-expression-matching/' },
          { title: 'Wildcard Matching', link: 'https://leetcode.com/problems/wildcard-matching/' },
          { title: 'Decode String', link: 'https://leetcode.com/problems/decode-string/' },
          { title: 'Validate IP Address', link: 'https://leetcode.com/problems/validate-ip-address/' },
        ],
      },
    ],
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    icon: 'search',
    patterns: [
      {
        id: 'bs-basic',
        name: 'Basic Binary Search',
        icon: 'search',
        scenarios:
          'Involves searching for a target element in a sorted array by repeatedly dividing the search interval in half.',
        clue:
          'Look for scenarios where the array is sorted, and you need to find a specific element efficiently.',
        questions: [
          { title: 'Search Insert Position', link: 'https://leetcode.com/problems/search-insert-position/' },
          { title: 'Find Minimum in Rotated Sorted Array', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
          { title: 'Peak Index in a Mountain Array', link: 'https://leetcode.com/problems/peak-index-in-a-mountain-array/' },
          { title: 'Find Smallest Letter Greater Than Target', link: 'https://leetcode.com/problems/find-smallest-letter-greater-than-target/' },
          { title: 'Valid Perfect Square', link: 'https://leetcode.com/problems/valid-perfect-square/' },
        ],
      },
      {
        id: 'bs-range',
        name: 'Range Search',
        icon: 'gauge',
        scenarios:
          'Involves searching for the maximum or minimum value that satisfies a specific condition within a given range.',
        clue:
          'Look for scenarios where you need to optimize a value within a given range, such as maximizing or minimizing a certain condition.',
        questions: [
          { title: 'Split Array Largest Sum', link: 'https://leetcode.com/problems/split-array-largest-sum/' },
          { title: 'Find Kth Smallest Element in a Sorted Matrix', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/' },
          { title: 'Capacity To Ship Packages Within D Days', link: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/' },
          { title: 'Maximum Average Subarray I', link: 'https://leetcode.com/problems/maximum-average-subarray-i/' },
        ],
      },
      {
        id: 'bs-allocation',
        name: 'Allocation Problems',
        icon: 'layers',
        scenarios:
          'Involves dividing resources or items among multiple entities while optimizing a certain criterion.',
        clue:
          'Look for scenarios where resources need to be distributed among entities with certain constraints, and the goal is to optimize a certain criterion, such as minimizing the maximum or maximizing the minimum.',
        questions: [
          { title: 'Allocate Minimum Number of Pages', link: 'https://www.interviewbit.com/problems/allocate-books/' },
          { title: 'Minimize Maximum Pair Sum in Array', link: 'https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/' },
          { title: 'Divide Chocolate', link: 'https://leetcode.com/problems/divide-chocolate/' },
          { title: 'Maximum Distance to Gas Station', link: 'https://leetcode.com/problems/minimize-max-distance-to-gas-station/' },
        ],
      },
      {
        id: 'bs-counting',
        name: 'Counting Occurrences',
        icon: 'chart',
        scenarios:
          'Involves counting the number of occurrences of a specific value or satisfying a certain condition.',
        clue:
          'Look for scenarios where you need to count occurrences or determine the frequency of certain elements/values in a sorted array or range.',
        questions: [
          { title: 'Find First and Last Position of Element in Sorted Array', link: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/' },
          { title: 'Count Negative Numbers in a Sorted Matrix', link: 'https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/' },
          { title: 'Search a 2D Matrix II', link: 'https://leetcode.com/problems/search-a-2d-matrix-ii/' },
          { title: 'Find Minimum in Rotated Sorted Array II', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/' },
          { title: 'Count Primes', link: 'https://leetcode.com/problems/count-primes/' },
        ],
      },
      {
        id: 'bs-bitonic',
        name: 'Bitonic Array Search',
        icon: 'target',
        scenarios:
          'Involves searching for an element in a bitonic array, which first increases and then decreases (or vice versa).',
        clue:
          'Look for scenarios where the array exhibits a bitonic behavior, and you need to find an element within it efficiently.',
        questions: [
          { title: 'Find Peak Element', link: 'https://leetcode.com/problems/find-peak-element/' },
          { title: 'Find in Mountain Array', link: 'https://leetcode.com/problems/find-in-mountain-array/' },
          { title: 'Longest Mountain in Array', link: 'https://leetcode.com/problems/longest-mountain-in-array/' },
          { title: 'Peak Index in a Mountain Array', link: 'https://leetcode.com/problems/peak-index-in-a-mountain-array/' },
          { title: 'Maximum Value at a Given Index in a Bounded Array', link: 'https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/' },
        ],
      },
    ],
  },
  {
    id: 'recursion',
    name: 'Recursion',
    icon: 'sparkles',
    patterns: [
      {
        id: 'rec-basic',
        name: 'Basic Recursive Functions',
        icon: 'route',
        scenarios:
          'Implement basic recursive functions that solve a problem by dividing it into smaller instances of the same problem until a base case is reached.',
        clue:
          'Problems where the solution can be naturally expressed in terms of smaller instances of the same problem, such as factorial calculation, Fibonacci sequence generation, or exponentiation.',
        questions: [
          { title: 'Fibonacci Number', link: 'https://leetcode.com/problems/fibonacci-number/' },
          { title: 'Pow(x, n)', link: 'https://leetcode.com/problems/powx-n/' },
          { title: 'Greatest Common Divisor of Strings', link: 'https://leetcode.com/problems/greatest-common-divisor-of-strings/' },
          { title: 'Minimum Moves to Move a Box to Their Target Location', link: 'https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/' },
        ],
      },
      {
        id: 'rec-divide-conquer',
        name: 'Divide & Conquer',
        icon: 'layers',
        scenarios:
          'Break down a problem into smaller subproblems of the same type, solve each subproblem recursively, and combine their solutions to solve the original problem.',
        clue:
          'Tasks where the solution to a larger problem can be obtained by recursively combining solutions to smaller instances of the same problem, such as binary search or finding maximum or minimum elements in an array.',
        questions: [
          { title: 'Binary Search', link: 'https://leetcode.com/problems/binary-search/' },
          { title: 'Merge Sort (Sort an Array)', link: 'https://leetcode.com/problems/sort-an-array/' },
          { title: 'Quick Sort (Sort an Array)', link: 'https://leetcode.com/problems/sort-an-array/' },
          { title: 'Maximum Subarray', link: 'https://leetcode.com/problems/maximum-subarray/' },
        ],
      },
      {
        id: 'rec-backtracking',
        name: 'Backtracking',
        icon: 'sparkles',
        scenarios:
          'Explore all potential solutions to a problem by trying out different choices and backtracking when a dead-end is reached, undoing choices and trying alternative paths.',
        clue:
          'Problems where you need to find all permutations, combinations, or subsets of elements while satisfying specific constraints.',
        questions: [
          { title: 'Generate Parentheses', link: 'https://leetcode.com/problems/generate-parentheses/' },
          { title: 'Combination Sum', link: 'https://leetcode.com/problems/combination-sum/' },
          { title: 'N-Queens', link: 'https://leetcode.com/problems/n-queens/' },
          { title: 'Letter Combinations of a Phone Number', link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/' },
          { title: 'Word Search', link: 'https://leetcode.com/problems/word-search/' },
        ],
      },
      {
        id: 'rec-search',
        name: 'Recursive Search',
        icon: 'search',
        scenarios:
          'Search for a target element or solution recursively by exploring different branches of a search space until the target is found or the search space is exhausted.',
        clue:
          'Problems involving searching for specific elements or solutions in a structured or unstructured search space. Tasks requiring finding paths in mazes, solving Sudoku puzzles, or searching for elements in a tree or graph.',
        questions: [
          { title: 'Sudoku Solver', link: 'https://leetcode.com/problems/sudoku-solver/' },
          { title: 'Number of Islands', link: 'https://leetcode.com/problems/number-of-islands/' },
          { title: 'Path Sum', link: 'https://leetcode.com/problems/path-sum/' },
          { title: 'Word Search II', link: 'https://leetcode.com/problems/word-search-ii/' },
        ],
      },
    ],
  },
  {
    id: 'linked-list',
    name: 'Linked List',
    icon: 'layers',
    patterns: [
      {
        id: 'll-fast-slow',
        name: 'Fast and Slow Pointers',
        icon: 'route',
        scenarios:
          'You have a problem where you need to find pairs of elements that meet certain conditions, such as the midpoint of the linked list, detecting cycles, or removing specific elements.',
        clue:
          'Look for problems that involve traversing the linked list efficiently using two pointers simultaneously, often requiring pointer manipulation or comparison.',
        questions: [
          { title: 'Middle of the Linked List', link: 'https://leetcode.com/problems/middle-of-the-linked-list/' },
          { title: 'Intersection of Two Linked Lists', link: 'https://leetcode.com/problems/intersection-of-two-linked-lists/' },
          { title: 'Linked List Cycle', link: 'https://leetcode.com/problems/linked-list-cycle/' },
          { title: 'Remove Nth Node From End of List', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
          { title: 'Odd Even Linked List', link: 'https://leetcode.com/problems/odd-even-linked-list/' },
          { title: 'Linked List Cycle II', link: 'https://leetcode.com/problems/linked-list-cycle-ii/' },
        ],
      },
      {
        id: 'll-dummy-node',
        name: 'Dummy Node Technique',
        icon: 'layers',
        scenarios:
          'You need to simplify edge cases, such as handling an empty list or adding/removing elements at the beginning.',
        clue:
          'Problems often involve scenarios where dealing with the head of the linked list is cumbersome or requires special treatment.',
        questions: [
          { title: 'Add Two Numbers', link: 'https://leetcode.com/problems/add-two-numbers/' },
          { title: 'Merge Two Sorted Lists', link: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
          { title: 'Partition List', link: 'https://leetcode.com/problems/partition-list/' },
          { title: 'Remove Duplicates from Sorted List', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/' },
        ],
      },
      {
        id: 'll-recursion',
        name: 'Recursion Technique',
        icon: 'sparkles',
        scenarios:
          'Solving problems that require traversal or manipulation of the linked list structure in a recursive manner.',
        clue:
          'Look for problems where a recursive approach provides an elegant solution, such as dividing it into subproblems.',
        questions: [
          { title: 'Swap Nodes in Pairs', link: 'https://leetcode.com/problems/swap-nodes-in-pairs/' },
          { title: 'Palindrome Linked List', link: 'https://leetcode.com/problems/palindrome-linked-list/' },
          { title: 'Remove Duplicates from Sorted List II', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/' },
          { title: 'Flatten a Multilevel Doubly Linked List', link: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/' },
        ],
      },
      {
        id: 'll-in-place-reversal',
        name: 'In-Place Reversal Technique',
        icon: 'reset',
        scenarios:
          'You need to reverse the linked list in-place without using extra space, typically by modifying the pointers iteratively.',
        clue:
          "Problems where you're asked to reverse the linked list or perform operations on segments without using additional data structures.",
        questions: [
          { title: 'Reverse Linked List', link: 'https://leetcode.com/problems/reverse-linked-list/' },
          { title: 'Swap Nodes in Pairs', link: 'https://leetcode.com/problems/swap-nodes-in-pairs/' },
          { title: 'Rotate List', link: 'https://leetcode.com/problems/rotate-list/' },
          { title: 'Reorder List', link: 'https://leetcode.com/problems/reorder-list/' },
          { title: 'Split Linked List in Parts', link: 'https://leetcode.com/problems/split-linked-list-in-parts/' },
          { title: 'Reverse Nodes in k-Group', link: 'https://leetcode.com/problems/reverse-nodes-in-k-group/' },
        ],
      },
    ],
  },
  {
    id: 'stacks-queues',
    name: 'Stacks & Queues',
    icon: 'book',
    patterns: [
      {
        id: 'sq-design',
        name: 'Design Problems',
        icon: 'book',
        scenarios:
          'When you need to design and implement a custom data structure based on stacks.',
        clue:
          'Look for problems that require you to design a stack-based system or implement specific functionalities.',
        questions: [
          { title: 'Implement Queue using Stacks', link: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
          { title: 'Implement Stack using Queues', link: 'https://leetcode.com/problems/implement-stack-using-queues/' },
          { title: 'Design Browser History', link: 'https://leetcode.com/problems/design-browser-history/' },
          { title: 'Design Hit Counter', link: 'https://leetcode.com/problems/design-hit-counter/' },
          { title: 'Design Circular Queue', link: 'https://leetcode.com/problems/design-circular-queue/' },
          { title: 'Design Twitter', link: 'https://leetcode.com/problems/design-twitter/' },
          { title: 'Design Snake Game', link: 'https://leetcode.com/problems/design-snake-game/' },
        ],
      },
      {
        id: 'sq-monotonic-stack',
        name: 'Monotonic Stack',
        icon: 'chart',
        scenarios:
          'You encounter a problem where you need to find the nearest smaller or greater element to the left or right in an array. For example, finding the nearest greater element on the right in an array.',
        clue:
          "Look for problems where you need to maintain a monotonic increasing or decreasing stack to efficiently track elements' positions or values.",
        questions: [
          { title: 'Next Greater Element I', link: 'https://leetcode.com/problems/next-greater-element-i/' },
          { title: 'Largest Rectangle in Histogram', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
          { title: 'Online Stock Span', link: 'https://leetcode.com/problems/online-stock-span/' },
          { title: 'Daily Temperatures', link: 'https://leetcode.com/problems/daily-temperatures/' },
          { title: 'Remove Duplicate Letters', link: 'https://leetcode.com/problems/remove-duplicate-letters/' },
        ],
      },
      {
        id: 'sq-expression',
        name: 'Expression Evaluation',
        icon: 'code',
        scenarios:
          'You encounter problems involving arithmetic or logical expression evaluation, where you need to parse and compute expressions.',
        clue:
          'Look for problems that involve evaluating arithmetic expressions or postfix notation.',
        questions: [
          { title: 'Basic Calculator II', link: 'https://leetcode.com/problems/basic-calculator-ii/' },
          { title: 'Evaluate Division', link: 'https://leetcode.com/problems/evaluate-division/' },
          { title: 'Simplify Path', link: 'https://leetcode.com/problems/simplify-path/' },
          { title: 'Basic Calculator', link: 'https://leetcode.com/problems/basic-calculator/' },
          { title: 'Decode String', link: 'https://leetcode.com/problems/decode-string/' },
        ],
      },
      {
        id: 'sq-two-stacks',
        name: 'Two Stacks',
        icon: 'layers',
        scenarios:
          'You need to maintain a specific order or perform operations efficiently by utilizing two stacks, such as simulating a queue using two stacks.',
        clue:
          'Look for problems where you can simulate a specific behavior or implement operations efficiently by employing two stacks.',
        questions: [
          { title: 'Evaluate Reverse Polish Notation', link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/' },
          { title: 'Min Stack', link: 'https://leetcode.com/problems/min-stack/' },
          { title: 'Design a Stack With Increment Operation', link: 'https://leetcode.com/problems/design-a-stack-with-increment-operation/' },
          { title: 'Baseball Game', link: 'https://leetcode.com/problems/baseball-game/' },
          { title: 'Backspace String Compare', link: 'https://leetcode.com/problems/backspace-string-compare/' },
        ],
      },
      {
        id: 'sq-monotonic-queue',
        name: 'Sliding Window & Monotonic Queue',
        icon: 'grid',
        scenarios:
          'You need to maintain a sliding window or find the maximum/minimum element in a window efficiently, often used in problems involving data stream processing or window-based statistics.',
        clue:
          'Look for problems where you need to process elements in a sliding window or maintain monotonicity in a queue, especially in array-related or streaming problems.',
        questions: [
          { title: 'Sliding Window Maximum', link: 'https://leetcode.com/problems/sliding-window-maximum/' },
          { title: 'Design Circular Deque', link: 'https://leetcode.com/problems/design-circular-deque/' },
          { title: 'Moving Average from Data Stream', link: 'https://leetcode.com/problems/moving-average-from-data-stream/' },
          { title: 'First Unique Number', link: 'https://leetcode.com/problems/first-unique-number/' },
          { title: 'Max Sum of Rectangle No Larger Than K', link: 'https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/' },
        ],
      },
    ],
  },
  {
    id: 'trees',
    name: 'Binary Trees & BST',
    icon: 'route',
    patterns: [
      {
        id: 'tree-traversal',
        name: 'Traversal',
        icon: 'route',
        scenarios:
          'You need to visit each node in the tree exactly once, exploring all nodes in a specific order (e.g., inorder, preorder, postorder).',
        clue:
          'Look for problems where you must visit each node systematically without missing any, often requiring recursion or iteration.',
        questions: [
          { title: 'Binary Tree Inorder Traversal', link: 'https://leetcode.com/problems/binary-tree-inorder-traversal/' },
          { title: 'Binary Tree Preorder Traversal', link: 'https://leetcode.com/problems/binary-tree-preorder-traversal/' },
          { title: 'Binary Tree Postorder Traversal', link: 'https://leetcode.com/problems/binary-tree-postorder-traversal/' },
          { title: 'Binary Tree Level Order Traversal', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
          { title: 'Binary Tree Zigzag Level Order Traversal', link: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/' },
        ],
      },
      {
        id: 'tree-construction',
        name: 'Construction',
        icon: 'layers',
        scenarios:
          'You need to create a binary tree from given input data, such as an array, inorder and preorder/postorder traversal sequences, or level order traversal.',
        clue:
          'Explore problems where you must build a binary tree based on provided specifications, reconstructing the tree from its serialized form or given traversal sequences.',
        questions: [
          { title: 'Construct Binary Tree from Preorder and Inorder Traversal', link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/' },
          { title: 'Construct Binary Tree from Inorder and Postorder Traversal', link: 'https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/' },
          { title: 'Construct Binary Tree from Preorder and Postorder Traversal', link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/' },
          { title: 'Serialize and Deserialize Binary Tree', link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/' },
          { title: 'Convert Sorted Array to Binary Search Tree', link: 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/' },
        ],
      },
      {
        id: 'tree-mirror',
        name: 'Mirror & Symmetry',
        icon: 'sparkles',
        scenarios:
          'You are tasked with determining whether a binary tree is symmetric or transforming it into its mirror image.',
        clue:
          'Look for problems where the left and right subtrees recursively swap the left and right children to achieve symmetry.',
        questions: [
          { title: 'Invert Binary Tree', link: 'https://leetcode.com/problems/invert-binary-tree/' },
          { title: 'Symmetric Tree', link: 'https://leetcode.com/problems/symmetric-tree/' },
          { title: 'Flip Equivalent Binary Trees', link: 'https://leetcode.com/problems/flip-equivalent-binary-trees/' },
          { title: 'Convert Sorted Array to Binary Search Tree', link: 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/' },
          { title: 'Convert Sorted List to Binary Search Tree', link: 'https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/' },
        ],
      },
      {
        id: 'tree-path-sum',
        name: 'Path Sum & Root to Leaf',
        icon: 'target',
        scenarios:
          'You need to find paths in a binary tree that sum up to a target value or enumerate all root-to-leaf paths.',
        clue:
          'Explore problems where you traverse the tree while keeping track of the path and its sum, recursively exploring all possible paths.',
        questions: [
          { title: 'Path Sum', link: 'https://leetcode.com/problems/path-sum/' },
          { title: 'Path Sum II', link: 'https://leetcode.com/problems/path-sum-ii/' },
          { title: 'Sum Root to Leaf Numbers', link: 'https://leetcode.com/problems/sum-root-to-leaf-numbers/' },
          { title: 'Binary Tree Maximum Path Sum', link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/' },
          { title: 'Path Sum III', link: 'https://leetcode.com/problems/path-sum-iii/' },
        ],
      },
      {
        id: 'tree-search',
        name: 'Traversal & Search',
        icon: 'search',
        scenarios:
          'You need to search for a specific value or perform other queries on a binary tree, such as finding the lowest common ancestor or the kth smallest/largest element.',
        clue:
          'Look for problems where you apply different traversal techniques or search algorithms specific to binary trees, such as inorder traversal or binary search.',
        questions: [
          { title: 'Lowest Common Ancestor of a Binary Tree', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/' },
          { title: 'Binary Tree Level Order Traversal', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
          { title: 'Search in a Binary Search Tree', link: 'https://leetcode.com/problems/search-in-a-binary-search-tree/' },
          { title: 'Validate Binary Search Tree', link: 'https://leetcode.com/problems/validate-binary-search-tree/' },
          { title: 'Closest Binary Search Tree Value', link: 'https://leetcode.com/problems/closest-binary-search-tree-value/' },
        ],
      },
      {
        id: 'tree-validation',
        name: 'Validation & Properties',
        icon: 'check',
        scenarios:
          "You need to validate properties of a binary tree, such as whether it's a binary search tree or a balanced tree.",
        clue:
          'Explore problems where you verify specific conditions or properties of a binary tree, such as BST validation, balancedness checks, or identifying the diameter of the tree.',
        questions: [
          { title: 'Diameter of Binary Tree', link: 'https://leetcode.com/problems/diameter-of-binary-tree/' },
          { title: 'Count Complete Tree Nodes', link: 'https://leetcode.com/problems/count-complete-tree-nodes/' },
          { title: 'Balanced Binary Tree', link: 'https://leetcode.com/problems/balanced-binary-tree/' },
          { title: 'Binary Tree Longest Consecutive Sequence', link: 'https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/' },
          { title: 'Subtree of Another Tree', link: 'https://leetcode.com/problems/subtree-of-another-tree/' },
        ],
      },
    ],
  },
  {
    id: 'priority-queues',
    name: 'Priority Queues',
    icon: 'chart',
    patterns: [
      {
        id: 'pq-kth',
        name: 'Finding Kth Largest/Smallest',
        icon: 'target',
        scenarios:
          'You have a large dataset, and you need to efficiently find the Kth largest or smallest element.',
        clue:
          'Look for problems where you need to track the K largest or smallest elements while processing the dataset.',
        questions: [
          { title: 'Kth Largest Element in an Array', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
          { title: 'Kth Smallest Element in a Sorted Matrix', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/' },
          { title: 'Find Median from Data Stream', link: 'https://leetcode.com/problems/find-median-from-data-stream/' },
          { title: 'K Closest Points to Origin', link: 'https://leetcode.com/problems/k-closest-points-to-origin/' },
          { title: 'Kth Largest Element in a Stream', link: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/' },
        ],
      },
      {
        id: 'pq-top-k',
        name: 'Top K Frequent Elements',
        icon: 'chart',
        scenarios:
          "You're analyzing data and need to identify the most frequently occurring elements.",
        clue:
          'Look for problems where you need to track element frequencies and select the top K elements based on occurrence count.',
        questions: [
          { title: 'Top K Frequent Elements', link: 'https://leetcode.com/problems/top-k-frequent-elements/' },
          { title: 'Sort Characters By Frequency', link: 'https://leetcode.com/problems/sort-characters-by-frequency/' },
          { title: 'Top K Frequent Words', link: 'https://leetcode.com/problems/top-k-frequent-words/' },
          { title: 'Maximum Frequency Stack', link: 'https://leetcode.com/problems/maximum-frequency-stack/' },
        ],
      },
      {
        id: 'pq-merge-k',
        name: 'Merge K Lists',
        icon: 'layers',
        scenarios:
          'You have K sorted lists and need to merge them into a single sorted list.',
        clue:
          "Look for problems where you're required to merge multiple sorted sequences while maintaining order.",
        questions: [
          { title: 'Merge k Sorted Lists', link: 'https://leetcode.com/problems/merge-k-sorted-lists/' },
          { title: 'Merge Sorted Array', link: 'https://leetcode.com/problems/merge-sorted-array/' },
          { title: 'Merge Intervals', link: 'https://leetcode.com/problems/merge-intervals/' },
          { title: 'Smallest Range Covering Elements from K Lists', link: 'https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/' },
        ],
      },
      {
        id: 'pq-sliding-window',
        name: 'Sliding Window Maximum/Minimum',
        icon: 'grid',
        scenarios:
          'You need to find the maximum or minimum element in all contiguous subarrays of size K.',
        clue:
          'Look for problems where you maintain a sliding window of fixed size and efficiently find the maximum or minimum element.',
        questions: [
          { title: 'Sliding Window Maximum', link: 'https://leetcode.com/problems/sliding-window-maximum/' },
          { title: 'Minimum Window Substring', link: 'https://leetcode.com/problems/minimum-window-substring/' },
          { title: 'Max Consecutive Ones III', link: 'https://leetcode.com/problems/max-consecutive-ones-iii/' },
          { title: 'Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit', link: 'https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/' },
        ],
      },
      {
        id: 'pq-design',
        name: 'Design Problems',
        icon: 'book',
        scenarios:
          "You're tasked with designing a custom data structure using priority queues to solve specific problems efficiently.",
        clue:
          'Look for problems where you need to design a data structure using priority queues for various functionalities.',
        questions: [
          { title: 'Design Twitter', link: 'https://leetcode.com/problems/design-twitter/' },
          { title: 'Design Hit Counter', link: 'https://leetcode.com/problems/design-hit-counter/' },
          { title: 'Design Browser History', link: 'https://leetcode.com/problems/design-browser-history/' },
          { title: 'Design Snake Game', link: 'https://leetcode.com/problems/design-snake-game/' },
          { title: 'Design a Leaderboard', link: 'https://leetcode.com/problems/design-a-leaderboard/' },
        ],
      },
      {
        id: 'pq-construction',
        name: 'Construction and Manipulation',
        icon: 'bolt',
        scenarios:
          'You need to construct, modify, or manipulate data structures using priority queues efficiently.',
        clue:
          'Look for problems where you construct or manipulate data structures based on specific rules using priority queues.',
        questions: [
          { title: 'Task Scheduler', link: 'https://leetcode.com/problems/task-scheduler/' },
          { title: 'Rearrange String k Distance Apart', link: 'https://leetcode.com/problems/rearrange-string-k-distance-apart/' },
          { title: 'Reorganize String', link: 'https://leetcode.com/problems/reorganize-string/' },
          { title: 'Distant Barcodes', link: 'https://leetcode.com/problems/distant-barcodes/' },
          { title: 'Rearrange Words in a Sentence', link: 'https://leetcode.com/problems/rearrange-words-in-a-sentence/' },
        ],
      },
      {
        id: 'pq-graphs',
        name: 'With Graphs',
        icon: 'route',
        scenarios:
          "You need to solve graph-related problems efficiently using priority queues for operations like Dijkstra's algorithm or finding minimum spanning trees.",
        clue:
          'Look for problems where you process nodes or edges based on their weights or distances in graph-related scenarios.',
        questions: [
          { title: 'Network Delay Time', link: 'https://leetcode.com/problems/network-delay-time/' },
          { title: 'Cheapest Flights Within K Stops', link: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/' },
          { title: 'Path with Maximum Probability', link: 'https://leetcode.com/problems/path-with-maximum-probability/' },
          { title: 'The Maze II', link: 'https://leetcode.com/problems/the-maze-ii/' },
          { title: 'Kth Smallest Element in a Sorted Matrix', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/' },
        ],
      },
    ],
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    icon: 'bolt',
    patterns: [
      {
        id: 'dp-basic',
        name: 'Basic Dynamic Programming',
        icon: 'bolt',
        scenarios:
          'You encounter a problem where recursive calls result in redundant computations, leading to inefficiency. The problem can be optimized by storing the results of previous computations in a data structure.',
        clue:
          'Look for recursive problems where subproblems are overlapping or repetitive.',
        questions: [
          { title: 'Fibonacci Number', link: 'https://leetcode.com/problems/fibonacci-number/' },
          { title: 'Climbing Stairs', link: 'https://leetcode.com/problems/climbing-stairs/' },
          { title: 'House Robber', link: 'https://leetcode.com/problems/house-robber/' },
          { title: 'Unique Paths', link: 'https://leetcode.com/problems/unique-paths/' },
          { title: 'Minimum Path Sum', link: 'https://leetcode.com/problems/minimum-path-sum/' },
        ],
      },
      {
        id: 'dp-optimal-substructure',
        name: 'Optimal Substructure',
        icon: 'layers',
        scenarios:
          'You encounter a problem when an optimal solution can be constructed from optimal solutions of its subproblems.',
        clue:
          'Look for problems where the optimal solution to the problem can be formed by combining optimal solutions of its subproblems.',
        questions: [
          { title: 'Maximum Subarray', link: 'https://leetcode.com/problems/maximum-subarray/' },
          { title: 'Longest Increasing Subsequence', link: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
          { title: 'Coin Change', link: 'https://leetcode.com/problems/coin-change/' },
          { title: 'Edit Distance', link: 'https://leetcode.com/problems/edit-distance/' },
          { title: 'Longest Common Subsequence', link: 'https://leetcode.com/problems/longest-common-subsequence/' },
        ],
      },
      {
        id: 'dp-interval',
        name: 'Interval/Range DP',
        icon: 'gauge',
        scenarios:
          'You encounter a problem where you need to find optimal solutions for subintervals within a larger interval.',
        clue:
          'Look for problems where the optimal solution for a given interval can be derived from optimal solutions of its subintervals.',
        questions: [
          { title: 'Minimum Falling Path Sum', link: 'https://leetcode.com/problems/minimum-falling-path-sum/' },
          { title: 'Burst Balloons', link: 'https://leetcode.com/problems/burst-balloons/' },
          { title: 'Partition Equal Subset Sum', link: 'https://leetcode.com/problems/partition-equal-subset-sum/' },
          { title: 'Strange Printer', link: 'https://leetcode.com/problems/strange-printer/' },
          { title: 'Maximum Vacation Days', link: 'https://leetcode.com/problems/maximum-vacation-days/' },
        ],
      },
      {
        id: 'dp-knapsack',
        name: 'Knapsack Problems',
        icon: 'book',
        scenarios:
          'You encounter a problem where you need to optimize the allocation of resources to minimize or maximize a value, subject to capacity constraints.',
        clue:
          'Look for problems where you need to select items from a set to maximize or minimize a value without exceeding capacity constraints.',
        questions: [
          { title: 'Partition Equal Subset Sum', link: 'https://leetcode.com/problems/partition-equal-subset-sum/' },
          { title: 'Target Sum', link: 'https://leetcode.com/problems/target-sum/' },
          { title: 'Coin Change 2', link: 'https://leetcode.com/problems/coin-change-2/' },
          { title: 'Ones and Zeroes', link: 'https://leetcode.com/problems/ones-and-zeroes/' },
          { title: 'Last Stone Weight II', link: 'https://leetcode.com/problems/last-stone-weight-ii/' },
        ],
      },
      {
        id: 'dp-prefix-sums',
        name: 'Prefix Sums',
        icon: 'chart',
        scenarios:
          'You encounter a problem where you need to efficiently compute cumulative sums or counts over a range of elements.',
        clue:
          'Look for problems where you can preprocess the array to compute prefix sums or counts, enabling fast query operations.',
        questions: [
          { title: 'Subarray Sum Equals K', link: 'https://leetcode.com/problems/subarray-sum-equals-k/' },
          { title: 'Range Sum Query - Immutable', link: 'https://leetcode.com/problems/range-sum-query-immutable/' },
          { title: 'Count of Range Sum', link: 'https://leetcode.com/problems/count-of-range-sum/' },
          { title: 'Number of Submatrices That Sum to Target', link: 'https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/' },
          { title: 'Subarray Sums Divisible by K', link: 'https://leetcode.com/problems/subarray-sums-divisible-by-k/' },
        ],
      },
      {
        id: 'dp-counting',
        name: 'Counting Problems',
        icon: 'grid',
        scenarios:
          'You encounter a problem where you need to count the number of ways to achieve a certain outcome, subject to certain constraints.',
        clue:
          'Look for problems where you can define states representing counts, and transitions between states correspond to valid outcomes.',
        questions: [
          { title: 'Unique Paths III', link: 'https://leetcode.com/problems/unique-paths-iii/' },
          { title: 'Distinct Subsequences', link: 'https://leetcode.com/problems/distinct-subsequences/' },
          { title: 'Count Different Palindromic Subsequences', link: 'https://leetcode.com/problems/count-different-palindromic-subsequences/' },
          { title: 'Count Numbers with Unique Digits', link: 'https://leetcode.com/problems/count-numbers-with-unique-digits/' },
          { title: 'Count of Smaller Numbers After Self', link: 'https://leetcode.com/problems/count-of-smaller-numbers-after-self/' },
        ],
      },
      {
        id: 'dp-interval-partitioning',
        name: 'Interval Partitioning',
        icon: 'filter',
        scenarios:
          'You encounter a problem where you need to divide a set of intervals into the minimum number of non-overlapping subsets.',
        clue:
          'Look for problems where you can sort the intervals by their endpoints and use dynamic programming to find the optimal partitioning.',
        questions: [
          { title: 'Non-overlapping Intervals', link: 'https://leetcode.com/problems/non-overlapping-intervals/' },
          { title: 'Partition Labels', link: 'https://leetcode.com/problems/partition-labels/' },
          { title: 'Maximum Number of Non-Overlapping Subarrays With Sum Equals Target', link: 'https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/' },
          { title: 'Split Array into Consecutive Subsequences', link: 'https://leetcode.com/problems/split-array-into-consecutive-subsequences/' },
          { title: 'Longest Continuous Increasing Subsequence', link: 'https://leetcode.com/problems/longest-continuous-increasing-subsequence/' },
        ],
      },
      {
        id: 'dp-probability',
        name: 'Probability & Expectations',
        icon: 'sparkles',
        scenarios:
          'You encounter a problem where you need to compute the probability of certain events or the expected value of a random variable.',
        clue:
          'Look for problems where you model the problem using probability distributions and use dynamic programming to compute them efficiently.',
        questions: [
          { title: 'Knight Probability in Chessboard', link: 'https://leetcode.com/problems/knight-probability-in-chessboard/' },
          { title: 'Dice Roll Simulation', link: 'https://leetcode.com/problems/dice-roll-simulation/' },
          { title: 'Stone Game VII', link: 'https://leetcode.com/problems/stone-game-vii/' },
          { title: 'Predict the Winner', link: 'https://leetcode.com/problems/predict-the-winner/' },
          { title: 'Cherry Pickup', link: 'https://leetcode.com/problems/cherry-pickup/' },
        ],
      },
    ],
  },
  {
    id: 'graphs',
    name: 'Graphs',
    icon: 'target',
    patterns: [
      {
        id: 'graph-connected-components',
        name: 'Finding Connected Components',
        icon: 'layers',
        scenarios:
          "You're given a graph, and you need to identify distinct subgraphs where all vertices are connected to each other by paths.",
        clue:
          'Look for problems where you need to group nodes based on their connectivity, often involving DFS or BFS traversal.',
        questions: [
          { title: 'Number of Islands', link: 'https://leetcode.com/problems/number-of-islands/' },
          { title: 'Number of Connected Components in an Undirected Graph', link: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/' },
          { title: 'Friend Circles (Number of Provinces)', link: 'https://leetcode.com/problems/number-of-provinces/' },
          { title: 'Accounts Merge', link: 'https://leetcode.com/problems/accounts-merge/' },
          { title: 'Redundant Connection', link: 'https://leetcode.com/problems/redundant-connection/' },
        ],
      },
      {
        id: 'graph-shortest-path',
        name: 'Shortest Path Finding',
        icon: 'route',
        scenarios:
          "Given a graph with weighted edges, you're tasked with finding the shortest path between two nodes.",
        clue:
          "Look for problems where you need to optimize distance or traversal time between two points, typically using Dijkstra's or Floyd-Warshall algorithms.",
        questions: [
          { title: 'Network Delay Time', link: 'https://leetcode.com/problems/network-delay-time/' },
          { title: 'Cheapest Flights Within K Stops', link: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/' },
          { title: 'Shortest Path in Binary Matrix', link: 'https://leetcode.com/problems/shortest-path-in-binary-matrix/' },
          { title: 'Word Ladder', link: 'https://leetcode.com/problems/word-ladder/' },
          { title: 'The Maze', link: 'https://leetcode.com/problems/the-maze/' },
        ],
      },
      {
        id: 'graph-cycle-detection',
        name: 'Cycle Detection',
        icon: 'reset',
        scenarios:
          "You're required to detect whether a graph contains cycles or not.",
        clue:
          'Look for problems where you need to ensure that no node is visited more than once during traversal, employing DFS or BFS to detect back edges.',
        questions: [
          { title: 'Course Schedule', link: 'https://leetcode.com/problems/course-schedule/' },
          { title: 'Find Eventual Safe States', link: 'https://leetcode.com/problems/find-eventual-safe-states/' },
          { title: 'Course Schedule II', link: 'https://leetcode.com/problems/course-schedule-ii/' },
          { title: 'Redundant Connection', link: 'https://leetcode.com/problems/redundant-connection/' },
          { title: 'Redundant Connection II', link: 'https://leetcode.com/problems/redundant-connection-ii/' },
        ],
      },
      {
        id: 'graph-bipartite',
        name: 'Bipartite Graph Check',
        icon: 'grid',
        scenarios:
          "You need to determine if a given undirected graph is bipartite, i.e., it's possible to split the vertices into two independent sets such that no edge connects vertices of the same set.",
        clue:
          'Look for problems where you need to color nodes alternatively while traversing the graph to detect any conflicts.',
        questions: [
          { title: 'Is Graph Bipartite?', link: 'https://leetcode.com/problems/is-graph-bipartite/' },
          { title: 'Possible Bipartition', link: 'https://leetcode.com/problems/possible-bipartition/' },
          { title: 'Graph Valid Tree', link: 'https://leetcode.com/problems/graph-valid-tree/' },
          { title: 'Flower Planting With No Adjacent', link: 'https://leetcode.com/problems/flower-planting-with-no-adjacent/' },
        ],
      },
      {
        id: 'graph-mst',
        name: 'Minimum Spanning Tree',
        icon: 'target',
        scenarios:
          "You're tasked with finding the minimum weight connected subtree that connects all vertices in a graph.",
        clue:
          'Look for problems involving weighted edges and the need to minimize the total weight to connect all nodes.',
        questions: [
          { title: 'Min Cost to Connect All Points', link: 'https://leetcode.com/problems/min-cost-to-connect-all-points/' },
          { title: 'Connecting Cities With Minimum Cost', link: 'https://leetcode.com/problems/connecting-cities-with-minimum-cost/' },
          { title: 'Campus Bikes II', link: 'https://leetcode.com/problems/campus-bikes-ii/' },
          { title: 'Optimize Water Distribution in a Village', link: 'https://leetcode.com/problems/optimize-water-distribution-in-a-village/' },
          { title: 'Redundant Connection', link: 'https://leetcode.com/problems/redundant-connection/' },
        ],
      },
      {
        id: 'graph-dag',
        name: 'Directed Acyclic Graph (DAG) Traversal',
        icon: 'arrowRight',
        scenarios:
          "You're given a directed graph without cycles, and you need to traverse it efficiently.",
        clue:
          'Look for problems where you need to perform a topological sort or find the longest path without revisiting nodes.',
        questions: [
          { title: 'Alien Dictionary', link: 'https://leetcode.com/problems/alien-dictionary/' },
          { title: 'Longest Increasing Path in a Matrix', link: 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/' },
          { title: 'Course Schedule III', link: 'https://leetcode.com/problems/course-schedule-iii/' },
          { title: 'Sequence Reconstruction', link: 'https://leetcode.com/problems/sequence-reconstruction/' },
          { title: 'All Paths From Source to Target', link: 'https://leetcode.com/problems/all-paths-from-source-to-target/' },
        ],
      },
      {
        id: 'graph-coloring',
        name: 'Graph Coloring',
        icon: 'sparkles',
        scenarios:
          'You need to assign colors to the vertices of a graph such that no two adjacent vertices have the same color.',
        clue:
          'Look for problems where you need to color the graph with a minimum number of colors without violating the coloring rule.',
        questions: [
          { title: 'Is Graph Bipartite?', link: 'https://leetcode.com/problems/is-graph-bipartite/' },
          { title: 'Course Schedule IV', link: 'https://leetcode.com/problems/course-schedule-iv/' },
          { title: 'Minimum Number of Vertices to Reach All Nodes', link: 'https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/' },
          { title: 'Flower Planting With No Adjacent', link: 'https://leetcode.com/problems/flower-planting-with-no-adjacent/' },
        ],
      },
    ],
  },
];

/** Flattened list of every pattern (with its topic) — handy for search. */
export const allPatterns = patternTopics.flatMap((topic) =>
  topic.patterns.map((p) => ({ ...p, topicId: topic.id, topicName: topic.name }))
);
