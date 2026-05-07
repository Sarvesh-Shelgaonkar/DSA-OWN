import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = ({ resource, index }) => {
  const isExternal = resource.link.startsWith('http');

  const cardContent = (
    <>
      {/* Top Folder Tab Decoration */}
      <div className={`absolute top-0 left-0 w-1/3 h-1 bg-${resource.color} opacity-80 shadow-[0_0_10px_currentColor] transition-all group-hover:w-1/2`}></div>
      
      {/* Icon & Title */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`text-4xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]`}>
          {resource.emoji}
        </div>
        <div>
          <h2 className="text-xl font-bold font-mono text-gray-100 group-hover:text-white transition-colors">
            {resource.title}
          </h2>
          <span className={`text-xs font-mono text-${resource.color}`}>
            {resource.tag}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm flex-grow font-sans mb-6">
        {resource.description}
      </p>

      {/* Action Button */}
      <div className="mt-auto flex items-center justify-between border-t border-gray-800 pt-4">
        <span className="font-mono text-xs text-gray-500">
          Last modified: {new Date().toLocaleDateString()}
        </span>
        <span className={`font-mono text-sm text-${resource.color} group-hover:drop-shadow-[0_0_5px_currentColor] flex items-center gap-1`}>
          {isExternal ? 'GITHUB' : 'OPEN'} <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">{isExternal ? '[↗]' : '>'}</span>
        </span>
      </div>
    </>
  );

  const classNameStr = "group relative glass-card p-6 rounded-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,255,65,0.1)] overflow-hidden flex flex-col h-full border border-gray-800";
  const styleObj = { animationDelay: `${index * 100}ms` };

  if (isExternal) {
    return (
      <a href={resource.link} target="_blank" rel="noopener noreferrer" className={classNameStr} style={styleObj}>
        {cardContent}
      </a>
    );
  }

  return (
    <Link to={resource.link} className={classNameStr} style={styleObj}>
      {cardContent}
    </Link>
  );
};

export default NoteCard;
