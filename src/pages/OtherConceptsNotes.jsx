import React from 'react';

const categories = [
  {
    title: "Design Patterns & Architecture",
    icon: "🏗️",
    color: "neon-cyan",
    pulse: "pulse-neon-cyan",
    items: [
      {
        name: "Explore Dependency Injection Concepts",
        url: "https://docs.google.com/document/d/1oLKzMyshsleGWbucMSpPmCUnVFjVD6K3EmesAcwt73I/edit?usp=sharing",
        description: "A clear guide on DI design patterns and their advantages in decoupling software."
      },
      {
        name: "Read Singleton Pattern Guide",
        url: "https://docs.google.com/document/d/1rt3LyIh6f7I9mlCJQLnYctXKR3zdisIcfplEYXX_TVs/edit?usp=sharing",
        description: "Understanding singleton patterns, implementation pitfalls, and thread-safety."
      }
    ]
  },
  {
    title: "Security & APIs",
    icon: "🔑",
    color: "neon-red",
    pulse: "pulse-neon-red",
    items: [
      {
        name: "Access | Refresh Token Guide",
        url: "https://docs.google.com/document/d/1-kmIipM28_TYBRBlTomBTyhPL8YQunzsBFeRtcpW9lM/edit?usp=sharing",
        description: "Workflow and token storage best practices for modern web application authentication."
      },
      {
        name: "JWT Advanced Concepts",
        url: "https://docs.google.com/document/d/16QqUC9_zXFtJvngAjxTPEtQF0hLEmH0wgYRjwPIK6ao",
        description: "Advanced JSON Web Tokens implementation, signing algorithms, and session management."
      },
      {
        name: "CORS (Cross-Origin Resource Sharing)",
        url: "https://docs.google.com/document/d/1s0S-QzQAbGTKIslSynRHENXfoTML3gk9AwLyGfDfKhM",
        description: "Detailed breakdown of CORS, origin matching rules, and header configurations."
      },
      {
        name: "API Authentication vs Authorization",
        url: "https://docs.google.com/document/d/17GhiPTKf9W6wXlpWn2Lt3xkO73ZP2Rmps7rnjPVxR9o/edit?usp=sharing",
        description: "Clear demarcation of AuthN vs AuthZ differences, standard protocols, and use cases."
      }
    ]
  },
  {
    title: "Frontend & Build Tools",
    icon: "⚡",
    color: "neon-green",
    pulse: "pulse-neon",
    items: [
      {
        name: "Migrating from CRA to Vite",
        url: "https://docs.google.com/document/d/1sT9keZqof5uvK0x7hEUXh2sTbefViaGoQ2xiqX6JoA8/edit?usp=sharing",
        description: "Step-by-step migration roadmap from deprecated CRA setups to super-fast Vite build tools."
      },
      {
        name: "Public vs Src Folder for Assets",
        url: "https://medium.com/@atenanavidi/choosing-between-public-and-src-folder-for-assets-file-in-a-react-app-fec504477149",
        description: "Detailed guide on when and why to place images/files in /public vs /src in a React app."
      },
      {
        name: "Understanding npm audit Commands",
        url: "https://docs.google.com/document/d/1DmWvbQC63QgtV5DOzz-26SKFYckcU-k4yClMPIMhg18/mobilebasic?fbclid=PAVERFWANoOoFleHRuA2FlbQIxMAABpxpG8PZRfwzS926EY7ec4tr4BLCnEMGODVHaGilXoO0Bc4i4ftPHRNoqP0TE_aem_JtXjYTbKFBrZXJoyGxG_Fw",
        description: "Decoding package security warnings, audit reports, and vulnerability resolutions."
      }
    ]
  },
  {
    title: "GitHub & CI/CD Deployments",
    icon: "🐙",
    color: "neon-cyan",
    pulse: "pulse-neon-cyan",
    items: [
      {
        name: "Take-my-selfie | JS Repository",
        url: "https://github.com/kasturivats19/Take-my-selfie",
        description: "Hands-on JavaScript project showcasing custom camera capture and browser integration."
      },
      {
        name: "View GitHub Deploy Workflow File",
        url: "https://github.com/kasturivats19/Take-my-selfie/blob/main/.github/workflows/deploy.yml",
        description: "Production CI/CD workflow YAML configuration for automated web deployments."
      }
    ]
  },
  {
    title: "Roadmaps & Interview Prep Sheets",
    icon: "🗺️",
    color: "neon-yellow",
    pulse: "pulse-neon-yellow",
    items: [
      {
        name: "Roadmap JS | React",
        url: "https://docs.google.com/document/d/1cwv0q_6fSIURlbGwBnhGgZpSbj3UlpTdVqNnGrfkU3g/mobilebasic?fbclid=PAVERFWANoOBtleHRuA2FlbQIxMAABp_ckOZwMWW7gdbzQeTeukB1Pjbkoq4zXA8ip3AALXtnDITFHv2jB-9ZkHtBp_aem_NstlGSRDHURhmotwQ5O17g",
        description: "A complete visual and conceptual pathway for mastering JS and React frameworks."
      },
      {
        name: "SQL Interview Questions - Beginner",
        url: "https://docs.google.com/spreadsheets/d/1uNPAJcmj524V2Z6VcMfQNdHkWJNL-P5Q/htmlview?fbclid=PAVERFWANoNCJleHRuA2FlbQIxMAABp_fSi-7YsvlzHCuMm9ZR6BwKlzDR6rnGn_2Wlq-DNYFAWLbZ-vk11-KSUXjz_aem_yx61n2gpVyYA1r5UGB2Sqg",
        description: "A structured checklist of basic to intermediate database queries commonly tested in rounds."
      }
    ]
  }
];

