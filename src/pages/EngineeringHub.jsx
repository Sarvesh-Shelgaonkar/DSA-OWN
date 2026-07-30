import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import EngineeringComplexityChart from '../components/engineering/EngineeringComplexityChart';

const TRACKS = {
  SDE: {
    eyebrow: 'ONESTOP PLATFORM FOR ENGINEERS',
    title: 'Master Your Software Engineering Interviews',
    description:
      'Master System Design, Ace DSA with confidence, and Build real engineering skills that make companies want to hire you.',
  },
  'AI Engineer': {
    eyebrow: 'Structured AI engineering track',
    title: 'Build Production-Ready AI Engineering Skills',
    description:
      'Learn foundations, prompting, RAG, agents, evaluation and deployment in the order real systems demand.',
  },
  DevOps: {
    eyebrow: 'From containers to production',
    title: 'Master Modern DevOps Engineering',
    description:
      'Move from Docker fundamentals to Kubernetes, CI/CD, observability, infrastructure and production reliability.',
  },
};

const ARCHITECTURE_CARDS = [
  {
    icon: 'layers',
    title: 'Master High Level Design',
    description:
      'Without skippable topics, built for interview context. Also learn how real scalable systems are built, high-level design for architecture decisions.',
    to: '/engineering/system-design',
    label: 'High Level Design',
  },
  {
    icon: 'grid',
    title: 'Master Low Level Design',
    description:
      'Without skippable topics, built for interview context. Build real-world class diagrams, relationships, design principles, and API-level system components.',
    to: '/engineering/system-design',
    label: 'Low Level Design',
  },
  {
    icon: 'sparkles',
    title: 'System Design Scenarios',
    description:
      'Real scenario-based system design cross-questioning that actually comes up in interviews. 90% of interviews touch these.',
    to: '/engineering/system-design',
    label: 'Interview scenarios',
  },
];

const LEARNING_PATHS = [
  {
    icon: 'grid',
    title: 'Master DSA Pattern In Systematic Way',
    description: 'See how solutions are built, not just read.',
    to: '/engineering/dsa',
    tags: ['Two pointers', 'Sliding window', 'Graphs'],
  },
  {
    icon: 'layers',
    title: 'System Design (Complete One)',
    description: 'HLD & LLD with real diagrams, fully covered.',
    to: '/engineering/system-design',
    tags: ['HLD', 'LLD', 'Trade-offs'],
  },
  {
    icon: 'route',
    title: 'Software Engineer Sheet (DSA)',
    description: '300 problems, pattern-sorted with streak tracking.',
    to: '/engineering/sheets',
    tags: ['Curated', 'Pattern-first', 'Tracked'],
  },
  {
    icon: 'trophy',
    title: 'Competitive Programming (Structured Way)',
    description: 'Interview-grade competitive programming for speed.',
    to: '/engineering/competitive',
    tags: ['Practice', 'Speed', 'Challenges'],
  },
  {
    icon: 'book',
    title: 'Master CS Fundamentals (Interview)',
    description: 'OS, DBMS & SQL, and Computer Networking, interview-ready.',
    to: '/engineering/interview',
    tags: ['OS', 'DBMS', 'Networks'],
  },
  {
    icon: 'user',
    title: 'Master Behavioural Interview',
    description: 'STAR stories, leadership & HR round prep.',
    to: '/engineering/interview',
    tags: ['STAR', 'Leadership', 'HR'],
  },
  {
    icon: 'reset',
    title: 'System Design Interview Patterns',
    description: 'The building blocks behind every great answer.',
    to: '/engineering/revision',
    tags: ['Saved', 'Weak areas', 'Recall'],
  },
  {
    icon: 'code',
    title: 'Engineering Newsletter',
    description: 'System Design stories, every week.',
    to: '/engineering/newsletter',
    tags: ['Stories', 'Architecture', 'Weekly'],
  },
  {
    icon: 'sparkles',
    title: 'AI Engineering',
    description: 'Foundations, RAG, agents, evaluation and production.',
    to: '/engineering/ai',
    tags: ['RAG', 'Agents', 'Evaluation'],
  },
  {
    icon: 'route',
    title: 'DevOps Engineering',
    description: 'Containers, Kubernetes, delivery and reliability.',
    to: '/engineering/devops',
    tags: ['Docker', 'Kubernetes', 'SRE'],
  },
];

