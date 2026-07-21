import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import Markdown from '../components/Markdown';
import { SectionHeading, Skeleton } from '../components/ui/index.jsx';

const RAW_DIR =
  'https://raw.githubusercontent.com/Sarvesh-Shelgaonkar/Placement-Materials/main/DSA/TOPIC%20WISE%20QUE%20AND%20NOTES';
const GITHUB_DIR =
  'https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/DSA/TOPIC%20WISE%20QUE%20AND%20NOTES';

const TOPICS = [
  { id: 'array', title: 'Arrays', file: 'array.md', icon: 'grid' },
  { id: 'string', title: 'Strings', file: 'string.md', icon: 'code' },
  { id: 'linkedlist', title: 'Linked List', file: 'linkedlist.md', icon: 'layers' },
  { id: 'doublyll', title: 'Doubly Linked List', file: 'doublyll.md', icon: 'layers' },
  { id: 'stack', title: 'Stacks', file: 'stackrev.md', icon: 'layers' },
  { id: 'queue', title: 'Queues', file: 'queue.md', icon: 'layers' },
  { id: 'recursion', title: 'Recursion', file: 'recursion.md', icon: 'route' },
  { id: 'binarytree', title: 'Binary Trees', file: 'Binarytree.md', icon: 'route' },
  { id: 'dp', title: 'Dynamic Programming', file: 'DP_QUES AND THOERY.md', icon: 'bolt' },
];

// Simple in-memory cache so switching topics is instant after first load.
const cache = new Map();

const fetchTopic = async (file) => {
  if (cache.has(file)) return cache.get(file);
  const res = await fetch(`${RAW_DIR}/${encodeURIComponent(file)}`);
  if (!res.ok) throw new Error(`Could not load notes (${res.status}).`);
  const text = await res.text();
  cache.set(file, text);
  return text;
};

const TopicNotes = () => {
  const [params, setParams] = useSearchParams();
  const activeId = params.get('topic') || TOPICS[0].id;
  const active = useMemo(() => TOPICS.find((t) => t.id === activeId) || TOPICS[0], [activeId]);

  const [content, setContent] = useState('');
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    let alive = true;
    setStatus('loading');
    fetchTopic(active.file)
      .then((text) => {
        if (!alive) return;
        setContent(text);
        setStatus('ready');
      })
      .catch(() => {
        if (!alive) return;
        setStatus('error');
      });
    return () => {
      alive = false;
    };
  }, [active.file]);

  const select = (id) => setParams(id === TOPICS[0].id ? {} : { topic: id }, { replace: false });

  const githubUrl = `${GITHUB_DIR}/${encodeURIComponent(active.file)}`;

  return (
    <div className="container-page pt-24 pb-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Topic-wise notes"
          title="DSA Notes & Theory"
          description="Concept explanations, patterns, and worked problems for every core topic — read here, always in sync with the source repo."
        />
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm shrink-0">
          <Icon name="github" size={16} /> View on GitHub
        </a>
      </div>

      {/* Mobile topic picker */}
      <div className="mb-6 lg:hidden">
        <label htmlFor="topic-select" className="sr-only">
          Choose a topic
        </label>
        <select
          id="topic-select"
          value={active.id}
          onChange={(e) => select(e.target.value)}
          className="input"
        >
          {TOPICS.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
          <nav aria-label="Topics">
            <ul className="space-y-0.5">
              {TOPICS.map((t) => {
                const isActive = t.id === active.id;
                return (
                  <li key={t.id}>
                    <button
                      type="button"
                      onClick={() => select(t.id)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                        isActive
                          ? 'bg-primary/10 font-medium text-primary'
                          : 'text-fg-muted hover:bg-surface-2 hover:text-fg'
                      }`}
                    >
                      <Icon name={t.icon} size={15} className="shrink-0" />
                      <span className="truncate">{t.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <div className="min-w-0">
          <article className="card p-6 sm:p-8">
            <header className="mb-6 flex items-center gap-3 border-b border-border pb-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon name={active.icon} size={20} />
              </span>
              <h2 className="text-lg font-bold text-fg">{active.title}</h2>
            </header>

            {status === 'loading' && (
              <div className="space-y-3" aria-live="polite" aria-busy="true">
                <Skeleton className="h-7 w-1/2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="mt-6 h-32 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <span className="sr-only">Loading notes…</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-surface-2 text-fg-subtle">
                  <Icon name="info" size={26} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-fg">Couldn't load these notes</h3>
                <p className="mt-1 max-w-sm text-sm text-fg-muted">
                  Check your connection and try again, or read this topic directly on GitHub.
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      cache.delete(active.file);
                      setStatus('loading');
                      fetchTopic(active.file)
                        .then((t) => {
                          setContent(t);
                          setStatus('ready');
                        })
                        .catch(() => setStatus('error'));
                    }}
                    className="btn-primary btn-sm"
                  >
                    <Icon name="reset" size={16} /> Retry
                  </button>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm">
                    <Icon name="github" size={16} /> Open on GitHub
                  </a>
                </div>
              </div>
            )}

            {status === 'ready' && <Markdown baseUrl={RAW_DIR}>{content}</Markdown>}
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopicNotes;
