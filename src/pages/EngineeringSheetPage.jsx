import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Icon from '../components/ui/Icon';

const solvedKey = 'mydsa-engineering-sheet-solved-v2';
const revisionKey = 'mydsa-engineering-sheet-revision-v2';

const readSet = (key) => {
  try {
    return new Set(JSON.parse(localStorage.getItem(key) || '[]'));
  } catch {
    return new Set();
  }
};

const EngineeringSheetPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get('mode') === 'competitive' ? 'competitive' : 'dsa';
  const [sheet, setSheet] = useState(null);
  const [explanationSlugs, setExplanationSlugs] = useState(new Set());
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');
  const [solved, setSolved] = useState(() => readSet(solvedKey));
  const [revision, setRevision] = useState(() => readSet(revisionKey));

  useEffect(() => {
    setSheet(null);
    setCategory('All');
    setLevel('All');
    const sheetUrl = mode === 'dsa' ? '/engineering/sheets/dsa-31.json' : '/engineering/sheets/cf-18.json';
    const requests = [fetch(sheetUrl).then((response) => response.json())];
    if (mode === 'dsa') {
      requests.push(
        fetch('/engineering/sheets/dsa-content/index.json')
          .then((response) => response.json())
          .catch(() => ({ documents: [] })),
      );
    }
    Promise.all(requests)
      .then(([data, contentIndex]) => {
        setSheet(data);
        setExplanationSlugs(new Set((contentIndex?.documents || []).map((item) => item.slug)));
      })
      .catch(() => setSheet([]));
  }, [mode]);

  const problems = useMemo(
    () =>
      (sheet || []).flatMap((group) =>
        group.levels.flatMap((division) =>
          division.problems.map((problem) => ({
            ...problem,
            categoryId: group.id,
            category: group.category,
            level: division.level,
            ratingRange: division.ratingRange,
            conceptSlug: division.conceptSlug,
            key: `${mode}:${problem.id}`,
          })),
        ),
      ),
    [mode, sheet],
  );

  const filteredGroups = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return (sheet || []).map((group) => ({
      ...group,
      levels: group.levels.map((division) => ({
        ...division,
        problems: division.problems.filter((problem) => {
          const matchesQuery = !normalized || `${problem.name} ${group.category}`.toLowerCase().includes(normalized);
          const matchesCategory = category === 'All' || group.id === category;
          const matchesLevel = level === 'All' || String(division.level) === level;
          return matchesQuery && matchesCategory && matchesLevel;
        }),
      })).filter((division) => division.problems.length),
    })).filter((group) => group.levels.length);
  }, [category, level, query, sheet]);

  const filteredCount = filteredGroups.reduce(
    (sum, group) => sum + group.levels.reduce((levelSum, division) => levelSum + division.problems.length, 0),
    0,
  );
  const solvedForMode = problems.filter((problem) => solved.has(problem.key)).length;
  const revisionForMode = problems.filter((problem) => revision.has(problem.key)).length;
  const completion = problems.length ? Math.round((solvedForMode / problems.length) * 100) : 0;

  const saveSet = (storageKey, setter, current, value) => {
    const next = new Set(current);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    localStorage.setItem(storageKey, JSON.stringify([...next]));
    setter(next);
  };

  if (!sheet) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#050505] pt-16 text-zinc-500">
        <span className="flex items-center gap-3 text-sm">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-800 border-t-blue-500" />
          Loading complete sheet…
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] pt-16 text-zinc-100">
      <header className="border-b border-white/[0.07] bg-[#08080a]">
        <div className="container-page py-10 sm:py-14">
          <Link to="/engineering" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 transition-colors hover:text-white">
            <Icon name="chevronLeft" size={14} /> Engineering
          </Link>
          <div className="mt-7 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className={`text-[10px] font-bold uppercase tracking-[0.17em] ${mode === 'dsa' ? 'text-blue-500' : 'text-rose-400'}`}>
                {mode === 'dsa' ? 'DSA-31 · Interview preparation' : 'CF-18 · Competitive programming'}
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                {mode === 'dsa' ? 'Software Engineer DSA Sheet' : 'Competitive Programming Sheet'}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                {mode === 'dsa'
                  ? '34 pattern-wise categories, three learning divisions, concept links, and complete problem tracking.'
                  : '18 competitive-programming patterns organized into three rating divisions, from 800 to 2200.'}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-500">
                <span className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5">{sheet.length} categories</span>
                <span className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5">{problems.length} problems</span>
                {mode === 'dsa' && (
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5">{explanationSlugs.size} detailed notes</span>
                )}
              </div>
            </div>
            <div className="w-full rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4 shadow-[0_16px_50px_rgba(0,0,0,0.28)] lg:w-[22rem]">
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-white">{completion}%</p>
                <p className="text-xs text-zinc-500">{solvedForMode}/{problems.length} solved</p>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div className={`h-full rounded-full transition-all duration-300 ${mode === 'dsa' ? 'bg-blue-500' : 'bg-rose-500'}`} style={{ width: `${completion}%` }} />
              </div>
            </div>
          </div>

          <div className="mt-8 inline-flex rounded-lg border border-white/[0.08] bg-black/30 p-1">
            <button
              type="button"
              onClick={() => setSearchParams({ mode: 'dsa' })}
              className={`rounded-md px-4 py-2 text-xs font-semibold transition-all duration-200 ${mode === 'dsa' ? 'bg-white text-zinc-950' : 'text-zinc-500 hover:text-white'}`}
            >
              DSA-31
            </button>
            <button
              type="button"
              onClick={() => setSearchParams({ mode: 'competitive' })}
              className={`rounded-md px-4 py-2 text-xs font-semibold transition-all duration-200 ${mode === 'competitive' ? 'bg-white text-zinc-950' : 'text-zinc-500 hover:text-white'}`}
            >
              CF-18
            </button>
          </div>
        </div>
      </header>

      <div className="sticky top-16 z-30 border-b border-white/[0.07] bg-[#08080a]/95 backdrop-blur-xl">
        <div className="container-page grid gap-2 py-3 sm:grid-cols-[1fr_auto_auto]">
          <label className="flex h-10 items-center gap-2.5 rounded-lg border border-white/[0.09] bg-[#101012] px-3 transition-all focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/10">
            <Icon name="search" size={15} className="text-zinc-600" />
            <span className="sr-only">Search problems</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search problems or categories…"
              className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
            />
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-10 max-w-full rounded-lg border border-white/[0.09] bg-[#101012] px-3 text-xs font-semibold text-zinc-400 outline-none focus:border-blue-500/50"
            aria-label="Filter by category"
          >
            <option value="All">All categories</option>
            {sheet.map((item) => <option key={item.id} value={item.id}>{item.category}</option>)}
          </select>
          <div className="flex rounded-lg border border-white/[0.09] bg-[#101012] p-1">
            {['All', '1', '2', '3'].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLevel(item)}
                className={`rounded-md px-2.5 py-1.5 text-[11px] font-semibold transition-all duration-200 ${level === item ? 'bg-white/[0.09] text-white' : 'text-zinc-600 hover:text-zinc-300'}`}
              >
                {item === 'All' ? 'All' : `Div ${item}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container-page py-8 sm:py-10">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs text-zinc-600">{filteredCount} of {problems.length} problems</p>
          <p className="text-xs text-zinc-600">{revisionForMode} in revision</p>
        </div>
        <div className="space-y-8">
          {filteredGroups.map((group, groupIndex) => (
            <section key={group.id}>
              <div className="mb-3 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] font-bold text-zinc-700">{String(groupIndex + 1).padStart(2, '0')}</p>
                  <h2 className="mt-1 text-xl font-bold tracking-tight text-white">{group.category}</h2>
                </div>
                <span className="text-xs text-zinc-600">
                  {group.levels.reduce((sum, division) => sum + division.problems.length, 0)} problems
                </span>
              </div>
              <div className="space-y-3">
                {group.levels.map((division) => (
                  <div key={division.level} className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0e]">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] bg-white/[0.02] px-4 py-3 sm:px-5">
                      <div className="flex items-center gap-3">
                        <span className="rounded-md border border-white/[0.09] bg-white/[0.04] px-2 py-1 font-mono text-[10px] font-bold text-zinc-400">DIV {division.level}</span>
                        {division.ratingRange && <span className="text-xs text-zinc-500">{division.ratingRange}</span>}
                      </div>
                      {division.conceptSlug && (
                        <Link to={`/engineering/dsa/docs/${division.conceptSlug}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300">
                          Read concept <Icon name="chevronRight" size={13} />
                        </Link>
                      )}
                    </div>
                    {division.problems.map((problem, problemIndex) => {
                      const problemKey = `${mode}:${problem.id}`;
                      const isSolved = solved.has(problemKey);
                      const inRevision = revision.has(problemKey);
                      const hasExplanation = mode === 'dsa' && problem.explanationSlug && explanationSlugs.has(problem.explanationSlug);
                      return (
                        <div
                          key={problem.id}
                          className={`group grid gap-3 p-4 transition-colors duration-200 hover:bg-white/[0.025] sm:grid-cols-[2.5rem_1fr_auto_auto_auto] sm:items-center sm:px-5 ${problemIndex ? 'border-t border-white/[0.06]' : ''}`}
                        >
                          <button
                            type="button"
                            onClick={() => saveSet(solvedKey, setSolved, solved, problemKey)}
                            className={`grid h-8 w-8 place-items-center rounded-lg border transition-all duration-200 ${isSolved ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-white/10 text-zinc-700 hover:border-blue-500/40 hover:text-blue-400'}`}
                            aria-label={isSolved ? `Mark ${problem.name} unsolved` : `Mark ${problem.name} solved`}
                          >
                            <Icon name="check" size={15} />
                          </button>
                          <div className="min-w-0">
                            <h3 className={`text-sm font-semibold ${isSolved ? 'text-zinc-600' : 'text-zinc-200'}`}>{problem.name}</h3>
                            <p className="mt-1 text-[11px] text-zinc-600">
                              {mode === 'dsa' ? `Frequency ${problem.frequency ?? '—'}` : `Codeforces · ${problem.rating ?? division.ratingRange}`}
                            </p>
                          </div>
                          {hasExplanation ? (
                            <Link to={`/engineering/sheets/dsa/${problem.explanationSlug}`} className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-blue-500/20 bg-blue-500/[0.06] px-3 text-xs font-semibold text-blue-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/35 hover:bg-blue-500/10">
                              Notes <Icon name="book" size={13} />
                            </Link>
                          ) : <span className="hidden sm:block" />}
                          <button
                            type="button"
                            onClick={() => saveSet(revisionKey, setRevision, revision, problemKey)}
                            className={`grid h-8 w-8 place-items-center rounded-lg border transition-all duration-200 ${inRevision ? 'border-amber-500/30 bg-amber-500/10 text-amber-400' : 'border-white/[0.08] text-zinc-700 hover:text-amber-400'}`}
                            aria-label={inRevision ? `Remove ${problem.name} from revision` : `Add ${problem.name} to revision`}
                          >
                            <Icon name="reset" size={14} />
                          </button>
                          <a
                            href={problem.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-white/[0.09] px-3 text-xs font-semibold text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/30 hover:text-blue-400"
                          >
                            Solve <Icon name="external" size={13} />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        {!filteredGroups.length && (
          <div className="rounded-xl border border-dashed border-white/10 py-20 text-center text-sm text-zinc-500">
            No problems match these filters.{' '}
            <button type="button" onClick={() => { setQuery(''); setCategory('All'); setLevel('All'); }} className="font-semibold text-blue-400">Clear filters</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default EngineeringSheetPage;
