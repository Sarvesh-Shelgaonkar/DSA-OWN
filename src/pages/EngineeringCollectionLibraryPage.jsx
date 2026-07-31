import React, { useEffect, useMemo, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { ENGINEERING_TRACKS } from '../data/engineeringTracks';

const PROGRESS_KEY = 'mydsa-engineering-library-progress-v1';

const readProgress = () => {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
  } catch {
    return {};
  }
};

const accentClasses = {
  'system-design': 'border-violet-500/25 bg-violet-500/10 text-violet-400',
  ai: 'border-cyan-500/25 bg-cyan-500/10 text-cyan-400',
  devops: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-400',
  interview: 'border-amber-500/25 bg-amber-500/10 text-amber-400',
};

const StructuredCurriculum = ({ collection, query, progress, toggleComplete }) => {
  const normalized = query.trim().toLowerCase();
  const topicSlug = (topic) => topic.slug || topic.id;
  const categorySlug = (category) => category.slug || category.id;
  const categoryGroups = (category) => category.modules || category.categories || [];
  const categoryTopics = (category) => [
    ...(category.topics || []),
    ...categoryGroups(category).flatMap((group) => group.topics || []),
  ];
  const documentMap = new Map(collection.documents.map((document) => [document.slug, document]));
  const outlineSlugs = new Set(
    (collection.hierarchy || []).flatMap((category) => categoryTopics(category).map(topicSlug)),
  );
  const supplementalDocuments = collection.documents.filter((document) => !outlineSlugs.has(document.slug));
  const supplementalCategory = supplementalDocuments.length ? {
    id: 'published-foundations',
    title: 'Published Fundamentals',
    description: 'Additional complete notes published in this subject library.',
    topics: supplementalDocuments,
    modules: [],
  } : null;
  const preferredOrders = {
    cn: [
      'networking-fundamentals',
      'ip-addressing-routing',
      'transport-layer',
      'tcp-deep-dive',
      'dns',
      'http-https',
      'modern-web-communication',
      'networking-for-system-design',
    ],
    dbms: [
      'database-fundamentals',
      'relational-database-design',
      'normalization',
      'sql-fundamentals',
      'sql-filtering-aggregation',
      'sql-joins',
      'advanced-sql',
      'transactions-concurrency',
      'indexing',
      'sql-optimization',
      'sql-interview-patterns',
      'database-scaling',
    ],
  };
  const orderedHierarchy = [...(collection.hierarchy || [])].sort((left, right) => {
    if (collection.id === 'git') {
      const leftNumber = Number.parseInt(left.title, 10);
      const rightNumber = Number.parseInt(right.title, 10);
      return (Number.isNaN(leftNumber) ? 999 : leftNumber) - (Number.isNaN(rightNumber) ? 999 : rightNumber);
    }
    const order = preferredOrders[collection.id];
    if (!order) return 0;
    return order.indexOf(categorySlug(left)) - order.indexOf(categorySlug(right));
  });
  const navigationCategories = [
    ...(supplementalCategory ? [supplementalCategory] : []),
    ...orderedHierarchy,
  ];
  const preferredCategory = categorySlug(navigationCategories[0] || {});
  const [activeCategory, setActiveCategory] = useState(preferredCategory);

  useEffect(() => {
    setActiveCategory(preferredCategory);
  }, [collection.id, preferredCategory]);

  const decorateTopics = (topics = []) =>
    topics.map((topic) => ({ ...topic, slug: topicSlug(topic), document: documentMap.get(topicSlug(topic)) }));
  const topicMatches = (topic) =>
    !normalized || `${topic.title} ${topic.document?.description || ''}`.toLowerCase().includes(normalized);

  const fullCategories = navigationCategories
    .map((category) => ({
      ...category,
      slug: categorySlug(category),
      totalTopics: categoryTopics(category).length,
      availableTotal: categoryTopics(category).filter((topic) => documentMap.has(topicSlug(topic))).length,
      topics: decorateTopics(category.topics).filter(topicMatches),
      modules: categoryGroups(category)
        .map((module) => ({
          ...module,
          slug: module.slug || module.id || module.title,
          totalTopics: module.topics?.length || 0,
          availableTotal: (module.topics || []).filter((topic) => documentMap.has(topicSlug(topic))).length,
          topics: decorateTopics(module.topics).filter(topicMatches),
        }))
        .filter((module) => module.topics.length),
    }))
    .filter((category) => category.topics.length || category.modules.length);

  const categories = normalized
    ? fullCategories
    : fullCategories.filter((category) => category.slug === activeCategory);
  const isAi = collection.id === 'ai';
  const isDevops = collection.id === 'devops';
  const accentText = isAi ? 'text-cyan-400' : isDevops ? 'text-emerald-400' : 'text-amber-400';
  const accentBorder = isAi
    ? 'border-cyan-500/20 bg-cyan-500/[0.07]'
    : isDevops
      ? 'border-emerald-500/20 bg-emerald-500/[0.07]'
      : 'border-amber-500/20 bg-amber-500/[0.07]';
  const hoverAccent = isAi
    ? 'hover:border-cyan-500/40 hover:text-cyan-400'
    : isDevops
      ? 'hover:border-emerald-500/40 hover:text-emerald-400'
      : 'hover:border-amber-500/40 hover:text-amber-400';
  const groupHoverAccent = isAi ? 'group-hover:text-cyan-400' : isDevops ? 'group-hover:text-emerald-400' : 'group-hover:text-amber-400';
  const linkHoverAccent = isAi ? 'hover:text-cyan-400' : isDevops ? 'hover:text-emerald-400' : 'hover:text-amber-400';

  const topicRow = (topic, index) => {
    const hasDocument = Boolean(topic.document);
    const key = `${collection.id}:${topic.slug}`;
    const complete = Boolean(progress[key]);
    return (
      <div
        key={topic.slug}
        className={`group grid gap-3 p-4 transition-colors duration-200 sm:grid-cols-[2.5rem_1fr_auto] sm:items-center sm:px-5 ${
          index ? 'border-t border-white/[0.06]' : ''
        } ${hasDocument ? 'hover:bg-white/[0.025]' : 'bg-black/10'}`}
      >
        {hasDocument ? (
          <button
            type="button"
            onClick={() => toggleComplete(collection.id, topic.slug)}
            aria-label={complete ? `Mark ${topic.title} incomplete` : `Mark ${topic.title} complete`}
            className={`grid h-8 w-8 place-items-center rounded-lg border transition-all duration-200 ${
              complete
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                : `border-white/10 text-zinc-700 ${hoverAccent}`
            }`}
          >
            <Icon name="check" size={15} />
          </button>
        ) : (
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/[0.07] text-zinc-800">
            <Icon name="lock" size={13} />
          </span>
        )}
        {hasDocument ? (
          <Link to={`/engineering/library/${collection.id}/${topic.slug}`} className="min-w-0">
            <h4 className={`text-sm font-semibold transition-colors ${groupHoverAccent} ${complete ? 'text-zinc-500' : 'text-zinc-200'}`}>{topic.title}</h4>
            {topic.document.description && <p className="mt-1 line-clamp-1 text-xs leading-5 text-zinc-600">{topic.document.description}</p>}
          </Link>
        ) : (
          <div className="min-w-0">
            <h4 className="text-sm font-medium text-zinc-600">{topic.title}</h4>
            <p className="mt-1 text-[11px] text-zinc-800">Listed in the source curriculum; full note not published yet.</p>
          </div>
        )}
        {hasDocument ? (
          <Link to={`/engineering/library/${collection.id}/${topic.slug}`} className={`inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 transition-colors ${linkHoverAccent}`}>
            Read <Icon name="chevronRight" size={14} />
          </Link>
        ) : (
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-800">Outline</span>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-10">
      <section className="rounded-xl border border-white/[0.08] bg-[#0c0c0e] p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className={`text-[10px] font-bold uppercase tracking-[0.15em] ${accentText}`}>Complete source curriculum</p>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
              {outlineSlugs.size.toLocaleString()} topics · {collection.documents.length.toLocaleString()} full notes
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-500">
              Every source category, module, and topic is shown. Readable rows have complete notes; outline rows are topics whose body has not been published by the source.
            </p>
          </div>
          <span className="shrink-0 rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-zinc-500">
            {navigationCategories.length} categories
          </span>
        </div>
        <div className="mt-5 flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navigationCategories.map((category, index) => {
            const topics = categoryTopics(category);
            const slug = categorySlug(category);
            const available = topics.filter((topic) => documentMap.has(topicSlug(topic))).length;
            return (
              <button
                key={slug}
                type="button"
                onClick={() => setActiveCategory(slug)}
                className={`shrink-0 rounded-lg border px-3 py-2 text-left transition-all duration-200 ${
                  activeCategory === slug && !normalized
                    ? `${accentBorder} ${accentText}`
                    : 'border-white/[0.07] text-zinc-600 hover:border-white/[0.13] hover:text-zinc-300'
                }`}
              >
                <span className="block text-[10px] font-bold uppercase tracking-[0.1em]">{String(index + 1).padStart(2, '0')} · {category.title}</span>
                <span className="mt-0.5 block text-[10px] opacity-70">{available}/{topics.length} notes</span>
              </button>
            );
          })}
        </div>
      </section>

      {categories.map((category, categoryIndex) => (
        <section key={category.slug} id={category.slug} className="scroll-mt-36">
          <div className="mb-5 grid gap-3 sm:grid-cols-[auto_1fr_auto] sm:items-start">
            <span className={`grid h-9 w-9 place-items-center rounded-lg border font-mono text-xs font-bold ${accentBorder} ${accentText}`}>
              {String(navigationCategories.findIndex((item) => categorySlug(item) === category.slug) + 1 || categoryIndex + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-600">{category.groupLabel || collection.title}</p>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">{category.title}</h2>
              {category.description && <p className="mt-1.5 max-w-3xl text-sm leading-6 text-zinc-500">{category.description}</p>}
            </div>
            <span className="text-xs text-zinc-600">{category.availableTotal}/{category.totalTopics} full notes</span>
          </div>

          <div className="space-y-4">
            {category.topics.length > 0 && (
              <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0e]">
                <div className="border-b border-white/[0.07] bg-white/[0.02] px-5 py-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">Core topics</h3>
                    <span className="text-[10px] text-zinc-700">{category.topics.filter((topic) => topic.document).length}/{category.topics.length} notes</span>
                  </div>
                </div>
                {category.topics.map(topicRow)}
              </div>
            )}
            {category.modules.map((module) => (
              <div key={module.slug} className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0e]">
                <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] bg-white/[0.02] px-5 py-3">
                  <h3 className="text-sm font-semibold text-zinc-300">{module.title}</h3>
                  <span className="text-[10px] font-semibold text-zinc-700">{module.availableTotal}/{module.totalTopics} notes</span>
                </div>
                {module.topics.map(topicRow)}
              </div>
            ))}
          </div>
        </section>
      ))}
      {!categories.length && (
        <div className="rounded-xl border border-dashed border-white/10 py-20 text-center text-sm text-zinc-500">
          No curriculum topics match this search.
        </div>
      )}
    </div>
  );
};

