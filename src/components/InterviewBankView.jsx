import React, { useMemo, useState } from 'react';
import Icon from './ui/Icon';
import NotesBlock from './ui/NotesBlock';
import { SectionHeading } from './ui/index.jsx';

/**
 * Generic, searchable interview question bank / notes page.
 * Feed it a `bank` object:
 *   { eyebrow, title, description, sections: [{ id, title, icon, blocks }], source? }
 * `source` (optional) renders a small button in the header (e.g. { label, href }).
 * `intro` (optional) renders a node above the content grid.
 */
const InterviewBankView = ({ bank, intro }) => {
  const [query, setQuery] = useState('');

  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return bank.sections;
    return bank.sections.filter((s) => {
      if (s.title.toLowerCase().includes(q)) return true;
      return JSON.stringify(s.blocks).toLowerCase().includes(q);
    });
  }, [query, bank.sections]);

  return (
    <div className="container-page pt-24 pb-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow={bank.eyebrow} title={bank.title} description={bank.description} />
        <div className="flex shrink-0 flex-wrap items-center gap-2" data-no-print>
          {bank.pdf && (
            <a href={bank.pdf.href} download className="btn-primary btn-sm">
              <Icon name="book" size={16} /> {bank.pdf.label || 'Download PDF'}
            </a>
          )}
          <button type="button" onClick={() => window.print()} className="btn-secondary btn-sm">
            <Icon name="book" size={16} /> Save as PDF
          </button>
          {bank.source && (
            <a href={bank.source.href} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm">
              <Icon name="external" size={16} /> {bank.source.label}
            </a>
          )}
        </div>
      </div>

      {intro}

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* Table of contents */}
        <aside className="lg:sticky lg:top-24 lg:self-start" data-no-print>
          <div className="relative mb-4">
            <Icon
              name="search"
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-subtle"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              aria-label={`Search ${bank.title}`}
              className="input pl-9"
            />
          </div>
          <nav className="hidden max-h-[70vh] overflow-y-auto lg:block" aria-label="Contents">
            <ul className="space-y-0.5">
              {bank.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
                  >
                    <Icon name={s.icon} size={15} className="shrink-0 text-fg-subtle" />
                    <span className="truncate">{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <div className="min-w-0 space-y-6">
          {sections.length === 0 ? (
            <p className="text-sm text-fg-muted">No questions match “{query}”.</p>
          ) : (
            sections.map((section) => (
              <section key={section.id} id={section.id} className="card scroll-mt-24 p-6">
                <header className="mb-4 flex items-center gap-3 border-b border-border pb-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={section.icon} size={20} />
                  </span>
                  <h2 className="text-lg font-bold text-fg">{section.title}</h2>
                </header>
                <div className="space-y-4">
                  {section.blocks.map((block, i) => (
                    <NotesBlock key={i} block={block} />
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewBankView;
