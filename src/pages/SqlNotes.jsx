import React from 'react';

const resources = [
  {
    name: "SQL Notes PDF",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/SQL/sql_notes_1742246152.pdf"
  },
  {
    name: "SQL Interview Questions",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/SQL/InterviewQues.MD"
  },
  {
    name: "SQL Learning Notes",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/SQL/Learning.md"
  },
  {
    name: "SQL Revision Table",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/SQL/Revision(table).MD"
  },
  {
    name: "SQL Revision Questions",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/SQL/revisionQues.MD"
  },
  {
    name: "ChatGPT SQL Notes",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/SQL/ChatgptSqlNote.md"
  }
];

const SqlNotes = () => (
  <div className="pt-24 pb-16 min-h-screen">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="mb-12 border-b border-gray-800 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-neon-yellow font-mono">{'>'}</span>
          <h1 className="text-4xl font-bold font-mono text-white tracking-tight">
            /sql_learning
          </h1>
          <span className="animate-pulse-neon w-3 h-8 bg-neon-yellow inline-block ml-2"></span>
        </div>
        <p className="text-gray-400 font-mono pl-6">
          Essential SQL concepts, queries, and resources for learning and university exams. All links open the latest learning material on GitHub.
        </p>
      </div>

      <ul className="space-y-4 mb-10 font-mono">
        {resources.map((res) => (
          <li key={res.name} className="glass-card flex items-center justify-between border border-gray-800 p-4 rounded-lg hover:border-neon-yellow transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-neon-yellow">🗄️</span>
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
          {'// More SQL resources and practice sets coming soon. Stay curious and keep learning!'}
        </p>
        <p className="text-gray-500 font-mono text-xs">
          I'm also a learner—let's keep growing together!
        </p>
      </div>
    </div>
  </div>
);

export default SqlNotes;
