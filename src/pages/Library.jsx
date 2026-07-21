import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { SectionHeading, Skeleton } from '../components/ui/index.jsx';

const MANIFEST_URL = '/library/manifest.json';

const SECTION_ICON = {
  courses: 'book',
  sheets: 'route',
  revision: 'reset',
  'dynamic-programming': 'bolt',
  graphs: 'route',
  trees: 'layers',
  'recursion-and-backtracking': 'sparkles',
  'stacks-and-queues': 'layers',
  'bit-manipulation': 'grid',
};

const fileUrl = (file) =>
  `/library/${file
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')}`;

const Library = () => {
  const [params, setParams] = useSearchParams();
  const [status, setStatus] = useState('loading');
  const [sections, setSections] = useState([]);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [sectionFilter, setSectionFilter] = useState(params.get('section') || 'all');
  const [active, setActive] = useState(null);

  useEffect(() => {
    const prev = document.title;
    document.title = 'Study Notes Library — MyDSA';
    return () => {
      document.title = prev;
    };
  }, []);

  useEffect(() => {
    let alive = true;
    fetch(MANIFEST_URL)
      .then((res) => {
        if (!res.ok) throw new Error('no manifest');
        return res.json();
      })
      .then((json) => {
        if (!alive) return;
        const list = (json.items || []).slice().sort((a, b) => {
          const secA = json.sections?.find((s) => s.id === a.section)?.order ?? 99;
          const secB = json.sections?.find((s) => s.id === b.section)?.order ?? 99;
          if (secA !== secB) return secA - secB;
          return (a.order ?? 0) - (b.order ?? 0);
        });
        setSections(json.sections || []);
        setItems(list);
        setStatus(list.length ? 'ready' : 'empty');

        const fileParam = params.get('file');
        const picked = list.find((it) => it.file === fileParam) || list[0] || null;
        setActive(picked);
      })
      .catch(() => alive && setStatus('empty'));
    return () => {
      alive = false;
    };
  }, []);

  const sectionTitle = (id) => sections.find((s) => s.id === id)?.title || id;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((it) => {
      if (sectionFilter !== 'all' && it.section !== sectionFilter) return false;
      if (!q) return true;
      const hay = [it.title, it.author, sectionTitle(it.section)].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }, [items, query, sectionFilter, sections]);

  const grouped = useMemo(() => {
    const order = new Map(sections.map((s) => [s.id, s.order ?? 99]));
    const groups = new Map();
    filtered.forEach((item) => {
      const key = item.section || 'other';
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
    });
    return Array.from(groups, ([id, groupItems]) => ({
      id,
      title: sectionTitle(id),
      icon: SECTION_ICON[id] || 'book',
      items: groupItems.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
    })).sort((a, b) => (order.get(a.id) ?? 99) - (order.get(b.id) ?? 99));
  }, [filtered, sections]);

  const selectItem = (item) => {
    setActive(item);
    setParams(
      { section: item.section, file: item.file },
      { replace: true }
    );
  };

  const selectSection = (id) => {
    setSectionFilter(id);
    const next = new URLSearchParams(params);
    if (id === 'all') next.delete('section');
    else next.set('section', id);
    setParams(next, { replace: true });
  };

  return (
    <div className="container-page pt-24 pb-16">
      <SectionHeading
        eyebrow="Notes"
        title="Study Notes Library"
        description="Topic-wise PDF notes organized by section — practice sheets, DP, graphs, trees, recursion, stacks & queues, and bit manipulation."
      />

      {status === 'loading' && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-24 w-full rounded-2xl" />
          ))}
        </div>
      )}

      {status === 'empty' && (
        <div className="rounded-2xl border border-border bg-surface p-8 text-center text-sm text-fg-muted">
          No PDFs found in the library yet.
        </div>
      )}

      {status === 'ready' && (
        <>
          {/* Section chips */}
          <div className="mb-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => selectSection('all')}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                sectionFilter === 'all'
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-fg-muted hover:bg-surface-2'
              }`}
            >
              All ({items.length})
            </button>
            {sections.map((sec) => {
              const count = items.filter((it) => it.section === sec.id).length;
              if (!count) return null;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => selectSection(sec.id)}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                    sectionFilter === sec.id
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border text-fg-muted hover:bg-surface-2'
                  }`}
                >
                  {sec.title} ({count})
                </button>
              );
            })}
          </div>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-subtle">
                <Icon name="search" size={18} />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search notes by title or author…"
                className="input pl-10"
                aria-label="Search library"
              />
            </div>
            <span className="shrink-0 text-sm text-fg-subtle">{filtered.length} PDFs</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <aside className="max-h-[75vh] overflow-y-auto pr-1 lg:sticky lg:top-24 lg:self-start">
              <div className="space-y-6">
                {grouped.map((group) => (
                  <section key={group.id} aria-labelledby={`lib-sec-${group.id}`}>
                    <h2
                      id={`lib-sec-${group.id}`}
                      className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-fg-subtle"
                    >
                      <Icon name={group.icon} size={14} />
                      {group.title}
                    </h2>
                    <ul className="space-y-1.5">
                      {group.items.map((it) => {
                        const isActive = active?.file === it.file;
                        return (
                          <li key={it.file}>
                            <button
                              type="button"
                              onClick={() => selectItem(it)}
                              aria-current={isActive ? 'true' : undefined}
                              className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-colors ${
                                isActive
                                  ? 'border-primary/40 bg-primary/5'
                                  : 'border-border hover:bg-surface-2'
                              }`}
                            >
                              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                                <Icon name="book" size={16} />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-semibold leading-snug text-fg">
                                  {it.title}
                                </span>
                                <span className="mt-0.5 block truncate text-xs text-fg-subtle">
                                  {it.author}
                                </span>
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                ))}
                {filtered.length === 0 && (
                  <div className="rounded-xl border border-border p-4 text-center text-sm text-fg-muted">
                    No PDFs match your search.
                  </div>
                )}
              </div>
            </aside>

            <div className="min-w-0">
              {active ? (
                <div className="card overflow-hidden p-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3">
                    <div className="min-w-0">
                      <span className="badge mb-1 bg-surface-2 text-fg-muted">
                        {sectionTitle(active.section)}
                      </span>
                      <h2 className="truncate font-semibold text-fg">{active.title}</h2>
                      {active.author && (
                        <p className="truncate text-xs text-fg-subtle">{active.author}</p>
                      )}
                    </div>
                    <a
                      href={fileUrl(active.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary btn-sm shrink-0"
                    >
                      <Icon name="external" size={15} /> Open in tab
                    </a>
                  </div>
                  <object
                    data={fileUrl(active.file)}
                    type="application/pdf"
                    className="h-[75vh] w-full"
                    aria-label={active.title}
                  >
                    <div className="flex flex-col items-center justify-center gap-3 p-10 text-center">
                      <p className="text-sm text-fg-muted">
                        Your browser can&apos;t preview this PDF inline.
                      </p>
                      <a
                        href={fileUrl(active.file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary btn-sm"
                      >
                        <Icon name="external" size={15} /> Open PDF
                      </a>
                    </div>
                  </object>
                </div>
              ) : (
                <div className="card grid h-[60vh] place-items-center text-sm text-fg-muted">
                  Select a PDF from the left to start reading.
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Library;
