import React from 'react';
import NoteCard from '../components/NoteCard';

const Notes = () => {
  const resources = [
    {
      title: "DSA PDFs & Sheets",
      description: "DSA question sheets, handwritten notes, and topic-wise questions",
      link: "/dsa-pdf-notes",
      emoji: "📁",
      color: "neon-green",
      tag: "CORE"
    },
    {
      title: "C++ STL Learning",
      description: "Essential C++ STL concepts and libraries",
      link: "/cpp-stl-notes",
      emoji: "⚙️",
      color: "neon-cyan",
      tag: "LANG"
    },
    {
      title: "SQL Learning",
      description: "SQL queries, concepts, and practice resources",
      link: "/sql-notes",
      emoji: "🗄️",
      color: "neon-yellow",
      tag: "DB"
    },
    {
      title: "System Design",
      description: "System design concepts and interview preparation",
      link: "/system-design-notes",
      emoji: "🏗️",
      color: "neon-red",
      tag: "ARCH"
    },
    {
      title: "Core Subjects",
      description: "OS, DBMS, CN, and other core computer science subjects",
      link: "/core-subjects-notes",
      emoji: "🖥️",
      color: "neon-cyan",
      tag: "CS"
    },
    {
      title: "Web Development",
      description: "Frontend, backend, and full-stack web development resources",
      link: "/webdev-notes",
      emoji: "🌐",
      color: "neon-green",
      tag: "WEB"
    },
    {
      title: "AI Engineering",
      description: "Artificial Intelligence, Machine Learning, and Deep Learning resources",
      link: "/ai-engineering-notes",
      emoji: "🤖",
      color: "neon-yellow",
      tag: "AI"
    },
    {
      title: "Java Core & Practice",
      description: "Comprehensive notes and practice files for Core Java",
      link: "/java-notes",
      emoji: "☕",
      color: "neon-cyan",
      tag: "JAVA"
    },
    {
      title: "Backend Concepts Deep Dive",
      description: "Everything you need for backend interviews from reliable-babka",
      link: "/backend-concepts-notes",
      emoji: "⚙️",
      color: "neon-cyan",
      tag: "BACKEND"
    },
    {
      title: "Dream Company Prep",
      description: "Targeted preparation for top companies like Amazon",
      link: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/tree/main/Dream%20Company%20Prep",
      emoji: "🏢",
      color: "neon-yellow",
      tag: "FAANG"
    },
    {
      title: "DevOps & Cloud",
      description: "Docker, Kubernetes, CI/CD, and AWS resources",
      link: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/tree/main/DevOps",
      emoji: "☁️",
      color: "neon-green",
      tag: "DEVOPS"
    },
    {
      title: "Interview & HR Prep",
      description: "Behavioral rounds, resume tips, and interview experiences",
      link: "https://github.com/Sarvesh-Shelgaonkar/Placement-Materials/tree/main/InterviewPrep",
      emoji: "👔",
      color: "neon-cyan",
      tag: "INTERVIEW"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="mb-12 border-b border-gray-800 pb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-neon-cyan font-mono">{'>'}</span>
            <h1 className="text-4xl font-bold font-mono text-white tracking-tight">
              /learning_resources
            </h1>
            <span className="animate-pulse-neon w-3 h-8 bg-neon-cyan inline-block ml-2"></span>
          </div>
          <p className="text-gray-400 font-mono pl-6">
            Explore curated learning materials, notes, and resources for interview preparation
            <br/>
            <span className="text-gray-600 text-sm">Including imported Placement files.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={resource.link} className="animate-fade-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <NoteCard resource={resource} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center glass-card p-8 rounded-lg max-w-2xl mx-auto border-t-2 border-neon-yellow shadow-[0_0_15px_rgba(255,255,0,0.05)]">
          <p className="text-neon-yellow font-mono text-lg mb-2">
            {'/* More resources compiling... */'}
          </p>
          <p className="text-gray-500 font-mono text-sm">
            I'm also a learner—let's keep growing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
