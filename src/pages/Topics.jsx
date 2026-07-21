import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { ProgressBar, SectionHeading } from '../components/ui/index.jsx';
import { useDsaStats } from '../hooks/useDsaStats';

const Topics = () => {
  const { stats } = useDsaStats();

  return (
    <div className="container-page pt-24 pb-16">
      <SectionHeading
        eyebrow="Explore"
        title="Topics"
        description="Browse every topic, track your mastery, and jump straight into focused practice."
        action={
          <Link to="/dsa-notes" className="btn-secondary btn-sm shrink-0">
            <Icon name="book" size={16} /> Topic-wise notes
          </Link>
        }
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.topics.map((t) => (
          <Link
            key={t.topic}
            to={`/problems?topic=${encodeURIComponent(t.topic)}`}
            className="card-interactive flex flex-col p-6"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface-2 text-primary">
                <Icon name={t.icon} size={22} />
              </span>
              <span className={`badge ${t.percent === 100 ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'}`}>
                {t.percent}%
              </span>
            </div>
            <h3 className="mt-4 font-semibold text-fg">{t.topic}</h3>
            <p className="mt-1 flex-1 text-sm text-fg-muted">{t.blurb}</p>

            <ProgressBar
              value={t.percent}
              className="mt-4"
              barClassName={t.percent === 100 ? 'bg-success' : 'bg-primary'}
              label={`${t.topic} progress`}
            />
            <div className="mt-3 flex items-center justify-between text-xs text-fg-subtle">
              <span>{t.solved}/{t.total} solved</span>
              <span className="flex items-center gap-2">
                <span className="text-easy">{t.counts.Easy}E</span>
                <span className="text-medium">{t.counts.Medium}M</span>
                <span className="text-hard">{t.counts.Hard}H</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topics;
