import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';

const TOPICS = [
  'What is DSA and Its Patterns?',
  'How to Solve DSA Problems Effectively',
  'Solve Related Problems',
  'Big O Notation',
  'Arrays',
  'Strings',
  'Bit Manipulation',
  'Hash Tables',
  'Two Pointers',
  'Prefix Sum',
  'Sliding Window',
  "Kadane's Algorithm",
  'Matrix',
  'Linked List',
  'Stacks',
  'Queues',
  'Deque',
  'Sorting',
  'Recursion & Backtracking',
  'Divide and Conquer',
  'Binary Search',
  'Binary Tree',
  'BST / Ordered Set',
  'Tries',
  'Fenwick Tree (Binary Indexed Tree)',
  'Segment Tree',
  'Sparse Table',
  'Heaps',
  'Intervals',
  'Data Structure Design',
  'Greedy',
  'Graphs',
  'Dynamic Programming',
  'Maths / Geometry',
  'Advanced Topics',
];

const TOPIC_SLUGS = {
  'What is DSA and Its Patterns?': 'what-is-dsa-and-patterns',
  'How to Solve DSA Problems Effectively': 'how-to-solve-dsa-problems',
  'Solve Related Problems': 'solve-related-problems',
  'Big O Notation': 'big-o-notation',
  Arrays: 'arrays',
  Strings: 'strings',
  'Bit Manipulation': 'bit-manipulation',
  'Hash Tables': 'hash-tables',
  'Two Pointers': 'two-pointers',
  'Prefix Sum': 'prefix-sum',
  'Sliding Window': 'sliding-window',
  "Kadane's Algorithm": 'kadanes-algorithm',
  Matrix: 'matrix',
  'Linked List': 'linked-list',
  Stacks: 'stacks',
  Queues: 'queues',
  Deque: 'deque',
  Sorting: 'sorting',
  'Recursion & Backtracking': 'recursion-backtracking',
  'Divide and Conquer': 'divide-and-conquer',
  'Binary Search': 'binary-search',
  'Binary Tree': 'binary-tree',
  'BST / Ordered Set': 'bst-ordered-set',
  Tries: 'tries',
  'Fenwick Tree (Binary Indexed Tree)': 'fenwick-tree',
  'Segment Tree': 'segment-tree',
  'Sparse Table': 'sparse-table',
  Heaps: 'heaps',
  Intervals: 'intervals',
  'Data Structure Design': 'data-structure-design',
  Greedy: 'greedy',
  Graphs: 'graphs',
  'Dynamic Programming': 'dynamic-programming',
  'Maths / Geometry': 'maths-geometry',
  'Advanced Topics': 'advanced-topics',
};

