import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { ProgressBar, SectionHeading } from '../components/ui/index.jsx';
import { useDsaStats } from '../hooks/useDsaStats';
import { useLessons } from '../hooks/useLessons';
import { roadmap } from '../data/roadmap';

const LEVEL_STYLES = {
  Beginner: 'bg-easy/10 text-easy',
  Intermediate: 'bg-medium/10 text-medium',
  Advanced: 'bg-hard/10 text-hard',
};

const Roadmap = () => {
  const { stats } = useDsaStats();
  const { stageDoneCount } = useLessons();
  const topicMap = Object.fromEntries(stats.topics.map((t) => [t.topic, t]));

  // Build stage view models with sequential unlocking. A stage's progress blends
  // completed lessons with solved problems (when it links to the problem set).
  let prevPercent = 100; // first stage always unlocked
  const stages = roadmap.map((stage) => {
    const linked = stage.datasetTopic ? topicMap[stage.datasetTopic] : null;
    const conceptCount = stage.concepts?.length || 0;
    const lessonsDone = stageDoneCount(stage.id);
    const lessonPct = conceptCount ? Math.round((lessonsDone / conceptCount) * 100) : 0;
    const problemPct = linked ? linked.percent : 0;
    const percent = linked ? Math.round((problemPct + lessonPct) / 2) : lessonPct;
    const solved = linked ? linked.solved : 0;
    const total = linked ? linked.total : conceptCount;
    const unlocked = prevPercent >= 40;
    const completed = percent === 100;
    prevPercent = percent;
    return { ...stage, percent, solved, total, unlocked, completed, linked: Boolean(linked), conceptCount };
  });

  const activeId = stages.find((s) => s.unlocked && !s.completed)?.id;
  const completedCount = stages.filter((s) => s.completed).length;
  const overall = Math.round(stages.reduce((a, s) => a + s.percent, 0) / stages.length);

  return (
    <div className="container-page pt-24 pb-16">
      <SectionHeading
        eyebrow="Learning path"
        title="The DSA Roadmap"
        description="A structured, 16-stage journey from programming fundamentals to advanced algorithms. Complete each stage to unlock the next."
      />

      {/* Overview */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="card p-5">
          <p className="text-sm text-fg-muted">Overall progress</p>
          <div className="mt-2 flex items-end gap-2">
            <span className="text-3xl font-bold text-fg">{overall}%</span>
          </div>
          <ProgressBar value={overall} className="mt-3" label="Overall roadmap progress" />
        </div>
        <div className="card p-5">
          <p className="text-sm text-fg-muted">Stages completed</p>
          <p className="mt-2 text-3xl font-bold text-fg">{completedCount}<span className="text-lg text-fg-subtle">/{stages.length}</span></p>
        </div>
        <div className="card p-5">
          <p className="text-sm text-fg-muted">Problems solved</p>
          <p className="mt-2 text-3xl font-bold text-fg">{stats.totalSolved}<span className="text-lg text-fg-subtle">/{stats.totalProblems}</span></p>
        </div>
      </div>

      {/* Timeline */}
      <ol className="relative space-y-4 before:absolute before:left-[27px] before:top-4 before:bottom-4 before:w-px before:bg-border">
        {stages.map((stage, i) => {
          const isActive = stage.id === activeId;
          const state = stage.completed ? 'completed' : !stage.unlocked ? 'locked' : 'active';
          return (
            <li key={stage.id} className="relative">
              <div
                className={`flex flex-col gap-4 rounded-2xl border bg-surface p-5 pl-16 transition-all sm:flex-row sm:items-center ${
                  isActive ? 'border-primary shadow-card' : 'border-border'
                } ${state === 'locked' ? 'opacity-60' : ''}`}
              >
                {/* Node */}
                <span
                  className={`absolute left-3.5 top-5 grid h-8 w-8 place-items-center rounded-full border-2 ${
                    state === 'completed'
                      ? 'border-success bg-success text-white'
                      : state === 'locked'
                      ? 'border-border bg-surface-2 text-fg-subtle'
                      : 'border-primary bg-surface text-primary'
                  }`}
                >
                  <Icon
                    name={state === 'completed' ? 'check' : state === 'locked' ? 'lock' : stage.icon}
                    size={16}
                    strokeWidth={state === 'completed' ? 3 : 2}
                  />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-fg-subtle">Stage {String(i + 1).padStart(2, '0')}</span>
                    <span className={`badge ${LEVEL_STYLES[stage.level]}`}>{stage.level}</span>
                    {isActive && <span className="badge bg-primary/10 text-primary">In progress</span>}
                    {state === 'completed' && <span className="badge bg-success/10 text-success">Completed</span>}
                  </div>
                  <h3 className="mt-1.5 text-lg font-semibold text-fg">{stage.title}</h3>
                  <p className="mt-0.5 text-sm text-fg-muted">{stage.blurb}</p>

                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-fg-subtle">
                    <span className="flex items-center gap-1"><Icon name="book" size={14} /> {stage.conceptCount} lessons</span>
                    {stage.linked && <span className="flex items-center gap-1"><Icon name="code" size={14} /> {stage.solved}/{stage.total} problems</span>}
                    <span className="flex items-center gap-1"><Icon name="clock" size={14} /> ~{stage.hours}h</span>
                  </div>

                  {stage.percent > 0 && (
                    <ProgressBar value={stage.percent} className="mt-3 max-w-sm" label={`${stage.title} progress`} />
                  )}
                </div>

                <div className="shrink-0">
                  <Link
                    to={`/roadmap/${stage.id}`}
                    className={state === 'active' ? 'btn-primary btn-md' : 'btn-secondary btn-md'}
                  >
                    {state === 'completed' ? 'Review' : state === 'locked' ? 'Preview' : 'Continue learning'}
                    <Icon name="arrowRight" size={16} />
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Roadmap;
