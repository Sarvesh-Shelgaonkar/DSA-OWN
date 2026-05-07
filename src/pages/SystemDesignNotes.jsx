import React from 'react';

const resources = [
  {
    name: "System Design Notes",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/SYSTEMDESIGN/README.md"
  },
  {
    name: "My Learning Notes",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/SYSTEMDESIGN/MYLEARNING.MD"
  },
  {
    name: "System Design PDF",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/SYSTEMDESIGN/system%20design.pdf"
  }
];

const SystemDesignNotes = () => (
  <div className="pt-24 pb-16 min-h-screen">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="mb-12 border-b border-gray-800 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-neon-red font-mono">{'>'}</span>
          <h1 className="text-4xl font-bold font-mono text-white tracking-tight">
            /system_design
          </h1>
          <span className="animate-pulse-neon w-3 h-8 bg-neon-red inline-block ml-2"></span>
        </div>
        <p className="text-gray-400 font-mono pl-6">
          Explore essential system design concepts and resources for real-world software architecture and learning.
        </p>
      </div>

      <ul className="space-y-4 mb-10 font-mono">
        {resources.map((res) => (
          <li key={res.name} className="glass-card flex items-center justify-between border border-gray-800 p-4 rounded-lg hover:border-neon-red transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-neon-red">🏗️</span>
              <span className="font-medium text-lg text-gray-200">{res.name}</span>
            </div>
            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-white hover:underline text-sm font-semibold"
            >
              [VIEW]
            </a>
          </li>
        ))}
      </ul>
      
      <div className="mt-16 text-center border-t border-gray-800 pt-8">
        <p className="text-neon-green font-mono text-sm mb-2">
          {'// More system design resources and case studies coming soon.'}
        </p>
        <p className="text-gray-500 font-mono text-xs">
          I'm also a learner—let's keep growing together!
        </p>
      </div>
    </div>
  </div>
);

export default SystemDesignNotes;
