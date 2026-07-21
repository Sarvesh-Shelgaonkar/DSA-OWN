import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { SectionHeading } from '../components/ui/index.jsx';
import { patternTopics } from '../data/patterns';
import { allProblems } from '../lib/problems';

const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

// Only LeetCode problems get a matching TakeUForward (TUF+) link.
const isLeetCode = (link) => /leetcode\.com\/problems\//.test(link);
const slugFromLink = (link) => {
  const m = link.match(/problems\/([^/]+)/);
  return m ? m[1] : '';
};
const tufLink = (link) => `https://takeuforward.org/plus/dsa/problems/${slugFromLink(link)}`;

const QuestionRow = ({ q, matchIndex }) => {
  const inApp = matchIndex[normalize(q.title)];
  const leet = isLeetCode(q.link);
  return (
    <li className="flex items-center gap-2 py-2.5">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-surface-2 text-fg-subtle">
        <Icon name="code" size={13} />
      </span>
      <span className="min-w-0 flex-1 truncate text-sm text-fg" title={q.title}>
        {q.title}
      </span>
      {inApp && (
        <Link
          to={`/problems?q=${encodeURIComponent(q.title)}`}
          className="hidden shrink-0 rounded-md bg-surface-2 px-2 py-0.5 text-2xs font-semibold text-fg-muted hover:text-fg sm:inline"
          title="Open in MyDSA problem list"
        >
          In app
        </Link>
      )}
      <a
        href={q.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost btn-sm shrink-0"
        title={`Solve "${q.title}"`}
      >
        {leet ? 'LeetCode' : 'Solve'} <Icon name="external" size={13} />
      </a>
      {leet && (
        <a
          href={tufLink(q.link)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost btn-sm hidden shrink-0 md:inline-flex"
          title={`Solve "${q.title}" on TakeUForward`}
        >
          TUF+
        </a>
      )}
    </li>
  );
};

const PatternCard = ({ pattern, matchIndex }) => (
  <article id={pattern.id} className="card scroll-mt-24 p-6">
    <header className="flex items-center gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon name={pattern.icon} size={22} />
      </span>
      <div className="min-w-0">
        <h3 className="truncate text-lg font-bold text-fg">{pattern.name}</h3>
        <p className="text-xs text-fg-subtle">{pattern.questions.length} practice problems</p>
      </div>
    </header>

    <div className="mt-5 space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-fg-subtle">When to use</p>
        <p className="mt-1 text-sm leading-relaxed text-fg-muted">{pattern.scenarios}</p>
      </div>

      <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
          <Icon name="search" size={13} /> Clue to spot it
        </p>
        <p className="mt-1 text-sm leading-relaxed text-fg">{pattern.clue}</p>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-fg-subtle">Practice problems</p>
        <ul className="divide-y divide-border">
          {pattern.questions.map((q) => (
            <QuestionRow key={`${pattern.id}-${q.title}-${q.link}`} q={q} matchIndex={matchIndex} />
          ))}
        </ul>
      </div>
    </div>
  </article>
);

const Patterns = () => {
  const [query, setQuery] = useState('');
  const [activeTopic, setActiveTopic] = useState(patternTopics[0].id);

  const matchIndex = useMemo(() => {
    const idx = {};
    allProblems.forEach((p) => {
      idx[normalize(p.title)] = true;
    });
    return idx;
  }, []);

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  // When searching we look across every topic; otherwise we show the active tab.
  const visibleTopics = useMemo(() => {
    if (!searching) {
      return patternTopics.filter((t) => t.id === activeTopic);
    }
    const matchPattern = (p) =>
      p.name.toLowerCase().includes(q) ||
      p.scenarios.toLowerCase().includes(q) ||
      p.clue.toLowerCase().includes(q) ||
      p.questions.some((qq) => qq.title.toLowerCase().includes(q));

    return patternTopics
      .map((t) => ({ ...t, patterns: t.patterns.filter(matchPattern) }))
      .filter((t) => t.patterns.length > 0);
  }, [searching, q, activeTopic]);

  const totalPatterns = useMemo(
    () => patternTopics.reduce((n, t) => n + t.patterns.length, 0),
    []
  );

  return (
    <div className="container-page pt-24 pb-16">
      <SectionHeading
        eyebrow="Recognise → Solve"
        title="Pattern Recognition"
        description={`Almost every DSA problem maps to a handful of recurring patterns. Browse ${patternTopics.length} topics and ${totalPatterns} patterns — learn to spot the clue in a problem statement, then reach for the right technique.`}
      />

      {/* Search */}
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm text-fg-muted">
          {searching
            ? `Showing matches for “${query}” across all topics.`
            : 'Pick a topic below, or search to jump straight to a pattern or problem.'}
        </p>
        <div className="relative lg:w-80">
          <Icon
            name="search"
            size={18}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-fg-subtle"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search patterns or problems…"
            aria-label="Search patterns"
            className="input pl-10"
          />
        </div>
      </div>

      {/* Topic tabs */}
      {!searching && (
        <div
          className="mb-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Pattern topics"
        >
          {patternTopics.map((t) => {
            const active = t.id === activeTopic;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTopic(t.id)}
                className={
                  active
                    ? 'inline-flex items-center gap-1.5 rounded-full border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-fg transition'
                    : 'inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-fg-muted transition hover:border-primary/40 hover:text-fg'
                }
              >
                <Icon name={t.icon} size={15} /> {t.name}
                <span
                  className={
                    active
                      ? 'rounded-full bg-primary-fg/20 px-1.5 text-2xs font-semibold'
                      : 'rounded-full bg-surface-2 px-1.5 text-2xs font-semibold text-fg-subtle'
                  }
                >
                  {t.patterns.length}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Content */}
      {visibleTopics.length === 0 ? (
        <div className="card p-10 text-center">
          <p className="text-sm text-fg-muted">
            No patterns or problems match “{query}”. Try a different keyword.
          </p>
        </div>
      ) : (
        visibleTopics.map((topic) => (
          <section key={topic.id} className="mb-10">
            {searching && (
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-fg">
                <Icon name={topic.icon} size={18} className="text-primary" /> {topic.name}
              </h2>
            )}
            <div className="grid gap-6 lg:grid-cols-2">
              {topic.patterns.map((p) => (
                <PatternCard key={p.id} pattern={p} matchIndex={matchIndex} />
              ))}
            </div>
          </section>
        ))
      )}

      <div className="mt-4 rounded-2xl border border-border bg-surface p-6 text-center">
        <p className="text-sm text-fg-muted">
          Tip: before coding, read the problem twice and ask “which pattern does this match?”.
          Pairing pattern recognition with the{' '}
          <Link to="/problems" className="font-medium text-primary hover:underline">
            problem set
          </Link>{' '}
          is the fastest way to build interview intuition.
        </p>
      </div>
    </div>
  );
};

export default Patterns;
