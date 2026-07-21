import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { SectionHeading, Skeleton } from '../components/ui/index.jsx';

const cache = new Map();

const fetchCompany = async (slug) => {
  if (cache.has(slug)) return cache.get(slug);
  const res = await fetch(`/companies/${slug}.json`);
  if (!res.ok) throw new Error(`Could not load company (${res.status}).`);
  const json = await res.json();
  cache.set(slug, json);
  return json;
};

const DIFF_CLASS = {
  Easy: 'text-easy bg-easy/10',
  Medium: 'text-medium bg-medium/10',
  Hard: 'text-hard bg-hard/10',
};

const WINDOW_LABEL = { d30: '30 days', m3: '3 months', m6: '6 months' };

const CompanyDetail = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading');
  const [query, setQuery] = useState('');
  const [diff, setDiff] = useState('All');
  const [sort, setSort] = useState('frequency'); // frequency | acceptance | title

  useEffect(() => {
    let alive = true;
    setStatus('loading');
    setQuery('');
    setDiff('All');
    fetchCompany(slug)
      .then((json) => {
        if (!alive) return;
        setData(json);
        setStatus('ready');
        document.title = `${json.name} — Company Problems — MyDSA`;
      })
      .catch(() => alive && setStatus('error'));
    return () => {
      alive = false;
    };
  }, [slug]);

  const problems = data?.problems || [];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = problems.filter((p) => {
      if (diff !== 'All' && p.d !== diff) return false;
      if (!q) return true;
      return p.t.toLowerCase().includes(q) || p.tp.some((t) => t.toLowerCase().includes(q));
    });
    list = [...list];
    if (sort === 'frequency') list.sort((a, b) => b.f - a.f);
    else if (sort === 'acceptance') list.sort((a, b) => b.a - a.a);
    else list.sort((a, b) => a.t.localeCompare(b.t));
    return list;
  }, [problems, query, diff, sort]);

  return (
    <div className="container-page pt-24 pb-16">
      <Link to="/companies" className="mb-4 inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg">
        <Icon name="chevronLeft" size={16} /> All companies
      </Link>

      {status === 'loading' && (
        <div className="space-y-4">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-12 w-full" />
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-14 w-full rounded-xl" />
          ))}
        </div>
      )}

      {status === 'error' && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-surface-2 text-fg-subtle">
            <Icon name="info" size={26} />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-fg">Couldn't load this company</h3>
          <Link to="/companies" className="btn-primary btn-sm mt-5">
            Back to companies
          </Link>
        </div>
      )}

      {status === 'ready' && (
        <>
          <SectionHeading
            eyebrow="Company-wise"
            title={data.name}
            description={`${problems.length} frequently asked problems, ranked by how often they show up in ${data.name} interviews.`}
          />

          {/* Controls */}
          <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-subtle">
                <Icon name="search" size={18} />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search problems or topics…"
                className="input pl-10"
                aria-label="Search problems"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex rounded-xl border border-border bg-surface p-0.5">
                {['All', 'Easy', 'Medium', 'Hard'].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDiff(d)}
                    className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                      diff === d ? 'bg-primary text-primary-fg' : 'text-fg-muted hover:text-fg'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>

              <label className="sr-only" htmlFor="sort-select">
                Sort by
              </label>
              <select
                id="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="input w-auto"
              >
                <option value="frequency">Most asked</option>
                <option value="acceptance">Acceptance rate</option>
                <option value="title">A–Z</option>
              </select>
            </div>
          </div>

          <p className="mb-3 text-sm text-fg-subtle">{filtered.length} problems</p>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-border bg-surface p-10 text-center text-sm text-fg-muted">
              No problems match your filters.
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-border">
              <ul className="divide-y divide-border">
                {filtered.map((p, i) => (
                  <li key={p.l} className="flex items-center gap-3 bg-surface px-4 py-3 hover:bg-surface-2">
                    <span className="w-6 shrink-0 text-right text-xs font-medium text-fg-subtle">{i + 1}</span>
                    <div className="min-w-0 flex-1">
                      <a
                        href={p.l}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-medium text-fg hover:text-primary"
                      >
                        <span className="truncate">{p.t}</span>
                        <Icon name="external" size={14} className="shrink-0 text-fg-subtle" />
                      </a>
                      {p.tp.length > 0 && (
                        <p className="mt-0.5 truncate text-xs text-fg-subtle">{p.tp.join(' · ')}</p>
                      )}
                    </div>
                    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                      {p.w.length > 0 && (
                        <span
                          className="hidden rounded-md bg-primary/10 px-1.5 py-0.5 text-2xs font-medium text-primary sm:inline"
                          title={`Asked in the last ${WINDOW_LABEL[p.w[0]]}`}
                        >
                          Recent
                        </span>
                      )}
                      <span className="hidden w-20 text-right text-xs text-fg-subtle md:inline" title="Acceptance rate">
                        {p.a}% acc
                      </span>
                      <span className="hidden w-16 text-right text-xs text-fg-subtle sm:inline" title="Frequency score">
                        {p.f}
                      </span>
                      <span
                        className={`w-16 shrink-0 rounded-md px-2 py-0.5 text-center text-2xs font-semibold ${DIFF_CLASS[p.d]}`}
                      >
                        {p.d}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-8 text-xs text-fg-subtle">
            Compiled from public LeetCode company tags. Frequency and acceptance are indicative;
            links open on LeetCode. To track solved/bookmarked state, mirror these in the{' '}
            <Link to="/problems" className="text-primary hover:underline">
              MyDSA problem set
            </Link>
            .
          </p>
        </>
      )}
    </div>
  );
};

export default CompanyDetail;
