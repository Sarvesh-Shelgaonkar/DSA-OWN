import { useMemo } from 'react';
import { useLocalProgress } from './useLocalProgress';
import { allProblems, topicSummaries, TOTAL_PROBLEMS } from '../lib/problems';

const dayKey = (d) => {
  const date = new Date(d);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate()
  ).padStart(2, '0')}`;
};

const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

/**
 * Derives all progress-based statistics from localStorage progress.
 * Everything here reflects the *user's own* activity — no fake global numbers.
 */
export function useDsaStats() {
  const { progress, markProblemSolved, markProblemUnsolved } = useLocalProgress();

  const stats = useMemo(() => {
    const solvedEntries = allProblems.filter((p) => progress[p.id]?.solved);

    const byDifficulty = { Easy: 0, Medium: 0, Hard: 0 };
    solvedEntries.forEach((p) => {
      byDifficulty[p.difficulty] = (byDifficulty[p.difficulty] || 0) + 1;
    });

    const totalByDifficulty = { Easy: 0, Medium: 0, Hard: 0 };
    allProblems.forEach((p) => {
      totalByDifficulty[p.difficulty] = (totalByDifficulty[p.difficulty] || 0) + 1;
    });

    // Per-topic progress
    const topics = topicSummaries.map((t) => {
      const solved = allProblems.filter(
        (p) => p.topic === t.topic && progress[p.id]?.solved
      ).length;
      return {
        ...t,
        solved,
        percent: t.total ? Math.round((solved / t.total) * 100) : 0,
      };
    });

    // Solved dates set (day granularity)
    const solvedDates = new Set(
      solvedEntries
        .filter((p) => progress[p.id]?.solvedAt)
        .map((p) => dayKey(progress[p.id].solvedAt))
    );

    // Current streak (consecutive days up to today)
    let currentStreak = 0;
    const cursor = startOfToday();
    // allow streak to still count if solved yesterday but not today
    if (!solvedDates.has(dayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
    while (solvedDates.has(dayKey(cursor))) {
      currentStreak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }

    // Longest streak across all solved days
    const sortedDays = [...solvedDates].sort();
    let longestStreak = 0;
    let run = 0;
    let prev = null;
    sortedDays.forEach((ds) => {
      if (prev) {
        const diff = (new Date(ds) - new Date(prev)) / 86400000;
        run = diff === 1 ? run + 1 : 1;
      } else {
        run = 1;
      }
      longestStreak = Math.max(longestStreak, run);
      prev = ds;
    });

    // Weekly activity (last 7 days)
    const weekly = [];
    for (let i = 6; i >= 0; i--) {
      const d = startOfToday();
      d.setDate(d.getDate() - i);
      const key = dayKey(d);
      const count = solvedEntries.filter(
        (p) => progress[p.id]?.solvedAt && dayKey(progress[p.id].solvedAt) === key
      ).length;
      weekly.push({
        label: d.toLocaleDateString(undefined, { weekday: 'short' }),
        date: key,
        count,
      });
    }

    // Activity calendar (last ~119 days => 17 weeks)
    const calendar = [];
    for (let i = 118; i >= 0; i--) {
      const d = startOfToday();
      d.setDate(d.getDate() - i);
      const key = dayKey(d);
      const count = solvedEntries.filter(
        (p) => progress[p.id]?.solvedAt && dayKey(progress[p.id].solvedAt) === key
      ).length;
      calendar.push({ date: key, count });
    }

    // Recent submissions (most recent first)
    const recent = solvedEntries
      .filter((p) => progress[p.id]?.solvedAt)
      .sort((a, b) => new Date(progress[b.id].solvedAt) - new Date(progress[a.id].solvedAt))
      .slice(0, 8);

    // Recommended: unsolved, prioritising active topics then easier first
    const difficultyRank = { Easy: 0, Medium: 1, Hard: 2 };
    const recommended = allProblems
      .filter((p) => !progress[p.id]?.solved)
      .sort((a, b) => difficultyRank[a.difficulty] - difficultyRank[b.difficulty])
      .slice(0, 5);

    const totalSolved = solvedEntries.length;

    return {
      totalSolved,
      totalProblems: TOTAL_PROBLEMS,
      percent: TOTAL_PROBLEMS ? Math.round((totalSolved / TOTAL_PROBLEMS) * 100) : 0,
      byDifficulty,
      totalByDifficulty,
      topics,
      currentStreak,
      longestStreak,
      activeDays: solvedDates.size,
      weekly,
      calendar,
      recent,
      recommended,
    };
  }, [progress]);

  return { progress, stats, markProblemSolved, markProblemUnsolved };
}
