import React, { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Icon from '../components/ui/Icon';

const INDEX_URL = '/engineering/dsa-docs/index.json';
const PROGRESS_KEY = 'mydsa-recovered-dsa-progress-v1';
const REVISION_KEY = 'mydsa-recovered-dsa-revision-v1';

const readObject = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '{}');
  } catch {
    return {};
  }
};

const sectionAnchor = (section, index) =>
  section.id || `section-${index + 1}`;

const collectPatternTopics = (pattern) => [
  ...(pattern.topics || []),
  ...(pattern.variations || []).flatMap((variation) => variation.topics || []),
];

const sanitizeHtml = (html = '') => {
  if (typeof window === 'undefined') return html;
  const parsed = new DOMParser().parseFromString(`<div>${html}</div>`, 'text/html');
  parsed.querySelectorAll('script,style,iframe,object,embed,form,input,button,link,meta').forEach((node) => node.remove());
  parsed.querySelectorAll('*').forEach((node) => {
    [...node.attributes].forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      const value = attribute.value.trim().toLowerCase();
      if (name.startsWith('on') || name === 'style' || ((name === 'href' || name === 'src') && value.startsWith('javascript:'))) {
        node.removeAttribute(attribute.name);
      }
    });
    if (node.tagName === 'A') {
      node.setAttribute('target', '_blank');
      node.setAttribute('rel', 'noreferrer');
    }
  });
  return parsed.body.firstElementChild?.innerHTML || '';
};

const SafeHtml = ({ html, className = '', as: Tag = 'div' }) => {
  const safe = useMemo(() => sanitizeHtml(html), [html]);
  if (!safe.replace(/<[^>]+>/g, '').trim() && !safe.includes('<img')) return null;
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: safe }} />;
};

const CodeBlock = ({ codes = {} }) => {
  const languages = Object.keys(codes).filter((language) => codes[language]);
  const [language, setLanguage] = useState(languages[0] || '');
  const activeLanguage = languages.includes(language) ? language : languages[0];
  if (!activeLanguage) return null;

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-white/[0.09] bg-[#09090b] shadow-[0_14px_40px_rgba(0,0,0,0.24)]">
      <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.025] px-3">
        <div className="flex overflow-x-auto">
          {languages.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setLanguage(item)}
              className={`border-b px-3 py-2.5 text-[11px] font-semibold capitalize transition-colors ${
                activeLanguage === item ? 'border-blue-500 text-blue-400' : 'border-transparent text-zinc-600 hover:text-zinc-300'
              }`}
            >
              {item === 'cpp' ? 'C++' : item}
            </button>
          ))}
        </div>
        <span className="hidden items-center gap-1.5 text-[10px] text-zinc-700 sm:flex"><Icon name="code" size={12} /> MyDSA</span>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-6 text-zinc-300 sm:p-5"><code>{codes[activeLanguage]}</code></pre>
    </div>
  );
};

