import React, { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { EngineeringContentBlock } from './EngineeringRecoveredDsaPage';

const EngineeringSheetDocumentPage = () => {
  const { docSlug } = useParams();
  const [documentData, setDocumentData] = useState(null);
  const [index, setIndex] = useState(null);
  const [failed, setFailed] = useState(false);
  const noteKey = `mydsa-sheet-note:${docSlug}`;
  const [note, setNote] = useState(() => localStorage.getItem(noteKey) || '');

  useEffect(() => {
    setFailed(false);
    Promise.all([
      fetch(`/engineering/sheets/dsa-content/${docSlug}.json`).then((response) => {
        if (!response.ok) throw new Error('Not found');
        return response.json();
      }),
      fetch('/engineering/sheets/dsa-content/index.json').then((response) => response.json()),
    ])
      .then(([document, library]) => {
        setDocumentData(document);
        setIndex(library);
        setNote(localStorage.getItem(`mydsa-sheet-note:${docSlug}`) || '');
      })
      .catch(() => setFailed(true));
  }, [docSlug]);

  useEffect(() => {
    localStorage.setItem(noteKey, note);
  }, [note, noteKey]);

  const navigation = useMemo(() => {
    const documents = index?.documents || [];
    const current = documents.findIndex((item) => item.slug === docSlug);
    return {
      previous: current > 0 ? documents[current - 1] : null,
      next: current >= 0 ? documents[current + 1] : null,
    };
  }, [docSlug, index]);

  if (failed) return <Navigate to="/engineering/sheets?mode=dsa" replace />;
  if (!documentData || !index) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#050505] pt-16 text-zinc-500">
        <span className="flex items-center gap-3 text-sm">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-800 border-t-blue-500" />
          Loading problem notes…
        </span>
      </div>
    );
  }

  const blocks = (documentData.content || []).flatMap((section) => section.blocks || []);

  return (
    <div className="min-h-screen bg-[#050505] pt-16 text-zinc-100">
      <header className="border-b border-white/[0.07] bg-[#08080a]">
        <div className="mx-auto max-w-5xl px-4 py-9 sm:px-6 sm:py-12">
          <Link to="/engineering/sheets?mode=dsa" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 transition-colors hover:text-white">
            <Icon name="chevronLeft" size={14} /> DSA-31 Sheet
          </Link>
          <div className="mt-7 flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-blue-500/20 bg-blue-500/[0.07] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-400">
              Division {documentData.level}
            </span>
            <span className="rounded-md border border-white/[0.08] px-2 py-1 text-[10px] font-semibold text-zinc-500">{documentData.difficulty}</span>
            {documentData.readTime && <span className="text-xs text-zinc-600">{documentData.readTime} min read</span>}
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">{documentData.title}</h1>
          {documentData.description && <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">{documentData.description}</p>}
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <article className="min-w-0 rounded-xl border border-white/[0.08] bg-[#0b0b0d] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:p-8">
          {blocks.map((block, indexValue) => <EngineeringContentBlock key={indexValue} block={block} />)}
          <div className="mt-10 grid gap-3 border-t border-white/[0.08] pt-6 sm:grid-cols-2">
            {navigation.previous ? (
              <Link to={`/engineering/sheets/dsa/${navigation.previous.slug}`} className="rounded-lg border border-white/[0.08] p-4 text-sm text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.14] hover:text-white">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-700">Previous</span>
                <span className="mt-1 block font-semibold">{navigation.previous.title}</span>
              </Link>
            ) : <span />}
            {navigation.next && (
              <Link to={`/engineering/sheets/dsa/${navigation.next.slug}`} className="rounded-lg border border-white/[0.08] p-4 text-right text-sm text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.14] hover:text-white">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-700">Next</span>
                <span className="mt-1 block font-semibold">{navigation.next.title}</span>
              </Link>
            )}
          </div>
        </article>
        <aside>
          <div className="sticky top-24 rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4">
            <label htmlFor="sheet-note" className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-600">Your private note</label>
            <textarea
              id="sheet-note"
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="Write an insight, edge case, or revision reminder…"
              className="mt-3 min-h-40 w-full resize-y rounded-lg border border-white/[0.08] bg-black/25 p-3 text-sm leading-6 text-zinc-300 outline-none transition-all placeholder:text-zinc-700 focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10"
            />
            <p className="mt-2 text-[10px] text-zinc-700">Saved automatically on this device.</p>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default EngineeringSheetDocumentPage;
