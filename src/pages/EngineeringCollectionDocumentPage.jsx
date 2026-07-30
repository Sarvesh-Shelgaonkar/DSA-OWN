import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { EngineeringContentBlock, EngineeringSafeHtml } from './EngineeringRecoveredDsaPage';

const PROGRESS_KEY = 'mydsa-engineering-library-progress-v1';
const REVISION_KEY = 'mydsa-engineering-library-revision-v1';

const readObject = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '{}');
  } catch {
    return {};
  }
};

const sectionAnchor = (section, index) => section.id || `section-${index + 1}`;

const EngineeringCollectionDocumentPage = () => {
  const { collectionId, docSlug } = useParams();
  const key = `${collectionId}:${docSlug}`;
  const [collection, setCollection] = useState(null);
  const [documentData, setDocumentData] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [complete, setComplete] = useState(() => Boolean(readObject(PROGRESS_KEY)[key]));
  const [revision, setRevision] = useState(() => Boolean(readObject(REVISION_KEY)[key]));
  const noteKey = `mydsa-engineering-library-note:${key}`;
  const [note, setNote] = useState(() => localStorage.getItem(noteKey) || '');

  useEffect(() => {
    setLoadError(false);
    Promise.all([
      fetch(`/engineering/library/${collectionId}/index.json`).then((response) => {
        if (!response.ok) throw new Error('Collection not found');
        return response.json();
      }),
      fetch(`/engineering/library/${collectionId}/docs/${docSlug}.json`).then((response) => {
        if (!response.ok) throw new Error('Document not found');
        return response.json();
      }),
    ])
      .then(([collectionData, document]) => {
        setCollection(collectionData);
        setDocumentData(document);
        setComplete(Boolean(readObject(PROGRESS_KEY)[key]));
        setRevision(Boolean(readObject(REVISION_KEY)[key]));
        setNote(localStorage.getItem(noteKey) || '');
      })
      .catch(() => setLoadError(true));
  }, [collectionId, docSlug, key, noteKey]);

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

  if (loadError) return <Navigate to="/engineering" replace />;
  if (!collection || !documentData) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#050505] pt-16 text-zinc-500">
        <span className="flex items-center gap-3 text-sm">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-800 border-t-blue-500" />
          Loading document…
        </span>
      </div>
    );
  }

  const documents = collection.documents;
  const currentIndex = documents.findIndex((item) => item.slug === docSlug);
  const previous = currentIndex > 0 ? documents[currentIndex - 1] : null;
  const next = currentIndex >= 0 ? documents[currentIndex + 1] : null;
  const sidebarStart = documents.length > 200 ? Math.max(0, currentIndex - 60) : 0;
  const sidebarDocuments = documents.length > 200
    ? documents.slice(sidebarStart, Math.min(documents.length, currentIndex + 61))
    : documents;
  const sections = Array.isArray(documentData.content)
    ? documentData.content
    : Array.isArray(documentData.blocks)
      ? [{ id: docSlug, title: documentData.title, blocks: documentData.blocks }]
      : [];

  const updateFlag = (storageKey, setter, value) => {
    const current = readObject(storageKey);
    localStorage.setItem(storageKey, JSON.stringify({ ...current, [key]: value }));
    setter(value);
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-16 text-zinc-100">
      <div className="fixed inset-x-0 top-16 z-40 h-0.5 bg-white/[0.04]">
        <div className="h-full bg-blue-500 transition-all duration-200" style={{ width: `${readingProgress}%` }} />
      </div>

      <aside className="fixed bottom-0 left-0 top-16 hidden w-[19rem] overflow-y-auto border-r border-white/[0.07] bg-[#08080a] p-5 xl:block">
        <Link to={`/engineering/${collection.trackId}`} className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 transition-colors hover:text-white">
          <Icon name="chevronLeft" size={14} /> {collection.title}
        </Link>
        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600">Course contents</p>
        {documents.length > 200 && (
          <p className="mt-2 px-3 text-[10px] leading-4 text-zinc-700">
            Showing {sidebarStart + 1}–{sidebarStart + sidebarDocuments.length} of {documents.length}
          </p>
        )}
        <nav className="mt-3 space-y-1" aria-label={`${collection.title} documents`}>
          {sidebarDocuments.map((item) => (
            <Link
              key={item.slug}
              to={`/engineering/library/${collectionId}/${item.slug}`}
              className={`block rounded-lg px-3 py-2 text-xs leading-5 transition-colors ${
                item.slug === docSlug ? 'bg-blue-500/10 font-semibold text-blue-400' : 'text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-200'
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="xl:ml-[19rem] xl:mr-[18rem]">
        <article className="mx-auto max-w-3xl px-4 pb-28 pt-10 sm:px-6 lg:px-8 lg:pt-14">
          <header className="border-b border-white/[0.08] pb-8">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-zinc-600">
              <Link to="/engineering" className="hover:text-blue-400">Engineering</Link>
              <Icon name="chevronRight" size={12} />
              <Link to={`/engineering/${collection.trackId}`} className="hover:text-blue-400">{collection.title}</Link>
              <Icon name="chevronRight" size={12} />
              <span>Document {currentIndex + 1} of {documents.length}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">{documentData.title || docSlug}</h1>
            {documentData.description && <p className="mt-4 text-base leading-7 text-zinc-400">{documentData.description}</p>}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-xs text-zinc-400">{sections.length} sections</span>
              <span className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-xs text-zinc-400">MyDSA Engineering</span>
            </div>
          </header>

          {sections.map((section, sectionIndex) => (
            <section key={`${sectionAnchor(section, sectionIndex)}-${sectionIndex}`} id={sectionAnchor(section, sectionIndex)} className="scroll-mt-28 border-b border-white/[0.08] py-9 last:border-0">
              {section.title && !(sectionIndex === 0 && section.title === documentData.title) && (
                <EngineeringSafeHtml as="h2" html={section.title} className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl" />
              )}
              {(section.blocks || []).map((block, index) => (
                <EngineeringContentBlock key={`${sectionIndex}-${index}`} block={block} />
              ))}
            </section>
          ))}

          <div className="mt-10 grid gap-3 border-t border-white/[0.08] pt-8 sm:grid-cols-2">
            {previous ? (
              <Link to={`/engineering/library/${collectionId}/${previous.slug}`} className="group rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.14]">
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-600"><Icon name="chevronLeft" size={12} /> Previous</span>
                <span className="mt-2 block text-sm font-semibold text-zinc-300 group-hover:text-blue-400">{previous.title}</span>
              </Link>
            ) : <div />}
            {next && (
              <Link to={`/engineering/library/${collectionId}/${next.slug}`} className="group rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4 text-right transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.14]">
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
          {sections.filter((section) => section.title).map((section, index) => (
            <a key={`${sectionAnchor(section, index)}-${index}`} href={`#${sectionAnchor(section, index)}`} className="block border-l border-transparent py-1.5 pl-3 text-xs leading-5 text-zinc-600 transition-colors hover:border-blue-500 hover:text-zinc-300">
              <EngineeringSafeHtml html={section.title} />
            </a>
          ))}
        </nav>
        <div className="mt-7 space-y-2 border-t border-white/[0.08] pt-5">
          <button type="button" onClick={() => updateFlag(PROGRESS_KEY, setComplete, !complete)} className={`flex w-full items-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-semibold ${complete ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-white/[0.08] text-zinc-500 hover:text-white'}`}>
            <Icon name="check" size={14} /> {complete ? 'Completed' : 'Mark complete'}
          </button>
          <button type="button" onClick={() => updateFlag(REVISION_KEY, setRevision, !revision)} className={`flex w-full items-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-semibold ${revision ? 'border-blue-500/30 bg-blue-500/10 text-blue-400' : 'border-white/[0.08] text-zinc-500 hover:text-white'}`}>
            <Icon name={revision ? 'bookmarkFilled' : 'bookmark'} size={14} /> {revision ? 'In revision queue' : 'Add to revision'}
          </button>
        </div>
        <label htmlFor="engineering-note" className="mt-6 block text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600">Private notes</label>
        <textarea
          id="engineering-note"
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

export default EngineeringCollectionDocumentPage;
