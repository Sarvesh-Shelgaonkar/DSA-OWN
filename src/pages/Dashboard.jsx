import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { ProgressBar, StatCard, EmptyState } from '../components/ui/index.jsx';
import ProblemListItem from '../components/ProblemListItem';
import ComplexityGuide from '../components/ComplexityGuide';
import { useDsaStats } from '../hooks/useDsaStats';
import { useBookmarks } from '../hooks/useBookmarks';
import { getAchievements } from '../lib/achievements';
import { getDailyProblem, allProblems } from '../lib/problems';

const relativeTime = (iso) => {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
};

const WeeklyChart = ({ weekly }) => {
  const max = Math.max(1, ...weekly.map((d) => d.count));
  return (
    <div className="flex items-end justify-between gap-2" style={{ height: 140 }}>
      {weekly.map((d) => (
        <div key={d.date} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex w-full flex-1 items-end">
            <div
              className="w-full rounded-t-md bg-primary/80 transition-all duration-500 ease-out-expo hover:bg-primary"
              style={{ height: `${(d.count / max) * 100}%`, minHeight: d.count ? 6 : 2 }}
              title={`${d.count} solved on ${d.label}`}
            />
          </div>
          <span className="text-2xs font-medium text-fg-subtle">{d.label}</span>
        </div>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const { stats, progress, markProblemSolved, markProblemUnsolved } = useDsaStats();
  const { bookmarks, isBookmarked, toggleBookmark } = useBookmarks();
  const [guideOpen, setGuideOpen] = useState(false);
  const achievements = getAchievements(stats);
  const daily = getDailyProblem();
  const savedProblems = allProblems.filter((p) => bookmarks[p.id]).slice(0, 5);
  const solvedThisWeek = stats.weekly.reduce((a, b) => a + b.count, 0);

  const toggleSolved = (id) =>
    progress[id]?.solved ? markProblemUnsolved(id) : markProblemSolved(id);

  const goal = Math.min(100, Math.round((solvedThisWeek / 5) * 100));

  return (
    <div className="container-page pt-24 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">Welcome back 👋</h1>
          <p className="mt-1 text-fg-muted">
            {stats.totalSolved === 0
              ? "Let's solve your first problem today."
              : `You've solved ${stats.totalSolved} problems. Keep the momentum going!`}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="badge bg-medium/10 text-medium">
            <Icon name="flame" size={16} /> {stats.currentStreak}-day streak
          </span>
          <Link to="/problems" className="btn-primary btn-md">
            Solve a problem <Icon name="arrowRight" size={16} />
          </Link>
        </div>
      </div>

      {/* Stat cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon="check" label="Problems solved" value={stats.totalSolved} sub={`/ ${stats.totalProblems}`} accent="text-success" />
        <StatCard icon="flame" label="Current streak" value={`${stats.currentStreak}d`} sub={`best ${stats.longestStreak}d`} accent="text-medium" />
        <StatCard icon="calendar" label="Active days" value={stats.activeDays} accent="text-accent" />
        <StatCard icon="chart" label="Completion" value={`${stats.percent}%`} accent="text-primary" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Weekly activity */}
          <section className="card p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-fg">Weekly activity</h2>
              <span className="text-sm text-fg-muted">{solvedThisWeek} solved this week</span>
            </div>
            <div className="mt-6">
              <WeeklyChart weekly={stats.weekly} />
            </div>
          </section>

          {/* Difficulty breakdown */}
          <section className="card p-6">
            <h2 className="font-semibold text-fg">Difficulty breakdown</h2>
            <div className="mt-5 space-y-4">
              {[
                { k: 'Easy', c: 'bg-easy', t: 'text-easy' },
                { k: 'Medium', c: 'bg-medium', t: 'text-medium' },
                { k: 'Hard', c: 'bg-hard', t: 'text-hard' },
              ].map((d) => {
                const solved = stats.byDifficulty[d.k];
                const total = stats.totalByDifficulty[d.k];
                const pct = total ? Math.round((solved / total) * 100) : 0;
                return (
                  <div key={d.k}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className={`font-medium ${d.t}`}>{d.k}</span>
                      <span className="text-fg-muted">{solved} / {total}</span>
                    </div>
                    <ProgressBar value={pct} barClassName={d.c} label={`${d.k} progress`} />
                  </div>
                );
              })}
            </div>
          </section>

          {/* Recent submissions */}
          <section className="card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-fg">Recent submissions</h2>
              <Link to="/revision" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                <Icon name="reset" size={15} /> Revise
              </Link>
            </div>
            {stats.recent.length === 0 ? (
              <EmptyState
                icon="code"
                title="No submissions yet"
                description="Mark a problem as solved and it will show up here."
                action={<Link to="/problems" className="btn-primary btn-sm">Browse problems</Link>}
              />
            ) : (
              <ul className="divide-y divide-border">
                {stats.recent.map((p) => (
                  <li key={p.id} className="flex items-center gap-3 py-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-success/10 text-success">
                      <Icon name="check" size={16} strokeWidth={3} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium text-fg">{p.title}</p>
                      <p className="text-xs text-fg-subtle">{p.topic}</p>
                    </div>
                    <span className="shrink-0 text-xs text-fg-subtle">
                      {relativeTime(progress[p.id].solvedAt)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Recommended */}
          <section className="card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-fg">Recommended for you</h2>
              <span className="badge bg-primary/10 text-primary"><Icon name="sparkles" size={14} /> Next up</span>
            </div>
            <div className="space-y-2.5">
              {stats.recommended.map((p) => (
                <ProblemListItem
                  key={p.id}
                  problem={p}
                  solved={Boolean(progress[p.id]?.solved)}
                  bookmarked={isBookmarked(p.id)}
                  onToggleSolved={toggleSolved}
                  onToggleBookmark={toggleBookmark}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Quick access */}
          <section className="card p-6">
            <h2 className="mb-4 font-semibold text-fg">Quick access</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { to: '/patterns', label: 'Patterns', icon: 'grid', desc: 'Recognise & solve' },
                { to: '/sheets', label: 'Sheets', icon: 'route', desc: 'A2Z, Blind 75' },
                { to: '/interview', label: 'Interview', icon: 'sparkles', desc: 'AI resume coach' },
                { to: '/system-design', label: 'System Design', icon: 'layers', desc: 'HLD & LLD' },
                { to: '/companies', label: 'Companies', icon: 'grid', desc: 'Top asked Qs' },
                { to: '/revision', label: 'Revision', icon: 'reset', desc: 'Revisit solved' },
                { to: '/puzzles', label: 'Puzzles', icon: 'bolt', desc: 'Logical warm-ups' },
              ].map((q) => (
                <Link
                  key={q.to}
                  to={q.to}
                  className="group flex flex-col gap-1.5 rounded-xl border border-border p-3 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-2"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon name={q.icon} size={18} />
                  </span>
                  <span className="mt-1 text-sm font-semibold text-fg">{q.label}</span>
                  <span className="text-2xs text-fg-subtle">{q.desc}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Daily challenge */}
          <section className="card overflow-hidden">
            <div className="bg-gradient-to-br from-primary to-accent px-6 py-5 text-white">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Icon name="bolt" size={18} /> Daily challenge
              </div>
              <h3 className="mt-2 text-lg font-bold">{daily.title}</h3>
              <p className="mt-1 text-sm text-white/80">{daily.topic} · {daily.difficulty}</p>
            </div>
            <div className="p-4">
              <ProblemListItem
                problem={daily}
                solved={Boolean(progress[daily.id]?.solved)}
                bookmarked={isBookmarked(daily.id)}
                onToggleSolved={toggleSolved}
                onToggleBookmark={toggleBookmark}
                showMeta={false}
              />
              <button
                type="button"
                onClick={() => setGuideOpen(true)}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
              >
                <Icon name="gauge" size={16} className="text-primary" />
                Complexity guide
              </button>
            </div>
          </section>

          {/* Weekly goal */}
          <section className="card p-6">
            <h2 className="font-semibold text-fg">Weekly goal</h2>
            <p className="mt-1 text-sm text-fg-muted">Solve 5 problems this week</p>
            <div className="mt-4 flex items-end justify-between">
              <span className="text-3xl font-bold text-fg">{solvedThisWeek}<span className="text-lg text-fg-subtle">/5</span></span>
              <span className="text-sm font-medium text-primary">{goal}%</span>
            </div>
            <ProgressBar value={goal} className="mt-3" label="Weekly goal progress" />
          </section>

          {/* Topic progress */}
          <section className="card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-fg">Topic progress</h2>
              <Link to="/topics" className="text-sm font-medium text-primary hover:underline">All</Link>
            </div>
            <div className="space-y-3">
              {stats.topics.slice(0, 6).map((t) => (
                <div key={t.topic} className="flex items-center gap-3">
                  <span className="w-24 shrink-0 truncate text-sm text-fg-muted">{t.topic}</span>
                  <ProgressBar value={t.percent} className="flex-1" label={`${t.topic} progress`} />
                  <span className="w-8 text-right text-xs text-fg-subtle">{t.solved}/{t.total}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Saved problems */}
          <section className="card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-fg">Saved problems</h2>
              <Icon name="bookmark" size={18} className="text-fg-subtle" />
            </div>
            {savedProblems.length === 0 ? (
              <p className="text-sm text-fg-muted">
                Bookmark problems to revisit them later — they'll appear here.
              </p>
            ) : (
              <ul className="space-y-2">
                {savedProblems.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/problems?q=${encodeURIComponent(p.title)}`}
                      className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
                    >
                      <Icon name="bookmarkFilled" size={15} className="text-primary" />
                      <span className="truncate">{p.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Achievements */}
          <section className="card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-fg">Achievements</h2>
              <span className="text-sm text-fg-muted">
                {achievements.filter((a) => a.unlocked).length}/{achievements.length}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {achievements.slice(0, 6).map((a) => (
                <div
                  key={a.id}
                  title={`${a.title} — ${a.desc}`}
                  className={`flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition-colors ${
                    a.unlocked ? 'border-border bg-surface-2' : 'border-dashed border-border opacity-50'
                  }`}
                >
                  <span className={`grid h-9 w-9 place-items-center rounded-lg ${a.unlocked ? 'bg-primary/10 text-primary' : 'bg-surface-2 text-fg-subtle'}`}>
                    <Icon name={a.unlocked ? a.icon : 'lock'} size={18} />
                  </span>
                  <span className="text-2xs font-medium leading-tight text-fg">{a.title}</span>
                </div>
              ))}
            </div>
            <Link to="/profile" className="mt-4 block text-center text-sm font-medium text-primary hover:underline">
              View all achievements
            </Link>
          </section>
        </div>
      </div>

      <ComplexityGuide open={guideOpen} onClose={() => setGuideOpen(false)} />
    </div>
  );
};

export default Dashboard;
