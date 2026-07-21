import React, { useEffect, useMemo, useState } from 'react';
import Icon from '../components/ui/Icon';
import { SectionHeading, Skeleton } from '../components/ui/index.jsx';

// Reads a manifest of PDFs placed in the public/library/ folder.
// Only add materials you own or have the right to distribute.
const MANIFEST_URL = '/library/manifest.json';

const Library = () => {
  const [status, setStatus] = useState('loading'); // loading | ready | empty | error
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(null);

  useEffect(() => {
    const prev = document.title;
    document.title = 'My Library — MyDSA';
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
        const list = Array.isArray(json) ? json : json.items || [];
        setItems(list);
        setStatus(list.length ? 'ready' : 'empty');
        setActive(list[0] || null);
      })
      .catch(() => alive && setStatus('empty'));
    return () => {
      alive = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (it) =>
        (it.title || '').toLowerCase().includes(q) ||
        (it.author || '').toLowerCase().includes(q) ||
        (it.category || '').toLowerCase().includes(q)
    );
  }, [items, query]);

  const fileUrl = (it) => `/library/${it.file}`;

  return (
    <div className="container-page pt-24 pb-16">
      <SectionHeading
        eyebrow="Reading room"
        title="My Library"
        description="Read study PDFs directly inside MyDSA. Add files to public/library/ with a manifest. Only include materials you own or have the right to distribute."
      />

      {status === 'loading' && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-24 w-full rounded-2xl" />
          ))}
        </div>
      )}

      {status === 'empty' && (
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-8">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon name="book" size={20} />
            </span>
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-fg">Set up your library</h2>
              <p className="mt-1 text-sm text-fg-muted">
                Add PDFs to the <code className="rounded bg-surface-2 px-1.5 py-0.5 text-xs">public/library/</code>{' '}
                folder and list them in a manifest. Only add materials you own or have the right to distribute.
              </p>
              <ol className="mt-4 space-y-2 text-sm text-fg-muted">
                <li className="flex gap-2">
                  <span className="font-semibold text-fg">1.</span>
                  Create the folder <code className="rounded bg-surface-2 px-1.5 py-0.5 text-xs">public/library/</code> and drop your PDFs into it.
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-fg">2.</span>
                  Add a <code className="rounded bg-surface-2 px-1.5 py-0.5 text-xs">manifest.json</code> in that folder listing them:
                </li>
              </ol>
              <pre className="mt-3 overflow-x-auto rounded-xl border border-border bg-surface-2 p-4 text-xs text-fg">
{`[
  {
    "title": "Dynamic Programming Notes",
    "author": "Aditya Verma",
    "category": "DP",
    "file": "dp-notes.pdf"
  },
  {
    "title": "Striver SDE Sheet Notes",
    "author": "TakeUForward",
    "category": "Sheets",
    "file": "striver-sde.pdf"
  }
]`}
              </pre>
              <p className="mt-4 text-sm text-fg-muted">
                Refresh this page and your PDFs will open right here inside MyDSA.
              </p>
            </div>
          </div>
        </div>
      )}

      {status === 'ready' && (
        <>
          <div className="mb-6 max-w-md">
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-subtle">
                <Icon name="search" size={18} />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search your PDFs…"
                className="input pl-10"
                aria-label="Search library"
              />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            {/* List */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <ul className="space-y-1.5">
                {filtered.map((it) => {
                  const isActive = active && active.file === it.file;
                  return (
                    <li key={it.file}>
                      <button
                        type="button"
                        onClick={() => setActive(it)}
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
                          <span className="block truncate text-sm font-semibold text-fg">{it.title}</span>
                          <span className="block truncate text-xs text-fg-subtle">
                            {[it.author, it.category].filter(Boolean).join(' · ')}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
                {filtered.length === 0 && (
                  <li className="rounded-xl border border-border p-4 text-center text-sm text-fg-muted">
                    No PDFs match “{query}”.
                  </li>
                )}
              </ul>
            </aside>

            {/* Viewer */}
            <div className="min-w-0">
              {active ? (
                <div className="card overflow-hidden p-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3">
                    <div className="min-w-0">
                      <h2 className="truncate font-semibold text-fg">{active.title}</h2>
                      {active.author && <p className="truncate text-xs text-fg-subtle">{active.author}</p>}
                    </div>
                    <a href={fileUrl(active)} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm shrink-0">
                      <Icon name="external" size={15} /> Open in tab
                    </a>
                  </div>
                  <object data={fileUrl(active)} type="application/pdf" className="h-[75vh] w-full">
                    <div className="flex flex-col items-center justify-center gap-3 p-10 text-center">
                      <p className="text-sm text-fg-muted">
                        Your browser can't preview this PDF inline.
                      </p>
                      <a href={fileUrl(active)} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
                        <Icon name="external" size={15} /> Open {active.file}
                      </a>
                    </div>
                  </object>
                </div>
              ) : (
                <div className="card grid h-[60vh] place-items-center text-sm text-fg-muted">
                  Select a PDF to read.
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
