import React from 'react';

const FilterBar = ({ topics, difficulties, selectedTopic, selectedDifficulty, onTopicChange, onDifficultyChange }) => {
  return (
    <div className="glass-card rounded-md p-4 mb-6 font-mono text-sm border-l-2 border-neon-cyan flex flex-col md:flex-row md:items-center gap-4">
      <div className="flex items-center text-neon-cyan">
        <span className="mr-2">{'>'}</span>
        <span className="animate-pulse">_</span>
        <span className="ml-2 text-gray-300">filter</span>
      </div>

      <div className="flex flex-wrap items-center gap-4 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">--topic=</span>
          <select
            value={selectedTopic}
            onChange={(e) => onTopicChange(e.target.value)}
            className="bg-dark-card border border-gray-700 text-neon-green px-2 py-1 rounded focus:outline-none focus:border-neon-green cursor-pointer"
          >
            {topics.map(topic => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-500">--difficulty=</span>
          <select
            value={selectedDifficulty}
            onChange={(e) => onDifficultyChange(e.target.value)}
            className="bg-dark-card border border-gray-700 text-neon-yellow px-2 py-1 rounded focus:outline-none focus:border-neon-yellow cursor-pointer"
          >
            {difficulties.map(diff => (
              <option key={diff} value={diff}>{diff}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
