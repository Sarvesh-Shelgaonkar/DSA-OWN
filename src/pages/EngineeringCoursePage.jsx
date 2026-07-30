import React, { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { ENGINEERING_TRACKS, getTrackLessons } from '../data/engineeringTracks';

const progressKey = 'mydsa-engineering-progress-v1';

const readProgress = () => {
  try {
    return JSON.parse(localStorage.getItem(progressKey) || '{}');
  } catch {
    return {};
  }
};

const accentClasses = {
  blue: 'border-blue-500/25 bg-blue-500/10 text-blue-400',
  violet: 'border-violet-500/25 bg-violet-500/10 text-violet-400',
  amber: 'border-amber-500/25 bg-amber-500/10 text-amber-400',
  cyan: 'border-cyan-500/25 bg-cyan-500/10 text-cyan-400',
  emerald: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-400',
  rose: 'border-rose-500/25 bg-rose-500/10 text-rose-400',
  indigo: 'border-indigo-500/25 bg-indigo-500/10 text-indigo-400',
};

const trackPath = (trackId, slug) =>
  trackId === 'dsa' && slug === 'how-to-solve-dsa-problems'
    ? '/engineering/dsa/how-to-solve-dsa-problems'
    : `/engineering/learn/${trackId}/${slug}`;

const EngineeringCoursePage = () => {
  const { trackId } = useParams();
  const track = ENGINEERING_TRACKS[trackId];
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState('All');
  const [progress, setProgress] = useState(readProgress);

  const lessons = useMemo(() => getTrackLessons(track), [track]);
  const completedCount = lessons.filter((item) => progress[`${trackId}:${item.slug}`]).length;
  const completion = lessons.length ? Math.round((completedCount / lessons.length) * 100) : 0;

  const filteredSections = useMemo(() => {
    if (!track) return [];
    const normalized = query.trim().toLowerCase();
    return track.sections
      .map((section) => ({
        ...section,
        lessons: section.lessons.filter((item) => {
          const matchesQuery =
            !normalized ||
            [item.title, item.summary, item.level, ...item.keyPoints].join(' ').toLowerCase().includes(normalized);
          return matchesQuery && (level === 'All' || item.level === level);
        }),
      }))
      .filter((section) => section.lessons.length);
  }, [level, query, track]);

  if (!track) return <Navigate to="/engineering" replace />;

  const toggleComplete = (lessonSlug) => {
    const key = `${trackId}:${lessonSlug}`;
    setProgress((current) => {
      const next = { ...current, [key]: !current[key] };
      localStorage.setItem(progressKey, JSON.stringify(next));
      return next;
    });
  };

  const accent = accentClasses[track.accent] || accentClasses.blue;

  return (
    <div className="min-h-screen bg-[#050505] pt-16 text-zinc-100">
      <header className="border-b border-white/[0.07] bg-[#08080a]">
        <div className="container-page py-10 sm:py-14">
          <Link to="/engineering" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 transition-colors hover:text-white">
            <Icon name="chevronLeft" size={14} /> Engineering
          </Link>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
            <div className="max-w-3xl">
              <span className={`inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] ${accent}`}>
                <Icon name={track.icon} size={14} /> {track.eyebrow}
              </span>
              <h1 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">{track.title}</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">{track.description}</p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600">Track progress</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-white">{completion}%</p>
                </div>
                <p className="text-xs text-zinc-500">{completedCount}/{lessons.length} lessons</p>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full rounded-full bg-blue-500 transition-all duration-300" style={{ width: `${completion}%` }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="sticky top-16 z-30 border-b border-white/[0.07] bg-[#08080a]/95 backdrop-blur-xl">
        <div className="container-page flex flex-col gap-3 py-3 sm:flex-row sm:items-center">
          <label className="flex h-10 flex-1 items-center gap-2.5 rounded-lg border border-white/[0.09] bg-[#101012] px-3 focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/10">
            <Icon name="search" size={15} className="text-zinc-600" />
            <span className="sr-only">Search this track</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={`Search ${track.title}…`}
              className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
            />
          </label>
          <div className="flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLevel(item)}
                className={`shrink-0 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 ${
                  level === item ? 'bg-white text-zinc-950' : 'text-zinc-500 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container-page py-10 sm:py-14">
        {filteredSections.length ? (
          <div className="space-y-12">
            {filteredSections.map((section, sectionIndex) => (
              <section key={section.title}>
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] font-bold text-zinc-700">0{sectionIndex + 1}</p>
                    <h2 className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">{section.title}</h2>
                    <p className="mt-1.5 text-sm text-zinc-500">{section.description}</p>
                  </div>
                  <span className="hidden text-xs text-zinc-600 sm:block">{section.lessons.length} lessons</span>
                </div>

                <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0e]">
                  {section.lessons.map((item, index) => {
                    const complete = Boolean(progress[`${trackId}:${item.slug}`]);
                    return (
                      <div
                        key={item.slug}
                        className={`group grid gap-4 p-4 transition-colors duration-200 hover:bg-white/[0.025] sm:grid-cols-[2.5rem_1fr_auto] sm:items-center sm:p-5 ${
                          index ? 'border-t border-white/[0.07]' : ''
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleComplete(item.slug)}
                          aria-label={complete ? `Mark ${item.title} incomplete` : `Mark ${item.title} complete`}
                          className={`grid h-8 w-8 place-items-center rounded-lg border transition-all duration-200 ${
                            complete
                              ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                              : 'border-white/10 text-zinc-700 hover:border-blue-500/40 hover:text-blue-400'
                          }`}
                        >
                          <Icon name="check" size={15} />
                        </button>
                        <Link to={trackPath(trackId, item.slug)} className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className={`font-semibold transition-colors group-hover:text-blue-400 ${complete ? 'text-zinc-500' : 'text-zinc-100'}`}>
                              {item.title}
                            </h3>
                            <span className="rounded-md bg-white/[0.045] px-2 py-1 text-[10px] font-medium text-zinc-500">{item.level}</span>
                          </div>
                          <p className="mt-1.5 text-sm leading-6 text-zinc-500">{item.summary}</p>
                        </Link>
                        <Link
                          to={trackPath(trackId, item.slug)}
                          className="flex items-center justify-between gap-3 text-xs font-semibold text-zinc-600 transition-colors hover:text-blue-400 sm:justify-end"
                        >
                          {item.duration} <Icon name="chevronRight" size={15} />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-white/10 py-20 text-center">
            <Icon name="search" size={24} className="mx-auto text-zinc-700" />
            <h2 className="mt-4 font-semibold text-zinc-300">No lessons found</h2>
            <p className="mt-1 text-sm text-zinc-600">Try another search or difficulty.</p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setLevel('All');
              }}
              className="mt-4 text-sm font-semibold text-blue-400"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default EngineeringCoursePage;
