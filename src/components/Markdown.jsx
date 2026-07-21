import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * Themed Markdown renderer used across the app (topic notes, imported .md, etc.).
 * - Uses remark-gfm for tables / task lists / strikethrough.
 * - Resolves relative <img src="..."> (and markdown images) against `baseUrl`
 *   so images stored next to a remote .md file render correctly in-app.
 * - Every element is styled with the app's semantic theme (light/dark aware).
 */

const encodeUrl = (url) =>
  url.replace(/ /g, '%20').replace(/\(/g, '%28').replace(/\)/g, '%29');

/** Turn raw HTML <img> tags into markdown images with absolute, encoded URLs. */
const resolveImages = (text, baseUrl) => {
  if (!text) return '';
  let out = text;
  if (baseUrl) {
    out = out.replace(/<img[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi, (_, src) => {
      const abs = /^https?:\/\//i.test(src) ? src : `${baseUrl}/${src.replace(/^\.?\//, '')}`;
      return `\n\n![](${encodeUrl(abs)})\n\n`;
    });
  }
  return out;
};

const components = {
  h1: (props) => <h1 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-fg first:mt-0" {...props} />,
  h2: (props) => (
    <h2 className="mt-8 mb-3 border-b border-border pb-2 text-xl font-bold tracking-tight text-fg first:mt-0" {...props} />
  ),
  h3: (props) => <h3 className="mt-6 mb-2 text-lg font-semibold text-fg" {...props} />,
  h4: (props) => <h4 className="mt-4 mb-2 text-base font-semibold text-fg" {...props} />,
  p: (props) => <p className="my-3 text-sm leading-relaxed text-fg-muted" {...props} />,
  a: (props) => (
    <a className="font-medium text-primary underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  ul: (props) => <ul className="my-3 space-y-1.5 pl-1" {...props} />,
  ol: (props) => <ol className="my-3 list-decimal space-y-1.5 pl-5 marker:text-fg-subtle" {...props} />,
  li: ({ children, ...props }) => (
    <li className="text-sm leading-relaxed text-fg-muted" {...props}>
      {children}
    </li>
  ),
  strong: (props) => <strong className="font-semibold text-fg" {...props} />,
  em: (props) => <em className="italic" {...props} />,
  blockquote: (props) => (
    <blockquote className="my-4 border-l-4 border-primary/40 bg-surface-2/50 py-1 pl-4 text-sm italic text-fg-muted" {...props} />
  ),
  hr: () => <hr className="my-6 border-border" />,
  img: (props) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img className="my-4 max-w-full rounded-xl border border-border" loading="lazy" {...props} />
  ),
  pre: ({ children }) => (
    <pre className="my-4 overflow-x-auto rounded-xl border border-border bg-surface-2 p-4 text-xs leading-relaxed">
      {children}
    </pre>
  ),
  code: ({ inline, className, children, ...props }) => {
    const text = String(children ?? '');
    const isBlock = /language-/.test(className || '') || text.includes('\n');
    if (inline || !isBlock) {
      return (
        <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[0.85em] text-fg" {...props}>
          {children}
        </code>
      );
    }
    return (
      <code className="font-mono text-fg" {...props}>
        {children}
      </code>
    );
  },
  table: (props) => (
    <div className="my-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-left text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-surface-2" {...props} />,
  th: (props) => <th className="whitespace-nowrap border-b border-border px-3 py-2 font-semibold text-fg" {...props} />,
  td: (props) => <td className="border-b border-border px-3 py-2 align-top text-fg-muted" {...props} />,
};

const Markdown = ({ children, baseUrl }) => {
  const content = useMemo(() => resolveImages(children, baseUrl), [children, baseUrl]);
  return (
    <div className="min-w-0">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
