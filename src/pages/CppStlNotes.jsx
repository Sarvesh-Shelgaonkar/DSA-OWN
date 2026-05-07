import React from 'react';

const CppStlNotes = () => (
  <div className="pt-24 pb-16 min-h-screen">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="mb-12 border-b border-gray-800 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-neon-cyan font-mono">{'>'}</span>
          <h1 className="text-4xl font-bold font-mono text-white tracking-tight">
            /cpp_stl_learning
          </h1>
          <span className="animate-pulse-neon w-3 h-8 bg-neon-cyan inline-block ml-2"></span>
        </div>
        <p className="text-gray-400 font-mono pl-6">
          Essential C++ STL concepts, libraries, and resources for learning, interviews, and university exams. All links open the latest learning material on GitHub.
        </p>
      </div>

      <ul className="space-y-4 mb-10 font-mono">
        <li className="glass-card flex items-center justify-between border border-gray-800 p-4 rounded-lg hover:border-neon-cyan transition-colors">
          <div className="flex items-center gap-3">
            <span className="text-neon-cyan">⚙️</span>
            <span className="font-medium text-lg text-gray-200">C++ STL Complete Guide</span>
          </div>
          <a
            href="https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/CPP-STL-libraries/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-cyan hover:text-white hover:underline text-sm font-semibold flex items-center gap-1"
          >
            [VIEW]
          </a>
        </li>
      </ul>
      
      <div className="mt-16 text-center border-t border-gray-800 pt-8">
        <p className="text-neon-green font-mono text-sm mb-2">
          {'// More C++ STL resources coming soon. Stay curious and keep learning!'}
        </p>
        <p className="text-gray-500 font-mono text-xs">
          I'm also a learner—let's keep growing together!
        </p>
      </div>
    </div>
  </div>
);

export default CppStlNotes;