const WHY_ITEMS = [
  {
    title: 'STRUCTURED, NOT SCATTERED',
    body: 'Engineers choose MyDSA Engineering because it gives clarity in a space where learning often feels scattered. Instead of jumping across random videos and playlists, everything here is structured in the right order so that Low-Level Design and High-Level Design finally make sense. Every concept connects to the next until system design becomes something you understand deeply, not just memorize.',
  },
  {
    title: 'DSA PATTERN-FIRST',
    body: "One of the most loved parts of the platform is the DSA pattern-wise problem set. You don't solve problems randomly. You master every pattern from two pointers to sliding window, trees, graphs, heaps, DP, and more. Every week new pattern-based challenges are added so your problem-solving ability keeps improving without searching across 10 different platforms.",
  },
  {
    title: 'REAL COMPANIES, REAL ARCHITECTURES',
    body: 'Learning stays exciting because everything is taught using real architectures from real companies. When you understand how Amazon handles massive traffic or how Netflix streams globally, system design stops feeling intimidating. You understand why technologies are chosen, how trade-offs are made, and what bottlenecks matter in production.',
  },
  {
    title: 'STAY AHEAD WITH THE NEWSLETTER',
    body: 'Short engineering articles and weekly revision stories make sure you never fall behind. Learn the latest scaling lessons, backend patterns, and architecture decisions in a format designed to be retained and reused.',
  },
  {
    title: 'AI ENGINEERING, STRUCTURED THE SAME WAY',
    body: 'The platform now covers AI Engineering end to end: math and classical ML foundations, deep learning, prompting, RAG, fine-tuning, agent patterns, orchestration, evaluation, and deployment. Same systematic approach as the DSA and system design content: every topic mapped out in order, nothing scattered, so you can go from fundamentals to shipping real AI systems with confidence.',
  },
  {
    title: 'DEVOPS ENGINEERING, FROM DOCKER TO PRODUCTION',
    body: 'The platform also covers DevOps Engineering end to end: Docker, Kubernetes, Terraform, Ansible, CI/CD, monitoring and logging, SRE practices, and security (DevSecOps). Same structured, pattern-first approach as everything else on the platform, so you go from container basics to running real production systems without piecing it together from a dozen scattered tutorials.',
  },
  {
    title: 'CONFIDENCE, NOT JUST KNOWLEDGE',
    body: 'More than interview prep, MyDSA Engineering builds confidence. You learn how to reason about scale, defend decisions, and speak like a senior engineer. The platform is built to help engineers grow faster, stay curious, and become the kind of developers companies rely on.',
  },
];

