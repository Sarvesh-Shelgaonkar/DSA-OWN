import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { SectionHeading } from '../components/ui/index.jsx';
import { resourceGroups, resourceCredits } from '../data/resources';

const ResourceCard = ({ item }) => {
  const inApp = Boolean(item.to);
  const Wrapper = inApp ? Link : 'a';
  const linkProps = inApp
    ? { to: item.to }
    : { href: item.href, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <Wrapper
      {...linkProps}
      className="card group flex flex-col p-5 transition-colors hover:border-primary/40"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-semibold text-fg group-hover:text-primary">{item.name}</h3>
          <p className="mt-0.5 text-xs text-fg-subtle">by {item.author}</p>
        </div>
        <Icon
          name={inApp ? 'arrowRight' : 'external'}
          size={16}
          className="mt-1 shrink-0 text-fg-subtle group-hover:text-primary"
        />
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">{item.desc}</p>
      {item.tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-border bg-surface-2/60 px-2 py-0.5 text-2xs font-medium text-fg-muted"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

const Resources = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const prev = document.title;
    document.title = 'Study Resources — MyDSA';
    return () => {
      document.title = prev;
    };
  }, []);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return resourceGroups;
    return resourceGroups
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (it) =>
            it.name.toLowerCase().includes(q) ||
            it.author.toLowerCase().includes(q) ||
            it.desc.toLowerCase().includes(q) ||
            (it.tags || []).some((t) => t.toLowerCase().includes(q))
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [query]);

  return (
    <div className="container-page pt-24 pb-16">
      <SectionHeading
        eyebrow="Learn"
        title="Study Resources"
        description="A curated library of the best DSA sheets, topic notes, and interview prep — organized by goal. Every external resource credits its original creator and links to their official source."
      />

      <div className="mb-8 max-w-md">
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-subtle">
            <Icon name="search" size={18} />
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources, authors, topics…"
            className="input pl-10"
            aria-label="Search resources"
          />
        </div>
      </div>

      {groups.length === 0 ? (
        <div className="rounded-2xl border border-border bg-surface p-10 text-center text-sm text-fg-muted">
          No resources match “{query}”.
        </div>
      ) : (
        <div className="space-y-12">
          {groups.map((group) => (
            <section key={group.id} aria-labelledby={`group-${group.id}`}>
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={group.icon} size={20} />
                </span>
                <div>
                  <h2 id={`group-${group.id}`} className="text-lg font-bold text-fg">
                    {group.title}
                  </h2>
                  <p className="text-sm text-fg-subtle">{group.blurb}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <ResourceCard key={item.name} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      <div className="mt-12 rounded-2xl border border-border bg-surface p-6">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            <Icon name="info" size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold text-fg">Credits & fair use</p>
            <p className="mt-1 text-sm text-fg-muted">{resourceCredits}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
