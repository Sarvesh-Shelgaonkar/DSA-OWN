import React from 'react';

const StatsBar = ({ problems, progress }) => {
  const stats = {
    Total: { count: problems.length, solved: 0, color: 'text-neon-green', bg: 'bg-neon-green' },
    Easy: { count: 0, solved: 0, color: 'text-neon-green', bg: 'bg-neon-green' },
    Medium: { count: 0, solved: 0, color: 'text-neon-yellow', bg: 'bg-neon-yellow' },
    Hard: { count: 0, solved: 0, color: 'text-neon-red', bg: 'bg-neon-red' }
  };

  problems.forEach(p => {
    if (stats[p.difficulty]) {
      stats[p.difficulty].count++;
    }
    if (progress[p.id]?.solved) {
      stats.Total.solved++;
      if (stats[p.difficulty]) {
        stats[p.difficulty].solved++;
      }
    }
  });

  return (
    <div className="glass-card rounded-lg p-4 mb-8 sticky top-20 z-40 border-l-4 border-neon-cyan shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-gray-800">
        {Object.entries(stats).map(([label, data]) => {
          const percent = data.count > 0 ? (data.solved / data.count) * 100 : 0;
          return (
            <div key={label} className="px-4 flex flex-col justify-center">
              <span className="text-gray-400 font-mono text-xs uppercase tracking-wider mb-1">
                {label}
              </span>
              <div className="flex items-end gap-2 mb-2">
                <span className={`text-2xl font-bold font-mono ${data.color} drop-shadow-[0_0_5px_currentColor]`}>
                  {data.solved}
                </span>
                <span className="text-gray-500 font-mono text-sm mb-1">/ {data.count}</span>
              </div>
              
              {/* Mini progress bar */}
              <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${data.bg} drop-shadow-[0_0_8px_currentColor] transition-all duration-1000 ease-out`}
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsBar;
