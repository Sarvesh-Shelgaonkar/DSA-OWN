import React from 'react';

const concepts = [
  { name: "Fine-Tuning (finetuning.md)", file: "finetuning.md", emoji: "🔧" },
  { name: "Large Language Models (llm.md)", file: "llm.md", emoji: "🧠" },
  { name: "Model Context Protocol (mcp.md)", file: "mcp.md", emoji: "🔌" },
  { name: "Quantization (quantization.md)", file: "quantization.md", emoji: "📉" },
  { name: "Retrieval-Augmented Gen (rag.md)", file: "rag.md", emoji: "📚" }
];

const preparation = [
  { name: "Full Notes (day1.md)", file: "day1.md", emoji: "📅" }
];

const baseUrl = "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/Ai/AiEngineering";

const AiEngineeringNotes = () => (
  <div className="pt-24 pb-16 min-h-screen">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="mb-12 border-b border-gray-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-neon-yellow font-mono">{'>'}</span>
            <h1 className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tight">
              /ai_engineering
            </h1>
            <span className="animate-pulse-neon w-3 h-10 bg-neon-yellow inline-block ml-2"></span>
          </div>
          <p className="text-gray-400 font-mono md:pl-6 text-sm md:text-base max-w-2xl">
            Deep dive into AI Engineering concepts. Hosted directly from your Placement-Materials repository.
          </p>
        </div>
        <a 
          href="https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/tree/main/Ai"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-neon-cyan rounded-lg bg-neon-cyan/10 text-neon-cyan font-mono text-sm hover:bg-neon-cyan/20 transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <span>📁</span> VIEW ROOT REPO
        </a>
      </div>

      {/* Concepts Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-white font-mono border-b-2 border-neon-yellow pb-1 inline-block">
            /Concepts
          </h2>
          <div className="flex-1 border-b border-gray-800 border-dashed"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {concepts.map((res, index) => (
            <a
              key={res.file}
              href={`${baseUrl}/Concepts/${res.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex flex-col justify-between border border-gray-800 p-5 rounded-lg hover:border-neon-yellow transition-all duration-300 group hover:shadow-[0_0_15px_rgba(255,255,0,0.15)] hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded bg-[#1a1a1a] border border-gray-700 flex items-center justify-center flex-shrink-0 group-hover:border-neon-yellow group-hover:bg-neon-yellow/10 transition-colors">
                  <span className="text-xl">{res.emoji}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-200 group-hover:text-white line-clamp-2 leading-tight">
                    {res.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 font-mono">
                    Concepts/{res.file}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/50">
                <span className="text-xs font-mono text-gray-500">Markdown</span>
                <span className="text-neon-yellow text-xs font-mono font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  READ [↗]
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Preparation Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-white font-mono border-b-2 border-neon-cyan pb-1 inline-block">
            /Preparation
          </h2>
          <div className="flex-1 border-b border-gray-800 border-dashed"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {preparation.map((res, index) => (
            <a
              key={res.file}
              href={`${baseUrl}/Preparation/${res.file}`}
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
                    Preparation/{res.file}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/50">
                <span className="text-xs font-mono text-gray-500">Markdown</span>
                <span className="text-neon-cyan text-xs font-mono font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  START [↗]
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center border-t border-gray-800 pt-8">
        <p className="text-neon-green font-mono text-sm mb-2">
          {'// Keep pushing to your GitHub repo, and it will be accessible here!'}
        </p>
      </div>
    </div>
  </div>
);

export default AiEngineeringNotes;
