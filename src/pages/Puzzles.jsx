import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { SectionHeading, EmptyState, ProgressBar } from '../components/ui/index.jsx';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { puzzles, puzzleCategories, puzzleDocUrl } from '../data/puzzles';
import { getPuzzleReference, puzzleIndexUrl } from '../data/puzzleSources';

const CATEGORY_ICON = {
  'Measuring & Weighing': 'gauge',
  'Bulbs, Switches & Lights': 'bolt',
  'Poison, Pills & Testing': 'info',
  'Hats & Prisoners': 'user',
  'River Crossing': 'route',
  'Bridge, Time & Speed': 'clock',
  'Probability & Expectation': 'chart',
  'Shapes & Matchsticks': 'grid',
  'Arrangement & Seating': 'layers',
  'Math & Numbers': 'target',
  'Game Theory & Strategy': 'trophy',
  'Logic & Deduction': 'sparkles',
};

/* Legacy puzzles stored problem/solution as a plain string; new ones as an
   array of typed blocks. Normalise both to an array so rendering is uniform. */
const toBlocks = (content) => {
  if (!content) return [];
  if (typeof content === 'string') return [{ t: 'p', text: content }];
  return content;
};

const blockText = (content) =>
  toBlocks(content)
    .map((b) => (b.t === 'table' ? (b.rows || []).flat().join(' ') : b.text || ''))
    .join(' ');

