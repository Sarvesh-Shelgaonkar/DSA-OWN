import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from './ui/Icon';
import { allProblems } from '../lib/problems';

const NAV_COMMANDS = [
  { id: 'nav-home', label: 'Home', hint: 'Landing page', icon: 'sparkles', to: '/' },
  { id: 'nav-dashboard', label: 'Dashboard', hint: 'Your progress', icon: 'chart', to: '/dashboard' },
  { id: 'nav-problems', label: 'Problems', hint: 'Browse all problems', icon: 'code', to: '/problems' },
  { id: 'nav-roadmap', label: 'Roadmap', hint: 'Learning path', icon: 'route', to: '/roadmap' },
  { id: 'nav-patterns', label: 'Patterns', hint: 'Pattern recognition guide', icon: 'grid', to: '/patterns' },
  { id: 'nav-sheets', label: 'Practice Sheets', hint: 'A2Z, Blind 75, TUF+ revision', icon: 'route', to: '/sheets' },
  { id: 'nav-interview', label: 'Interview Session', hint: 'AI resume coach & question banks', icon: 'sparkles', to: '/interview' },
  { id: 'nav-interview-resume', label: 'Resume & HR Questions', hint: 'Interview bank', icon: 'user', to: '/interview/resume' },
  { id: 'nav-interview-sql', label: 'SQL Interview', hint: 'Interview bank', icon: 'layers', to: '/interview/sql' },
  { id: 'nav-interview-os', label: 'OS Interview', hint: 'Interview bank', icon: 'grid', to: '/interview/os' },
  { id: 'nav-interview-cn', label: 'Networks Interview', hint: 'Interview bank', icon: 'route', to: '/interview/cn' },
  { id: 'nav-dsa-notes', label: 'DSA Topic Notes', hint: 'Theory & problems by topic', icon: 'book', to: '/dsa-notes' },
  { id: 'nav-revision', label: 'Revision', hint: 'Revise solved problems', icon: 'book', to: '/revision' },
  { id: 'nav-topics', label: 'Topics', hint: 'Topic explorer', icon: 'grid', to: '/topics' },
  { id: 'nav-contests', label: 'Challenges', hint: 'Daily & weekly', icon: 'trophy', to: '/contests' },
  { id: 'nav-puzzles', label: 'Puzzles', hint: 'Logical interview puzzles', icon: 'sparkles', to: '/puzzles' },
  { id: 'nav-leaderboard', label: 'Ranks', hint: 'Your tier', icon: 'award', to: '/leaderboard' },
  { id: 'nav-profile', label: 'Profile', hint: 'Your profile', icon: 'user', to: '/profile' },
  { id: 'nav-notes', label: 'Notes', hint: 'Learning resources', icon: 'book', to: '/notes' },
  { id: 'nav-editor', label: 'Code Editor', hint: 'Playground', icon: 'code', to: '/code-editor' },
];

const CommandPalette = ({ open, onClose }) => {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const navMatches = NAV_COMMANDS.filter(
      (c) => !q || c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
    ).map((c) => ({ ...c, type: 'nav' }));

    const problemMatches = q
      ? allProblems
          .filter((p) => p.title.toLowerCase().includes(q))
          .slice(0, 6)
          .map((p) => ({
            id: `p-${p.id}`,
            label: p.title,
            hint: `${p.topic} · ${p.difficulty}`,
            icon: 'code',
            to: `/problems?q=${encodeURIComponent(p.title)}`,
            type: 'problem',
          }))
      : [];

    return [...navMatches, ...problemMatches];
  }, [query]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const go = (item) => {
    if (!item) return;
    navigate(item.to);
    onClose();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      go(results[active]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-surface shadow-popover animate-scale-in">
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Icon name="search" size={18} className="text-fg-subtle" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search problems or jump to a page…"
            className="h-14 w-full bg-transparent text-fg placeholder:text-fg-subtle focus:outline-none"
            aria-label="Search"
          />
          <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-2xs text-fg-subtle sm:block">
            ESC
          </kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-3 py-8 text-center text-sm text-fg-muted">No results found.</li>
          )}
          {results.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => go(item)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                  i === active ? 'bg-primary/10 text-fg' : 'text-fg-muted hover:bg-surface-2'
                }`}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-surface-2 text-fg-muted">
                  <Icon name={item.icon} size={16} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-fg">{item.label}</span>
                  <span className="block truncate text-xs text-fg-subtle">{item.hint}</span>
                </span>
                {item.type === 'problem' && (
                  <span className="text-2xs font-semibold uppercase text-fg-subtle">Problem</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommandPalette;
