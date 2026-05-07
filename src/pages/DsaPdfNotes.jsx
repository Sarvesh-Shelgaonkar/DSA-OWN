import React from 'react';

const resources = [
  {
    name: "150 DSA Questions PDF",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/DSA/150-DSA-questions%202.pdf"
  },
  {
    name: "Handwritten Notes PDF",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/DSA/Data_Structure_Handwritten_Notes_%EF%BF%BD_1735369811.pdf"
  },
  {
    name: "DSA Questions PDF",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/DSA/DSA_1741283310.pdf"
  },
  {
    name: "DSA README & Notes",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/DSA/README.md"
  },
  {
    name: "Topic-wise Questions & Theory",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/DSA/TOPIC%20WISE%20QUE%20AND%20NOTES"
  },
  {
    name: "Array Problems",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/DSA/TOPIC%20WISE%20QUE%20AND%20NOTES/array.md"
  },
  {
    name: "Linked List Problems",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/DSA/TOPIC%20WISE%20QUE%20AND%20NOTES/linkedlist.md"
  },
  {
    name: "DP Questions & Theory",
    url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/DSA/TOPIC%20WISE%20QUE%20AND%20NOTES/DP_QUES%20AND%20THOERY.md"
  }
];

const DsaPdfNotes = () => (
  <div className="pt-24 pb-16 min-h-screen">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="mb-12 border-b border-gray-800 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-neon-cyan font-mono">{'>'}</span>
          <h1 className="text-4xl font-bold font-mono text-white tracking-tight">
            /dsa_resources
          </h1>
          <span className="animate-pulse-neon w-3 h-8 bg-neon-cyan inline-block ml-2"></span>
        </div>
        <p className="text-gray-400 font-mono pl-6">
          Here are all DSA PDF and markdown resources available for your learning. Download and use these for offline study and deep understanding.
        </p>
      </div>
      
      <ul className="space-y-4 mb-10 font-mono">
        {resources.map((res) => (
          <li key={res.name} className="glass-card flex items-center justify-between border border-gray-800 p-4 rounded-lg hover:border-neon-cyan transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-neon-yellow">📄</span>
              <span className="font-medium text-lg text-gray-200">{res.name}</span>
            </div>
            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-white hover:underline text-sm font-semibold flex items-center gap-1"
            >
              [VIEW]
            </a>
          </li>
        ))}
      </ul>
      
      <div className="mt-16 text-center border-t border-gray-800 pt-8">
        <p className="text-neon-green font-mono text-sm mb-2">
          {'// More DSA sheets and PDFs will be added soon. Stay curious and keep learning!'}
        </p>
        <p className="text-gray-500 font-mono text-xs">
          I'm also a learner—let's keep growing together!
        </p>
      </div>
    </div>
  </div>
);

export default DsaPdfNotes;
