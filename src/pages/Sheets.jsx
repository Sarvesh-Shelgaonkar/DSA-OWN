import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { SectionHeading } from '../components/ui/index.jsx';
import { sheets } from '../data/sheets';

const DiffBar = ({ difficulty, total }) => {
  if (!difficulty) return null;
  const { easy, medium, hard } = difficulty;
  const seg = (n, cls) => (
    <span className={`h-full ${cls}`} style={{ width: `${(n / total) * 100}%` }} />
  );
  return (
    <div>
      <div className="flex h-2 overflow-hidden rounded-full bg-surface-2">
        {seg(easy, 'bg-easy')}
        {seg(medium, 'bg-medium')}
        {seg(hard, 'bg-hard')}
      </div>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs">
        <span className="flex items-center gap-1.5 text-fg-muted">
          <span className="h-2 w-2 rounded-full bg-easy" /> Easy {easy}
        </span>
        <span className="flex items-center gap-1.5 text-fg-muted">
          <span className="h-2 w-2 rounded-full bg-medium" /> Medium {medium}
        </span>
        <span className="flex items-center gap-1.5 text-fg-muted">
          <span className="h-2 w-2 rounded-full bg-hard" /> Hard {hard}
        </span>
      </div>
    </div>
  );
};

const SheetCard = ({ sheet }) => (
  <article className="card flex flex-col p-6">
    <header className="flex items-start gap-3">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon name={sheet.icon} size={24} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-lg font-bold text-fg">{sheet.name}</h2>
          <span className="badge bg-surface-2 text-fg-muted">{sheet.provider}</span>
        </div>
        <p className="mt-0.5 text-sm text-fg-subtle">{sheet.tagline}</p>
      </div>
      {sheet.total != null && (
        <div className="shrink-0 text-right">
          <p className="text-2xl font-bold text-fg">{sheet.total}</p>
          <p className="text-2xs uppercase tracking-wide text-fg-subtle">problems</p>
        </div>
      )}
    </header>

    <p className="mt-4 text-sm leading-relaxed text-fg-muted">{sheet.description}</p>

    {sheet.difficulty && (
      <div className="mt-4">
        <DiffBar difficulty={sheet.difficulty} total={sheet.total} />
      </div>
    )}

    <div className="mt-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-fg-subtle">
        {sheet.id === 'tuf-revision' ? 'Revision plan' : 'What’s inside'}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {sheet.topics.map((t) => (
          <span
            key={t.name}
            className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface-2/60 px-2.5 py-1 text-xs text-fg-muted"
          >
            {t.name}
            {t.count != null && <span className="font-semibold text-fg">{t.count}</span>}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border pt-4">
      <a href={sheet.href} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
        Open sheet <Icon name="external" size={15} />
      </a>
      <p className="ml-auto text-xs text-fg-subtle">{sheet.best}</p>
    </div>
  </article>
);

const Sheets = () => (
  <div className="container-page pt-24 pb-16">
    <SectionHeading
      eyebrow="Practice"
      title="Practice Sheets"
      description="Hand-picked problem sets to structure your practice. Learn top-to-bottom with the A2Z sheet, crunch the Blind 75 before interviews, and keep everything fresh with the TUF+ quick-revision track."
    />

    <div className="grid gap-6 lg:grid-cols-2">
      {sheets.map((sheet) => (
        <SheetCard key={sheet.id} sheet={sheet} />
      ))}
    </div>

    <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon name="info" size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold text-fg">Practice inside MyDSA too</p>
          <p className="mt-1 text-sm text-fg-muted">
            These sheets live on TakeUForward. To track solved/bookmarked state and streaks,
            work through the{' '}
            <Link to="/problems" className="font-medium text-primary hover:underline">
              MyDSA problem set
            </Link>{' '}
            and{' '}
            <Link to="/patterns" className="font-medium text-primary hover:underline">
              pattern guide
            </Link>{' '}
            alongside them.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Sheets;