const PatternPreview = ({ type }) => {
  const values = type === 'window' ? [3, 1, 4, 2, 5, 9, 2, 6, 5, 3] : [2, 4, 6, 8, 10, 12, 14, 16];
  return (
    <div className="rounded-lg border border-white/[0.07] bg-black/30 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
          {type === 'window' ? 'Sliding window pattern' : 'Two pointers pattern'}
        </span>
        <span className="rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-1 text-[10px] font-semibold text-blue-400">
          Interactive
        </span>
      </div>
      <div className="grid grid-cols-8 gap-1.5 sm:grid-cols-10">
        {values.map((value, index) => {
          const active = type === 'window' ? index >= 2 && index <= 6 : index === 1 || index === values.length - 2;
          return (
            <div key={`${type}-${index}`} className="min-w-0 text-center">
              <div
                className={`grid aspect-square place-items-center rounded-md border text-xs font-semibold ${
                  active
                    ? 'border-blue-500/50 bg-blue-500/15 text-blue-300'
                    : 'border-white/[0.08] bg-white/[0.025] text-zinc-400'
                }`}
              >
                {value}
              </div>
              <span className="mt-1 block text-[9px] text-zinc-600">{index}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex items-center gap-3 text-[10px] font-semibold text-blue-400">
        <span>{type === 'window' ? 'L · 2' : 'L · 1'}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-blue-500/60 via-blue-500/20 to-blue-500/60" />
        <span>{type === 'window' ? 'R · 6' : 'R · 6'}</span>
      </div>
    </div>
  );
};

const ArchitecturePreview = () => (
  <div className="relative grid grid-cols-3 items-center gap-2 rounded-lg border border-white/[0.07] bg-black/30 p-4">
    <div className="rounded-md border border-blue-500/25 bg-blue-500/10 px-2 py-3 text-center text-[10px] font-semibold text-blue-300">
      Client
    </div>
    <div className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-3 text-center text-[10px] font-semibold text-zinc-300">
      API
    </div>
    <div className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-3 text-center text-[10px] font-semibold text-emerald-300">
      Cache
    </div>
    <span className="absolute left-[31%] top-1/2 h-px w-[7%] bg-zinc-700" />
    <span className="absolute right-[31%] top-1/2 h-px w-[7%] bg-zinc-700" />
  </div>
);

const SheetPreview = ({ competitive = false }) => {
  const rows = competitive
    ? [
        ['Implementation & Simulation', '0 / 26'],
        ['Greedy', '0 / 24'],
        ['Math & Number Theory', '0 / 24'],
      ]
    : [
        ['Arrays', '0 / 19'],
        ['Strings', '0 / 16'],
        ['Two Pointers', '0 / 16'],
      ];

  return (
    <div className="aspect-[16/10] overflow-hidden border-b border-white/[0.07] bg-[#08080a] p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`grid h-7 w-7 place-items-center rounded-lg ${competitive ? 'bg-rose-500/15 text-rose-400' : 'bg-blue-500/15 text-blue-400'}`}>
            <Icon name={competitive ? 'trophy' : 'code'} size={14} />
          </span>
          <span className="text-xs font-bold text-white">My<span className={competitive ? 'text-rose-400' : 'text-blue-400'}>DSA</span></span>
        </div>
        <span className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2 py-1 text-[9px] font-semibold text-zinc-500">
          {competitive ? 'CF-18' : 'DSA-31'}
        </span>
      </div>
      <div className="mt-5 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-600">{competitive ? 'Competitive track' : 'Interview track'}</p>
          <p className="mt-1 text-sm font-bold text-zinc-200">{competitive ? 'Build contest speed' : 'Master interview patterns'}</p>
        </div>
        <span className={`font-mono text-[10px] font-bold ${competitive ? 'text-rose-400' : 'text-blue-400'}`}>0% complete</span>
      </div>
      <div className="mt-4 space-y-2">
        {rows.map(([label, count], index) => (
          <div key={label} className="flex items-center gap-3 rounded-lg border border-white/[0.07] bg-black/30 px-3 py-2.5">
            <span className="font-mono text-[9px] text-zinc-700">0{index + 1}</span>
            <span className="min-w-0 flex-1 truncate text-[10px] font-semibold text-zinc-400">{label}</span>
            <div className="h-1 w-12 overflow-hidden rounded-full bg-white/[0.06]">
              <div className={`h-full w-1/4 rounded-full ${competitive ? 'bg-rose-500' : 'bg-blue-500'}`} />
            </div>
            <span className="font-mono text-[9px] text-zinc-600">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ReaderPreview = () => (
  <div className="grid min-h-[310px] grid-cols-[7rem_1fr] overflow-hidden rounded-lg border border-white/[0.07] bg-[#08080a] sm:grid-cols-[9rem_1fr]">
    <div className="border-r border-white/[0.07] bg-[#0b0b0d] p-3">
      <div className="flex items-center gap-2 text-[10px] font-bold text-white">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-blue-500 text-[9px] text-white">M</span>
        MyDSA
      </div>
      <p className="mt-5 text-[8px] font-bold uppercase tracking-[0.14em] text-zinc-700">Documents</p>
      {['Start Here', 'Big O Notation', 'Arrays', 'Two Pointers', 'Sliding Window'].map((item, index) => (
        <div
          key={item}
          className={`mt-1.5 truncate rounded-md px-2 py-2 text-[9px] font-medium ${
            index === 0 ? 'bg-blue-500/10 text-blue-400' : 'text-zinc-600'
          }`}
        >
          {item}
        </div>
      ))}
    </div>
    <div className="p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-blue-500">Pattern-first learning</span>
        <span className="font-mono text-[8px] text-zinc-700">01 / 35</span>
      </div>
      <h3 className="mt-3 text-base font-bold tracking-tight text-white sm:text-lg">How to Solve DSA Problems Effectively</h3>
      <p className="mt-2 max-w-md text-[10px] leading-5 text-zinc-500">
        Learn the mental model, trace the invariant, study a worked example, and practise until the pattern is yours.
      </p>
      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {['Understand', 'Apply', 'Revise'].map((item, index) => (
          <div key={item} className="rounded-lg border border-white/[0.07] bg-white/[0.025] p-3">
            <span className="font-mono text-[8px] text-zinc-700">0{index + 1}</span>
            <p className="mt-2 text-[10px] font-semibold text-zinc-300">{item}</p>
            <div className="mt-2 h-1 rounded-full bg-white/[0.06]">
              <div className="h-full w-1/2 rounded-full bg-blue-500/70" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border-l-2 border-blue-500 bg-blue-500/[0.05] px-3 py-2.5 text-[9px] leading-4 text-zinc-500">
        Every document includes concepts, examples, trade-offs, interview questions, and a revision checklist.
      </div>
    </div>
  </div>
);

const EngineeringHub = () => {
  const [track, setTrack] = useState('SDE');
  const [query, setQuery] = useState('');
  const [complexityOpen, setComplexityOpen] = useState(false);
  const trackContent = TRACKS[track];

  const filteredPaths = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return LEARNING_PATHS;
    return LEARNING_PATHS.filter((item) =>
      [item.title, item.description, ...item.tags].join(' ').toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100">
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 surface-grid opacity-[0.09] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
        <div className="container-page relative pb-16 pt-28 sm:pb-20 sm:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex rounded-full border border-white/[0.08] bg-white/[0.035] p-1">
              {Object.keys(TRACKS).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTrack(item)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    track === item
                      ? 'bg-zinc-100 text-zinc-950 shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-200'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {trackContent.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              {trackContent.title.split('Software Engineering').map((part, index, all) => (
                <React.Fragment key={part}>
                  {part}
                  {index < all.length - 1 && <span className="text-blue-500">Software Engineering</span>}
                </React.Fragment>
              ))}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              {trackContent.description}
            </p>

            <label className="mx-auto mt-8 flex h-12 max-w-xl items-center gap-3 rounded-xl border border-white/10 bg-[#0d0d0f] px-4 text-left shadow-[0_18px_50px_rgb(0_0_0/0.35)] transition-all focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/15">
              <Icon name="search" size={17} className="shrink-0 text-zinc-500" />
              <span className="sr-only">Search engineering topics</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search topics, patterns and resources…"
                className="min-w-0 flex-1 bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-600"
              />
              <kbd className="hidden rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-semibold text-zinc-500 sm:block">
                ⌘K
              </kbd>
            </label>
            <button
              type="button"
              onClick={() => setComplexityOpen(true)}
              className="group mx-auto mt-4 inline-flex h-10 items-center gap-2 rounded-lg border border-white/[0.09] bg-white/[0.035] px-3.5 text-xs font-semibold text-zinc-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/35 hover:bg-blue-500/[0.08] hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
            >
              <Icon name="stopwatch" size={15} className="text-blue-400" />
              Time Complexity Chart
              <span className="hidden text-[10px] font-medium text-zinc-600 sm:inline">Big-O quick reference</span>
              <Icon name="arrowRight" size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="mb-8 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-500">
            System design & architecture
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Learn to reason about real systems
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {ARCHITECTURE_CARDS.map((card, index) => (
            <Link
              key={card.title}
              to={card.to}
              className="group rounded-xl border border-white/[0.08] bg-[#0c0c0e] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/30 hover:bg-[#101014]"
            >
              {index === 0 ? (
                <ArchitecturePreview />
              ) : index === 2 ? (
                <div className="relative h-[78px] overflow-hidden rounded-lg border border-white/[0.07] bg-black/30">
                  <img
                    src="/engineering/interviewer.png"
                    alt="Interviewer asking a system design scenario"
                    loading="lazy"
                    className="h-full w-full object-cover object-top opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/15 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-md bg-red-500 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-white">
                    90% interviews touch this
                  </span>
                </div>
              ) : (
                <div className="grid h-[78px] place-items-center rounded-lg border border-white/[0.07] bg-black/30">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <Icon name={card.icon} size={20} />
                  </span>
                </div>
              )}
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
                {card.label}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-100">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{card.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400">
                Explore track
                <Icon name="arrowRight" size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-[#08080a]">
        <div className="container-page py-16 sm:py-20">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-500">
                Data structures & algorithms
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Learn DSA the systematic way
              </h2>
            </div>
            <Link to="/engineering/dsa" className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-300 hover:text-white">
              View all patterns <Icon name="arrowRight" size={15} />
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Link to="/engineering/dsa/docs/sliding-window-introduction" className="group rounded-xl border border-white/[0.08] bg-[#0c0c0e] p-5 hover:border-blue-500/30">
              <PatternPreview type="window" />
              <h3 className="mt-5 text-lg font-semibold text-white">Sliding Window · Subarray Problems</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Understand how a moving range turns repeated work into a clean linear-time solution.
              </p>
            </Link>
            <Link to="/engineering/dsa/docs/two-pointers-introduction" className="group rounded-xl border border-white/[0.08] bg-[#0c0c0e] p-5 hover:border-blue-500/30">
              <PatternPreview type="pointers" />
              <h3 className="mt-5 text-lg font-semibold text-white">Two Pointers · Target Sum</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Learn when two coordinated indexes replace nested loops and reveal the intended pattern.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-4 lg:grid-cols-2">
          <Link
            to="/engineering/sheets"
            className="group overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0e] transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/30"
          >
            <SheetPreview />
            <div className="p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-500">
                DSA-31 (DSA Sheet For Engineers)
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">DSA-31 Sheet</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                A curated DSA sheet for software engineering interviews, built to sharpen your problem-solving the
                right way. Pattern-sorted problems.
              </p>
            </div>
          </Link>

          <Link
            to="/engineering/sheets?mode=competitive"
            className="group overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0e] transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/30"
          >
            <SheetPreview competitive />
            <div className="p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-500">
                CF-18 (Competitive Programming)
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">CF-18 DSA Sheet</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                A curated competitive-programming problems of Codeforces problems by topic and rating. Build real
                speed and sharpen the problem-solving from 800 to 2200+ rating growth.
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0e] p-2 shadow-[0_24px_70px_rgb(37_99_235/0.08)]">
            <ReaderPreview />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-500">
              Data Structures & Algorithms (Systematic Way)
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-white">
              Master DSA Pattern In Systematic Way
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Anyone can read a solution and nod along. Here you see how the answer is actually built, the thinking,
              the flowcharts, the little ‘aha’ moment. So the next unseen problem doesn’t scare you.
            </p>
            <Link to="/engineering/dsa" className="btn-primary btn-md mt-7">
              Explore <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-[#08080a]">
        <div className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Everything you need, in one place
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-white">
            Everything an engineer needs to crack interviews, instead of ten open tabs.
          </h2>
        </div>

        {filteredPaths.length > 0 ? (
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPaths.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group flex min-h-52 flex-col rounded-xl border border-white/[0.08] bg-[#0c0c0e] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/30 hover:bg-[#101014]"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.035] text-zinc-400 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                  <Icon name={item.icon} size={18} />
                </span>
                <h3 className="mt-5 font-semibold text-zinc-100">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-500">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-white/[0.04] px-2 py-1 text-[10px] font-medium text-zinc-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed border-white/10 py-16 text-center">
            <Icon name="search" size={22} className="mx-auto text-zinc-600" />
            <p className="mt-3 text-sm font-medium text-zinc-400">No learning paths match “{query}”.</p>
            <button type="button" onClick={() => setQuery('')} className="mt-3 text-sm font-semibold text-blue-400">
              Clear search
            </button>
          </div>
        )}
        </div>
      </section>

      <section className="border-b border-white/[0.06] bg-[#050505]">
        <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-500">WHY US</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-white">
              Why Engineers Choose MyDSA Engineering
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Build real engineering depth, not just interview skills.
            </p>
            <Link to="/engineering/dsa" className="btn-primary btn-md mt-7">
              Start the roadmap <Icon name="arrowRight" size={16} />
            </Link>
          </div>

          <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {WHY_ITEMS.map((item, index) => (
              <div key={item.title} className="grid gap-3 py-6 sm:grid-cols-[2.5rem_1fr]">
                <span className="font-mono text-xs font-semibold text-zinc-700">0{index + 1}</span>
                <div>
                  <h3 className="font-semibold text-zinc-100">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="rounded-xl border border-white/[0.08] bg-[#0c0c0e] p-6 sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-500">
                PREMIUM USERS REVIEWS · SUCCESS STORY
              </p>
              <span className="text-4xl leading-none text-blue-500">“</span>
              <blockquote className="mt-2 text-base font-medium leading-8 text-zinc-200 sm:text-lg">
                I&apos;ve been working as an SDE at a startup in Bengaluru for the last five years, so I wasn&apos;t
                looking for another course. I just wanted a solid place to revise before my interview cycle started.
                For about a month, I revised almost everything from the platform, especially the System Design modules
                and the DSA patterns. During multiple interview rounds, I found myself using the same approach, the
                same trade-offs, and the same thought process that I&apos;d practised on the platform. A few weeks
                later, I got the offer.
              </blockquote>
              <p className="mt-5 text-sm font-semibold text-white">Arjun Mehta</p>
              <p className="mt-1 text-xs text-zinc-600">
                Senior Software Engineer, 5 YOE · Bengaluru Startup · Placed at Google
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 border-t border-white/[0.08] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <p className="text-2xl font-bold text-white">6,34,467+</p>
                <p className="mt-1 text-xs text-zinc-600">Community</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">452</p>
                <p className="mt-1 text-xs text-zinc-600">Problems</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">2,535</p>
                <p className="mt-1 text-xs text-zinc-600">Docs</p>
              </div>
            </div>
          </div>
        </div>

      </section>
      {complexityOpen && <EngineeringComplexityChart onClose={() => setComplexityOpen(false)} />}
    </div>
  );
};

export default EngineeringHub;
