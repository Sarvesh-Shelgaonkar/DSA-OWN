import React from 'react';

const ProblemRow = ({ problem, globalIndex, isSolved, toggleSolved }) => {
  
  const difficultyStyles = {
    Easy: {
      colorName: 'neon-green',
      borderHover: 'hover:border-neon-green/50',
      bgLeft: 'bg-neon-green',
      tagBorder: 'border-neon-green/30',
      tagText: 'text-neon-green'
    },
    Medium: {
      colorName: 'neon-yellow',
      borderHover: 'hover:border-neon-yellow/50',
      bgLeft: 'bg-neon-yellow',
      tagBorder: 'border-neon-yellow/30',
      tagText: 'text-neon-yellow'
    },
    Hard: {
      colorName: 'neon-red',
      borderHover: 'hover:border-neon-red/50',
      bgLeft: 'bg-neon-red',
      tagBorder: 'border-neon-red/30',
      tagText: 'text-neon-red'
    }
  };

  const style = difficultyStyles[problem.difficulty] || difficultyStyles.Easy;

  return (
    <div 
      className={`relative group overflow-hidden transition-all duration-300 border border-gray-800 bg-[#0d0d0d] rounded ${style.borderHover} hover:bg-[#111] ${
        isSolved ? 'opacity-70' : ''
      }`}
    >
      {/* Neon left border indicating difficulty */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${style.bgLeft} shadow-[0_0_8px_currentColor] opacity-70 group-hover:opacity-100 transition-opacity`}></div>

      <div className="p-4 pl-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* Left Section: ID, Checkbox, Title */}
        <div className="flex items-center gap-4 flex-1">
          {/* Custom Checkbox */}
          <button 
            onClick={() => toggleSolved(problem.id)}
            className={`w-6 h-6 flex-shrink-0 border flex items-center justify-center transition-all duration-300 rounded-sm ${
              isSolved 
                ? 'bg-neon-green border-neon-green animate-check-burst' 
                : 'border-gray-600 hover:border-neon-green hover:shadow-[0_0_8px_#00ff41]'
            }`}
          >
            {isSolved && (
              <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>

          <span className="text-gray-600 font-mono text-sm w-8">
            {String(globalIndex + 1).padStart(3, '0')}
          </span>

          <div className="flex-1">
            <h3 className={`font-medium transition-colors ${
              isSolved ? 'text-gray-500 line-through' : 'text-gray-200 group-hover:text-white'
            }`}>
              {problem.title}
            </h3>
          </div>
        </div>

        {/* Right Section: Tags & Link */}
        <div className="flex items-center flex-wrap gap-3 md:ml-auto">
          {/* Topic Tag */}
          <span className="font-mono text-xs px-2 py-1 bg-gray-900 border border-gray-700 text-gray-400 rounded">
            [{problem.topic}]
          </span>
          
          {/* Difficulty Tag */}
          <span className={`font-mono text-xs px-2 py-1 bg-gray-900 border ${style.tagBorder} ${style.tagText} rounded shadow-[0_0_5px_currentColor] opacity-80`}>
            {problem.difficulty.toUpperCase()}
          </span>

          {/* Solve Links */}
          <div className="flex items-center gap-2 ml-2">
            <a
              href={problem.link}
              target="_blank"
              rel="noopener noreferrer"
              title="Solve on LeetCode"
              className="flex items-center gap-1 font-mono text-xs md:text-sm text-neon-cyan border border-neon-cyan/20 bg-neon-cyan/5 px-2 py-1 rounded hover:bg-neon-cyan/20 hover:text-white transition-all hover:drop-shadow-[0_0_5px_#00d4ff]"
            >
              LC [↗]
            </a>
            <a
              href={`https://takeuforward.org/plus/dsa/problems/${problem.id}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Solve on TakeUForward (TUF+)"
              className="flex items-center gap-1 font-mono text-xs md:text-sm text-neon-red border border-neon-red/20 bg-neon-red/5 px-2 py-1 rounded hover:bg-neon-red/20 hover:text-white transition-all hover:drop-shadow-[0_0_5px_#ff003c]"
            >
              TUF+ [↗]
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemRow;
