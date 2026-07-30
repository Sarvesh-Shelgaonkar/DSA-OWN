import React, { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { getEngineeringLesson, getTrackLessons } from '../data/engineeringTracks';
import { getEngineeringDocument } from '../data/engineeringDocs';

const progressKey = 'mydsa-engineering-progress-v1';
const revisionKey = 'mydsa-engineering-revision-v1';

const readObject = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '{}');
  } catch {
    return {};
  }
};

const TRACK_GUIDES = {
  dsa: {
    model: 'Start with the invariant: what must remain true while the algorithm moves through the input?',
    steps: ['Translate the prompt into inputs, outputs, and constraints.', 'Write the brute-force approach and calculate its cost.', 'Identify repeated work or structure you can exploit.', 'State the invariant before writing the optimised code.', 'Test the smallest, largest, and most awkward inputs.'],
    example: 'Take a small input and trace every state change on paper. If the state cannot be explained in one sentence, simplify it before coding.',
    mistakes: ['Memorising code without understanding the invariant', 'Optimising before the brute-force baseline is clear', 'Ignoring empty input, duplicates, overflow, or boundary indexes'],
  },
  'system-design': {
    model: 'A system design is a set of explicit trade-offs tied to requirements—not a collection of fashionable boxes.',
    steps: ['Clarify the users and critical actions.', 'Estimate scale and define the read/write shape.', 'Draw the simplest end-to-end path.', 'Choose storage and communication from access patterns.', 'Find the first bottleneck, then add reliability and observability.'],
    example: 'Walk one request from the client to durable storage. At every boundary, name the failure mode, retry behaviour, and owner of the data.',
    mistakes: ['Choosing technology before estimating scale', 'Drawing every component without explaining the critical path', 'Claiming strong guarantees without describing their cost'],
  },
  interview: {
    model: 'Strong interview performance makes reasoning observable: context, decision, action, evidence, and reflection.',
    steps: ['Identify what the interviewer is actually evaluating.', 'Choose one concrete example or concept.', 'Explain the decision and alternatives.', 'Support the result with evidence.', 'Close with what you learned or would improve.'],
    example: 'Record a two-minute answer, then remove every sentence that does not clarify your decision, action, or impact.',
    mistakes: ['Giving a long timeline instead of a focused story', 'Speaking only as “we” when your contribution is being assessed', 'Skipping trade-offs, evidence, or reflection'],
  },
  ai: {
    model: 'Treat an AI feature as a measurable system: data in, model behaviour, tool boundaries, evaluation, and feedback.',
    steps: ['Define the user task and failure cost.', 'Create a small representative evaluation set.', 'Build the simplest deterministic or prompted baseline.', 'Add retrieval, tools, or adaptation only when measured gaps justify them.', 'Trace quality, latency, cost, and safety in production.'],
    example: 'Before changing a prompt or model, write the failing example and the expected behaviour. Re-run it against the full evaluation set.',
    mistakes: ['Using an agent where a deterministic workflow is enough', 'Judging quality from a few hand-picked demos', 'Giving models broad data or tool permissions'],
  },
  devops: {
    model: 'Operations is controlled change: every automated action needs observable state, a failure boundary, and a recovery path.',
    steps: ['Define the desired state and ownership.', 'Make the change repeatable and reviewable.', 'Validate it in the smallest safe environment.', 'Release progressively with measurable health signals.', 'Document rollback and incident response.'],
    example: 'For any deployment, identify the artifact, configuration, rollout signal, rollback trigger, and person or system responsible.',
    mistakes: ['Treating successful deployment as proof of service health', 'Keeping secrets in source or build logs', 'Adding automation without ownership or rollback'],
  },
  competitive: {
    model: 'Contest speed comes from reducing uncertainty early: constraints, invariant, proof, implementation, and targeted tests.',
    steps: ['Read constraints before examples.', 'Classify the viable complexity.', 'Write the observation and proof in plain language.', 'Choose the smallest reliable implementation.', 'Test adversarial cases before submitting.'],
    example: 'Create one test that breaks the most tempting wrong solution. This often reveals the missing invariant faster than random testing.',
    mistakes: ['Coding the first pattern that feels familiar', 'Ignoring integer bounds across multiple test cases', 'Changing the approach repeatedly without proving why it fails'],
  },
  newsletter: {
    model: 'An engineering story is useful when it connects a symptom to a constraint, decision, trade-off, and measurable result.',
    steps: ['Name the user-visible problem.', 'Identify the constraint that made it difficult.', 'Explain the simplest attempted solution.', 'Show the trade-off in the final design.', 'Extract one reusable principle.'],
    example: 'After reading, summarise the architecture in five boxes and one sentence per trade-off. That summary is your revision artifact.',
    mistakes: ['Copying an architecture without its scale or constraints', 'Focusing on tools instead of decisions', 'Missing the failure that motivated the design'],
  },
};

