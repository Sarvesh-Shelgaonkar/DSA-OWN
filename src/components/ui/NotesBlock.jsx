import React from 'react';
import Icon from './Icon';

/**
 * Shared block renderer for structured notes / interview banks.
 * Used by JavaNotes and every Interview question bank so the styling stays
 * consistent and there is a single place to evolve it.
 *
 * Block types:
 *  { type: 'p', text }                                paragraph
 *  { type: 'answer', text }                           "say this in the interview" callout
 *  { type: 'h', text }                                sub-heading
 *  { type: 'ul', items: [] }                          bullet list
 *  { type: 'ol', items: [] }                          numbered list
 *  { type: 'code', code, lang }                       code block
 *  { type: 'table', head: [], rows: [[]] }            comparison table
 *  { type: 'qa', items: [{ q, a }], title? }          tricky follow-ups
 *  { type: 'tip', text }                              interview tip
 *  { type: 'levels', items: [{ level, q, a }] }       difficulty-tagged Q&A ladder
 */

const LEVEL_META = {
  Easy: 'bg-easy/10 text-easy border-easy/30',
  Medium: 'bg-medium/10 text-medium border-medium/30',
  Hard: 'bg-hard/10 text-hard border-hard/30',
  Hardest: 'bg-primary/10 text-primary border-primary/30',
};

const NotesBlock = ({ block }) => {
  switch (block.type) {
    case 'p':
      return <p className="text-sm leading-relaxed text-fg-muted">{block.text}</p>;

    case 'h':
      return <h3 className="mt-2 text-sm font-bold uppercase tracking-wide text-fg-subtle">{block.text}</h3>;

    case 'answer':
      return (
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
          <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            <Icon name="check" size={13} /> Say this in the interview
          </p>
          <p className="text-sm leading-relaxed text-fg">{block.text}</p>
        </div>
      );

    case 'tip':
      return (
        <div className="rounded-xl border border-medium/30 bg-medium/10 p-4">
          <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-medium">
            <Icon name="sparkles" size={13} /> Interview tip
          </p>
          <p className="text-sm leading-relaxed text-fg">{block.text}</p>
        </div>
      );

    case 'ul':
      return (
        <ul className="space-y-1.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-fg-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );

    case 'ol':
      return (
        <ol className="space-y-1.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-surface-2 text-2xs font-bold text-fg-subtle">
                {i + 1}
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ol>
      );

    case 'code':
      return (
        <pre className="overflow-x-auto rounded-xl border border-border bg-surface-2 p-4 text-xs leading-relaxed">
          <code className="font-mono text-fg">{block.code}</code>
        </pre>
      );

    case 'table':
      return (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2">
                {block.head.map((h, i) => (
                  <th key={i} className="whitespace-nowrap px-3 py-2 font-semibold text-fg">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-b border-border last:border-0">
                  {row.map((cell, c) => (
                    <td key={c} className={`px-3 py-2 align-top ${c === 0 ? 'font-medium text-fg' : 'text-fg-muted'}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'qa':
      return (
        <div className="rounded-xl border border-border bg-surface-2/50 p-4">
          <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-fg-subtle">
            <Icon name="sparkles" size={13} /> {block.title || 'Tricky follow-ups'}
          </p>
          <ul className="space-y-3">
            {block.items.map((qa, i) => (
              <li key={i}>
                <p className="text-sm font-semibold text-fg">Q. {qa.q}</p>
                <p className="mt-0.5 flex gap-1.5 text-sm text-fg-muted">
                  <span className="font-semibold text-success">A.</span>
                  <span>{qa.a}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'levels':
      return (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="rounded-xl border border-border bg-surface-2/40 p-4">
              <div className="mb-1.5 flex items-center gap-2">
                <span
                  className={`badge border ${LEVEL_META[item.level] || LEVEL_META.Easy}`}
                >
                  {item.level}
                </span>
                <p className="text-sm font-semibold text-fg">{item.q}</p>
              </div>
              <p className="flex gap-1.5 text-sm leading-relaxed text-fg-muted">
                <span className="font-semibold text-success">A.</span>
                <span>{item.a}</span>
              </p>
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
};

export default NotesBlock;
