import React from "react";

const subjects = [
	{
		name: "Artificial Intelligence (AI)",
		notesUrl: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/CORESUB/AI/NOTES.MD",
	},
	{
		name: "Cloud Computing (CC)",
		notesUrl: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/CORESUB/CC/NOTES.MD",
	},
	{
		name: "Computer Networks & Security (CNS)",
		notesUrl: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/CORESUB/CNS/NOTES.MD",
	},
	{
		name: "DBMS",
		notesUrl: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/CORESUB/DBMS/NOTES.MD",
	},
	{
		name: "Data Science & Big Data Analytics (DSBDA)",
		notesUrl: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/CORESUB/DSBDA/NOTES.MD",
	},
	{
		name: "Object Oriented Programming (OOP)",
		notesUrl: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/CORESUB/OOP/NOTES.MD",
	},
	{
		name: "Operating Systems (OS)",
		notesUrl: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/CORESUB/OS/NOTES.MD",
	},
];

const CoreSubjectsNotes = () => (
  <div className="pt-24 pb-16 min-h-screen">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="mb-12 border-b border-gray-800 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-neon-cyan font-mono">{'>'}</span>
          <h1 className="text-4xl font-bold font-mono text-white tracking-tight">
            /core_subjects
          </h1>
          <span className="animate-pulse-neon w-3 h-8 bg-neon-cyan inline-block ml-2"></span>
        </div>
        <p className="text-gray-400 font-mono pl-6">
          Access concise, exam-focused learning resources for all major CS core subjects. Each subject links to detailed learning material on GitHub. Perfect for building strong fundamentals and deep understanding.
        </p>
      </div>

      <ul className="space-y-4 font-mono mb-10">
        {subjects.map((subj) => (
          <li key={subj.name} className="glass-card flex flex-col sm:flex-row sm:items-center justify-between border border-gray-800 p-4 rounded-lg hover:border-neon-cyan transition-colors gap-4">
            <div className="flex items-center gap-3">
              <span className="text-neon-cyan">🖥️</span>
              <span className="font-medium text-lg text-gray-200">{subj.name}</span>
            </div>
            <a
              href={subj.notesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-white hover:underline text-sm font-semibold self-start sm:self-auto flex items-center gap-1"
            >
              [VIEW]
            </a>
          </li>
        ))}
      </ul>
      
      <div className="mt-16 text-center border-t border-gray-800 pt-8">
        <p className="text-neon-green font-mono text-sm mb-2">
          {'// More core subject resources will be added soon. Stay curious!'}
        </p>
        <p className="text-gray-500 font-mono text-xs">
          I'm also a learner—let's keep growing together!
        </p>
      </div>
    </div>
  </div>
);

export default CoreSubjectsNotes;
