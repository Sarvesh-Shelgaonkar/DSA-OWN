import React from 'react';
import Icon from '../components/ui/Icon';
import { SectionHeading, ProgressBar } from '../components/ui/index.jsx';
import ProblemListItem from '../components/ProblemListItem';
import { getDailyProblem, getWeeklyProblems } from '../lib/problems';
import { useLocalProgress } from '../hooks/useLocalProgress';
import { useBookmarks } from '../hooks/useBookmarks';

const Contests = () => {
  const { progress, markProblemSolved, markProblemUnsolved } = useLocalProgress();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const daily = getDailyProblem();
  const weekly = getWeeklyProblems();
  const weeklySolved = weekly.filter((p) => progress[p.id]?.solved).length;

  const toggleSolved = (id) =>
    progress[id]?.solved ? markProblemUnsolved(id) : markProblemSolved(id);

  const commonProps = (p) => ({
    problem: p,
    solved: Boolean(progress[p.id]?.solved),
    bookmarked: isBookmarked(p.id),
    onToggleSolved: toggleSolved,
    onToggleBookmark: toggleBookmark,
  });

  return (
    <div className="container-page pt-24 pb-16">
      <SectionHeading
        eyebrow="Practice"
        title="Challenges"
        description="Daily and weekly practice sets curated from the problem bank. Solve consistently to build your streak."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Daily */}
        <section className="card overflow-hidden lg:col-span-1">
          <div className="bg-gradient-to-br from-primary to-accent px-6 py-6 text-white">
            <div className="flex items-center gap-2 text-sm font-semibold"><Icon name="bolt" size={18} /> Today's challenge</div>
            <h2 className="mt-2 text-xl font-bold">{daily.title}</h2>
            <p className="mt-1 text-sm text-white/80">{daily.topic} · {daily.difficulty}</p>
          </div>
          <div className="p-4">
            <ProblemListItem {...commonProps(daily)} showMeta={false} />
            <p className="mt-3 px-1 text-xs text-fg-subtle">
              A fresh problem is selected every day. Come back tomorrow for a new one.
            </p>
          </div>
        </section>

        {/* Weekly */}
        <section className="card p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-primary"><Icon name="trophy" size={18} /> Weekly set</div>
              <h2 className="mt-1 text-lg font-semibold text-fg">Five problems to conquer this week</h2>
            </div>
            <span className="badge bg-primary/10 text-primary">{weeklySolved}/{weekly.length}</span>
          </div>
          <ProgressBar value={(weeklySolved / weekly.length) * 100} className="mt-4" label="Weekly set progress" />
          <div className="mt-5 space-y-2.5">
            {weekly.map((p) => (
              <ProblemListItem key={p.id} {...commonProps(p)} />
            ))}
          </div>
        </section>
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-border bg-surface/50 p-6 text-center">
        <p className="text-sm text-fg-muted">
          Live, timed contests with global rankings require accounts and a backend — they're on the
          roadmap. For now, these curated sets keep your daily practice focused and consistent.
        </p>
      </div>
    </div>
  );
};

export default Contests;
