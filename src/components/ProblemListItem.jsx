import React from 'react';
import Icon from './ui/Icon';
import { DifficultyBadge } from './ui/index.jsx';
import ProblemTimer from './ProblemTimer';

const ProblemListItem = ({
  problem,
  index,
  solved,
  bookmarked,
  onToggleSolved,
  onToggleBookmark,
  showMeta = true,
  showTimer = true,
}) => {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-3 py-3 transition-colors hover:border-border-strong sm:px-4">
      {/* Solved checkbox */}
      <button
        type="button"
        onClick={() => onToggleSolved(problem.id)}
        aria-pressed={solved}
        aria-label={solved ? `Mark ${problem.title} as unsolved` : `Mark ${problem.title} as solved`}
        className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border transition-all ${
          solved
            ? 'border-success bg-success text-white animate-check-burst'
            : 'border-border-strong text-transparent hover:border-success hover:text-success/40'
        }`}
      >
        <Icon name="check" size={16} strokeWidth={3} />
      </button>

      {typeof index === 'number' && (
        <span className="hidden w-9 shrink-0 text-right font-mono text-xs text-fg-subtle sm:block">
          {String(index + 1).padStart(3, '0')}
        </span>
      )}

      {/* Title + topic */}
      <div className="min-w-0 flex-1">
        <p className={`flex items-center gap-2 font-medium ${solved ? 'text-fg-subtle line-through' : 'text-fg'}`}>
          <span className="truncate">{problem.title}</span>
          {problem.extra && (
            <span
              className="badge shrink-0 border border-accent/40 bg-accent/10 text-accent"
              title="Added by MyDSA as an extra must-know interview problem"
            >
              <Icon name="sparkles" size={12} /> EXTRA
            </span>
          )}
        </p>
        {showMeta && (
          <div className="mt-0.5 flex items-center gap-2 text-xs text-fg-subtle">
            <span className="truncate">{problem.topic}</span>
            {typeof problem.acceptance === 'number' && (
              <>
                <span className="text-border-strong">·</span>
                <span>{problem.acceptance}% acc.</span>
              </>
            )}
          </div>
        )}
      </div>

      <DifficultyBadge difficulty={problem.difficulty} className="hidden shrink-0 sm:inline-flex" />

      {/* Practice timer */}
      {showTimer && <ProblemTimer problemId={problem.id} className="shrink-0" />}

      {/* Bookmark */}
      {onToggleBookmark && (
        <button
          type="button"
          onClick={() => onToggleBookmark(problem.id)}
          aria-pressed={bookmarked}
          aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark problem'}
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-colors ${
            bookmarked ? 'text-primary' : 'text-fg-subtle hover:text-fg'
          }`}
        >
          <Icon name={bookmarked ? 'bookmarkFilled' : 'bookmark'} size={17} />
        </button>
      )}

      {/* Solve links */}
      <div className="flex shrink-0 items-center gap-1.5">
        <a
          href={problem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost btn-sm"
          title={`Solve "${problem.title}" on LeetCode`}
        >
          LeetCode <Icon name="external" size={14} />
        </a>
        <a
          href={`https://takeuforward.org/plus/dsa/problems/${problem.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden btn-ghost btn-sm md:inline-flex"
          title={`Solve "${problem.title}" on TakeUForward`}
        >
          TUF+
        </a>
      </div>
    </div>
  );
};

export default ProblemListItem;
