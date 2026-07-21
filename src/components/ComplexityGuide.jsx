import React, { useEffect } from 'react';
import Icon from './ui/Icon';

const ROWS = [
  { size: 'n ≤ 20', note: 'Exponential', codes: ['2ⁿ', 'n!'], tail: 'may work' },
  { size: 'n ≤ 100', note: '', codes: ['O(n³)'], tail: 'sometimes okay' },
  { size: 'n ≤ 1,000', note: '', codes: ['O(n²)'], tail: 'often okay' },
  { size: 'n ≤ 100,000', note: 'Aim for', codes: ['O(n)', 'O(n log n)'], tail: '' },
  { size: 'n ≥ 1,000,000', note: 'Usually', codes: ['O(n)'], tail: '' },
];

const Code = ({ children }) => (
  <code className="rounded-md bg-surface-2 px-1.5 py-0.5 font-mono text-[0.85em] text-fg">{children}</code>
);

/**
 * "Acceptable complexity by input size" reference — a quick sanity check for
 * what time complexity you should be targeting while solving.
 */
const ComplexityGuide = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto px-4 py-[8vh]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="complexity-title"
    >
      <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="relative w-full max-w-2xl rounded-2xl border border-border bg-surface shadow-popover animate-scale-in">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon name="gauge" size={22} />
            </span>
            <div>
              <h2 id="complexity-title" className="text-lg font-bold text-fg">
                Complexity cheat sheet
              </h2>
              <p className="text-sm text-fg-muted">Target the right time complexity for the input size.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-lg text-fg-muted hover:bg-surface-2 hover:text-fg"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="p-6">
          {/* Table */}
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-2">
                  <th className="px-4 py-3 font-semibold text-fg">Input size</th>
                  <th className="px-4 py-3 font-semibold text-fg">Acceptable complexity</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.size} className="border-b border-border last:border-0">
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-fg">{r.size}</td>
                    <td className="px-4 py-3 text-fg-muted">
                      {r.note && <span className="mr-1">{r.note}</span>}
                      {r.codes.map((c, i) => (
                        <React.Fragment key={c}>
                          {i > 0 && <span className="mx-1 text-fg-subtle">or</span>}
                          <Code>{c}</Code>
                        </React.Fragment>
                      ))}
                      {r.tail && <span className="ml-1">{r.tail}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Worked example */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-fg">Worked example</p>
            <div className="mt-2 rounded-xl border border-border bg-surface-2 px-4 py-3 font-mono text-sm text-fg">
              n = 50,000
            </div>
            <p className="mt-3 text-sm text-fg-muted">So you should immediately think:</p>
            <ul className="mt-2 space-y-1.5 border-l-2 border-border pl-4 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="check" size={16} className="text-success" strokeWidth={3} />
                <Code>O(n)</Code> <span className="text-fg-muted">is ideal.</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="check" size={16} className="text-success" strokeWidth={3} />
                <Code>O(n log n)</Code> <span className="text-fg-muted">is also acceptable.</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="close" size={16} className="text-danger" strokeWidth={3} />
                <Code>O(n²)</Code> <span className="text-fg-muted">is too slow.</span>
              </li>
            </ul>
          </div>

          <p className="mt-6 flex items-start gap-2 rounded-xl bg-primary/5 px-4 py-3 text-xs text-fg-muted">
            <Icon name="info" size={15} className="mt-0.5 shrink-0 text-primary" />
            Rule of thumb: most judges run ~10⁸ simple operations per second. Estimate operations
            from your complexity and the input size, then pick an approach that stays under that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplexityGuide;