const OtherConceptsNotes = () => (
  <div className="pt-24 pb-16 min-h-screen">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="mb-12 border-b border-gray-800 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-neon-red font-mono">{'>'}</span>
          <h1 className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tight">
            /other_swe_concepts
          </h1>
          <span className="animate-pulse-neon-red w-3 h-10 bg-neon-red inline-block ml-2"></span>
        </div>
        <p className="text-gray-400 font-mono pl-6 text-sm md:text-base">
          Curated SWE documents, security checklists, architecture patterns, and build tool guides to level up your engineering skills.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((cat, index) => (
          <div 
            key={cat.title} 
            className="animate-fade-slide-up" 
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center gap-3 mb-6 border-b border-gray-800/40 pb-2">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-xl md:text-2xl font-bold font-mono text-white tracking-wide">
                {cat.title}
              </h2>
              <div className={`h-1.5 w-1.5 rounded-full bg-${cat.color} animate-ping ml-2`}></div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
              {cat.items.map((item) => (
                <li 
                  key={item.name} 
                  className={`group relative glass-card p-5 rounded-lg border border-gray-800 hover:border-${cat.color} transition-all duration-300 flex flex-col justify-between`}
                >
                  {/* Top glowing card edge */}
                  <div className={`absolute top-0 left-0 w-1/4 h-[2px] bg-${cat.color} opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500`}></div>
                  
                  <div>
                    <span className="font-bold text-base text-gray-200 block mb-2 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-gray-900 pt-3 mt-2">
                    <span className="text-[10px] text-gray-600">DOCUMENT</span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-neon-cyan hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors`}
                    >
                      [VIEW_DOC] <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">{`↗`}</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center border-t border-gray-800 pt-8">
        <p className="text-neon-red font-mono text-sm mb-2">
          {'// Keep expanding your knowledge core.'}
        </p>
        <p className="text-gray-500 font-mono text-xs">
          Let's continue engineering the future together.
        </p>
      </div>
    </div>
  </div>
);

export default OtherConceptsNotes;