const EngineeringCollectionLibraryPage = ({ trackId }) => {
  const track = ENGINEERING_TRACKS[trackId];
  const [collections, setCollections] = useState(null);
  const [query, setQuery] = useState('');
  const [activeCollection, setActiveCollection] = useState('all');
  const [progress, setProgress] = useState(readProgress);
  const [visibleCounts, setVisibleCounts] = useState({});

  useEffect(() => {
    setActiveCollection(trackId === 'interview' ? 'os' : 'all');
    fetch('/engineering/library/index.json')
      .then((response) => response.json())
      .then(async (overview) => {
        const matching = overview.collections.filter((item) => item.trackId === trackId);
        const full = await Promise.all(
          matching.map((item) =>
            fetch(`/engineering/library/${item.id}/index.json`).then((response) => response.json()),
          ),
        );
        setCollections(full);
      })
      .catch(() => setCollections([]));
  }, [trackId]);

  const filtered = useMemo(() => {
    if (!collections) return [];
    const normalized = query.trim().toLowerCase();
    return collections
      .filter((collection) => activeCollection === 'all' || collection.id === activeCollection)
      .map((collection) => ({
        ...collection,
        documents: collection.documents.filter((document) =>
          !normalized || `${document.title} ${document.description}`.toLowerCase().includes(normalized),
        ),
      }))
      .filter((collection) => collection.documents.length);
  }, [activeCollection, collections, query]);

  if (!track) return <Navigate to="/engineering" replace />;
  if (!collections) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#050505] pt-16 text-zinc-500">
        <span className="flex items-center gap-3 text-sm">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-800 border-t-blue-500" />
          Loading complete curriculum…
        </span>
      </div>
    );
  }

  const allDocuments = collections.flatMap((collection) =>
    collection.documents.map((document) => ({ ...document, collectionId: collection.id })),
  );
  const completed = allDocuments.filter((document) => progress[`${document.collectionId}:${document.slug}`]).length;
  const completion = allDocuments.length ? Math.round((completed / allDocuments.length) * 100) : 0;
  const accent = accentClasses[trackId] || accentClasses['system-design'];
  const structuredCollection = ['ai', 'devops'].includes(trackId)
    ? collections[0]
    : trackId === 'interview'
      ? collections.find((collection) => collection.id === activeCollection) || collections[0]
      : null;

  const toggleComplete = (collectionId, slug) => {
    const key = `${collectionId}:${slug}`;
    setProgress((current) => {
      const next = { ...current, [key]: !current[key] };
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
              <span className={`inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] ${accent}`}>
                <Icon name={track.icon} size={14} /> {track.eyebrow}
              </span>
              <h1 className="mt-5 text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">{track.title}</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">{track.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {collections.map((collection) => (
                  <span key={collection.id} className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-xs text-zinc-500">
                    {collection.title} · {collection.documentCount}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4 shadow-[0_16px_50px_rgba(0,0,0,0.28)]">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600">Your progress</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight text-white">{completion}%</p>
                </div>
                <p className="text-xs text-zinc-500">{completed}/{allDocuments.length} docs</p>
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
          <label className="flex h-10 flex-1 items-center gap-2.5 rounded-lg border border-white/[0.09] bg-[#101012] px-3 transition-all focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/10">
            <Icon name="search" size={15} className="text-zinc-600" />
            <span className="sr-only">Search curriculum</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={structuredCollection ? 'Search the complete curriculum…' : `Search ${allDocuments.length} documents…`}
              className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
            />
          </label>
          <div className="flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {(trackId === 'interview' ? collections : [{ id: 'all', title: 'All' }, ...collections]).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveCollection(item.id)}
                className={`shrink-0 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 ${
                  activeCollection === item.id ? 'bg-white text-zinc-950' : 'text-zinc-500 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container-page py-8 sm:py-12">
        {structuredCollection ? (
          <StructuredCurriculum
            collection={structuredCollection}
            query={query}
            progress={progress}
            toggleComplete={toggleComplete}
          />
        ) : <div className="space-y-10">
          {filtered.map((collection, collectionIndex) => (
            <section key={collection.id}>
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] font-bold text-zinc-700">{String(collectionIndex + 1).padStart(2, '0')}</p>
                  <h2 className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">{collection.title}</h2>
                  <p className="mt-1.5 text-sm text-zinc-500">{collection.description}</p>
                </div>
                <span className="hidden text-xs text-zinc-600 sm:block">{collection.documents.length} docs</span>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0e]">
                {collection.documents.slice(0, visibleCounts[collection.id] || 80).map((document, index) => {
                  const key = `${collection.id}:${document.slug}`;
                  const complete = Boolean(progress[key]);
                  return (
                    <div
                      key={document.slug}
                      className={`group grid gap-3 p-4 transition-colors duration-200 hover:bg-white/[0.025] sm:grid-cols-[2.5rem_1fr_auto] sm:items-center sm:px-5 ${
                        index ? 'border-t border-white/[0.06]' : ''
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleComplete(collection.id, document.slug)}
                        aria-label={complete ? `Mark ${document.title} incomplete` : `Mark ${document.title} complete`}
                        className={`grid h-8 w-8 place-items-center rounded-lg border transition-all duration-200 ${
                          complete
                            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                            : 'border-white/10 text-zinc-700 hover:border-blue-500/40 hover:text-blue-400'
                        }`}
                      >
                        <Icon name="check" size={15} />
                      </button>
                      <Link to={`/engineering/library/${collection.id}/${document.slug}`} className="min-w-0">
                        <h3 className={`text-sm font-semibold transition-colors group-hover:text-blue-400 ${complete ? 'text-zinc-500' : 'text-zinc-200'}`}>
                          {document.title}
                        </h3>
                        {document.description && <p className="mt-1 line-clamp-1 text-xs leading-5 text-zinc-600">{document.description}</p>}
                      </Link>
                      <Link to={`/engineering/library/${collection.id}/${document.slug}`} className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 transition-colors hover:text-blue-400">
                        Read <Icon name="chevronRight" size={14} />
                      </Link>
                    </div>
                  );
                })}
                {collection.documents.length > (visibleCounts[collection.id] || 80) && (
                  <div className="border-t border-white/[0.06] p-4 text-center">
                    <button
                      type="button"
                      onClick={() => setVisibleCounts((current) => ({
                        ...current,
                        [collection.id]: (current[collection.id] || 80) + 80,
                      }))}
                      className="rounded-lg border border-white/[0.09] px-4 py-2 text-xs font-semibold text-zinc-400 transition-all duration-200 hover:border-white/[0.16] hover:bg-white/[0.04] hover:text-white"
                    >
                      Load 80 more · {collection.documents.length - (visibleCounts[collection.id] || 80)} remaining
                    </button>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>}
        {!structuredCollection && !filtered.length && (
          <div className="rounded-xl border border-dashed border-white/10 py-20 text-center text-sm text-zinc-500">
            No documents found. <button type="button" onClick={() => { setQuery(''); setActiveCollection('all'); }} className="font-semibold text-blue-400">Clear filters</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default EngineeringCollectionLibraryPage;
