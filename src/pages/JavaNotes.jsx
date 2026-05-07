import React from 'react';

const resources = [
  { name: "Java Practice (javapractise.md)", file: "javapractise.md", emoji: "☕" },
  { name: "Learning Guide (learning.md)", file: "learning.md", emoji: "📖" }
];

const baseUrl = "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/java";

const JavaNotes = () => (
  <div className="pt-24 pb-16 min-h-screen">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="mb-12 border-b border-gray-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-neon-cyan font-mono">{'>'}</span>
            <h1 className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tight">
              /java_core
            </h1>
            <span className="animate-pulse-neon w-3 h-10 bg-neon-cyan inline-block ml-2"></span>
          </div>
          <p className="text-gray-400 font-mono md:pl-6 text-sm md:text-base max-w-2xl">
            Deep dive into Java Core and Practice notes. Hosted directly from your Placement-Materials repository.
          </p>
        </div>
        <a 
          href="https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/tree/main/java"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-neon-yellow rounded-lg bg-neon-yellow/10 text-neon-yellow font-mono text-sm hover:bg-neon-yellow/20 transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <span>📁</span> VIEW ROOT REPO
        </a>
      </div>

      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-white font-mono border-b-2 border-neon-cyan pb-1 inline-block">
            /Java_Files
          </h2>
          <div className="flex-1 border-b border-gray-800 border-dashed"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resources.map((res, index) => (
            <a
              key={res.file}
              href={`${baseUrl}/${res.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex flex-col justify-between border border-gray-800 p-5 rounded-lg hover:border-neon-cyan transition-all duration-300 group hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded bg-[#1a1a1a] border border-gray-700 flex items-center justify-center flex-shrink-0 group-hover:border-neon-cyan group-hover:bg-neon-cyan/10 transition-colors">
                  <span className="text-xl">{res.emoji}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-200 group-hover:text-white line-clamp-2 leading-tight">
                    {res.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 font-mono">
                    java/{res.file}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/50">
                <span className="text-xs font-mono text-gray-500">Markdown</span>
                <span className="text-neon-cyan text-xs font-mono font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  READ [↗]
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
      
    </div>
  </div>
);

export default JavaNotes;
