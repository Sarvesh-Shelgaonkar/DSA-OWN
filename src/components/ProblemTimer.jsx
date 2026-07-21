import React from 'react';
import Icon from './ui/Icon';
import { useTimer, formatDuration } from '../context/TimerContext';

/**
 * Compact per-problem practice timer. Click to start/pause; a reset appears
 * once time has been logged. Only one problem is timed at a time.
 */
const ProblemTimer = ({ problemId, className = '' }) => {
  const { elapsedOf, isRunning, toggle, reset } = useTimer();
  const secs = elapsedOf(problemId);
  const running = isRunning(problemId);
  const hasTime = secs > 0;

  return (
    <div className={`flex items-center ${className}`}>
      <button
        type="button"
        onClick={() => toggle(problemId)}
        aria-pressed={running}
        aria-label={running ? 'Pause practice timer' : 'Start practice timer'}
        title={running ? 'Pause timer' : hasTime ? 'Resume timer' : 'Start timer'}
        className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-medium tabular-nums transition-colors ${
          running
            ? 'bg-primary/10 text-primary'
            : hasTime
            ? 'text-fg-muted hover:bg-surface-2 hover:text-fg'
            : 'text-fg-subtle hover:bg-surface-2 hover:text-fg'
        }`}
      >
        <Icon name={running ? 'pause' : 'stopwatch'} size={16} />
        {(hasTime || running) && <span>{formatDuration(secs)}</span>}
      </button>
      {hasTime && !running && (
        <button
          type="button"
          onClick={() => reset(problemId)}
          aria-label="Reset timer"
          title="Reset timer"
          className="grid h-7 w-7 place-items-center rounded-lg text-fg-subtle transition-colors hover:bg-surface-2 hover:text-danger"
        >
          <Icon name="reset" size={13} />
        </button>
      )}
    </div>
  );
};

export default ProblemTimer;
