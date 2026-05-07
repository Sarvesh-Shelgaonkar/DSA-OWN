import React, { useState } from 'react';
import { systemDesignData } from '../data/systemDesignData';

const SystemDesignMasterclass = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Resources', emoji: '📚' },
    { id: 'part1', label: '1. Fundamentals', emoji: '🏗️' },
    { id: 'part2', label: '2. Core Concepts', emoji: '🧠' },
    { id: 'part3', label: '3. Cheatsheets', emoji: '📄' },
    { id: 'part4', label: '4. Case Studies', emoji: '🏢' },
    { id: 'misc', label: 'Extras', emoji: '✨' },
  ];

  const getFilteredData = () => {
    if (activeTab === 'all') {
      return [
        ...systemDesignData.misc,
        ...systemDesignData.part1,
        ...systemDesignData.part2,
        ...systemDesignData.part3,
        ...systemDesignData.part4,
      ];
    }
    return systemDesignData[activeTab] || [];
  };

  const filteredData = getFilteredData();

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 border-b border-gray-800 pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-neon-cyan font-mono">{'>'}</span>
              <h1 className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tight">
                /system_design_masterclass
              </h1>
              <span className="animate-pulse-neon w-3 h-10 bg-neon-cyan inline-block ml-2"></span>
            </div>
            <p className="text-gray-400 font-mono md:pl-6 text-sm md:text-base max-w-3xl">
              The ultimate collection of System Design resources. From fundamental concepts to 50+ real-world architectures like Netflix, Uber, and Facebook.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="px-4 py-2 border border-neon-cyan rounded-lg bg-[#111] text-neon-cyan font-mono text-sm shadow-[0_0_10px_rgba(0,255,255,0.2)]">
              TOTAL RESOURCES: <span className="text-white font-bold">{getFilteredData().length}</span>
            </div>
          </div>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-gray-800 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md font-mono text-sm transition-all duration-300 flex items-center gap-2
                ${activeTab === tab.id 
                  ? 'bg-neon-cyan/20 border border-neon-cyan text-neon-cyan shadow-[0_0_10px_rgba(0,255,255,0.3)]' 
                  : 'bg-[#111] border border-gray-800 text-gray-400 hover:border-gray-500 hover:text-gray-200'}`}
            >
              <span>{tab.emoji}</span> {tab.label}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredData.map((item, index) => (
            <a
              key={item.path}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex flex-col justify-between border border-gray-800 p-5 rounded-lg hover:border-neon-cyan transition-all duration-300 group hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] hover:-translate-y-1"
              style={{ animationDelay: `${(index % 15) * 50}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded bg-[#1a1a1a] border border-gray-700 flex items-center justify-center flex-shrink-0 group-hover:border-neon-cyan group-hover:bg-neon-cyan/10 transition-colors">
                  <span className="text-neon-cyan text-lg">📄</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-200 group-hover:text-white line-clamp-2 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 font-mono truncate">
                    {item.path.split('/')[0]}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/50">
                <span className="text-xs font-mono text-gray-500">PDF Document</span>
                <span className="text-neon-cyan text-xs font-mono font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  READ [↗]
                </span>
              </div>
            </a>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-20 border border-gray-800 border-dashed rounded-lg">
            <span className="text-4xl mb-4 block">📭</span>
            <h3 className="text-gray-300 font-mono text-xl mb-2">No resources found</h3>
            <p className="text-gray-500 font-mono text-sm">Please select a different category.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default SystemDesignMasterclass;
