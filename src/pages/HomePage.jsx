import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { ProgressBar, SectionHeading } from '../components/ui/index.jsx';
import { useDsaStats } from '../hooks/useDsaStats';
import { topicSummaries, TOTAL_PROBLEMS } from '../lib/problems';
import { roadmap } from '../data/roadmap';

const HOW_IT_WORKS = [
  {
    icon: 'route',
    title: 'Follow the roadmap',
    body: 'Start from fundamentals and progress through 16 structured stages — from arrays to dynamic programming and beyond.',
  },
  {
    icon: 'code',
    title: 'Solve curated problems',
    body: `Practise ${TOTAL_PROBLEMS} hand-picked interview problems with direct links to LeetCode and TakeUForward.`,
  },
  {
    icon: 'chart',
    title: 'Track your progress',
    body: 'Watch your streak, topic mastery and difficulty breakdown grow — everything saved privately in your browser.',
  },
];

const BENEFITS = [
  { icon: 'target', title: 'Interview-focused', body: 'Every problem is chosen for real coding-interview relevance — no filler.' },
  { icon: 'bolt', title: 'Fast & focused', body: 'Sign in once, then jump straight into problems, engineering tracks, and revision.' },
  { icon: 'lock', title: 'Private by design', body: 'Your progress syncs to your account. No tracking, no data selling.' },
  { icon: 'layers', title: 'Structured learning', body: 'A clear path with lessons, problems and estimated time for each topic.' },
  { icon: 'book', title: 'Rich resources', body: 'Notes on DSA, C++ STL, SQL, system design, core CS subjects and more.' },
  { icon: 'sparkles', title: 'Free forever', body: 'Open-source and completely free. Learn without paywalls or limits.' },
];

const TESTIMONIALS = [
  {
    quote:
      'The roadmap finally gave my prep a structure. Seeing my streak grow kept me consistent for weeks before my interviews.',
    name: 'Final-year CS student',
    role: 'Campus placements',
  },
  {
    quote:
      'Signing in once unlocked everything — problems, engineering tracks, and progress that follows me across devices.',
    name: 'Self-taught developer',
    role: 'Switching to SWE',
  },
  {
    quote:
      'Clean, fast and distraction-free. The topic-wise breakdown helped me find and fix my weak areas quickly.',
    name: 'Competitive programmer',
    role: 'ICPC aspirant',
  },
];

const FAQS = [
  {
    q: 'Is MyDSA free to use?',
    a: 'Yes — MyDSA is completely free and open-source. There are no paywalls or premium tiers.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'Yes. Sign up (email or Google) to unlock problems, engineering content, notes, and progress sync across devices.',
  },
  {
    q: 'Where do the problems come from?',
    a: `We curate ${TOTAL_PROBLEMS} high-signal interview problems across ${topicSummaries.length} core topics, each linked to LeetCode and TakeUForward so you can solve them where you prefer.`,
  },
  {
    q: 'Will my progress sync across devices?',
    a: 'Yes. Once you are signed in, your solved problems, bookmarks, and revision data sync to your account so you can continue on any device.',
  },
  {
    q: 'Can I use it to prepare for a specific company?',
    a: 'Absolutely. Use the roadmap to build fundamentals, then filter problems by topic and difficulty to focus on the areas your target companies emphasise.',
  },
];

const FaqItem = ({ item, open, onToggle, id }) => (
  <div className="card overflow-hidden">
    <h3>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`faq-panel-${id}`}
        id={`faq-btn-${id}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-semibold text-fg">{item.q}</span>
        <Icon
          name="chevronDown"
          size={20}
          className={`shrink-0 text-fg-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
    </h3>
    {open && (
      <div id={`faq-panel-${id}`} role="region" aria-labelledby={`faq-btn-${id}`} className="px-5 pb-5 text-fg-muted">
        {item.a}
      </div>
    )}
  </div>
);