const COMPLEXITY_TABS = {
  'Loop Patterns': [
    { code: 'for (int i = 0; i < n; i++)', note: 'Single loop', complexity: 'O(n)' },
    { code: 'for (int i = 0; i < n; i++)\n  for (int j = 0; j < n; j++)', note: 'Nested loop', complexity: 'O(n²)' },
    { code: 'for (int i = 0; i < n; i++)\n  for (int j = 0; j < i; j++)', note: '1 + 2 + … + n = n(n + 1) / 2', complexity: 'O(n²)' },
    { code: 'for (int i = 1; i < n; i *= 2)', note: 'i doubles each step', complexity: 'O(log n)' },
    { code: 'for (int i = n; i > 0; i /= 2)', note: 'i halves each step', complexity: 'O(log n)' },
    { code: 'for (int i = 0; i < n / 2; i++)', note: 'Constants are dropped', complexity: 'O(n)' },
    { code: 'for (…i < n…) {}\nfor (…i < n…) {}', note: 'Sequential loops: O(n + n) = O(n)', complexity: 'O(n)' },
    { code: 'while (n > 0) { n /= 2; }', note: 'Halving until 0', complexity: 'O(log n)' },
    { code: 'for (int i = 0; i < n; i++)\n  for (int j = 1; j < n; j *= 2)', note: 'Linear × logarithmic', complexity: 'O(n log n)' },
    { code: 'for i…\n  for j…\n    for k… (all < n)', note: 'Triple nested loop', complexity: 'O(n³)' },
  ],
  Recurrences: [
    { code: 'T(n) = T(n - 1) + O(1)', note: 'One smaller subproblem per step', complexity: 'O(n)' },
    { code: 'T(n) = T(n / 2) + O(1)', note: 'Input halves every step', complexity: 'O(log n)' },
    { code: 'T(n) = 2T(n / 2) + O(n)', note: 'Divide, solve both halves, then merge', complexity: 'O(n log n)' },
    { code: 'T(n) = 2T(n / 2) + O(1)', note: 'Balanced binary recursion tree', complexity: 'O(n)' },
    { code: 'T(n) = T(n - 1) + O(n)', note: 'n + (n − 1) + … + 1', complexity: 'O(n²)' },
    { code: 'T(n) = 2T(n - 1) + O(1)', note: 'Two branches at nearly every level', complexity: 'O(2ⁿ)' },
  ],
  'Data Structures': [
    { code: 'Array', note: 'Index access O(1) · search O(n)', complexity: 'O(1) access' },
    { code: 'Linked List', note: 'Access O(n) · insert/remove at head O(1)', complexity: 'O(n) access' },
    { code: 'Hash Table', note: 'Search, insert and delete; worst case O(n)', complexity: 'O(1) average' },
    { code: 'Balanced BST', note: 'Search, insert and delete stay height-bound', complexity: 'O(log n)' },
    { code: 'Heap / Priority Queue', note: 'Peek O(1) · insert and remove O(log n)', complexity: 'O(log n)' },
    { code: 'Stack / Queue', note: 'Push, pop, enqueue and dequeue', complexity: 'O(1)' },
  ],
  Algorithms: [
    { code: 'Binary Search', note: 'Discard half of the search space each step', complexity: 'O(log n)' },
    { code: 'Merge Sort', note: 'Divide into halves, then merge each level', complexity: 'O(n log n)' },
    { code: 'Quick Sort', note: 'Average O(n log n) · worst O(n²)', complexity: 'O(n log n) avg' },
    { code: 'BFS / DFS', note: 'Visit every vertex and edge once', complexity: 'O(V + E)' },
    { code: 'Dijkstra + Heap', note: 'Shortest paths with non-negative weights', complexity: 'O((V + E) log V)' },
    { code: 'Dynamic Programming', note: 'Number of states × work per transition', complexity: 'O(states × transitions)' },
  ],
};

const COMPLEXITY_ORDER = [
  { value: 'O(1)', tone: 'text-emerald-400 border-emerald-500/25 bg-emerald-500/10' },
  { value: 'O(log n)', tone: 'text-lime-400 border-lime-500/25 bg-lime-500/10' },
  { value: 'O(n)', tone: 'text-yellow-300 border-yellow-500/25 bg-yellow-500/10' },
  { value: 'O(n log n)', tone: 'text-amber-400 border-amber-500/25 bg-amber-500/10' },
  { value: 'O(n²)', tone: 'text-orange-400 border-orange-500/25 bg-orange-500/10' },
  { value: 'O(2ⁿ)', tone: 'text-rose-400 border-rose-500/25 bg-rose-500/10' },
  { value: 'O(n!)', tone: 'text-red-400 border-red-500/25 bg-red-500/10' },
];

const TWO_SUM_CODE = `import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }

            map.put(nums[i], i);
        }
        return new int[]{};
    }
}

public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {2, 7, 11, 15};
        int target = 9;

        int[] result = solution.twoSum(nums, target);
        System.out.println(result[0] + " " + result[1]);
    }
}`;

