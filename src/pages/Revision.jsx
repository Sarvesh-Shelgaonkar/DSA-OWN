import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { SectionHeading, StatCard, EmptyState, DifficultyBadge } from '../components/ui/index.jsx';
import StarRating from '../components/ui/StarRating';
import { useLocalProgress } from '../hooks/useLocalProgress';
import { useRevision } from '../hooks/useRevision';
import { allProblems, topicSummaries } from '../lib/problems';

const DAY = 86400000;
const fmtDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }) : '—';
const daysSince = (iso) => (iso ? Math.floor((Date.now() - new Date(iso).getTime()) / DAY) : Infinity);

const SORTS = [
  { key: 'recent', label: 'Recently solved' },
  { key: 'due', label: 'Needs revision first' },
  { key: 'most', label: 'Most revised' },
  { key: 'rating-high', label: 'Highest rated' },
  { key: 'rating-low', label: 'Lowest rated' },
];

const isDue = (entry) =>
  (entry.reviseCount || 0) === 0 || (entry.lastRevised && daysSince(entry.lastRevised) >= 7);

const Revision = () => {
  const { progress } = useLocalProgress();
  const { revision, getEntry, setRating, addRevision } = useRevision();
  const [topic, setTopic] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [sort, setSort] = useState('recent');
  const [onlyDue, setOnlyDue] = useState(false);

  const topics = useMemo(() => ['All', ...topicSummaries.map((t) => t.topic)], []);

  const items = useMemo(() => {
    let list = allProblems
      .filter((p) => progress[p.id]?.solved)
      .map((p) => ({
        ...p,
        solvedAt: progress[p.id]?.solvedAt,
        entry: getEntry(p.id),
      }));

    if (topic !== 'All') list = list.filter((p) => p.topic === topic);
    if (difficulty !== 'All') list = list.filter((p) => p.difficulty === difficulty);
    if (onlyDue) list = list.filter((p) => isDue(p.entry));

    const byRecent = (a, b) => new Date(b.solvedAt || 0) - new Date(a.solvedAt || 0);
    if (sort === 'recent') list.sort(byRecent);
    else if (sort === 'most') list.sort((a, b) => (b.entry.reviseCount || 0) - (a.entry.reviseCount || 0));
    else if (sort === 'rating-high') list.sort((a, b) => (b.entry.rating || 0) - (a.entry.rating || 0));
    else if (sort === 'rating-low') list.sort((a, b) => (a.entry.rating || 0) - (b.entry.rating || 0));
    else if (sort === 'due') list.sort((a, b) => Number(isDue(b.entry)) - Number(isDue(a.entry)) || byRecent(a, b));
    return list;
  }, [progress, revision, getEntry, topic, difficulty, sort, onlyDue]);

  // Stats across all solved (unfiltered)
  const stats = useMemo(() => {
    const solved = allProblems.filter((p) => progress[p.id]?.solved);
    const entries = solved.map((p) => getEntry(p.id));
    const totalRevisions = entries.reduce((a, e) => a + (e.reviseCount || 0), 0);
    const rated = entries.filter((e) => e.rating > 0);
    const avg = rated.length ? (rated.reduce((a, e) => a + e.rating, 0) / rated.length).toFixed(1) : '—';
    const due = solved.filter((p) => isDue(getEntry(p.id))).length;
    return { total: solved.length, totalRevisions, avg, due };
  }, [progress, revision, getEntry]);

  return (
    <div className="container-page pt-24 pb-16">
      <SectionHeading
        eyebrow="Spaced practice"
        title="Revision"
        description="Every problem you solve lands here. Rate how confident you felt, and log a revision each time you revisit it — so nothing important slips away before your interviews."
      />

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon="book" label="In revision" value={stats.total} accent="text-primary" />
        <StatCard icon="reset" label="Total revisions" value={stats.totalRevisions} accent="text-accent" />
        <StatCard icon="star" label="Avg. confidence" value={stats.avg} sub="/ 5" accent="text-medium" />
        <StatCard icon="bell" label="Due to revise" value={stats.due} accent="text-hard" />
      </div>

      {stats.total === 0 ? (
        <EmptyState
          icon="book"
          title="Nothing to revise yet"
          description="Solve a problem and mark it as solved — it will automatically appear here for spaced revision."
          action={<Link to="/problems" className="btn-primary btn-sm">Browse problems</Link>}
        />
      ) : (
        <>
          {/* Controls */}
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort" className="input sm:w-56">
              {SORTS.map((s) => (
                <option key={s.key} value={s.key}>{s.label}</option>
              ))}
            </select>
            <select value={topic} onChange={(e) => setTopic(e.target.value)} aria-label="Filter by topic" className="input sm:w-48">
              {topics.map((t) => (
                <option key={t} value={t}>{t === 'All' ? 'All topics' : t}</option>
              ))}
            </select>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} aria-label="Filter by difficulty" className="input sm:w-40">
              {['All', 'Easy', 'Medium', 'Hard'].map((d) => (
                <option key={d} value={d}>{d === 'All' ? 'All levels' : d}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setOnlyDue((v) => !v)}
              className={`chip ${onlyDue ? 'chip-active' : ''}`}
            >
              <Icon name="bell" size={14} /> Due only
            </button>
          </div>

          {/* List */}
          {items.length === 0 ? (
            <EmptyState icon="search" title="No problems match" description="Adjust the filters to see more." />
          ) : (
            <ul className="space-y-3">
              {items.map((p) => {
                const due = isDue(p.entry);
                return (
                  <li key={p.id} className="card p-4">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                      {/* Left: title + meta */}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-fg">{p.title}</h3>
                          {p.extra && (
                            <span className="badge border border-accent/40 bg-accent/10 text-accent">
                              <Icon name="sparkles" size={12} /> EXTRA
                            </span>
                          )}
                          {due && (
                            <span className="badge bg-hard/10 text-hard">
                              <Icon name="bell" size={12} /> Due
                            </span>
                          )}
                        </div>
                        <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-fg-subtle">
                          <span className="flex items-center gap-1"><Icon name="grid" size={13} /> {p.topic}</span>
                          <span className="flex items-center gap-1"><Icon name="calendar" size={13} /> Solved {fmtDate(p.solvedAt)}</span>
                          <span className="flex items-center gap-1">
                            <Icon name="clock" size={13} />
                            {p.entry.lastRevised ? `Revised ${fmtDate(p.entry.lastRevised)}` : 'Not revised yet'}
                          </span>
                        </div>
                      </div>

                      {/* Middle: difficulty + rating */}
                      <div className="flex items-center gap-4">
                        <DifficultyBadge difficulty={p.difficulty} />
                        <div className="flex flex-col gap-0.5">
                          <span className="text-2xs font-medium uppercase tracking-wide text-fg-subtle">Confidence</span>
                          <StarRating value={p.entry.rating || 0} onChange={(v) => setRating(p.id, v)} size={16} />
                        </div>
                      </div>

                      {/* Right: revise count + actions */}
                      <div className="flex items-center gap-2">
                        <span
                          className="flex items-center gap-1.5 rounded-lg bg-surface-2 px-3 py-2 text-sm font-semibold text-fg"
                          title="Times revised"
                        >
                          <Icon name="reset" size={15} className="text-accent" />
                          {p.entry.reviseCount || 0}×
                        </span>
                        <button
                          type="button"
                          onClick={() => addRevision(p.id)}
                          className="btn-primary btn-sm"
                          title="Log another revision (+1)"
                        >
                          <Icon name="check" size={15} /> Revised
                        </button>
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary btn-sm"
                          title="Re-solve on LeetCode"
                        >
                          LeetCode <Icon name="external" size={13} />
                        </a>
                        <a
                          href={`https://takeuforward.org/plus/dsa/problems/${p.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary btn-sm hidden md:inline-flex"
                          title="Re-solve on TakeUForward"
                        >
                          TUF+
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Revision;
