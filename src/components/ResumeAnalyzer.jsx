import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './ui/Icon';
import { api } from '../lib/api';
import { extractPdfText } from '../lib/pdf';

const LEVELS = [
  { key: 'easy', label: 'Easy', cls: 'bg-easy/10 text-easy border-easy/30' },
  { key: 'medium', label: 'Medium', cls: 'bg-medium/10 text-medium border-medium/30' },
  { key: 'hard', label: 'Hard', cls: 'bg-hard/10 text-hard border-hard/30' },
  { key: 'hardest', label: 'Hardest', cls: 'bg-primary/10 text-primary border-primary/30' },
];

const QAItem = ({ q, a }) => (
  <li className="rounded-xl border border-border bg-surface-2/40 p-4">
    <p className="text-sm font-semibold text-fg">Q. {q}</p>
    {a && (
      <p className="mt-1 flex gap-1.5 text-sm leading-relaxed text-fg-muted">
        <span className="font-semibold text-success">A.</span>
        <span>{a}</span>
      </p>
    )}
  </li>
);

const ResumeAnalyzer = () => {
  const [fileName, setFileName] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [role, setRole] = useState('');
  const [phase, setPhase] = useState('idle'); // idle | extracting | analyzing | done
  const [error, setError] = useState('');
  const [noKey, setNoKey] = useState(false);
  const [result, setResult] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);

  const readFile = async (file) => {
    if (!file) return;
    setError('');
    setNoKey(false);
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      setError('Please upload a PDF file (or paste your resume text below).');
      return;
    }
    setFileName(file.name);
    setPhase('extracting');
    try {
      const text = await extractPdfText(file);
      if (!text || text.length < 40) {
        setError('Could not read text from this PDF (it may be a scanned image). Paste your resume text instead.');
        setPhase('idle');
        return;
      }
      setResumeText(text);
      setPhase('idle');
    } catch {
      setError('Failed to read the PDF. Try pasting your resume text instead.');
      setPhase('idle');
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    readFile(e.dataTransfer.files?.[0]);
  };

  const analyze = async () => {
    setError('');
    setNoKey(false);
    const text = resumeText.trim();
    if (text.length < 40) {
      setError('Add your resume — upload a PDF or paste at least a few lines of text.');
      return;
    }
    setPhase('analyzing');
    setResult(null);
    try {
      const res = await api.analyzeResume({ resumeText: text.slice(0, 20000), role: role.trim() });
      setResult(res.analysis);
      setPhase('done');
    } catch (err) {
      // Any "AI unavailable" state (missing key, quota, upstream error, timeout)
      // shows the friendly fallback that points to the curated question banks.
      if ([503, 429, 502, 504].includes(err.status)) {
        setNoKey(true);
        if (err.message) setError(err.message);
      } else {
        setError(err.message || 'Analysis failed. Please try again.');
      }
      setPhase('idle');
    }
  };

  const reset = () => {
    setResult(null);
    setPhase('idle');
    setFileName('');
    setResumeText('');
    setError('');
    setNoKey(false);
  };

  const busy = phase === 'extracting' || phase === 'analyzing';

  return (
    <section className="card overflow-hidden">
      <div className="border-b border-border bg-surface-2/40 p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
            <Icon name="sparkles" size={22} />
          </span>
          <div>
            <h2 className="text-lg font-bold text-fg">AI Resume Interview Coach</h2>
            <p className="text-sm text-fg-muted">
              Upload your resume — get the exact questions an interviewer will ask, with model answers.
            </p>
          </div>
        </div>
      </div>

      {/* Input */}
      {phase !== 'done' && (
        <div className="space-y-5 p-6">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
              dragOver ? 'border-primary bg-primary/5' : 'border-border bg-surface-2/30'
            }`}
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-surface-2 text-fg-subtle">
              <Icon name="book" size={24} />
            </span>
            <p className="mt-3 text-sm font-medium text-fg">
              {fileName ? (
                <span className="inline-flex items-center gap-1.5 text-primary">
                  <Icon name="check" size={15} /> {fileName}
                </span>
              ) : (
                'Drag & drop your resume PDF here'
              )}
            </p>
            <p className="mt-1 text-xs text-fg-subtle">Your file is read in the browser — it never leaves your device.</p>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={busy}
              className="btn-secondary btn-sm mt-4"
            >
              <Icon name="arrowUpRight" size={16} /> {fileName ? 'Choose another' : 'Browse PDF'}
            </button>
            <input
              ref={inputRef}
              type="file"
              accept="application/pdf,.pdf"
              className="hidden"
              onChange={(e) => readFile(e.target.files?.[0])}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-surface px-3 text-xs font-medium uppercase tracking-wide text-fg-subtle">or paste text</span>
            </div>
          </div>

          <div>
            <label htmlFor="resume-text" className="mb-1.5 block text-sm font-medium text-fg">
              Resume text
            </label>
            <textarea
              id="resume-text"
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              rows={5}
              placeholder="Paste your resume content here if you don't have a PDF handy…"
              className="input min-h-[120px] resize-y"
            />
          </div>

          <div>
            <label htmlFor="target-role" className="mb-1.5 block text-sm font-medium text-fg">
              Target role <span className="font-normal text-fg-subtle">(optional)</span>
            </label>
            <input
              id="target-role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Backend Engineer, SDE Intern, Data Analyst"
              className="input"
            />
          </div>

          {error && (
            <div role="alert" className="flex items-start gap-2 rounded-lg border border-hard/30 bg-hard/10 px-3 py-2.5 text-sm text-hard">
              <Icon name="info" size={16} className="mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {noKey && (
            <div className="rounded-xl border border-medium/30 bg-medium/10 p-4 text-sm">
              <p className="flex items-center gap-1.5 font-semibold text-medium">
                <Icon name="info" size={16} /> AI coach is unavailable right now
              </p>
              <p className="mt-1 text-fg-muted">
                The live AI analysis is temporarily unavailable (it needs a configured Gemini key with quota). Meanwhile, use the curated{' '}
                <Link to="/interview/resume" className="font-semibold text-primary hover:underline">
                  Resume &amp; HR question bank
                </Link>{' '}
                — it covers every common resume question with model answers.
              </p>
            </div>
          )}

          <button type="button" onClick={analyze} disabled={busy} className="btn-primary btn-md w-full">
            {busy ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                {phase === 'extracting' ? 'Reading your PDF…' : 'Analysing your resume…'}
              </>
            ) : (
              <>
                <Icon name="sparkles" size={18} /> Generate my interview questions
              </>
            )}
          </button>
        </div>
      )}

      {/* Result */}
      {phase === 'done' && result && (
        <div className="space-y-6 p-6">
          <div className="flex items-center justify-between">
            <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-success">
              <Icon name="check" size={16} /> Your personalised prep pack
            </p>
            <button type="button" onClick={reset} className="btn-ghost btn-sm">
              <Icon name="reset" size={16} /> Start over
            </button>
          </div>

          {result.summary && (
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">Interviewer's read on your resume</p>
              <p className="text-sm leading-relaxed text-fg">{result.summary}</p>
            </div>
          )}

          {(result.strengths?.length || result.gaps?.length) && (
            <div className="grid gap-4 sm:grid-cols-2">
              {result.strengths?.length > 0 && (
                <div className="rounded-xl border border-border p-4">
                  <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-success">
                    <Icon name="check" size={15} /> Strengths to lead with
                  </p>
                  <ul className="space-y-1.5">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="flex gap-2 text-sm text-fg-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success/60" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {result.gaps?.length > 0 && (
                <div className="rounded-xl border border-border p-4">
                  <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-medium">
                    <Icon name="info" size={15} /> Watch out for
                  </p>
                  <ul className="space-y-1.5">
                    {result.gaps.map((s, i) => (
                      <li key={i} className="flex gap-2 text-sm text-fg-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-medium/60" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {result.questions &&
            LEVELS.map(({ key, label, cls }) =>
              result.questions[key]?.length > 0 ? (
                <div key={key}>
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-fg">
                    <span className={`badge border ${cls}`}>{label}</span>
                    questions they can ask
                  </h3>
                  <ul className="space-y-3">
                    {result.questions[key].map((item, i) => (
                      <QAItem key={i} q={item.q} a={item.a} />
                    ))}
                  </ul>
                </div>
              ) : null
            )}

          {result.projectDeepDives?.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-bold text-fg">Project deep-dives</h3>
              <div className="space-y-4">
                {result.projectDeepDives.map((proj, i) => (
                  <div key={i} className="rounded-xl border border-border p-4">
                    <p className="mb-2 flex items-center gap-1.5 font-semibold text-fg">
                      <Icon name="layers" size={16} className="text-primary" /> {proj.project}
                    </p>
                    <ul className="space-y-3">
                      {proj.questions?.map((item, j) => (
                        <QAItem key={j} q={item.q} a={item.a} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {result.questionsToAsk?.length > 0 && (
            <div className="rounded-xl border border-border bg-surface-2/40 p-4">
              <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-fg">
                <Icon name="sparkles" size={15} className="text-primary" /> Smart questions to ask them
              </p>
              <ul className="space-y-1.5">
                {result.questionsToAsk.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm text-fg-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {result.tips?.length > 0 && (
            <div className="rounded-xl border border-medium/30 bg-medium/10 p-4">
              <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-medium">
                <Icon name="bolt" size={15} /> Coach's tips
              </p>
              <ul className="space-y-1.5">
                {result.tips.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm text-fg-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-medium/60" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ResumeAnalyzer;
