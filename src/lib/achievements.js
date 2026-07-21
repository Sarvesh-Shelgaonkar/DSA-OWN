/** Achievement definitions — all unlocked purely from the user's real progress. */
export const ACHIEVEMENTS = [
  { id: 'first-blood', icon: 'check', title: 'First Solve', desc: 'Solve your first problem', test: (s) => s.totalSolved >= 1 },
  { id: 'getting-started', icon: 'bolt', title: 'Getting Started', desc: 'Solve 10 problems', test: (s) => s.totalSolved >= 10 },
  { id: 'quarter', icon: 'target', title: 'Quarter Century', desc: 'Solve 25 problems', test: (s) => s.totalSolved >= 25 },
  { id: 'half', icon: 'star', title: 'Halfway There', desc: 'Solve 50 problems', test: (s) => s.totalSolved >= 50 },
  { id: 'completionist', icon: 'trophy', title: 'Completionist', desc: 'Solve every problem', test: (s) => s.totalSolved >= s.totalProblems && s.totalProblems > 0 },
  { id: 'streak-3', icon: 'flame', title: 'On a Roll', desc: 'Reach a 3-day streak', test: (s) => s.longestStreak >= 3 },
  { id: 'streak-7', icon: 'flame', title: 'Week Warrior', desc: 'Reach a 7-day streak', test: (s) => s.longestStreak >= 7 },
  { id: 'hard-hitter', icon: 'award', title: 'Hard Hitter', desc: 'Solve 5 hard problems', test: (s) => s.byDifficulty.Hard >= 5 },
  { id: 'well-rounded', icon: 'layers', title: 'Well Rounded', desc: 'Make progress in 5 topics', test: (s) => s.topics.filter((t) => t.solved > 0).length >= 5 },
];

export const getAchievements = (stats) =>
  ACHIEVEMENTS.map((a) => ({ ...a, unlocked: a.test(stats) }));

/** Rank tiers based on the user's real solved count (honest, not a fake leaderboard). */
export const RANK_TIERS = [
  { name: 'Bronze', min: 0, icon: 'award', color: 'text-medium' },
  { name: 'Silver', min: 15, icon: 'award', color: 'text-fg-muted' },
  { name: 'Gold', min: 35, icon: 'award', color: 'text-medium' },
  { name: 'Platinum', min: 60, icon: 'trophy', color: 'text-accent' },
  { name: 'Diamond', min: 85, icon: 'trophy', color: 'text-primary' },
];

export const getRank = (solved) => {
  let current = RANK_TIERS[0];
  let next = null;
  for (let i = 0; i < RANK_TIERS.length; i++) {
    if (solved >= RANK_TIERS[i].min) {
      current = RANK_TIERS[i];
      next = RANK_TIERS[i + 1] || null;
    }
  }
  return { current, next };
};
