import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { ProgressBar, EmptyState } from '../components/ui/index.jsx';
import ProblemListItem from '../components/ProblemListItem';
import ComplexityGuide from '../components/ComplexityGuide';
import { allProblems, topicSummaries, TOTAL_PROBLEMS } from '../lib/problems';
import { useLocalProgress } from '../hooks/useLocalProgress';
import { useBookmarks } from '../hooks/useBookmarks';

const DIFFICULTIES = ['All', 'Easy', 'Medium', 'Hard'];
const STATUSES = [
  { key: 'All', label: 'All' },
  { key: 'Solved', label: 'Solved' },
  { key: 'Todo', label: 'Todo' },
  { key: 'Bookmarked', label: 'Bookmarked' },
  { key: 'Extra', label: 'Extra' },
];
const SORTS = [
  { key: 'default', label: 'Default order' },
  { key: 'title', label: 'Title (A–Z)' },
  { key: 'difficulty', label: 'Difficulty (easy first)' },
  { key: 'acceptance', label: 'Acceptance (high first)' },
  { key: 'frequency', label: 'Frequency (high first)' },
];
const PAGE_SIZE = 25;

const ProblemsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { progress, markProblemSolved, markProblemUnsolved } = useLocalProgress();
  const { bookmarks, isBookmarked, toggleBookmark } = useBookmarks();

  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [topic, setTopic] = useState(searchParams.get('topic') || 'All');
  const [difficulty, setDifficulty] = useState(searchParams.get('difficulty') || 'All');
  const [status, setStatus] = useState('All');
  const [sort, setSort] = useState('default');
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);

  const topics = useMemo(() => ['All', ...topicSummaries.map((t) => t.topic)], []);
  const extraCount = useMemo(() => allProblems.filter((p) => p.extra).length, []);

  // Keep shareable filters in the URL
  useEffect(() => {
    const params = {};
    if (query) params.q = query;
    if (topic !== 'All') params.topic = topic;
    if (difficulty !== 'All') params.difficulty = difficulty;
    setSearchParams(params, { replace: true });
    setPage(1);
  }, [query, topic, difficulty, setSearchParams]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = allProblems.filter((p) => {
      if (topic !== 'All' && p.topic !== topic) return false;
      if (difficulty !== 'All' && p.difficulty !== difficulty) return false;
      if (q && !p.title.toLowerCase().includes(q)) return false;
      const solved = Boolean(progress[p.id]?.solved);
      if (status === 'Solved' && !solved) return false;
      if (status === 'Todo' && solved) return false;
      if (status === 'Bookmarked' && !bookmarks[p.id]) return false;
      if (status === 'Extra' && !p.extra) return false;
      return true;
    });

    const diffRank = { Easy: 0, Medium: 1, Hard: 2 };
    if (sort === 'title') list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === 'difficulty') list = [...list].sort((a, b) => diffRank[a.difficulty] - diffRank[b.difficulty]);
    else if (sort === 'acceptance') list = [...list].sort((a, b) => b.acceptance - a.acceptance);
    else if (sort === 'frequency') list = [...list].sort((a, b) => b.frequency - a.frequency);

    return list;
  }, [query, topic, difficulty, status, sort, progress, bookmarks]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const solvedInView = filtered.filter((p) => progress[p.id]?.solved).length;

  const toggleSolved = (id) =>
    progress[id]?.solved ? markProblemUnsolved(id) : markProblemSolved(id);

  const resetFilters = () => {
    setQuery('');
    setTopic('All');
    setDifficulty('All');
    setStatus('All');
    setSort('default');
  };

  const activeFilterCount =
    (topic !== 'All' ? 1 : 0) + (difficulty !== 'All' ? 1 : 0) + (status !== 'All' ? 1 : 0);

  return (
    <div className="container-page pt-24 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">Problems</h1>
          <p className="mt-1 text-fg-muted">
            {TOTAL_PROBLEMS} problems across {topicSummaries.length} topics
            {extraCount > 0 && (
              <>
                {' '}·{' '}
                <span className="font-medium text-accent">{extraCount} extra</span> added for interviews
              </>
            )}
            .
          </p>
          <button
            type="button"
            onClick={() => setGuideOpen(true)}
            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
          >
            <Icon name="gauge" size={16} className="text-primary" />
            Complexity guide
          </button>
        </div>
        <div className="min-w-[200px]">
          <div className="mb-1 flex items-center justify-between text-sm">
            <span className="text-fg-muted">Solved in view</span>
            <span className="font-semibold text-fg">{solvedInView}/{filtered.length}</span>
          </div>
          <ProgressBar
            value={filtered.length ? (solvedInView / filtered.length) * 100 : 0}
            barClassName="bg-success"
            label="Solved in current view"
          />
        </div>
      </div>

      {/* Search + controls */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Icon name="search" size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-fg-subtle" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search problems by title…"
            aria-label="Search problems"
            className="input pl-10"
          />
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort problems"
          className="input sm:w-56"
        >
          {SORTS.map((s) => (
            <option key={s.key} value={s.key}>{s.label}</option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => setShowFilters((v) => !v)}
          className="btn-secondary btn-md sm:hidden"
          aria-expanded={showFilters}
        >
          <Icon name="filter" size={16} /> Filters
          {activeFilterCount > 0 && (
            <span className="ml-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-2xs text-primary-fg">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Filters */}
      <div className={`mt-4 space-y-4 ${showFilters ? 'block' : 'hidden'} sm:block`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-medium text-fg-muted">Status</span>
          {STATUSES.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setStatus(s.key)}
              className={`chip ${status === s.key ? 'chip-active' : ''}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-medium text-fg-muted">Difficulty</span>
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDifficulty(d)}
              className={`chip ${difficulty === d ? 'chip-active' : ''}`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-medium text-fg-muted">Topic</span>
          {topics.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              className={`chip ${topic === t ? 'chip-active' : ''}`}
            >
              {t}
            </button>
          ))}
        </div>

        {(activeFilterCount > 0 || query) && (
          <button onClick={resetFilters} className="text-sm font-medium text-primary hover:underline">
            Clear all filters
          </button>
        )}
      </div>

      {/* List */}
      <div className="mt-6 space-y-2.5">
        {current.length === 0 ? (
          <EmptyState
            icon="search"
            title="No problems match your filters"
            description="Try adjusting your search or clearing some filters."
            action={<button onClick={resetFilters} className="btn-primary btn-sm">Clear filters</button>}
          />
        ) : (
          current.map((p, i) => (
            <ProblemListItem
              key={p.id}
              problem={p}
              index={(page - 1) * PAGE_SIZE + i}
              solved={Boolean(progress[p.id]?.solved)}
              bookmarked={isBookmarked(p.id)}
              onToggleSolved={toggleSolved}
              onToggleBookmark={toggleBookmark}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="btn-secondary btn-sm"
          >
            <Icon name="chevronLeft" size={16} /> Prev
          </button>
          <span className="px-3 text-sm text-fg-muted">
            Page <span className="font-semibold text-fg">{page}</span> of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="btn-secondary btn-sm"
          >
            Next <Icon name="chevronRight" size={16} />
          </button>
        </nav>
      )}

      <ComplexityGuide open={guideOpen} onClose={() => setGuideOpen(false)} />
    </div>
  );
};

export default ProblemsPage;
