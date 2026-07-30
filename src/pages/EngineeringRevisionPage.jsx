import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { ENGINEERING_TRACKS, getTrackLessons } from '../data/engineeringTracks';
import { dsaProblems } from '../data/dsaProblems';

const readObject = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '{}');
  } catch {
    return {};
  }
};

const readArray = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch {
    return [];
  }
};

const EngineeringRevisionPage = () => {
  const [revision, setRevision] = useState(() => readObject('mydsa-engineering-revision-v1'));
  const [dsaRevision, setDsaRevision] = useState(() => readObject('mydsa-recovered-dsa-revision-v1'));
  const [dsaDocuments, setDsaDocuments] = useState([]);
  const [libraryRevision, setLibraryRevision] = useState(() => readObject('mydsa-engineering-library-revision-v1'));
  const [libraryDocuments, setLibraryDocuments] = useState([]);
  const [sheetRevision, setSheetRevision] = useState(() => readArray('mydsa-engineering-sheet-revision-v1'));
  const completed = readObject('mydsa-engineering-progress-v1');
  const dsaCompleted = readObject('mydsa-recovered-dsa-progress-v1');
  const libraryCompleted = readObject('mydsa-engineering-library-progress-v1');
  const [focusDays, setFocusDays] = useState(14);

  useEffect(() => {
    fetch('/engineering/dsa-docs/index.json')
      .then((response) => response.json())
      .then((data) => setDsaDocuments(data.documents || []))
      .catch(() => setDsaDocuments([]));
  }, []);

  useEffect(() => {
    fetch('/engineering/library/index.json')
      .then((response) => response.json())
      .then(async (overview) => {
        const indexes = await Promise.all(
          (overview.collections || []).map((collection) =>
            fetch(`/engineering/library/${collection.id}/index.json`).then((response) => response.json()),
          ),
        );
        setLibraryDocuments(indexes.flatMap((collection) =>
          collection.documents.map((document) => ({
            ...document,
            collectionId: collection.id,
            collectionTitle: collection.title,
          })),
        ));
      })
      .catch(() => setLibraryDocuments([]));
  }, []);

  const lessonItems = useMemo(
    () =>
      Object.values(ENGINEERING_TRACKS).flatMap((track) =>
        getTrackLessons(track)
          .filter((item) => revision[`${track.id}:${item.slug}`])
          .map((item) => ({ ...item, track })),
      ),
    [revision],
  );

  const allProblems = useMemo(
    () =>
      dsaProblems.flatMap((group) =>
        group.problems.map((problem) => ({ ...problem, topic: group.topic, key: `${group.topic}:${problem.id}` })),
      ),
    [],
  );
  const problemItems = allProblems.filter((item) => sheetRevision.includes(item.key));
  const dsaLessonItems = dsaDocuments.filter((item) => dsaRevision[item.slug]);
  const libraryLessonItems = libraryDocuments.filter((item) => libraryRevision[`${item.collectionId}:${item.slug}`]);
  const totalRevisionItems = lessonItems.length + dsaLessonItems.length + libraryLessonItems.length;
  const completedCount =
    Object.values(completed).filter(Boolean).length +
    Object.values(dsaCompleted).filter(Boolean).length +
    Object.values(libraryCompleted).filter(Boolean).length;

  const removeLesson = (trackId, slug) => {
    const key = `${trackId}:${slug}`;
    const next = { ...revision, [key]: false };
    localStorage.setItem('mydsa-engineering-revision-v1', JSON.stringify(next));
    setRevision(next);
  };

  const removeProblem = (key) => {
    const next = sheetRevision.filter((item) => item !== key);
    localStorage.setItem('mydsa-engineering-sheet-revision-v1', JSON.stringify(next));
    setSheetRevision(next);
  };

  const removeDsaDocument = (slug) => {
    const next = { ...dsaRevision, [slug]: false };
    localStorage.setItem('mydsa-recovered-dsa-revision-v1', JSON.stringify(next));
    setDsaRevision(next);
  };

  const removeLibraryDocument = (collectionId, slug) => {
    const key = `${collectionId}:${slug}`;
    const next = { ...libraryRevision, [key]: false };
    localStorage.setItem('mydsa-engineering-library-revision-v1', JSON.stringify(next));
    setLibraryRevision(next);
  };

  const days = [
    ['DSA patterns', 'Solve two revision problems and explain the invariant aloud.'],
    ['System design', 'Review one building block and draw one request path.'],
    ['CS fundamentals', 'Answer five rapid questions from OS, DBMS, or Networks.'],
    ['Behavioural', 'Record one STAR story in under two minutes.'],
    ['AI / DevOps', 'Review one production pattern and its failure modes.'],
    ['Mock interview', 'Run a 45-minute timed round and capture feedback.'],
    ['Recovery & recall', 'Use only notes and revision items; avoid new material.'],
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-16 text-zinc-100">
      <header className="border-b border-white/[0.07] bg-[#08080a]">
        <div className="container-page py-10 sm:py-14">
          <Link to="/engineering" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-white">
            <Icon name="chevronLeft" size={14} /> Engineering
          </Link>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.17em] text-amber-400">Quick revision & interview planner</p>
          <h1 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">Your Engineering Revision Hub</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Bring weak topics, saved problems, and a realistic preparation schedule into one focused view.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              [totalRevisionItems, 'Lessons to revise'],
              [problemItems.length, 'Problems to revisit'],
              [completedCount, 'Lessons completed'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4">
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="mt-1 text-xs text-zinc-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="container-page grid gap-10 py-10 lg:grid-cols-[1fr_22rem]">
        <div className="space-y-10">
          <section>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-blue-500">Saved lessons</p>
                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">Revision queue</h2>
              </div>
              <span className="text-xs text-zinc-600">{totalRevisionItems} items</span>
            </div>
            <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0e]">
              {totalRevisionItems ? (
                <>
                {dsaLessonItems.map((item, index) => (
                  <div key={`dsa:${item.slug}`} className={`grid gap-3 p-4 sm:grid-cols-[1fr_auto] sm:items-center ${index ? 'border-t border-white/[0.07]' : ''}`}>
                    <Link to={`/engineering/dsa/docs/${item.slug}`} className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-zinc-600">Data Structures &amp; Algorithms</p>
                      <h3 className="mt-1.5 text-sm font-semibold text-zinc-200 hover:text-blue-400">{item.title}</h3>
                      <p className="mt-1 text-xs text-zinc-600">{item.sections} sections · MyDSA document</p>
                    </Link>
                    <button type="button" onClick={() => removeDsaDocument(item.slug)} className="text-xs font-semibold text-zinc-600 hover:text-rose-400">
                      Remove
                    </button>
                  </div>
                ))}
                {libraryLessonItems.map((item, index) => (
                  <div key={`${item.collectionId}:${item.slug}`} className={`grid gap-3 p-4 sm:grid-cols-[1fr_auto] sm:items-center ${index || dsaLessonItems.length ? 'border-t border-white/[0.07]' : ''}`}>
                    <Link to={`/engineering/library/${item.collectionId}/${item.slug}`} className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-zinc-600">{item.collectionTitle}</p>
                      <h3 className="mt-1.5 text-sm font-semibold text-zinc-200 hover:text-blue-400">{item.title}</h3>
                      <p className="mt-1 text-xs text-zinc-600">{item.sections} sections · MyDSA document</p>
                    </Link>
                    <button type="button" onClick={() => removeLibraryDocument(item.collectionId, item.slug)} className="text-xs font-semibold text-zinc-600 hover:text-rose-400">
                      Remove
                    </button>
                  </div>
                ))}
                {lessonItems.map((item, index) => (
                <div key={`${item.track.id}:${item.slug}`} className={`grid gap-3 p-4 sm:grid-cols-[1fr_auto] sm:items-center ${index || dsaLessonItems.length || libraryLessonItems.length ? 'border-t border-white/[0.07]' : ''}`}>
                  <Link to={`/engineering/learn/${item.track.id}/${item.slug}`} className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-zinc-600">{item.track.title}</p>
                    <h3 className="mt-1.5 text-sm font-semibold text-zinc-200 hover:text-blue-400">{item.title}</h3>
                    <p className="mt-1 text-xs text-zinc-600">{item.duration} · {item.level}</p>
                  </Link>
                  <button type="button" onClick={() => removeLesson(item.track.id, item.slug)} className="text-xs font-semibold text-zinc-600 hover:text-rose-400">
                    Remove
                  </button>
                </div>
                ))}
                </>
              ) : (
                <div className="py-12 text-center">
                  <Icon name="reset" size={22} className="mx-auto text-zinc-700" />
                  <p className="mt-3 text-sm text-zinc-500">Add lessons to revision from any Engineering reader.</p>
                  <Link to="/engineering/dsa" className="mt-3 inline-block text-sm font-semibold text-blue-400">Explore courses</Link>
                </div>
              )}
            </div>
          </section>

          <section>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-amber-400">Saved problems</p>
                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">Problem revision</h2>
              </div>
              <Link to="/engineering/sheets" className="text-xs font-semibold text-blue-400">Open sheet</Link>
            </div>
            <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0e]">
              {problemItems.length ? problemItems.map((item, index) => (
                <div key={item.key} className={`flex items-center justify-between gap-4 p-4 ${index ? 'border-t border-white/[0.07]' : ''}`}>
                  <div>
                    <p className="text-sm font-semibold text-zinc-200">{item.title}</p>
                    <p className="mt-1 text-xs text-zinc-600">{item.topic} · {item.difficulty}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={item.link} target="_blank" rel="noreferrer" className="text-xs font-semibold text-blue-400">Solve</a>
                    <button type="button" onClick={() => removeProblem(item.key)} className="text-xs font-semibold text-zinc-600 hover:text-rose-400">Remove</button>
                  </div>
                </div>
              )) : (
                <div className="py-12 text-center text-sm text-zinc-600">Your problem revision list is empty.</div>
              )}
            </div>
          </section>
        </div>

        <aside>
          <div className="sticky top-24 rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-emerald-400">Interview planner</p>
            <h2 className="mt-2 text-lg font-bold text-white">{focusDays}-day focus plan</h2>
            <div className="mt-4 flex gap-1 rounded-lg border border-white/[0.08] bg-black/25 p-1">
              {[7, 14, 28].map((daysValue) => (
                <button
                  key={daysValue}
                  type="button"
                  onClick={() => setFocusDays(daysValue)}
                  className={`flex-1 rounded-md py-2 text-xs font-semibold ${focusDays === daysValue ? 'bg-white text-zinc-950' : 'text-zinc-600 hover:text-white'}`}
                >
                  {daysValue} days
                </button>
              ))}
            </div>
            <div className="mt-5 space-y-4">
              {days.map(([title, description], index) => (
                <div key={title} className="grid grid-cols-[1.5rem_1fr] gap-3">
                  <span className="font-mono text-[10px] font-bold text-zinc-700">{index + 1}</span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-300">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-zinc-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 border-t border-white/[0.07] pt-4 text-xs leading-5 text-zinc-600">
              Repeat this seven-day rhythm {focusDays / 7}×, increasing mock difficulty each cycle.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default EngineeringRevisionPage;