const TableBlock = ({ content }) => {
  let table;
  try {
    table = typeof content === 'string' ? JSON.parse(content) : content;
  } catch {
    return null;
  }
  if (!table?.headers || !table?.rows) return null;
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-white/[0.09]">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-white/[0.04]">
          <tr>{table.headers.map((header) => <th key={header} className="border-b border-white/[0.08] px-4 py-3 font-semibold text-zinc-200"><SafeHtml html={header} /></th>)}</tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-white/[0.06] last:border-0">
              {row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 leading-6 text-zinc-400"><SafeHtml html={cell} /></td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Block = ({ block }) => {
  if (!block || typeof block !== 'object') return null;
  if (block.type === 'divider') return <hr className="my-9 border-white/[0.08]" />;
  if (block.type === 'code') {
    const codes = block.codes || (
      block.code?.content
        ? { [block.code.language || 'code']: block.code.content }
        : block.content
          ? { [block.language || 'code']: block.content }
          : {}
    );
    return <CodeBlock codes={codes} />;
  }
  if (block.type === 'table') return <TableBlock content={block.content} />;
  if (block.type === 'image') {
    const url = block.url || block.content || block.text;
    return (
      <figure className="my-7">
        <img src={url} alt={block.alt || block.caption || ''} loading="lazy" className="mx-auto max-h-[38rem] w-auto max-w-full rounded-lg border border-white/[0.08] bg-white/[0.02]" />
        {block.caption && <figcaption className="mt-2 text-center text-xs text-zinc-600">{block.caption}</figcaption>}
      </figure>
    );
  }
  if (block.type === 'callout' || block.type === 'note') {
    return (
      <div className="my-6 rounded-r-xl border-l-2 border-blue-500 bg-blue-500/[0.06] px-5 py-4">
        {block.title && <p className="mb-1.5 text-sm font-semibold text-white">{block.title}</p>}
        <SafeHtml html={block.text || block.content} className="text-[15px] font-medium leading-7 text-zinc-300 [&_a]:text-blue-400 [&_strong]:text-white" />
      </div>
    );
  }
  if (block.type === 'think-box') {
    return (
      <div className="my-6 rounded-xl border border-violet-500/20 bg-violet-500/[0.055] p-5">
        {block.title && <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-violet-300"><Icon name="sparkles" size={15} /> {block.title}</p>}
        <SafeHtml html={block.text || block.content} className="text-[15px] leading-7 text-zinc-300 [&_strong]:text-white" />
      </div>
    );
  }
  if (block.type === 'blockQuote') {
    return (
      <blockquote className="my-6 border-l-2 border-zinc-600 pl-5 text-[17px] italic leading-8 text-zinc-300">
        <SafeHtml html={block.content || block.text} />
      </blockquote>
    );
  }
  if (block.type === 'lead') {
    return <SafeHtml html={block.content || block.text} className="my-5 text-lg font-medium leading-8 text-zinc-300" />;
  }
  if (block.type === 'example-box') {
    return (
      <div className="my-6 rounded-xl border border-white/[0.09] bg-[#0d0d0f] p-5">
        {block.title && <p className="text-sm font-semibold text-white">{block.title}</p>}
        <SafeHtml html={block.text || block.content} className="mt-2 text-[15px] leading-7 text-zinc-400" />
      </div>
    );
  }
  if (block.type === 'final-thoughts') {
    return (
      <div className="my-7 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.055] p-5">
        <p className="text-sm font-semibold text-emerald-300">{block.title || 'Final thoughts'}</p>
        <ul className="mt-3 space-y-2">
          {(block.points || []).map((point, index) => (
            <li key={index} className="flex gap-2.5 text-sm leading-6 text-zinc-300">
              <Icon name="check" size={14} className="mt-1 shrink-0 text-emerald-400" /> {point}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (block.type === 'pros-cons') {
    let value = { pros: [], cons: [] };
    try {
      value = typeof block.content === 'string' ? JSON.parse(block.content) : block.content || value;
    } catch {
      return null;
    }
    return (
      <div className="my-6 grid gap-3 sm:grid-cols-2">
        {[
          ['Pros', value.pros || [], 'text-emerald-400'],
          ['Cons', value.cons || [], 'text-rose-400'],
        ].map(([title, items, tone]) => (
          <div key={title} className="rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4">
            <p className={`text-xs font-bold uppercase tracking-[0.12em] ${tone}`}>{title}</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-400">
              {items.map((item, index) => <li key={index}>• {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  if (block.type === 'list') {
    return (
      <ul className="my-5 space-y-2.5 pl-1">
        {(block.items || []).map((item, index) => (
          <li key={index} className="grid grid-cols-[0.75rem_1fr] gap-2 text-[16px] leading-8 text-zinc-400">
            <span className="mt-[0.78rem] h-1 w-1 rounded-full bg-blue-500" />
            <SafeHtml html={item} className="[&_a]:text-blue-400 [&_code]:rounded [&_code]:bg-white/[0.06] [&_code]:px-1.5 [&_strong]:font-semibold [&_strong]:text-zinc-200" />
          </li>
        ))}
      </ul>
    );
  }

  const headingStyles = {
    heading1: 'my-7 text-3xl font-bold tracking-tight text-white',
    heading2: 'mb-3 mt-8 text-2xl font-bold tracking-tight text-white',
    heading3: 'mb-2 mt-7 text-xl font-semibold tracking-tight text-zinc-100',
    heading4: 'mb-2 mt-6 text-base font-semibold text-zinc-200',
    heading5: 'mb-2 mt-5 text-sm font-bold uppercase tracking-[0.08em] text-zinc-300',
    heading: 'mb-2 mt-7 text-xl font-semibold tracking-tight text-zinc-100',
  };
  if (headingStyles[block.type]) {
    const headingTag = {
      heading1: 'h2',
      heading2: 'h3',
      heading3: 'h3',
      heading4: 'h4',
      heading5: 'h5',
      heading: 'h3',
    }[block.type];
    return <SafeHtml as={headingTag} html={block.text} className={headingStyles[block.type]} />;
  }

  return (
    <SafeHtml
      html={block.text || block.content}
      className="my-4 text-[16px] leading-8 text-zinc-400 sm:text-[17px] [&_a]:font-medium [&_a]:text-blue-400 [&_a]:underline-offset-4 hover:[&_a]:underline [&_code]:rounded [&_code]:bg-white/[0.06] [&_code]:px-1.5 [&_em]:text-zinc-300 [&_img]:my-6 [&_img]:max-h-[38rem] [&_img]:w-auto [&_img]:max-w-full [&_img]:rounded-lg [&_img]:border [&_img]:border-white/[0.08] [&_strong]:font-semibold [&_strong]:text-zinc-200"
    />
  );
};

const EngineeringRecoveredDsaPage = () => {
  const { docSlug } = useParams();
  const [library, setLibrary] = useState(null);
  const [documentData, setDocumentData] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [complete, setComplete] = useState(() => Boolean(readObject(PROGRESS_KEY)[docSlug]));
  const [revision, setRevision] = useState(() => Boolean(readObject(REVISION_KEY)[docSlug]));
  const noteKey = `mydsa-recovered-dsa-note:${docSlug}`;
  const [note, setNote] = useState(() => localStorage.getItem(noteKey) || '');

  useEffect(() => {
    setLoadError(false);
    setDocumentData(null);
    Promise.all([
      fetch(INDEX_URL).then((response) => response.json()),
      fetch(`/engineering/dsa-docs/${docSlug}.json`).then((response) => {
        if (!response.ok) throw new Error('Document not found');
        return response.json();
      }),
    ])
      .then(([index, document]) => {
        setLibrary(index);
        setDocumentData(document);
        setComplete(Boolean(readObject(PROGRESS_KEY)[docSlug]));
        setRevision(Boolean(readObject(REVISION_KEY)[docSlug]));
        setNote(localStorage.getItem(`mydsa-recovered-dsa-note:${docSlug}`) || '');
      })
      .catch(() => setLoadError(true));
  }, [docSlug]);

  useEffect(() => {
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(available > 0 ? Math.min(100, Math.round((window.scrollY / available) * 100)) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [documentData]);

  useEffect(() => {
    localStorage.setItem(noteKey, note);
  }, [note, noteKey]);

  const orderedDocuments = library?.documents || [];
  const groupedDocuments = useMemo(() => {
    if (!library) return [];
    const documentMap = new Map(library.documents.map((item) => [item.slug, item]));
    return [...(library.patterns || [])]
      .sort((a, b) => (a.categoryOrder ?? 999) - (b.categoryOrder ?? 999))
      .map((pattern) => ({
        id: pattern.id,
        title: pattern.title,
        documents: collectPatternTopics(pattern)
          .filter((topic, index, topics) => topics.findIndex((item) => item.slug === topic.slug) === index)
          .map((topic) => documentMap.get(topic.slug))
          .filter(Boolean),
      }))
      .filter((group) => group.documents.length);
  }, [library]);
  const currentIndex = orderedDocuments.findIndex((item) => item.slug === docSlug);
  const previous = currentIndex > 0 ? orderedDocuments[currentIndex - 1] : null;
  const next = currentIndex >= 0 ? orderedDocuments[currentIndex + 1] : null;

  const updateFlag = (key, setter, value) => {
    const flags = readObject(key);
    const updated = { ...flags, [docSlug]: value };
    localStorage.setItem(key, JSON.stringify(updated));
    setter(value);
  };

  if (loadError) return <Navigate to="/engineering/dsa" replace />;
  if (!documentData || !library) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#050505] pt-16 text-zinc-500">
        <div className="flex items-center gap-3 text-sm">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-800 border-t-blue-500" />
          Loading document…
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] pt-16 text-zinc-100">
      <div className="fixed inset-x-0 top-16 z-40 h-0.5 bg-white/[0.04]">
        <div className="h-full bg-blue-500 transition-all duration-200" style={{ width: `${readingProgress}%` }} />
      </div>

      <aside className="fixed bottom-0 left-0 top-16 hidden w-[19rem] overflow-y-auto border-r border-white/[0.07] bg-[#08080a] p-5 xl:block">
        <Link to="/engineering/dsa" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 transition-colors hover:text-white">
          <Icon name="chevronLeft" size={14} /> DSA Library
        </Link>
        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600">Course contents</p>
        <nav className="mt-4 space-y-5" aria-label="DSA documents">
          {groupedDocuments.map((group) => (
            <section key={group.id}>
              <p className="px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-700">{group.title}</p>
              <div className="mt-1.5 space-y-1">
                {group.documents.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/engineering/dsa/docs/${item.slug}`}
                    className={`block rounded-lg px-3 py-2 text-xs leading-5 transition-colors ${
                      item.slug === docSlug ? 'bg-blue-500/10 font-semibold text-blue-400' : 'text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-200'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </nav>
      </aside>

      <main className="xl:ml-[19rem] xl:mr-[18rem]">
        <article className="mx-auto max-w-3xl px-4 pb-28 pt-10 sm:px-6 lg:px-8 lg:pt-14">
          <header className="border-b border-white/[0.08] pb-8">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-zinc-600">
              <Link to="/engineering" className="hover:text-blue-400">Engineering</Link>
              <Icon name="chevronRight" size={12} />
              <Link to="/engineering/dsa" className="hover:text-blue-400">DSA</Link>
              <Icon name="chevronRight" size={12} />
              <span>Document {currentIndex + 1} of {orderedDocuments.length}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">{documentData.title}</h1>
            {documentData.description && <p className="mt-4 text-base leading-7 text-zinc-400">{documentData.description}</p>}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-xs text-zinc-400">
                {documentData.content?.length || 0} sections
              </span>
              <span className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-xs text-zinc-400">MyDSA Engineering</span>
            </div>
          </header>

          {(documentData.content || []).map((section, sectionIndex) => (
            <section key={`${sectionAnchor(section, sectionIndex)}-${sectionIndex}`} id={sectionAnchor(section, sectionIndex)} className="scroll-mt-28 border-b border-white/[0.08] py-9 last:border-0">
              {section.title && !(sectionIndex === 0 && section.title.replace(/<[^>]+>|&nbsp;/g, '').trim().toLowerCase() === 'introduction') && (
                <SafeHtml as="h2" html={section.title} className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl" />
              )}
              {(section.blocks || []).map((block, index) => <Block key={`${section.id}-${index}`} block={block} />)}
            </section>
          ))}

          <div className="mt-10 grid gap-3 border-t border-white/[0.08] pt-8 sm:grid-cols-2">
            {previous ? (
              <Link to={`/engineering/dsa/docs/${previous.slug}`} className="group rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.14]">
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-600"><Icon name="chevronLeft" size={12} /> Previous</span>
                <span className="mt-2 block text-sm font-semibold text-zinc-300 group-hover:text-blue-400">{previous.title}</span>
              </Link>
            ) : <div />}
            {next && (
              <Link to={`/engineering/dsa/docs/${next.slug}`} className="group rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4 text-right transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.14]">
                <span className="flex items-center justify-end gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-600">Next <Icon name="chevronRight" size={12} /></span>
                <span className="mt-2 block text-sm font-semibold text-zinc-300 group-hover:text-blue-400">{next.title}</span>
              </Link>
            )}
          </div>
        </article>
      </main>

      <aside className="fixed bottom-0 right-0 top-16 hidden w-[18rem] overflow-y-auto border-l border-white/[0.07] bg-[#08080a] p-5 xl:block">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600">On this page</p>
        <nav className="mt-3 space-y-1 border-l border-white/[0.08]">
          {(documentData.content || []).map((section, sectionIndex) => ({ section, sectionIndex })).filter(({ section }) => section.title).map(({ section, sectionIndex }) => (
            <a key={`${sectionAnchor(section, sectionIndex)}-${sectionIndex}`} href={`#${sectionAnchor(section, sectionIndex)}`} className="block border-l border-transparent py-1.5 pl-3 text-xs leading-5 text-zinc-600 transition-colors hover:border-blue-500 hover:text-zinc-300">
              <SafeHtml html={section.title} />
            </a>
          ))}
        </nav>

        <div className="mt-7 space-y-2 border-t border-white/[0.08] pt-5">
          <button
            type="button"
            onClick={() => updateFlag(PROGRESS_KEY, setComplete, !complete)}
            className={`flex w-full items-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-semibold transition-all duration-200 ${
              complete ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-white/[0.08] text-zinc-500 hover:border-white/[0.15] hover:text-white'
            }`}
          >
            <Icon name="check" size={14} /> {complete ? 'Completed' : 'Mark complete'}
          </button>
          <button
            type="button"
            onClick={() => updateFlag(REVISION_KEY, setRevision, !revision)}
            className={`flex w-full items-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-semibold transition-all duration-200 ${
              revision ? 'border-blue-500/30 bg-blue-500/10 text-blue-400' : 'border-white/[0.08] text-zinc-500 hover:border-white/[0.15] hover:text-white'
            }`}
          >
            <Icon name={revision ? 'bookmarkFilled' : 'bookmark'} size={14} /> {revision ? 'In revision queue' : 'Add to revision'}
          </button>
        </div>

        <label className="mt-6 block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600" htmlFor="dsa-note">Private notes</label>
        <textarea
          id="dsa-note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Write what you want to remember…"
          className="mt-3 min-h-32 w-full resize-y rounded-lg border border-white/[0.08] bg-[#0d0d0f] p-3 text-xs leading-5 text-zinc-300 outline-none transition-all focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10"
        />
      </aside>

      <div className="fixed inset-x-3 bottom-3 z-30 flex gap-2 rounded-xl border border-white/[0.1] bg-[#0d0d0f]/95 p-2 shadow-2xl backdrop-blur-xl xl:hidden">
        <button type="button" onClick={() => updateFlag(PROGRESS_KEY, setComplete, !complete)} className={`flex h-10 flex-1 items-center justify-center gap-2 rounded-lg text-xs font-semibold ${complete ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/[0.05] text-zinc-300'}`}>
          <Icon name="check" size={14} /> {complete ? 'Completed' : 'Complete'}
        </button>
        <button type="button" onClick={() => updateFlag(REVISION_KEY, setRevision, !revision)} className={`grid h-10 w-10 place-items-center rounded-lg ${revision ? 'bg-blue-500/10 text-blue-400' : 'bg-white/[0.05] text-zinc-400'}`} aria-label="Toggle revision">
          <Icon name={revision ? 'bookmarkFilled' : 'bookmark'} size={15} />
        </button>
      </div>
    </div>
  );
};

export default EngineeringRecoveredDsaPage;

export { Block as EngineeringContentBlock, SafeHtml as EngineeringSafeHtml };