const COMMENTED_CODE = `// 1. Goal: find two numbers that add up to target, return their indexes
// 2. Use a HashMap to remember numbers seen so far and their positions
// 3. For each number, calculate complement = target - current number
// 4. Check if complement already exists in the HashMap
// 5. If yes - found the pair, return [complement's index, current index]
// 6. If no - store current number and its index in the HashMap
// 7. Continue for every element in the array
// 8. This runs in O(n) - one pass, each HashMap operation is O(1)
// 9. HashMap stores: number as key, index as value
// 10. Problem guarantees one solution, so we always find the answer

import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }

            map.put(nums[i], i);
        }
        return new int[]{};
    }
}`;

const SECTIONS = [
  {
    id: 'how-to-actually-solve-dsa',
    title: '1. How to actually solve DSA',
    text: `Let's be completely honest here. If you are just starting with DSA you will not be able to solve problems.

That is not a bad thing. That is just the reality. And once you accept that, things get a lot easier because now you stop panicking and start following a process that actually works.

You are new so you will not solve it. That is okay.

When you open a DSA problem for the first time, there are really only two situations you can be in.

Most beginners think "I could not solve this, I must be bad at coding." That is completely wrong. You could not solve it because nobody taught you the process. Let's fix that right now.`,
    image: '/engineering/lessons/how-to-solve/step-1.png',
    alt: 'Flowchart showing how to begin solving a DSA problem',
  },
  {
    id: 'forget-the-code',
    title: '2. Forget The Code Completely',
    text: `Most people miss this: for the first week, do not write any DSA code. Seriously, zero coding.

Spend that week understanding concepts. Learn what an array is, how it works in memory, why linked lists exist, where stacks are used, and how a HashMap finds data so fast.

When you understand the theory and internal working of data structures first, DSA problems become much easier.

If you jump straight into problems, you are trying to solve puzzles with tools you don't understand.

THINK OF IT LIKE THIS

Before a carpenter picks up a hammer, they already know what it is, how it works, and when to use it.

DSA theory is the same. It helps you understand what your tools are before you start using them to solve problems.`,
  },
  {
    id: 'five-minute-rule',
    title: '3. The 5-minute rule',
    text: `Here is a short and simple version with bold important words:

One of the biggest DSA learning myths is:

Spend 45–60 minutes thinking about every problem before looking at the solution.

For a beginner, this is often a waste of time.

If you don't know the pattern, staring at the problem for 45 minutes will not teach you much. You are just confused and frustrated.

Instead, learn the pattern first, then come back and practice applying it.

THE REAL RULE

Give yourself 5 minutes, maximum 10.

Think genuinely. If nothing is clicking after 10 minutes, stop. Open Google or an AI tool and search for the solution.

Searching is not cheating. It is the next step in the process.`,
    image: '/engineering/lessons/how-to-solve/step-3.png',
    alt: 'Five-minute rule decision flow',
    note: 'Give yourself 5–10 genuine minutes. If nothing clicks, learn the missing pattern and return to practise it.',
  },
  {
    id: 'actual-approach',
    title: '4. The actual approach: step by step',
    text: `This is the core method to follow for every DSA problem.

1. Think for 5–10 minutes. Read the problem and try to connect it to patterns you know. If nothing clicks after 10 minutes, move on.

2. Search for the solution, but don't read the code. Looking at code immediately kills your thinking process.

3. Give the solution code to an AI tool.

Use this prompt: Explain this solution in 10 simple points, no code, just plain English.

4. Carefully read those 10 points. Understand the logic step-by-step. This is where real learning happens.

5. Paste those 10 points as comments in your code file. Now you have a clear roadmap of what the solution should do.

6. Write the code yourself. Use the 10 points as your guide and translate the logic into code. You are not guessing anymore—you have a map.`,
    image: '/engineering/lessons/how-to-solve/step-4.png',
    alt: 'Step-by-step DSA learning workflow',
  },
  {
    id: 'two-sum-example',
    title: '5. Full example: Two Sum',
    text: `Let's walk through this entire approach on a real problem from start to finish so you see exactly how it works in practice.

THE PROBLEM

Given an array of integers and a target number, return the indexes of the two numbers whose sum equals the target.`,
    image: '/engineering/lessons/how-to-solve/two-sum.png',
    alt: 'Two Sum example where values 2 and 7 produce target 9',
    code: TWO_SUM_CODE,
    afterCode: `YOU GAVE THIS TO AN AI AND GOT THESE 10 POINTS

The goal is to find two numbers in the array that add up to the target and return their indexes.

Instead of checking every pair, we use a HashMap to store numbers we have already seen and their indexes.

For each number, we calculate its complement—the number needed to reach the target.

Before storing the current number, we check if the complement already exists in the HashMap.

If the complement exists, we have found the pair.

We return the index from the HashMap and the current index.

If the complement is not found, we store the current number and its index in the HashMap.

We repeat this process while moving left to right through the array.

This works in O(n) time because HashMap lookup and insertion are O(1).

Since the problem guarantees exactly one solution, the correct pair will always be found before the loop ends.`,
    secondCode: COMMENTED_CODE,
    conclusion: `You wrote the code not by copying, but by following a plain English roadmap that you actually understood.

That is the real difference.

You know what each line is doing before you even write it, instead of blindly typing code.`,
  },
  {
    id: 'fifty-problems',
    title: '6. Do this for 50 problems',
    text: `Follow this approach consistently for about 50 problems or 1–2 months. Around problem 20–30, you will start noticing a shift.

You will begin recognizing patterns even before finishing the problem.

You might read a new question and think, "Wait, this looks like the HashMap trick from Two Sum." That is pattern recognition starting to develop naturally.`,
  },
  {
    id: 'avoid-platforms-yet',
    title: '7. Why you should NOT solve on LeetCode or HackerRank yet',
    text: `This is something very few people talk about and it comes from a real experience.

I was in an interview. The interviewer asked me to solve a problem based on Disjoint Set (Union-Find). I knew the concept. I coded the full logic correctly on Notepad, no IDE, no autocomplete. The logic was right.

But then the problem hit. I needed to call my helper function from the main function and take a 2D array as input from the user. I froze.

Not because I did not know the algorithm, but because I had never written a main function that reads input from a user.

I had only ever solved on LeetCode where the input is already given to you. You just fill in the function body.

LeetCode hides the main function. So I had learned the algorithm but not how to actually run it as a real program.`,
    note: 'Knowing an algorithm and being able to build a complete running program are different skills. Practise both.',
  },
  {
    id: 'real-problem-with-leetcode',
    title: '8. The real problem with LeetCode for beginners',
    text: `On LeetCode, you only write a function. The main method, input handling, and program structure are hidden.

But in real interviews and real jobs, you write the entire program.

For the first 2–3 months, practise in your own IDE. Write complete programs, create the main function, and handle input yourself. This helps you understand how a real running program works.

After 2–3 months, then start using LeetCode.

Most tutorials say "grind 500 problems." But a better way is: understand first, focus on logic before code, and build slowly.

Try this for 50 problems and you will see a huge difference.`,
  },
];

