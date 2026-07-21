import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { SectionHeading, Skeleton } from '../components/ui/index.jsx';

let indexCache = null;

const fetchIndex = async () => {
  if (indexCache) return indexCache;
  const res = await fetch('/companies/index.json');
  if (!res.ok) throw new Error(`Could not load companies (${res.status}).`);
  const json = await res.json();
  indexCache = json;
  return json;
};

const MiniBar = ({ easy, medium, hard, count }) => {
  const seg = (n, cls) => (n > 0 ? <span className={`h-full ${cls}`} style={{ width: `${(n / count) * 100}%` }} /> : null);
  return (
    <div className="flex h-1.5 overflow-hidden rounded-full bg-surface-2">
      {seg(easy, 'bg-easy')}
      {seg(medium, 'bg-medium')}
      {seg(hard, 'bg-hard')}
    </div>
  );
};

const Companies = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [query, setQuery] = useState('');

  useEffect(() => {
    const prev = document.title;
    document.title = 'Company-wise Problems — MyDSA';
    return () => {
      document.title = prev;
    };
  }, []);

  useEffect(() => {
    let alive = true;
    setStatus('loading');
    fetchIndex()
      .then((json) => {
        if (!alive) return;
        setData(json);
        setStatus('ready');
      })
      .catch(() => alive && setStatus('error'));
    return () => {
      alive = false;
    };
  }, []);

  const companies = data?.companies || [];
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return companies;
    return companies.filter((c) => c.name.toLowerCase().includes(q));
  }, [companies, query]);

  return (
    <div className="container-page pt-24 pb-16">
      <SectionHeading
        eyebrow="Practice"
        title="Company-wise Problems"
        description="The most frequently asked coding problems at 240+ companies, ranked by how often they appear. Pick a company, sort by frequency, and drill the questions that matter for your target role."
      />

      {status === 'ready' && (
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-subtle">
              <Icon name="search" size={18} />
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a company (e.g. Amazon, Google, Uber)…"
              className="input pl-10"
              aria-label="Search companies"
            />
          </div>
          <p className="shrink-0 text-sm text-fg-subtle">
            {filtered.length} of {companies.length} companies
          </p>
        </div>
      )}

      {status === 'loading' && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <Skeleton key={i} className="h-28 w-full rounded-2xl" />
          ))}
        </div>
      )}

      {status === 'error' && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-surface-2 text-fg-subtle">
            <Icon name="info" size={26} />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-fg">Couldn't load companies</h3>
          <p className="mt-1 max-w-sm text-sm text-fg-muted">Check your connection and try again.</p>
          <button
            type="button"
            onClick={() => {
              indexCache = null;
              setStatus('loading');
              fetchIndex()
                .then((json) => {
                  setData(json);
                  setStatus('ready');
                })
                .catch(() => setStatus('error'));
            }}
            className="btn-primary btn-sm mt-5"
          >
            <Icon name="reset" size={16} /> Retry
          </button>
        </div>
      )}

      {status === 'ready' && filtered.length === 0 && (
        <div className="rounded-2xl border border-border bg-surface p-10 text-center">
          <p className="text-sm text-fg-muted">No companies match “{query}”.</p>
        </div>
      )}

      {status === 'ready' && filtered.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <Link
              key={c.slug}
              to={`/companies/${c.slug}`}
              className="card group flex flex-col p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                    {c.name.slice(0, 2).toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <h2 className="truncate font-semibold text-fg group-hover:text-primary">{c.name}</h2>
                    <p className="text-xs text-fg-subtle">{c.count} problems</p>
                  </div>
                </div>
                <Icon name="chevronRight" size={18} className="mt-1 shrink-0 text-fg-subtle group-hover:text-primary" />
              </div>
              <div className="mt-4">
                <MiniBar easy={c.easy} medium={c.medium} hard={c.hard} count={c.count} />
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-0.5 text-2xs text-fg-subtle">
                  <span>Easy {c.easy}</span>
                  <span>Medium {c.medium}</span>
                  <span>Hard {c.hard}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <p className="mt-10 text-xs text-fg-subtle">
        Problem lists compiled from public LeetCode company tags. Frequency and acceptance rates are
        indicative and links open directly on LeetCode.
      </p>
    </div>
  );
};

export default Companies;
