import React, { useEffect, useState } from 'react';
import Icon from '../ui/Icon';

const TABS = {
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

const ORDER = [
  { value: 'O(1)', tone: 'text-emerald-400 border-emerald-500/25 bg-emerald-500/10' },
  { value: 'O(log n)', tone: 'text-lime-400 border-lime-500/25 bg-lime-500/10' },
  { value: 'O(n)', tone: 'text-yellow-300 border-yellow-500/25 bg-yellow-500/10' },
  { value: 'O(n log n)', tone: 'text-amber-400 border-amber-500/25 bg-amber-500/10' },
  { value: 'O(n²)', tone: 'text-orange-400 border-orange-500/25 bg-orange-500/10' },
  { value: 'O(2ⁿ)', tone: 'text-rose-400 border-rose-500/25 bg-rose-500/10' },
  { value: 'O(n!)', tone: 'text-red-400 border-red-500/25 bg-red-500/10' },
];

const EngineeringComplexityChart = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('Loop Patterns');

  useEffect(() => {
    const handleKeyDown = (event) => event.key === 'Escape' && onClose();
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
        aria-labelledby="front-complexity-title"
        className="flex max-h-[92vh] w-full max-w-[1400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101010] shadow-2xl"
      >
        <header className="shrink-0 border-b border-white/[0.08] px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                <Icon name="stopwatch" size={20} />
              </span>
              <div>
                <h2 id="front-complexity-title" className="text-lg font-bold tracking-tight text-white sm:text-xl">Big-O Cheat Sheet</h2>
                <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">Time &amp; space complexity quick reference</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-zinc-500 transition-all duration-200 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close complexity chart"
            >
              <Icon name="close" size={18} />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ORDER.map((item, index) => (
              <React.Fragment key={item.value}>
                {index > 0 && <span className="shrink-0 text-xs text-zinc-700">&lt;</span>}
                <span className={`shrink-0 rounded-md border px-2 py-1 font-mono text-[11px] font-semibold ${item.tone}`}>{item.value}</span>
              </React.Fragment>
            ))}
          </div>
        </header>

        <div className="shrink-0 overflow-x-auto border-b border-white/[0.08] px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-6">
          <div className="flex min-w-max gap-1">
            {Object.keys(TABS).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative px-3 py-3 text-xs font-semibold transition-colors duration-200 sm:px-4 sm:text-sm ${
                  activeTab === tab ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'
                }`}
              >
                {tab}
                {activeTab === tab && <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-blue-500" />}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-y-auto p-4 sm:p-6">
          <div className="grid gap-3 md:grid-cols-2">
            {TABS[activeTab].map((item) => (
              <article key={`${activeTab}-${item.code}`} className="rounded-xl border border-white/[0.08] bg-[#151515] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.15]">
                <div className="flex items-start justify-between gap-4">
                  <pre className="min-w-0 overflow-x-auto whitespace-pre-wrap font-mono text-[12px] leading-5 text-zinc-200 sm:text-[13px]">
                    <code>{item.code}</code>
                  </pre>
                  <span className="shrink-0 rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-1 font-mono text-[11px] font-bold text-blue-400">
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

export default EngineeringComplexityChart;
