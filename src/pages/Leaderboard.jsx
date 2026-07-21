import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { SectionHeading, ProgressBar } from '../components/ui/index.jsx';
import { useDsaStats } from '../hooks/useDsaStats';
import { RANK_TIERS, getRank } from '../lib/achievements';

const Leaderboard = () => {
  const { stats } = useDsaStats();
  const { current, next } = getRank(stats.totalSolved);

  return (
    <div className="container-page pt-24 pb-16">
      <SectionHeading
        eyebrow="Ranks"
        title="Your rank & progression"
        description="Climb the tiers by solving more problems. Ranks are earned from your own real progress — no fabricated leaderboards."
      />

      {/* Current rank */}
      <div className="card overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-accent px-6 py-8 text-white">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15">
              <Icon name={current.icon} size={30} />
            </span>
            <div className="flex-1">
              <p className="text-sm text-white/80">Current tier</p>
              <p className="text-3xl font-extrabold">{current.name}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold">{stats.totalSolved}</p>
              <p className="text-sm text-white/80">problems solved</p>
            </div>
          </div>
          {next && (
            <div className="mt-6">
              <div className="mb-1.5 flex justify-between text-sm text-white/90">
                <span>Progress to {next.name}</span>
                <span>{Math.max(0, next.min - stats.totalSolved)} problems to go</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-white transition-[width] duration-700"
                  style={{ width: `${Math.min(100, ((stats.totalSolved - current.min) / (next.min - current.min)) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tier ladder */}
      <div className="mt-8 space-y-3">
        {[...RANK_TIERS].reverse().map((tier) => {
          const isCurrent = tier.name === current.name;
          const achieved = stats.totalSolved >= tier.min;
          return (
            <div
              key={tier.name}
              className={`flex items-center gap-4 rounded-2xl border p-4 ${
                isCurrent ? 'border-primary bg-primary/5' : 'border-border bg-surface'
              } ${!achieved ? 'opacity-60' : ''}`}
            >
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface-2 ${tier.color}`}>
                <Icon name={achieved ? tier.icon : 'lock'} size={22} />
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-fg">{tier.name}</p>
                  {isCurrent && <span className="badge bg-primary/10 text-primary">You</span>}
                </div>
                <p className="text-sm text-fg-muted">Solve {tier.min}+ problems</p>
              </div>
              {achieved ? (
                <span className="badge bg-success/10 text-success"><Icon name="check" size={14} /> Achieved</span>
              ) : (
                <span className="text-sm text-fg-subtle">{tier.min - stats.totalSolved} to unlock</span>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-8 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon name="target" size={24} />
        </span>
        <h3 className="text-lg font-semibold text-fg">Keep climbing</h3>
        <p className="max-w-md text-sm text-fg-muted">
          Every solved problem moves you up. Head to the problems list and chip away at the next tier.
        </p>
        <Link to="/problems" className="btn-primary btn-md mt-1">
          Solve more problems <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Leaderboard;
