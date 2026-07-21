import React, { useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { ProgressBar, EmptyState } from '../components/ui/index.jsx';
import ProblemListItem from '../components/ProblemListItem';
import { roadmap, roadmapById } from '../data/roadmap';
import { allProblems } from '../lib/problems';
import { useLocalProgress } from '../hooks/useLocalProgress';
import { useBookmarks } from '../hooks/useBookmarks';
import { useLessons } from '../hooks/useLessons';

const LEVEL_STYLES = {
  Beginner: 'bg-easy/10 text-easy',
  Intermediate: 'bg-medium/10 text-medium',
  Advanced: 'bg-hard/10 text-hard',
};

const RoadmapStage = () => {
  const { stageId } = useParams();
  const stage = roadmapById[stageId];

  const { progress, markProblemSolved, markProblemUnsolved } = useLocalProgress();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { toggleLesson, isDone, stageDoneCount } = useLessons();

  const index = useMemo(() => roadmap.findIndex((s) => s.id === stageId), [stageId]);

  const problems = useMemo(
    () => (stage?.datasetTopic ? allProblems.filter((p) => p.topic === stage.datasetTopic) : []),
    [stage]
  );

  if (!stage) return <Navigate to="/roadmap" replace />;

  const prev = index > 0 ? roadmap[index - 1] : null;
  const next = index < roadmap.length - 1 ? roadmap[index + 1] : null;

  const conceptCount = stage.concepts?.length || 0;
  const lessonsDone = stageDoneCount(stage.id);
  const lessonPct = conceptCount ? Math.round((lessonsDone / conceptCount) * 100) : 0;

  const solvedCount = problems.filter((p) => progress[p.id]?.solved).length;
  const problemPct = problems.length ? Math.round((solvedCount / problems.length) * 100) : 0;

  const toggleSolved = (id) => (progress[id]?.solved ? markProblemUnsolved(id) : markProblemSolved(id));

  return (
    <div className="container-page pt-24 pb-16">
      {/* Breadcrumb */}
      <nav className="mb-4 flex items-center gap-2 text-sm text-fg-subtle" aria-label="Breadcrumb">
        <Link to="/roadmap" className="hover:text-fg">Roadmap</Link>
        <Icon name="chevronRight" size={14} />
        <span className="text-fg-muted">{stage.title}</span>
      </nav>

      {/* Header */}
      <header className="card p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Icon name={stage.icon} size={26} />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-fg-subtle">
                  Stage {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`badge ${LEVEL_STYLES[stage.level]}`}>{stage.level}</span>
              </div>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-fg">{stage.title}</h1>
              <p className="mt-1 max-w-2xl text-fg-muted">{stage.blurb}</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-fg-subtle">
                <span className="flex items-center gap-1"><Icon name="book" size={14} /> {conceptCount} lessons</span>
                {problems.length > 0 && (
                  <span className="flex items-center gap-1"><Icon name="code" size={14} /> {problems.length} problems</span>
                )}
                <span className="flex items-center gap-1"><Icon name="clock" size={14} /> ~{stage.hours}h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="font-medium text-fg">Lessons</span>
              <span className="text-fg-muted">{lessonsDone}/{conceptCount}</span>
            </div>
            <ProgressBar value={lessonPct} label="Lessons completed" />
          </div>
          {problems.length > 0 && (
            <div>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium text-fg">Problems</span>
                <span className="text-fg-muted">{solvedCount}/{problems.length}</span>
              </div>
              <ProgressBar value={problemPct} barClassName="bg-success" label="Problems solved" />
            </div>
          )}
        </div>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Main column */}
        <div className="space-y-6 lg:col-span-2">
          {/* What you'll learn */}
          <section className="card p-6">
            <h2 className="font-semibold text-fg">What you'll learn</h2>
            <p className="mt-0.5 text-sm text-fg-muted">Tick off each concept as you master it — progress is saved.</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {stage.concepts?.map((concept, i) => {
                const done = isDone(stage.id, i);
                return (
                  <li key={concept}>
                    <button
                      type="button"
                      onClick={() => toggleLesson(stage.id, i)}
                      aria-pressed={done}
                      className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition-colors ${
                        done ? 'border-success/40 bg-success/5' : 'border-border hover:border-border-strong'
                      }`}
                    >
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-all ${
                          done ? 'border-success bg-success text-white' : 'border-border-strong text-transparent'
                        }`}
                      >
                        <Icon name="check" size={13} strokeWidth={3} />
                      </span>
                      <span className={done ? 'text-fg-subtle line-through' : 'text-fg'}>{concept}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Practice problems */}
          <section className="card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-fg">Practice problems</h2>
              {stage.datasetTopic && (
                <Link
                  to={`/problems?topic=${encodeURIComponent(stage.datasetTopic)}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Open in browser
                </Link>
              )}
            </div>

            {problems.length > 0 ? (
              <div className="space-y-2.5">
                {problems.map((p) => (
                  <ProblemListItem
                    key={p.id}
                    problem={p}
                    solved={Boolean(progress[p.id]?.solved)}
                    bookmarked={isBookmarked(p.id)}
                    onToggleSolved={toggleSolved}
                    onToggleBookmark={toggleBookmark}
                  />
                ))}
              </div>
            ) : stage.practice?.length ? (
              <ul className="divide-y divide-border">
                {stage.practice.map((q) => (
                  <li key={q.link} className="flex items-center gap-2 py-2.5">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-surface-2 text-fg-subtle">
                      <Icon name="code" size={13} />
                    </span>
                    <span className="min-w-0 flex-1 truncate text-sm text-fg">{q.title}</span>
                    <a href={q.link} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-sm shrink-0">
                      LeetCode <Icon name="external" size={13} />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState
                icon="book"
                title="Concept-focused stage"
                description="Master the lessons above, then move on — the following stages put these ideas into practice."
              />
            )}
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Resources */}
          <section className="card p-6">
            <h2 className="font-semibold text-fg">Resources</h2>
            <ul className="mt-4 space-y-2">
              {stage.resources?.map((r) => {
                const inner = (
                  <>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-surface-2 text-primary">
                      <Icon name={r.to ? 'book' : 'external'} size={16} />
                    </span>
                    <span className="min-w-0 flex-1 truncate">{r.label}</span>
                    <Icon name="chevronRight" size={16} className="shrink-0 text-fg-subtle" />
                  </>
                );
                const cls =
                  'flex items-center gap-3 rounded-xl border border-border px-3 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-border-strong hover:text-fg';
                return (
                  <li key={r.label}>
                    {r.to ? (
                      <Link to={r.to} className={cls}>{inner}</Link>
                    ) : (
                      <a href={r.url} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Stage navigation */}
          <section className="card p-6">
            <h2 className="font-semibold text-fg">Continue the path</h2>
            <div className="mt-4 space-y-2">
              {prev && (
                <Link to={`/roadmap/${prev.id}`} className="flex items-center gap-3 rounded-xl border border-border px-3 py-2.5 transition-colors hover:border-border-strong">
                  <Icon name="chevronRight" size={16} className="rotate-180 text-fg-subtle" />
                  <span className="min-w-0">
                    <span className="block text-2xs uppercase tracking-wide text-fg-subtle">Previous</span>
                    <span className="block truncate text-sm font-medium text-fg">{prev.title}</span>
                  </span>
                </Link>
              )}
              {next && (
                <Link to={`/roadmap/${next.id}`} className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 px-3 py-2.5 transition-colors hover:border-primary/50">
                  <span className="min-w-0 flex-1">
                    <span className="block text-2xs uppercase tracking-wide text-primary">Next up</span>
                    <span className="block truncate text-sm font-medium text-fg">{next.title}</span>
                  </span>
                  <Icon name="chevronRight" size={16} className="text-primary" />
                </Link>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RoadmapStage;
