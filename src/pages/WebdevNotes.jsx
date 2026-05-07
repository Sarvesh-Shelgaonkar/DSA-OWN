import React from "react";

const resources = [
	// My Personal Notes
	{
		name: "📚 My Complete Notes Collection",
		url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/tree/main/WEBDEV/0)my_notes_nish",
		description: "Complete web dev notes - HTML, CSS, JS, React, Node.js, MongoDB, Docker, AWS & more"
	},
	
	// Full Stack Theory
	{
		name: "🎓 Full Stack Theory & Notes",
		url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/tree/main/WEBDEV/Full_Stack_%20%26%20Theory",
		description: "Full stack development concepts and theory"
	},
	
	// JavaScript
	{
		name: "💛 JavaScript Prep",
		url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/tree/main/WEBDEV/Javascript%20Prep",
		description: "JavaScript interview preparation and practice"
	},
	
	// Node.js
	{
		name: "🟢 Node.js Prep",
		url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/tree/main/WEBDEV/Node%20Js%20Prep",
		description: "Node.js backend development resources"
	},
	
	// React
	{
		name: "⚛️ React Prep",
		url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/tree/main/WEBDEV/React%20Prep",
		description: "React frontend development and interview prep"
	},
	
	// Roadmaps
	{
		name: "🗺️ Developer Roadmaps",
		url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/tree/main/WEBDEV/Roadmap",
		description: "Frontend, Backend, Full Stack & AI roadmaps"
	},
	
	// Git
	{
		name: "📖 Git Cheatsheets",
		url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/WEBDEV/Git%20Cheatsheet.pdf",
		description: "Git commands and workflow reference"
	},
	
	// Original Backend Notes
	{
		name: "🔧 Node.js Backend Notes",
		url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/WEBDEV/backend/node.js.md",
		description: "Backend development with Node.js"
	},
	{
		name: "🌐 REST API Notes",
		url: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/blob/main/WEBDEV/backend/REST.md",
		description: "RESTful API design and implementation"
	},
];

const WebdevNotes = () => (
  <div className="pt-24 pb-16 min-h-screen">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="mb-12 border-b border-gray-800 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-neon-green font-mono">{'>'}</span>
          <h1 className="text-4xl font-bold font-mono text-white tracking-tight">
            /web_development
          </h1>
          <span className="animate-pulse-neon w-3 h-8 bg-neon-green inline-block ml-2"></span>
        </div>
        <p className="text-gray-400 font-mono pl-6">
          Complete web development resources - Frontend, Backend, Full Stack, and more! All
          materials are curated from my personal learning journey.
        </p>
      </div>

      <ul className="space-y-4 mb-10 font-mono">
        {resources.map((res) => (
          <li key={res.name} className="glass-card border border-gray-800 p-5 rounded-lg hover:border-neon-green transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex-1">
                <span className="font-bold text-lg text-gray-200 block mb-2">
                  {res.name}
                </span>
                {res.description && (
                  <p className="text-sm text-gray-400">
                    {res.description}
                  </p>
                )}
              </div>
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-white hover:underline text-sm font-semibold mt-2 sm:mt-0 whitespace-nowrap"
              >
                [VIEW]
              </a>
            </div>
          </li>
        ))}
      </ul>
      
      <div className="mt-16 text-center border-t border-gray-800 pt-8">
        <p className="text-neon-green font-mono text-sm mb-2">
          {'// More web development resources coming soon. Stay curious!'}
        </p>
        <p className="text-gray-500 font-mono text-xs">
          I'm also a learner—let's keep growing together!
        </p>
      </div>
    </div>
  </div>
);

export default WebdevNotes;
