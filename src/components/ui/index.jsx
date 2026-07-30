import React from 'react';
import Icon from './Icon';
import { DIFFICULTY_META } from '../../lib/problems';

export { default as Icon } from './Icon';

/* --------------------------------- Badge --------------------------------- */
export const DifficultyBadge = ({ difficulty, className = '' }) => {
  const meta = DIFFICULTY_META[difficulty] || DIFFICULTY_META.Easy;
  return (
    <span className={`badge ${meta.soft} ${meta.className} ${className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} aria-hidden="true" />
      {difficulty}
    </span>
  );
};

/* ------------------------------ Progress bar ----------------------------- */
export const ProgressBar = ({ value = 0, className = '', barClassName = 'bg-primary', label }) => {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className={className}>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-surface-2"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={`h-full rounded-full ${barClassName} transition-[width] duration-300 ease-out-expo`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
};

/* --------------------------------- Stat ---------------------------------- */
export const StatCard = ({ icon, label, value, sub, accent = 'text-primary' }) => (
  <div className="card p-5">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-fg-muted">{label}</span>
      {icon && (
        <span className={`grid h-9 w-9 place-items-center rounded-lg bg-surface-2 ${accent}`}>
          <Icon name={icon} size={18} />
        </span>
      )}
    </div>
    <div className="mt-3 flex items-end gap-2">
      <span className="text-3xl font-bold tracking-tight text-fg">{value}</span>
      {sub && <span className="mb-1 text-sm text-fg-subtle">{sub}</span>}
    </div>
  </div>
);

/* ------------------------------ Empty state ------------------------------ */
export const EmptyState = ({ icon = 'search', title, description, action }) => (
  <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface/50 px-6 py-16 text-center">
    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-surface-2 text-fg-subtle">
      <Icon name={icon} size={26} />
    </span>
    <h3 className="mt-4 text-lg font-semibold text-fg">{title}</h3>
    {description && <p className="mt-1 max-w-sm text-sm text-fg-muted">{description}</p>}
    {action && <div className="mt-5">{action}</div>}
  </div>
);

/* -------------------------------- Skeleton ------------------------------- */
export const Skeleton = ({ className = '' }) => <div className={`skeleton ${className}`} />;

/* --------------------------------- Section ------------------------------- */
export const SectionHeading = ({ eyebrow, title, description, action }) => (
  <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-1 text-2xl font-bold tracking-tight text-fg sm:text-3xl">{title}</h2>
      {description && <p className="mt-2 max-w-2xl text-fg-muted">{description}</p>}
    </div>
    {action}
  </div>
);
