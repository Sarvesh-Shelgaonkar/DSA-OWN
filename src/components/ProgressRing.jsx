import React, { useEffect, useState } from 'react';

const ProgressRing = ({ progress, total }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  
  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  
  const percentage = total > 0 ? (animatedProgress / total) * 100 : 0;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    // Simple animation for the progress ring
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 500);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="relative flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        {/* Background Ring */}
        <circle
          stroke="rgba(255,255,255,0.1)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress Ring */}
        <circle
          stroke="#00ff41"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 1.5s ease-out' }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeLinecap="round"
          className="drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-2xl font-mono font-bold text-neon-green animate-pulse-neon">
          {animatedProgress}
        </span>
        <span className="text-xs font-mono text-gray-400 border-t border-gray-600 w-8 mt-1 pt-1">
          {total}
        </span>
      </div>
    </div>
  );
};

export default ProgressRing;