const Paragraphs = ({ text }) =>
  text.split(/\n\s*\n/).map((paragraph, index) => {
    const callout = paragraph === paragraph.toUpperCase() && paragraph.length < 70;
    return (
      <p
        key={`${paragraph.slice(0, 24)}-${index}`}
        className={
          callout
            ? 'mt-6 text-xs font-bold uppercase tracking-[0.16em] text-primary'
            : 'mt-4 text-[16px] font-normal leading-8 text-fg-muted sm:text-[17px]'
        }
      >
        {paragraph}
      </p>
    );
  });

const CodeBlock = ({ children, label = 'Java' }) => (
  <div className="mt-6 overflow-hidden rounded-xl border border-border bg-[#090b10] shadow-card">
    <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2.5">
      <span className="text-xs font-semibold text-fg-muted">{label}</span>
      <span className="text-[10px] text-fg-subtle">Change language from Profile → Preferred Language</span>
    </div>
    <pre className="overflow-x-auto p-4 text-[13px] leading-6 text-zinc-300">
      <code>{children}</code>
    </pre>
  </div>
);

const ComplexityChart = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('Loop Patterns');

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="complexity-chart-title"
        className="flex max-h-[92vh] w-full max-w-[1400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101010] shadow-2xl"
      >
        <header className="shrink-0 border-b border-white/[0.08] px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <Icon name="stopwatch" size={20} />
              </span>
              <div className="min-w-0">
                <h2 id="complexity-chart-title" className="text-lg font-bold tracking-tight text-white sm:text-xl">
                  Big-O Cheat Sheet
                </h2>
                <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">Time &amp; space complexity quick reference</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-transparent text-zinc-500 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close complexity chart"
            >
              <Icon name="close" size={18} />
            </button>
          </div>

          <div
            className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Complexity ranking from best to worst"
          >
            {COMPLEXITY_ORDER.map((item, index) => (
              <React.Fragment key={item.value}>
                {index > 0 && <span className="shrink-0 text-xs text-zinc-700">&lt;</span>}
                <span className={`shrink-0 rounded-md border px-2 py-1 font-mono text-[11px] font-semibold ${item.tone}`}>
                  {item.value}
                </span>
              </React.Fragment>
            ))}
          </div>
        </header>

        <div className="shrink-0 overflow-x-auto border-b border-white/[0.08] px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-6">
          <div className="flex min-w-max gap-1">
            {Object.keys(COMPLEXITY_TABS).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative px-3 py-3 text-xs font-semibold transition-colors duration-200 sm:px-4 sm:text-sm ${
                  activeTab === tab ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'
                }`}
              >
                {tab}
                {activeTab === tab && <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-primary" />}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-y-auto p-4 sm:p-6">
          <div className="grid gap-3 md:grid-cols-2">
            {COMPLEXITY_TABS[activeTab].map((item) => (
              <article
                key={`${activeTab}-${item.code}`}
                className="group rounded-xl border border-white/[0.08] bg-[#151515] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.15] hover:bg-[#181818]"
              >
                <div className="flex items-start justify-between gap-4">
                  <pre className="min-w-0 overflow-x-auto whitespace-pre-wrap font-mono text-[12px] leading-5 text-zinc-200 sm:text-[13px]">
                    <code>{item.code}</code>
                  </pre>
                  <span className="shrink-0 rounded-md border border-primary/20 bg-primary/10 px-2 py-1 font-mono text-[11px] font-bold text-primary">
                    {item.complexity}
                  </span>
                </div>
                <p className="mt-3 border-t border-white/[0.06] pt-3 text-xs leading-5 text-zinc-500">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const EngineeringDsaLesson = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [complete, setComplete] = useState(() => localStorage.getItem('engineering-dsa-how-to-complete') === 'true');
  const [revision, setRevision] = useState(() => localStorage.getItem('engineering-dsa-how-to-revision') === 'true');
  const [note, setNote] = useState(() => localStorage.getItem('engineering-dsa-how-to-note') || '');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [complexityOpen, setComplexityOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(height > 0 ? Math.min(100, Math.round((window.scrollY / height) * 100)) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    localStorage.setItem('engineering-dsa-how-to-note', note);
  }, [note]);

  const topicProgress = complete ? 1 : 0;
  const outline = useMemo(() => SECTIONS.map(({ id, title }) => ({ id, title })), []);

  const toggleComplete = () => {
    const next = !complete;
    setComplete(next);
    localStorage.setItem('engineering-dsa-how-to-complete', String(next));
  };

  const toggleRevision = () => {
    const next = !revision;
    setRevision(next);
    localStorage.setItem('engineering-dsa-how-to-revision', String(next));
  };

  return (
    <div className="min-h-screen bg-bg pt-16">
      <div className="sticky top-16 z-30 border-y border-border bg-bg/90 backdrop-blur-xl xl:hidden">
        <div className="container-page flex h-12 items-center justify-between">
          <button type="button" onClick={() => setSidebarOpen((open) => !open)} className="flex items-center gap-2 text-sm font-semibold text-fg">
            <Icon name="book" size={16} /> Topics
          </button>
          <button
            type="button"
            onClick={() => setComplexityOpen(true)}
            className="flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            <Icon name="stopwatch" size={15} /> Complexity chart
          </button>
        </div>
      </div>

      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close topic navigation"
          className="fixed inset-0 z-30 bg-black/60 xl:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed bottom-0 left-0 top-16 z-40 w-[21rem] overflow-y-auto border-r border-border bg-surface p-5 transition-transform duration-200 xl:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-5 flex items-center justify-between">
          <Link to="/engineering" className="flex items-center gap-2 text-sm font-semibold text-fg">
            <Icon name="chevronLeft" size={16} /> Engineering
          </Link>
          <button type="button" onClick={() => setSidebarOpen(false)} className="nav-icon-button grid xl:hidden" aria-label="Close topics">
            <Icon name="close" size={17} />
          </button>
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Master DSA Patterns</p>
        <div className="mt-4 rounded-xl border border-border bg-bg/50 p-4">
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold tracking-tight text-fg">{complete ? 100 : 0}%</span>
            <span className="text-xs text-fg-subtle">{topicProgress}/35 Docs</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
            <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: complete ? '100%' : '0%' }} />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-lg bg-surface-2 p-2.5">
              <p className="font-semibold text-fg">0/452</p>
              <p className="mt-0.5 text-fg-subtle">Problems</p>
            </div>
            <div className="rounded-lg bg-surface-2 p-2.5">
              <p className="font-semibold text-fg">{topicProgress}/35</p>
              <p className="mt-0.5 text-fg-subtle">Docs</p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <button type="button" className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs font-semibold text-fg">
            All Docs
          </button>
          <button type="button" onClick={toggleRevision} className={`rounded-lg border px-3 py-2 text-xs font-semibold ${revision ? 'border-primary bg-primary/10 text-primary' : 'border-border text-fg-muted'}`}>
            Revision List
          </button>
        </div>

        <p className="mb-2 mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-fg-subtle">Documents</p>
        <nav className="space-y-1" aria-label="DSA documents">
          {TOPICS.map((topic) => {
            const active = topic === 'How to Solve DSA Problems Effectively';
            const destination =
              topic === 'Solve Related Problems'
                ? '/engineering/sheets'
                : active
                  ? '/engineering/dsa/docs/how-to-solve-dsa-problems'
                  : '/engineering/dsa';
            return (
              <Link
                key={topic}
                to={destination}
                onClick={() => active && setSidebarOpen(false)}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] transition-colors ${
                  active ? 'bg-primary/10 font-semibold text-primary' : 'text-fg-muted hover:bg-surface-2 hover:text-fg'
                }`}
              >
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${active ? 'bg-primary' : 'bg-border-strong'}`} />
                {topic}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="xl:ml-[21rem] xl:mr-[18rem]">
        <article className="mx-auto max-w-3xl px-4 pb-28 pt-10 sm:px-6 lg:px-8 lg:pt-14">
          <header className="border-b border-border pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Master DSA Patterns</p>
            <h1 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-fg sm:text-4xl lg:text-5xl">
              How to Solve DSA Problems Effectively
            </h1>
            <div className="mt-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">ME</span>
              <div>
                <p className="text-sm font-semibold text-fg">MyDSA Editorial</p>
                <p className="text-xs text-fg-subtle">Engineering Learning Team</p>
              </div>
            </div>
          </header>

          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-border/70 py-9 last:border-b-0">
              <h2 className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">{section.title}</h2>
              <Paragraphs text={section.text} />
              {section.note && (
                <div className="mt-6 rounded-r-xl border-l-2 border-primary bg-primary/5 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Note</p>
                  <p className="mt-2 text-sm leading-6 text-fg-muted">{section.note}</p>
                </div>
              )}
              {section.image && (
                <img
                  src={section.image}
                  alt={section.alt}
                  loading="lazy"
                  className="mx-auto mt-7 max-h-[520px] rounded-xl border border-border bg-surface object-contain shadow-card"
                />
              )}
              {section.code && (
                <>
                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-fg-subtle">
                    You searched and found this solution code
                  </p>
                  <CodeBlock>{section.code}</CodeBlock>
                </>
              )}
              {section.afterCode && <div className="mt-7"><Paragraphs text={section.afterCode} /></div>}
              {section.secondCode && <CodeBlock>{section.secondCode}</CodeBlock>}
              {section.conclusion && <div className="mt-7"><Paragraphs text={section.conclusion} /></div>}
            </section>
          ))}

          <section className="mt-10 rounded-xl border border-border bg-surface p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-fg">My Note</h2>
                <p className="mt-1 text-xs text-fg-subtle">Saved privately in this browser.</p>
              </div>
              <span className="text-xs text-fg-subtle">{note.trim().split(/\s+/).filter(Boolean).length}/1000 words</span>
            </div>
            <textarea
              value={note}
              onChange={(event) => setNote(event.target.value.split(/\s+/).slice(0, 1000).join(' '))}
              rows={7}
              placeholder="Write your understanding, questions or revision notes…"
              className="input mt-4 h-auto resize-y py-3 leading-6"
            />
          </section>
        </article>
      </main>

      <aside className="fixed bottom-0 right-0 top-16 hidden w-[18rem] overflow-y-auto border-l border-border bg-surface p-5 xl:block">
        <div className="rounded-xl border border-border bg-bg/50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-fg">Reading Progress</span>
            <span className="text-sm font-bold text-primary">{readingProgress}%</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
            <div className="h-full rounded-full bg-primary transition-all duration-200" style={{ width: `${readingProgress}%` }} />
          </div>
        </div>

        <h2 className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-fg-subtle">On This Page</h2>
        <nav className="mt-3 space-y-1 border-l border-border pl-3" aria-label="On this page">
          {outline.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="block py-1.5 text-xs leading-5 text-fg-muted hover:text-primary">
              {item.title}
            </a>
          ))}
        </nav>

        <div className="mt-7 space-y-2">
          <button type="button" onClick={() => setComplexityOpen(true)} className="btn-secondary btn-md w-full">
            <Icon name="stopwatch" size={16} /> Time Complexity Chart
          </button>
          <button type="button" onClick={toggleComplete} className={`btn-md w-full ${complete ? 'btn-secondary text-success' : 'btn-primary'}`}>
            <Icon name="check" size={16} /> {complete ? 'Completed' : 'Complete'}
          </button>
          <button type="button" onClick={toggleRevision} className={`btn-secondary btn-md w-full ${revision ? 'border-primary text-primary' : ''}`}>
            <Icon name="reset" size={16} /> {revision ? 'In Revision' : 'Revision'}
          </button>
          <Link to="/problems" className="btn-secondary btn-md w-full">
            Solve related problems <Icon name="arrowRight" size={15} />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 border-t border-border pt-5">
          <Link to="/engineering" className="btn-ghost btn-sm justify-start">
            <Icon name="chevronLeft" size={15} /> Prev
          </Link>
          <Link to="/problems" className="btn-ghost btn-sm justify-end">
            Next <Icon name="chevronRight" size={15} />
          </Link>
        </div>
      </aside>

      {complexityOpen && <ComplexityChart onClose={() => setComplexityOpen(false)} />}
    </div>
  );
};

export default EngineeringDsaLesson;
