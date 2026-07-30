import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';

const INDEX_URL = '/engineering/dsa-docs/index.json';
const PROGRESS_KEY = 'mydsa-recovered-dsa-progress-v1';

const readProgress = () => {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
  } catch {
    return {};
  }
};

const collectTopics = (pattern) => {
  const topics = [...(pattern.topics || [])];
  for (const variation of pattern.variations || []) topics.push(...(variation.topics || []));
  return topics;
};

const EngineeringDsaLibraryPage = () => {
  const [library, setLibrary] = useState(null);
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState('All');
  const [progress, setProgress] = useState(readProgress);
  const [openGroups, setOpenGroups] = useState({});

  useEffect(() => {
    fetch(INDEX_URL)
      .then((response) => {
        if (!response.ok) throw new Error('Could not load the DSA library.');
        return response.json();
      })
      .then((data) => {
        setLibrary(data);
        const first = [...(data.patterns || [])].sort(
          (a, b) => (a.categoryOrder ?? 999) - (b.categoryOrder ?? 999),
        )[0];
        if (first) setOpenGroups({ [first.id]: true });
      });
  }, []);

  const groups = useMemo(() => {
    if (!library) return [];
    const documentMap = new Map(library.documents.map((document) => [document.slug, document]));
    const claimed = new Set();
    const normalizedQuery = query.trim().toLowerCase();

    const matches = (topic, pattern) => {
      const document = documentMap.get(topic.slug);
      const haystack = [
        topic.title,
        topic.description,
        document?.title,
        document?.description,
        pattern.title,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return (
        (!normalizedQuery || haystack.includes(normalizedQuery)) &&
        (level === 'All' || pattern.difficultyLevel === level)
      );
    };

    const patternGroups = [...(library.patterns || [])]
      .sort((a, b) => (a.categoryOrder ?? 999) - (b.categoryOrder ?? 999))
      .map((pattern) => {
        const topics = collectTopics(pattern)
          .filter((topic) => documentMap.has(topic.slug))
          .filter((topic, index, all) => all.findIndex((item) => item.slug === topic.slug) === index)
          .map((topic) => ({ ...documentMap.get(topic.slug), ...topic }))
          .filter((topic) => matches(topic, pattern));
        topics.forEach((topic) => claimed.add(topic.slug));
        return { ...pattern, topics };
      })
      .filter((pattern) => pattern.topics.length);

    const remaining = library.documents
      .filter((document) => !claimed.has(document.slug))
      .filter((document) => {
        const haystack = `${document.title} ${document.description}`.toLowerCase();
        return (!normalizedQuery || haystack.includes(normalizedQuery)) && level === 'All';
      });

    if (remaining.length) {
      patternGroups.push({
        id: 'more-dsa-documents',
        title: 'More DSA Documents',
        description: 'Additional concepts and advanced variations.',
        difficultyLevel: 'Mixed',
        topics: remaining,
      });
    }
    return patternGroups;
  }, [level, library, query]);

  if (!library) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#050505] pt-16 text-zinc-500">
        <div className="flex items-center gap-3 text-sm">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-800 border-t-blue-500" />
          Loading 152 DSA documents…
        </div>
      </div>
    );
  }

  const completedCount = library.documents.filter((document) => progress[document.slug]).length;
  const completion = Math.round((completedCount / library.documents.length) * 100);

  const toggleComplete = (slug) => {
    setProgress((current) => {
      const next = { ...current, [slug]: !current[slug] };
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-16 text-zinc-100">
      <header className="border-b border-white/[0.07] bg-[#08080a]">
        <div className="container-page py-10 sm:py-14">
          <Link to="/engineering" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 transition-colors hover:text-white">
            <Icon name="chevronLeft" size={14} /> Engineering
          </Link>
          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-lg border border-blue-500/25 bg-blue-500/10 px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-400">
                <Icon name="layers" size={14} /> Master DSA systematically
              </span>
              <h1 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                Data Structures &amp; Algorithms
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                The complete MyDSA learning path—from programming fundamentals and complexity analysis
                to advanced trees, graphs, dynamic programming, and data structure design.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4 shadow-[0_16px_50px_rgba(0,0,0,0.28)]">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600">Your progress</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-white">{completion}%</p>
                </div>
                <p className="text-xs text-zinc-500">{completedCount}/{library.documents.length} docs</p>
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
          <label className="flex h-10 flex-1 items-center gap-2.5 rounded-lg border border-white/[0.09] bg-[#101012] px-3 transition-all duration-200 focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/10">
            <Icon name="search" size={15} className="text-zinc-600" />
            <span className="sr-only">Search DSA documents</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search all 152 documents…"
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

      <main className="container-page py-8 sm:py-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-zinc-500">
            {groups.reduce((sum, group) => sum + group.topics.length, 0)} documents across {groups.length} sections
          </p>
          <Link to="/engineering/revision" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 transition-colors hover:text-blue-400">
            <Icon name="bookmark" size={14} /> Open revision queue
          </Link>
        </div>

        <div className="space-y-3">
          {groups.map((group, groupIndex) => {
            const isOpen = query || openGroups[group.id];
            const groupCompleted = group.topics.filter((topic) => progress[topic.slug]).length;
            return (
              <section key={group.id} className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0e]">
                <button
                  type="button"
                  onClick={() => setOpenGroups((current) => ({ ...current, [group.id]: !current[group.id] }))}
                  className="flex w-full items-center gap-4 p-4 text-left transition-colors duration-200 hover:bg-white/[0.025] sm:p-5"
                  aria-expanded={Boolean(isOpen)}
                >
                  <span className="font-mono text-[10px] font-bold text-zinc-700">{String(groupIndex + 1).padStart(2, '0')}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-zinc-100">{group.title}</span>
                    <span className="mt-1 block truncate text-xs text-zinc-600">{group.description}</span>
                  </span>
                  <span className="hidden text-xs text-zinc-600 sm:block">{groupCompleted}/{group.topics.length}</span>
                  <Icon name="chevronDown" size={16} className={`text-zinc-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="border-t border-white/[0.07]">
                    {group.topics.map((topic, topicIndex) => {
                      const complete = Boolean(progress[topic.slug]);
                      return (
                        <div
                          key={topic.slug}
                          className={`group grid gap-3 p-4 transition-colors duration-200 hover:bg-white/[0.025] sm:grid-cols-[2.5rem_1fr_auto] sm:items-center sm:px-5 ${
                            topicIndex ? 'border-t border-white/[0.06]' : ''
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => toggleComplete(topic.slug)}
                            aria-label={complete ? `Mark ${topic.title} incomplete` : `Mark ${topic.title} complete`}
                            className={`grid h-8 w-8 place-items-center rounded-lg border transition-all duration-200 ${
                              complete
                                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                                : 'border-white/10 text-zinc-700 hover:border-blue-500/40 hover:text-blue-400'
                            }`}
                          >
                            <Icon name="check" size={15} />
                          </button>
                          <Link to={`/engineering/dsa/docs/${topic.slug}`} className="min-w-0">
                            <h2 className={`text-sm font-semibold transition-colors group-hover:text-blue-400 ${complete ? 'text-zinc-500' : 'text-zinc-200'}`}>
                              {topic.title}
                            </h2>
                            {topic.description && <p className="mt-1 line-clamp-1 text-xs leading-5 text-zinc-600">{topic.description}</p>}
                          </Link>
                          <Link
                            to={`/engineering/dsa/docs/${topic.slug}`}
                            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 transition-colors hover:text-blue-400"
                          >
                            Read <Icon name="chevronRight" size={14} />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {!groups.length && (
          <div className="rounded-xl border border-dashed border-white/10 py-20 text-center">
            <Icon name="search" size={24} className="mx-auto text-zinc-700" />
            <h2 className="mt-4 font-semibold text-zinc-300">No documents found</h2>
            <button type="button" onClick={() => { setQuery(''); setLevel('All'); }} className="mt-3 text-sm font-semibold text-blue-400">
              Clear filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default EngineeringDsaLibraryPage;
