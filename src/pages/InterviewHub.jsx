import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { SectionHeading } from '../components/ui/index.jsx';
import ResumeAnalyzer from '../components/ResumeAnalyzer';
import { interviewBanks, countQuestions } from '../data/interview';

const EXTRA_TRACKS = [
  {
    to: '/system-design',
    title: 'System Design',
    short: 'SD',
    icon: 'layers',
    accent: 'text-primary',
    description: 'Framework, core concepts, reliability/SPOFs & a full HLD + LLD checklist.',
  },
  {
    to: '/java-notes',
    title: 'Java Interview Notes',
    short: 'Java',
    icon: 'bolt',
    accent: 'text-hard',
    description: 'Core Java, OOP, collections, multithreading & the tricky follow-ups.',
  },
];

const TrackCard = ({ to, icon, accent, title, description, meta }) => (
  <Link
    to={to}
    className="card group flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
  >
    <div className="flex items-center justify-between">
      <span className={`grid h-11 w-11 place-items-center rounded-xl bg-surface-2 ${accent}`}>
        <Icon name={icon} size={22} />
      </span>
      <Icon name="arrowUpRight" size={18} className="text-fg-subtle transition-colors group-hover:text-primary" />
    </div>
    <h3 className="mt-4 font-bold text-fg">{title}</h3>
    <p className="mt-1 flex-1 text-sm text-fg-muted">{description}</p>
    {meta && <p className="mt-3 text-xs font-medium text-fg-subtle">{meta}</p>}
  </Link>
);

const InterviewHub = () => (
  <div className="container-page pt-24 pb-16">
    <SectionHeading
      eyebrow="Interview Session"
      title="Conquer any interview"
      description="Upload your resume for an AI-generated question pack tailored to you — then drill the core rounds (Resume, SQL, OS, Networks, Java) with curated, model-answered question banks."
    />

    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <ResumeAnalyzer />

      <aside className="space-y-4">
        <div className="card p-6">
          <h2 className="flex items-center gap-2 font-bold text-fg">
            <Icon name="target" size={18} className="text-primary" /> How to use this
          </h2>
          <ol className="mt-4 space-y-3">
            {[
              'Upload your resume (PDF) or paste the text. It\'s read privately in your browser.',
              'Optionally add the role you\'re targeting for sharper questions.',
              'Get questions bucketed Easy → Hardest, with model answers and project deep-dives.',
              'Then practice the subject banks below until every answer feels automatic.',
            ].map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-fg-muted">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-2xs font-bold text-primary">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="card border-primary/20 bg-primary/5 p-6">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-primary">
            <Icon name="info" size={16} /> Private by design
          </p>
          <p className="mt-1 text-sm text-fg-muted">
            Your resume is parsed on your device. Only the extracted text is sent to generate questions — the file itself
            is never uploaded or stored.
          </p>
        </div>
      </aside>
    </div>

    {/* Subject banks */}
    <div className="mt-14">
      <h2 className="text-xl font-bold tracking-tight text-fg">Core interview rounds</h2>
      <p className="mt-1 text-sm text-fg-muted">
        Curated question banks with interview-ready answers — every question you're likely to face, easy to hardest.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {interviewBanks.map((bank) => (
          <TrackCard
            key={bank.slug}
            to={`/interview/${bank.slug}`}
            icon={bank.icon}
            accent={bank.accent}
            title={bank.title}
            description={bank.tagline}
            meta={`${countQuestions(bank)} prepared questions`}
          />
        ))}
        {EXTRA_TRACKS.map((t) => (
          <TrackCard key={t.to} {...t} description={t.description} />
        ))}
      </div>
    </div>
  </div>
);

export default InterviewHub;