const lessonPath = (trackId, slug) =>
  trackId === 'dsa' && slug === 'how-to-solve-dsa-problems'
    ? '/engineering/dsa/how-to-solve-dsa-problems'
    : `/engineering/learn/${trackId}/${slug}`;

const EngineeringLessonPage = () => {
  const { trackId, lessonSlug } = useParams();
  const result = useMemo(() => getEngineeringLesson(trackId, lessonSlug), [lessonSlug, trackId]);
  const { track, lesson, previous, next, index, total } = result;
  const lessonKey = `${trackId}:${lessonSlug}`;
  const [complete, setComplete] = useState(() => Boolean(readObject(progressKey)[lessonKey]));
  const [revision, setRevision] = useState(() => Boolean(readObject(revisionKey)[lessonKey]));
  const [note, setNote] = useState(() => localStorage.getItem(`mydsa-engineering-note:${lessonKey}`) || '');
  const [readingProgress, setReadingProgress] = useState(0);
  const doc = useMemo(() => (lesson ? getEngineeringDocument(trackId, lesson) : null), [lesson, trackId]);

  useEffect(() => {
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(available > 0 ? Math.min(100, Math.round((window.scrollY / available) * 100)) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    localStorage.setItem(`mydsa-engineering-note:${lessonKey}`, note);
  }, [lessonKey, note]);

  if (!track || !lesson) return <Navigate to="/engineering" replace />;

  const guide = TRACK_GUIDES[trackId] || TRACK_GUIDES.dsa;
  const allLessons = getTrackLessons(track);
  const updateFlag = (storageKey, setter, value) => {
    const current = readObject(storageKey);
    const next = { ...current, [lessonKey]: value };
    localStorage.setItem(storageKey, JSON.stringify(next));
    setter(value);
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-16 text-zinc-100">
      <div className="fixed inset-x-0 top-16 z-40 h-0.5 bg-white/[0.04]">
        <div className="h-full bg-blue-500 transition-all duration-200" style={{ width: `${readingProgress}%` }} />
      </div>

      <aside className="fixed bottom-0 left-0 top-16 hidden w-[19rem] overflow-y-auto border-r border-white/[0.07] bg-[#08080a] p-5 xl:block">
        <Link to={`/engineering/${trackId}`} className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-white">
          <Icon name="chevronLeft" size={14} /> {track.title}
        </Link>
        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600">Course contents</p>
        <nav className="mt-3 space-y-1" aria-label={`${track.title} lessons`}>
          {allLessons.map((item, lessonIndex) => (
            <Link
              key={item.slug}
              to={lessonPath(trackId, item.slug)}
              className={`flex items-start gap-2.5 rounded-lg px-3 py-2 text-xs leading-5 transition-colors ${
                item.slug === lessonSlug ? 'bg-blue-500/10 font-semibold text-blue-400' : 'text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-200'
              }`}
            >
              <span className="mt-0.5 font-mono text-[10px] text-zinc-700">{String(lessonIndex + 1).padStart(2, '0')}</span>
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="xl:ml-[19rem] xl:mr-[18rem]">
        <article className="mx-auto max-w-3xl px-4 pb-28 pt-10 sm:px-6 lg:px-8 lg:pt-14">
          <header className="border-b border-white/[0.08] pb-8">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-zinc-600">
              <Link to={`/engineering/${trackId}`} className="hover:text-blue-400">{track.title}</Link>
              <Icon name="chevronRight" size={12} />
              <span>{lesson.sectionTitle}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">{lesson.title}</h1>
            <p className="mt-4 text-base leading-7 text-zinc-400">{lesson.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-xs text-zinc-400">{lesson.duration}</span>
              <span className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-xs text-zinc-400">{lesson.level}</span>
              <span className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-xs text-zinc-400">Lesson {index + 1} of {total}</span>
            </div>
          </header>

          <section id="overview" className="scroll-mt-28 border-b border-white/[0.08] py-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-blue-500">Overview</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Why this matters</h2>
            <div className="mt-5 space-y-4">
              {doc.introduction.map((paragraph) => (
                <p key={paragraph} className="text-[16px] leading-8 text-zinc-400 sm:text-[17px]">{paragraph}</p>
              ))}
            </div>
          </section>

          <section id="outcomes" className="scroll-mt-28 border-b border-white/[0.08] py-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-blue-500">Learning outcomes</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">What you should understand</h2>
            <div className="mt-5 grid gap-3">
              {lesson.keyPoints.map((point, pointIndex) => (
                <div key={point} className="flex gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-500/10 font-mono text-[11px] font-bold text-blue-400">
                    {pointIndex + 1}
                  </span>
                  <p className="pt-0.5 text-sm leading-6 text-zinc-300">{point}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="concepts" className="scroll-mt-28 border-b border-white/[0.08] py-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-blue-500">Core concepts</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Understand each decision</h2>
            <div className="mt-7 space-y-8">
              {doc.concepts.map((concept, conceptIndex) => (
                <div key={concept.title} className="grid gap-3 sm:grid-cols-[2rem_1fr]">
                  <span className="font-mono text-xs font-bold text-zinc-700">{String(conceptIndex + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">{concept.title}</h3>
                    <p className="mt-3 text-[16px] leading-8 text-zinc-400">{concept.body}</p>
                    <p className="mt-3 text-sm leading-7 text-zinc-500">{concept.application}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="mental-model" className="scroll-mt-28 border-b border-white/[0.08] py-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-blue-500">Core mental model</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Start with the right question</h2>
            <p className="mt-4 text-[17px] leading-8 text-zinc-400">{guide.model}</p>
            <div className="mt-6 rounded-r-xl border-l-2 border-blue-500 bg-blue-500/[0.06] px-5 py-4">
              <p className="text-sm font-medium leading-6 text-zinc-300">{lesson.summary}</p>
            </div>
          </section>

          <section id="framework" className="scroll-mt-28 border-b border-white/[0.08] py-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-blue-500">Step-by-step framework</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">A repeatable way to work</h2>
            <ol className="mt-6 space-y-4">
              {guide.steps.map((step, stepIndex) => (
                <li key={step} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="font-mono text-sm font-bold text-zinc-700">{String(stepIndex + 1).padStart(2, '0')}</span>
                  <p className="text-[16px] leading-7 text-zinc-400">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="application" className="scroll-mt-28 border-b border-white/[0.08] py-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-blue-500">Apply it</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Worked practice</h2>
            <div className="mt-5 rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
                <Icon name="target" size={15} className="text-blue-400" /> Practice prompt
              </div>
              <p className="mt-4 text-[16px] leading-7 text-zinc-300">{doc.example}</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {lesson.keyPoints.map((point) => (
                  <div key={point} className="rounded-lg border border-white/[0.07] bg-black/25 p-3 text-xs leading-5 text-zinc-500">
                    {point}
                  </div>
                ))}
              </div>
            </div>
            {doc.snippet && (
              <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.08] bg-[#090a0d]">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-2.5">
                  <span className="text-xs font-semibold text-zinc-500">Reference pattern</span>
                  <span className="font-mono text-[10px] text-zinc-700">Study → hide → rewrite</span>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-6 text-zinc-300">
                  <code>{doc.snippet}</code>
                </pre>
              </div>
            )}
          </section>

          <section id="tradeoffs" className="scroll-mt-28 border-b border-white/[0.08] py-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-violet-400">Trade-offs & validation</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Know what the approach costs</h2>
            <p className="mt-4 text-[16px] leading-8 text-zinc-400">{doc.tradeoff}</p>
            <div className="mt-5 rounded-r-xl border-l-2 border-violet-500 bg-violet-500/[0.06] px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-violet-400">Your deliverable</p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{doc.deliverable}</p>
            </div>
          </section>

          <section id="mistakes" className="scroll-mt-28 border-b border-white/[0.08] py-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-rose-400">Common mistakes</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">What usually goes wrong</h2>
            <ul className="mt-5 space-y-3">
              {guide.mistakes.map((mistake) => (
                <li key={mistake} className="flex gap-3 text-sm leading-6 text-zinc-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                  {mistake}
                </li>
              ))}
            </ul>
          </section>

          <section id="questions" className="scroll-mt-28 border-b border-white/[0.08] py-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-amber-400">Interview questions</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Check your understanding</h2>
            <ol className="mt-6 space-y-3">
              {doc.questions.map((question, questionIndex) => (
                <li key={question} className="grid grid-cols-[2rem_1fr] gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4">
                  <span className="font-mono text-xs font-bold text-amber-500/70">{String(questionIndex + 1).padStart(2, '0')}</span>
                  <p className="text-sm leading-6 text-zinc-300">{question}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="revision-checklist" className="scroll-mt-28 border-b border-white/[0.08] py-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-emerald-400">Revision checklist</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Mark complete only when</h2>
            <div className="mt-5 space-y-3">
              {doc.checklist.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-zinc-400">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-md border border-emerald-500/25 bg-emerald-500/10 text-emerald-400">
                    <Icon name="check" size={12} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-white">My note</h2>
                <p className="mt-1 text-xs text-zinc-600">Saved privately in this browser.</p>
              </div>
              <span className="text-xs text-zinc-600">{note.trim().split(/\s+/).filter(Boolean).length} words</span>
            </div>
            <textarea
              value={note}
              onChange={(event) => setNote(event.target.value)}
              rows={7}
              placeholder="Write the mental model in your own words…"
              className="mt-4 w-full resize-y rounded-lg border border-white/[0.08] bg-black/30 px-4 py-3 text-sm leading-6 text-zinc-200 outline-none transition-all placeholder:text-zinc-700 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
            />
          </section>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {previous ? (
              <Link to={lessonPath(trackId, previous.slug)} className="rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4 hover:border-blue-500/30">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-600">Previous</p>
                <p className="mt-2 text-sm font-semibold text-zinc-300">{previous.title}</p>
              </Link>
            ) : <div />}
            {next && (
              <Link to={lessonPath(trackId, next.slug)} className="rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4 text-right hover:border-blue-500/30">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-600">Next</p>
                <p className="mt-2 text-sm font-semibold text-zinc-300">{next.title}</p>
              </Link>
            )}
          </div>
        </article>
      </main>

      <aside className="fixed bottom-0 right-0 top-16 hidden w-[18rem] overflow-y-auto border-l border-white/[0.07] bg-[#08080a] p-5 xl:block">
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d0f] p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-zinc-400">Reading progress</span>
            <span className="font-bold text-blue-400">{readingProgress}%</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full rounded-full bg-blue-500" style={{ width: `${readingProgress}%` }} />
          </div>
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600">On this page</p>
        <nav className="mt-3 space-y-1 border-l border-white/[0.08] pl-3">
          {[
            ['overview', 'Overview'],
            ['outcomes', 'Learning outcomes'],
            ['concepts', 'Core concepts'],
            ['mental-model', 'Core mental model'],
            ['framework', 'Step-by-step framework'],
            ['application', 'Worked practice'],
            ['tradeoffs', 'Trade-offs & validation'],
            ['mistakes', 'Common mistakes'],
            ['questions', 'Interview questions'],
            ['revision-checklist', 'Revision checklist'],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} className="block py-1.5 text-xs text-zinc-600 hover:text-blue-400">{label}</a>
          ))}
        </nav>

        <div className="mt-7 space-y-2">
          <button
            type="button"
            onClick={() => updateFlag(progressKey, setComplete, !complete)}
            className={`flex h-10 w-full items-center justify-center gap-2 rounded-lg border text-sm font-semibold transition-all ${
              complete ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-blue-500 bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <Icon name="check" size={16} /> {complete ? 'Completed' : 'Mark complete'}
          </button>
          <button
            type="button"
            onClick={() => updateFlag(revisionKey, setRevision, !revision)}
            className={`flex h-10 w-full items-center justify-center gap-2 rounded-lg border text-sm font-semibold transition-all ${
              revision ? 'border-amber-500/30 bg-amber-500/10 text-amber-400' : 'border-white/[0.09] text-zinc-400 hover:bg-white/[0.04] hover:text-white'
            }`}
          >
            <Icon name="reset" size={16} /> {revision ? 'In revision list' : 'Add to revision'}
          </button>
        </div>
      </aside>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/[0.08] bg-[#08080a]/95 p-3 backdrop-blur-xl xl:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <button
            type="button"
            onClick={() => updateFlag(revisionKey, setRevision, !revision)}
            className={`grid h-11 w-11 place-items-center rounded-lg border ${revision ? 'border-amber-500/30 text-amber-400' : 'border-white/10 text-zinc-400'}`}
            aria-label="Toggle revision"
          >
            <Icon name="reset" size={17} />
          </button>
          <button
            type="button"
            onClick={() => updateFlag(progressKey, setComplete, !complete)}
            className={`flex h-11 flex-1 items-center justify-center gap-2 rounded-lg text-sm font-semibold ${
              complete ? 'bg-emerald-500/15 text-emerald-400' : 'bg-blue-500 text-white'
            }`}
          >
            <Icon name="check" size={16} /> {complete ? 'Completed' : 'Mark complete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EngineeringLessonPage;
