import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BackendConceptsNotes = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/backend-concepts.md')
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Failed to load markdown:", err));
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 border-b border-gray-800 pb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-neon-cyan font-mono">{'>'}</span>
            <h1 className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tight">
              /backend_deep_dive
            </h1>
            <span className="animate-pulse-neon w-3 h-10 bg-neon-cyan inline-block ml-2"></span>
          </div>
          <p className="text-gray-400 font-mono md:pl-6 text-sm md:text-base">
            TicketWise – Backend Concepts Deep Dive.
            <br />
            Source: <a href="https://reliable-babka-9cbcbc.netlify.app/#c43" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">reliable-babka-9cbcbc.netlify.app</a>
          </p>
        </div>

        <div className="glass-card p-6 md:p-10 rounded-lg border border-gray-800 shadow-[0_0_20px_rgba(0,255,255,0.05)]">
          <div className="prose prose-invert prose-neon max-w-none font-sans">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-white mb-6 font-mono border-b border-gray-800 pb-2" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-neon-cyan mt-10 mb-4 font-mono" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-bold text-neon-yellow mt-8 mb-3 font-mono" {...props} />,
                p: ({node, ...props}) => <p className="text-gray-300 mb-4 leading-relaxed" {...props} />,
                a: ({node, ...props}) => <a className="text-neon-cyan hover:text-neon-yellow underline decoration-gray-600 underline-offset-4" target="_blank" rel="noopener noreferrer" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 text-gray-300 space-y-2" {...props} />,
                li: ({node, ...props}) => <li className="marker:text-neon-cyan" {...props} />,
                code: ({node, inline, ...props}) => 
                  inline 
                    ? <code className="bg-[#111] text-neon-yellow px-1.5 py-0.5 rounded font-mono text-sm border border-gray-800" {...props} />
                    : <code className="block bg-[#0a0a0a] text-gray-300 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-800 shadow-inner mb-6 whitespace-pre" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-neon-cyan pl-4 italic text-gray-400 bg-neon-cyan/5 py-2 pr-4 rounded-r-lg my-6" {...props} />
              }}
            >
              {content || 'Loading content...'}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendConceptsNotes;