const HomePage = () => {
  const { stats } = useDsaStats();
  const [openFaq, setOpenFaq] = useState(0);
  const featuredTopics = topicSummaries.slice(0, 6);

  const platformStats = [
    { value: TOTAL_PROBLEMS, label: 'Curated problems' },
    { value: topicSummaries.length, label: 'Core topics' },
    { value: roadmap.length, label: 'Roadmap stages' },
    { value: '100%', label: 'Free & private' },
  ];

  return (
    <div>
      {/* ------------------------------- Hero ------------------------------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 surface-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="container-page pb-16 pt-28 sm:pt-36 lg:pb-24 lg:pt-40">
          <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0 animate-fade-slide-up">
              <span className="badge border border-border bg-surface text-fg-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Master DSA, the structured way
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-6xl">
                Crack coding interviews with a plan that{' '}
                <span className="text-gradient">actually sticks</span>.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-fg-muted sm:text-lg">
                MyDSA turns scattered practice into a clear path. Sign in to unlock the roadmap,
                {TOTAL_PROBLEMS} curated problems, engineering tracks, and progress that syncs
                across devices.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link to="/signup" className="btn-primary btn-lg">
                  Get started free <Icon name="arrowRight" size={18} />
                </Link>
                <Link to="/login" className="btn-secondary btn-lg">
                  Log in
                </Link>
              </div>
              <dl className="mt-10 grid max-w-xl grid-cols-2 border-t border-border/70 pt-6 sm:grid-cols-4 sm:divide-x sm:divide-border/70">
                {platformStats.map((s) => (
                  <div key={s.label} className="min-w-0 py-2 first:pl-0 sm:px-5">
                    <dt className="text-2xl font-bold tracking-[-0.03em] text-fg">{s.value}</dt>
                    <dd className="mt-0.5 text-xs font-medium leading-5 text-fg-muted sm:text-[13px]">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Hero visual: progress preview card */}
            <div className="relative min-w-0 animate-scale-in lg:pl-4">
              <div className="hero-progress-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-[10px] border border-primary/30 bg-primary/15 text-sm font-bold text-primary">
                      You
                    </span>
                    <div>
                      <p className="font-semibold text-fg">Your progress</p>
                      <p className="text-sm text-fg-muted">Keep the streak alive</p>
                    </div>
                  </div>
                  <span className="badge border border-medium/15 bg-medium/10 text-medium">
                    <Icon name="flame" size={14} /> {stats.currentStreak}d
                  </span>
                </div>

                <div className="mt-7">
                  <div className="flex items-end justify-between">
                    <span className="text-sm text-fg-muted">Problems solved</span>
                    <span className="text-sm font-semibold text-fg">
                      {stats.totalSolved} / {stats.totalProblems}
                    </span>
                  </div>
                  <ProgressBar value={stats.percent} className="mt-2" label="Overall progress" />
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2.5">
                  {[
                    { k: 'Easy', v: stats.byDifficulty.Easy, c: 'text-easy' },
                    { k: 'Medium', v: stats.byDifficulty.Medium, c: 'text-medium' },
                    { k: 'Hard', v: stats.byDifficulty.Hard, c: 'text-hard' },
                  ].map((d) => (
                    <div key={d.k} className="rounded-lg border border-border/60 bg-surface-2/75 p-3 text-center">
                      <p className={`text-xl font-bold ${d.c}`}>{d.v}</p>
                      <p className="text-xs text-fg-muted">{d.k}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3 border-t border-border/70 pt-5">
                  {stats.topics.slice(0, 3).map((t) => (
                    <div key={t.topic} className="grid min-w-0 grid-cols-[minmax(0,6.5rem)_minmax(0,1fr)_2.25rem] items-center gap-2.5 sm:grid-cols-[7rem_minmax(0,1fr)_2.25rem]">
                      <span className="min-w-0 truncate text-sm text-fg-muted">{t.topic}</span>
                      <ProgressBar value={t.percent} className="flex-1" label={`${t.topic} progress`} />
                      <span className="w-9 text-right text-xs font-medium text-fg-subtle">{t.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- How it works -------------------------- */}
      <section className="container-page py-16">
        <SectionHeading
          eyebrow="How it works"
          title="From zero to interview-ready in three steps"
          description="A simple loop that compounds: learn a concept, practise it, and track the mastery you build over time."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={step.title} className="card-interactive p-6">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={step.icon} size={22} />
                </span>
                <span className="text-3xl font-extrabold text-border-strong">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-fg">{step.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------- Featured topics ------------------------ */}
      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Topics"
          title="Featured DSA topics"
          description="Structured coverage of the concepts that show up again and again in interviews."
          action={
            <Link to="/topics" className="btn-secondary btn-md self-start">
              View all topics <Icon name="arrowRight" size={16} />
            </Link>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTopics.map((t) => (
            <Link key={t.topic} to={`/problems?topic=${encodeURIComponent(t.topic)}`} className="card-interactive p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface-2 text-primary">
                  <Icon name={t.icon} size={22} />
                </span>
                <h3 className="font-semibold text-fg">{t.topic}</h3>
              </div>
              <p className="mt-3 text-sm text-fg-muted">{t.blurb}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-fg-subtle">
                <span className="font-semibold text-fg">{t.total}</span> problems
                <span className="text-border-strong">·</span>
                <span className="text-easy">{t.counts.Easy} easy</span>
                <span className="text-medium">{t.counts.Medium} med</span>
                <span className="text-hard">{t.counts.Hard} hard</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --------------------------- Roadmap preview ------------------------ */}
      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Roadmap"
          title="A learning path that builds on itself"
          description="Sixteen carefully ordered stages take you from programming basics to advanced algorithms."
          action={
            <Link to="/roadmap" className="btn-secondary btn-md self-start">
              See full roadmap <Icon name="arrowRight" size={16} />
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roadmap.slice(0, 8).map((stage, i) => (
            <div key={stage.id} className="card p-5">
              <div className="flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2 text-primary">
                  <Icon name={stage.icon} size={18} />
                </span>
                <span className="text-sm font-semibold text-fg-subtle">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-3 font-semibold text-fg">{stage.title}</h3>
              <p className="mt-1 text-xs text-fg-muted">{stage.level} · {stage.hours}h</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------ Benefits ---------------------------- */}
      <section className="border-y border-border bg-surface">
        <div className="container-page py-16">
          <SectionHeading
            eyebrow="Why MyDSA"
            title="Everything you need, nothing you don't"
            description="Purpose-built for focused, sustainable interview preparation."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={b.icon} size={22} />
                </span>
                <div>
                  <h3 className="font-semibold text-fg">{b.title}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- Testimonials -------------------------- */}
      <section className="container-page py-16">
        <SectionHeading
          eyebrow="Loved by learners"
          title="Built for the way you actually study"
          description="Representative voices from the kinds of learners MyDSA is designed for."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="card flex flex-col p-6">
              <div className="flex gap-0.5 text-medium">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="starFilled" size={16} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-fg">“{t.quote}”</blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-semibold text-fg">{t.name}</p>
                <p className="text-sm text-fg-muted">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ------------------------------- FAQ -------------------------------- */}
      <section className="container-page py-16">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              id={i}
              item={item}
              open={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
            />
          ))}
        </div>
      </section>

      {/* ------------------------------ CTA band ---------------------------- */}
      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent px-6 py-14 text-center sm:px-12">
          <div className="absolute inset-0 surface-grid opacity-10" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Your next solved problem is one click away
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              Start the roadmap today and build a streak you'll be proud of by interview season.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/signup" className="btn btn-lg bg-white text-primary hover:bg-white/90">
                Create free account <Icon name="arrowRight" size={18} />
              </Link>
              <Link to="/login" className="btn btn-lg border border-white/40 text-white hover:bg-white/10">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