const PuzzleTable = ({ rows }) => {
  if (!rows || rows.length === 0) return null;
  const [head, ...body] = rows;
  return (
    <div className="my-4 overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="w-full border-collapse text-left text-[14px]">
        <thead>
          <tr className="bg-primary/10">
            {head.map((c, i) => (
              <th key={i} className="whitespace-nowrap border-b border-border px-4 py-2.5 font-semibold text-fg">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className="even:bg-surface-2/50">
              {row.map((c, ci) => (
                <td key={ci} className="border-b border-border px-4 py-2.5 align-top text-fg-muted">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* Render inline **bold** markers as <strong>, keeping everything else as-is. */
const renderInline = (text) => {
  if (!text || text.indexOf('**') === -1) return text;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={i} className="font-semibold text-fg">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

/* Split a leading emoji / symbol cluster off a heading so we can render it as an accent. */
const splitEmoji = (text) => {
  const m = text.match(/^([^\p{L}\p{N}]+)\s*(.*)$/u);
  if (m && m[1].trim()) return [m[1].trim(), m[2] || text];
  return [null, text];
};

/* Render an ordered list of blocks, grouping consecutive bullets into a <ul>. */
const PuzzleBlocks = ({ blocks }) => {
  const out = [];
  let bullets = [];
  const flush = () => {
    if (bullets.length) {
      out.push(
        <ul
          key={`ul-${out.length}`}
          className="my-3 space-y-2 pl-1 text-[15px] leading-7 text-fg"
        >
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <span className="min-w-0 whitespace-pre-line">{renderInline(b)}</span>
            </li>
          ))}
        </ul>,
      );
      bullets = [];
    }
  };

  blocks.forEach((b, i) => {
    if (b.t === 'li') {
      bullets.push(b.text);
      return;
    }
    flush();
    if (b.t === 'h') {
      const [emoji, label] = splitEmoji(b.text);
      out.push(
        <h4
          key={i}
          className="mt-6 flex items-center gap-2 border-b border-border/60 pb-1.5 text-[15px] font-bold tracking-tight text-fg first:mt-0"
        >
          {emoji && <span aria-hidden className="text-base leading-none">{emoji}</span>}
          <span>{label}</span>
        </h4>,
      );
    } else if (b.t === 'table') {
      out.push(<PuzzleTable key={i} rows={b.rows} />);
    } else if (b.t === 'img') {
      out.push(
        <figure key={i} className="my-4 flex justify-center">
          <img
            src={`/puzzles/${b.src}`}
            alt=""
            loading="lazy"
            className="max-h-96 w-auto max-w-full rounded-xl border border-border bg-white shadow-sm"
          />
        </figure>,
      );
    } else {
      out.push(
        <p key={i} className="my-3 whitespace-pre-line text-[15px] leading-7 text-fg">
          {renderInline(b.text)}
        </p>,
      );
    }
  });
  flush();
  return <div className="max-w-3xl">{out}</div>;
};

const PuzzleCard = ({ puzzle, reviewed, onToggleReviewed, expanded }) => {
  const [open, setOpen] = useState(false);
  const [showProblem, setShowProblem] = useState(expanded);
  const [copyStatus, setCopyStatus] = useState('');
  const reference = getPuzzleReference(puzzle);
  const copyLink = async () => {
    const url = new URL(window.location.href);
    url.search = '';
    url.hash = '';
    url.searchParams.set('puzzle', puzzle.id);
    try {
      await navigator.clipboard.writeText(url.href);
      setCopyStatus('Link copied');
    } catch {
      setCopyStatus('Could not copy. Use the puzzle title link.');
    }
  };
  const problem = toBlocks(puzzle.problem);
  const solution = toBlocks(puzzle.solution);
  return (
    <article id={puzzle.id} aria-labelledby={`${puzzle.id}-title`} className="card scroll-mt-24 p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <span className="badge bg-surface-2 text-fg-muted">
            <Icon name={CATEGORY_ICON[puzzle.category] || 'sparkles'} size={13} />
            {puzzle.category}
          </span>
          <h3 id={`${puzzle.id}-title`} className="mt-2 text-lg font-bold tracking-tight text-fg">
            <Link to={`?puzzle=${puzzle.id}`} className="hover:text-primary">{puzzle.title}</Link>
          </h3>
          <a
            href={reference.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:underline"
          >
            <Icon name="external" size={12} /> {reference.label}
          </a>
        </div>
        <button
          type="button"
          onClick={() => onToggleReviewed(puzzle.id)}
          aria-pressed={reviewed}
          aria-label={`${reviewed ? 'Mark as not reviewed' : 'Mark as reviewed'}: ${puzzle.title}`}
          title={reviewed ? 'Reviewed' : 'Mark as reviewed'}
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border transition-colors ${
            reviewed
              ? 'border-success bg-success text-white'
              : 'border-border-strong text-transparent hover:border-success hover:text-success/40'
          }`}
        >
          <Icon name="check" size={16} strokeWidth={3} />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => { setShowProblem((shown) => !shown); setOpen(false); }}
          aria-expanded={showProblem}
          aria-controls={`${puzzle.id}-problem`}
          className="btn-secondary btn-sm"
        >
          <Icon name={showProblem ? 'chevronDown' : 'chevronRight'} size={16} />
          {showProblem ? 'Hide puzzle' : 'Read puzzle'}
        </button>
        <button type="button" onClick={copyLink} className="text-xs font-medium text-primary hover:underline">
          Copy puzzle link
        </button>
        <span role="status" className="text-xs text-fg-muted">{copyStatus}</span>
      </div>

      {showProblem && problem.length > 0 && (
        <div id={`${puzzle.id}-problem`} className="mt-4 border-t border-border pt-4">
          <PuzzleBlocks blocks={problem} />
        </div>
      )}

      {showProblem && solution.length > 0 && (
        <div className="mt-5">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={`${puzzle.id}-solution`}
            className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
              open
                ? 'border-primary/40 bg-primary/10 text-primary'
                : 'border-border text-fg-muted hover:border-border-strong hover:text-fg'
            }`}
          >
            <Icon name={open ? 'eyeOff' : 'eye'} size={16} />
            {open ? 'Hide approach & solution' : 'Reveal approach & solution'}
          </button>
          {open && (
            <div id={`${puzzle.id}-solution`} className="mt-4 rounded-xl border border-border bg-surface-2/60 p-5 sm:p-6">
              <PuzzleBlocks blocks={solution} />
            </div>
          )}
        </div>
      )}
    </article>
  );
};

const Puzzles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'All';
  const status = searchParams.get('status') || 'all';
  const selectedId = searchParams.get('puzzle');
  const updateFilter = (key, value) => {
    setSearchParams((previous) => {
      const next = new URLSearchParams(previous);
      next.delete('puzzle');
      const isDefault = (key === 'category' && value === 'All') || (key === 'status' && value === 'all');
      if (value && !isDefault) next.set(key, value);
      else next.delete(key);
      return next;
    }, { replace: true });
  };
  const resetFilters = () => setSearchParams({});
  const [reviewedMap, setReviewedMap] = useLocalStorage('mydsa-puzzles-reviewed', {});

  const toggleReviewed = (id) =>
    setReviewedMap((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = true;
      return next;
    });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return puzzles.filter((p) => {
      if (selectedId && p.id !== selectedId) return false;
      if (status === 'reviewed' && !reviewedMap?.[p.id]) return false;
      if (status === 'unreviewed' && reviewedMap?.[p.id]) return false;
      if (category !== 'All' && p.category !== category) return false;
      if (q && !`${p.title} ${blockText(p.problem)} ${blockText(p.solution)}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, category, status, reviewedMap, selectedId]);

  const grouped = useMemo(() => {
    const map = {};
    filtered.forEach((p) => {
      (map[p.category] = map[p.category] || []).push(p);
    });
    return puzzleCategories.filter((c) => map[c]).map((c) => ({ category: c, items: map[c] }));
  }, [filtered]);

  const reviewedCount = puzzles.filter((p) => reviewedMap?.[p.id]).length;
  const percent = puzzles.length ? Math.round((reviewedCount / puzzles.length) * 100) : 0;

  return (
    <div className="container-page pt-24 pb-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Interview prep"
          title="Logical Puzzles"
          description={`${puzzles.length} classic interview puzzles, organised into ${puzzleCategories.length} categories — with diagrams, tables and an interviewer-ready approach for each.`}
        />
        <div className="flex flex-wrap gap-2">
          <a href={puzzleIndexUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm">
            <Icon name="external" size={16} /> Puzzle collection
          </a>
          {puzzleDocUrl && (
            <a
              href={puzzleDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-sm shrink-0"
            >
              <Icon name="external" size={16} /> Original Google Doc
            </a>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="card p-5">
          <p className="text-sm text-fg-muted">Puzzles reviewed</p>
          <div className="mt-2 flex items-end gap-2">
            <span className="text-3xl font-bold text-fg">{reviewedCount}</span>
            <span className="mb-1 text-sm text-fg-subtle">/ {puzzles.length}</span>
          </div>
          <ProgressBar value={percent} className="mt-3" barClassName="bg-success" label="Puzzles reviewed" />
        </div>
        <div className="card flex flex-col justify-center p-5 sm:col-span-2">
          <div className="relative">
            <Icon name="search" size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-fg-subtle" />
            <input
              type="search"
              value={query}
              onChange={(e) => updateFilter('q', e.target.value)}
              placeholder="Search puzzles…"
              aria-label="Search puzzles"
              className="input pl-10"
            />
          </div>
        </div>
      </div>

      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => updateFilter('category', 'All')}
          aria-pressed={category === 'All'}
          className={`chip ${category === 'All' ? 'chip-active' : ''}`}
        >
          All
        </button>
        {puzzleCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => updateFilter('category', c)}
            aria-pressed={category === c}
            className={`chip ${category === c ? 'chip-active' : ''}`}
          >
            <Icon name={CATEGORY_ICON[c] || 'sparkles'} size={14} />
            {c}
          </button>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p role="status" className="text-sm text-fg-muted">
          Showing {filtered.length} of {puzzles.length} puzzles · {puzzles.length - reviewedCount} left to review
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-fg-muted">
            Review status
            <select value={status} onChange={(e) => updateFilter('status', e.target.value)} className="input w-auto">
              <option value="all">All puzzles</option>
              <option value="unreviewed">Not reviewed</option>
              <option value="reviewed">Reviewed</option>
            </select>
          </label>
          {(query || category !== 'All' || status !== 'all' || selectedId) && (
            <button type="button" onClick={resetFilters} className="btn-secondary btn-sm">Show all puzzles</button>
          )}
        </div>
      </div>

      {/* Puzzle sections */}
      {grouped.length === 0 ? (
        <EmptyState
          icon="search"
          title="No puzzles found"
          description="Try a different search term or category."
          action={<button onClick={resetFilters} className="btn-primary btn-sm">Reset</button>}
        />
      ) : (
        <div className="space-y-10">
          {grouped.map(({ category: cat, items }) => (
            <section key={cat}>
              <div className="mb-4 flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={CATEGORY_ICON[cat] || 'sparkles'} size={18} />
                </span>
                <h2 className="text-lg font-bold text-fg">{cat}</h2>
                <span className="text-sm text-fg-subtle">({items.length})</span>
              </div>
              <div className="space-y-5">
                {items.map((p) => (
                  <PuzzleCard
                    key={`${p.id}-${selectedId || "list"}`}
                    puzzle={p}
                    expanded={selectedId === p.id}
                    reviewed={Boolean(reviewedMap?.[p.id])}
                    onToggleReviewed={toggleReviewed}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default Puzzles;
