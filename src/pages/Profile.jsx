import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { ProgressBar, StatCard } from '../components/ui/index.jsx';
import ThemeToggle from '../components/ThemeToggle';
import { useDsaStats } from '../hooks/useDsaStats';
import { useBookmarks } from '../hooks/useBookmarks';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useAuth } from '../context/AuthContext';
import { getAchievements, getRank } from '../lib/achievements';
import { allProblems } from '../lib/problems';

const GoogleG = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className="shrink-0">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
  </svg>
);

const HeatCell = ({ count }) => {
  const level = count === 0 ? 0 : count === 1 ? 1 : count <= 2 ? 2 : count <= 4 ? 3 : 4;
  const colors = [
    'bg-surface-2',
    'bg-primary/25',
    'bg-primary/45',
    'bg-primary/70',
    'bg-primary',
  ];
  return <div className={`h-3 w-3 rounded-sm ${colors[level]}`} title={`${count} solved`} />;
};

const ActivityCalendar = ({ calendar }) => {
  // Group 119 days into 17 columns of 7 days
  const weeks = [];
  for (let i = 0; i < calendar.length; i += 7) weeks.push(calendar.slice(i, i + 7));
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day) => (
              <HeatCell key={day.date} count={day.count} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ConfirmDialog = ({ open, onConfirm, onCancel }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
      <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm animate-fade-in" onClick={onCancel} />
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-popover animate-scale-in">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-danger/10 text-danger">
            <Icon name="info" size={22} />
          </span>
          <h2 id="confirm-title" className="text-lg font-semibold text-fg">Reset all progress?</h2>
        </div>
        <p className="mt-3 text-sm text-fg-muted">
          This permanently deletes your solved problems, streaks and bookmarks from this browser.
          This action cannot be undone.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onCancel} className="btn-secondary btn-md">Cancel</button>
          <button onClick={onConfirm} className="btn-danger btn-md">Yes, reset everything</button>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  const { stats } = useDsaStats();
  const { bookmarks } = useBookmarks();
  const { user, isAuthed } = useAuth();
  const [name, setName] = useLocalStorage('mydsa-username', 'Learner');
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(name);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const achievements = getAchievements(stats);
  const unlocked = achievements.filter((a) => a.unlocked);
  const { current, next } = getRank(stats.totalSolved);
  const savedProblems = allProblems.filter((p) => bookmarks[p.id]);

  const saveName = () => {
    setName(draft.trim() || 'Learner');
    setEditing(false);
  };

  const resetProgress = () => {
    localStorage.removeItem('dsa-progress');
    localStorage.removeItem('mydsa-bookmarks');
    setConfirmOpen(false);
    window.location.reload();
  };

  const initials = name.slice(0, 2).toUpperCase();

  return (
    <div className="container-page pt-24 pb-16">
      {/* Header card */}
      <div className="card overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-primary to-accent" />
        <div className="px-6 pb-6">
          <div className="-mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-4">
              <span className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl border-4 border-surface bg-gradient-to-br from-primary to-accent text-2xl font-bold text-white">
                {user?.avatar ? (
                  <img src={user.avatar} alt="" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                ) : (
                  initials
                )}
              </span>
              <div className="pb-1">
                {editing ? (
                  <div className="flex items-center gap-2">
                    <input
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      className="input h-9 w-40"
                      aria-label="Your name"
                      maxLength={24}
                    />
                    <button onClick={saveName} className="btn-primary btn-sm">Save</button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-fg">{name}</h1>
                    <button
                      onClick={() => { setDraft(name); setEditing(true); }}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                )}
                <p className="text-sm text-fg-muted">DSA learner · joined this journey</p>
                {isAuthed && user && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-fg-muted">
                    {user.provider === 'google' ? (
                      <>
                        <GoogleG size={13} /> Signed in with Google
                      </>
                    ) : (
                      <>
                        <Icon name="mail" size={13} /> {user.email}
                      </>
                    )}
                  </span>
                )}
              </div>
            </div>
            <div className={`badge self-start ${current.color} bg-surface-2`}>
              <Icon name={current.icon} size={16} /> {current.name} tier
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon="check" label="Total solved" value={stats.totalSolved} sub={`/ ${stats.totalProblems}`} accent="text-success" />
        <StatCard icon="flame" label="Current streak" value={`${stats.currentStreak}d`} accent="text-medium" />
        <StatCard icon="trophy" label="Longest streak" value={`${stats.longestStreak}d`} accent="text-primary" />
        <StatCard icon="award" label="Badges" value={unlocked.length} sub={`/ ${achievements.length}`} accent="text-accent" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* Activity calendar */}
          <section className="card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-fg">Submission activity</h2>
              <span className="text-sm text-fg-muted">{stats.activeDays} active days</span>
            </div>
            <ActivityCalendar calendar={stats.calendar} />
            <div className="mt-3 flex items-center justify-end gap-2 text-xs text-fg-subtle">
              Less
              {[0, 1, 2, 3, 4].map((l) => <HeatCell key={l} count={l === 0 ? 0 : l * 2} />)}
              More
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
                return (
                  <div key={d.k}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className={`font-medium ${d.t}`}>{d.k}</span>
                      <span className="text-fg-muted">{solved} / {total}</span>
                    </div>
                    <ProgressBar value={total ? (solved / total) * 100 : 0} barClassName={d.c} label={`${d.k} progress`} />
                  </div>
                );
              })}
            </div>
          </section>

          {/* Topic mastery */}
          <section className="card p-6">
            <h2 className="mb-4 font-semibold text-fg">Topic mastery</h2>
            <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {stats.topics.map((t) => (
                <div key={t.topic} className="flex items-center gap-3">
                  <span className="w-24 shrink-0 truncate text-sm text-fg-muted">{t.topic}</span>
                  <ProgressBar value={t.percent} className="flex-1" label={`${t.topic} mastery`} />
                  <span className="w-8 text-right text-xs text-fg-subtle">{t.percent}%</span>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="card p-6">
            <h2 className="mb-4 font-semibold text-fg">Achievements</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {achievements.map((a) => (
                <div
                  key={a.id}
                  className={`flex items-center gap-3 rounded-xl border p-3 ${
                    a.unlocked ? 'border-border bg-surface-2' : 'border-dashed border-border opacity-55'
                  }`}
                >
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${a.unlocked ? 'bg-primary/10 text-primary' : 'bg-surface-2 text-fg-subtle'}`}>
                    <Icon name={a.unlocked ? a.icon : 'lock'} size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-fg">{a.title}</p>
                    <p className="truncate text-xs text-fg-subtle">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Ranking */}
          <section className="card p-6">
            <h2 className="font-semibold text-fg">Ranking</h2>
            <div className="mt-4 flex items-center gap-3">
              <span className={`grid h-12 w-12 place-items-center rounded-xl bg-surface-2 ${current.color}`}>
                <Icon name={current.icon} size={24} />
              </span>
              <div>
                <p className="text-lg font-bold text-fg">{current.name}</p>
                <p className="text-sm text-fg-muted">{stats.totalSolved} problems solved</p>
              </div>
            </div>
            {next && (
              <div className="mt-4">
                <div className="mb-1.5 flex justify-between text-xs text-fg-muted">
                  <span>Next: {next.name}</span>
                  <span>{Math.max(0, next.min - stats.totalSolved)} to go</span>
                </div>
                <ProgressBar
                  value={Math.min(100, ((stats.totalSolved - current.min) / (next.min - current.min)) * 100)}
                  label="Progress to next rank"
                />
              </div>
            )}
          </section>

          {/* Saved problems */}
          <section className="card p-6">
            <h2 className="mb-3 font-semibold text-fg">Saved problems ({savedProblems.length})</h2>
            {savedProblems.length === 0 ? (
              <p className="text-sm text-fg-muted">Bookmark problems to build a personal revision list.</p>
            ) : (
              <ul className="space-y-1.5">
                {savedProblems.slice(0, 8).map((p) => (
                  <li key={p.id}>
                    <Link to={`/problems?q=${encodeURIComponent(p.title)}`} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-fg-muted hover:bg-surface-2 hover:text-fg">
                      <Icon name="bookmarkFilled" size={14} className="text-primary" />
                      <span className="truncate">{p.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Settings */}
          <section className="card p-6">
            <h2 className="mb-4 font-semibold text-fg">Account & privacy</h2>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-fg">Appearance</p>
                <p className="text-xs text-fg-muted">Toggle light / dark theme</p>
              </div>
              <ThemeToggle />
            </div>
            <div className="mt-2 rounded-xl bg-surface-2 p-3 text-xs text-fg-muted">
              <Icon name="lock" size={14} className="mr-1 inline" />
              All your data is stored locally in this browser. Nothing is uploaded.
            </div>
            <button onClick={() => setConfirmOpen(true)} className="btn-danger btn-md mt-4 w-full">
              Reset all progress
            </button>
          </section>
        </div>
      </div>

      <ConfirmDialog open={confirmOpen} onConfirm={resetProgress} onCancel={() => setConfirmOpen(false)} />
    </div>
  );
};

export default Profile;
