import React from 'react';
import NoteCard from '../components/NoteCard';
import { SectionHeading } from '../components/ui/index.jsx';

const Notes = () => {
  const resources = [
    {
      title: "DSA Topic-wise Notes",
      description: "Arrays, Strings, Linked Lists, Trees, DP & more — read in-app with theory and worked problems",
      link: "/dsa-notes",
      emoji: "📚",
      color: "neon-cyan",
      tag: "NOTES"
    },
    {
      title: "DSA PDFs & Sheets",
      description: "DSA question sheets and handwritten notes for offline study",
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
      title: "Other SWE Concepts",
      description: "Dependency injection, design patterns, JWT security, CORS, Vite migration, and tool guides",
      link: "/other-concepts-notes",
      emoji: "🧠",
      color: "neon-red",
      tag: "SWE"
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
    <div className="container-page pt-24 pb-16">
      <SectionHeading
        eyebrow="Learn"
        title="Learning Resources"
        description="Curated notes, sheets, and references for interview prep — from DSA and core subjects to web, backend, and system design."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <NoteCard key={resource.link} resource={resource} />
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-dashed border-border bg-surface/50 p-8 text-center">
        <p className="text-fg-muted">More resources are added regularly — I'm also a learner, so let's keep growing together.</p>
      </div>
    </div>
  );
};

export default Notes;
