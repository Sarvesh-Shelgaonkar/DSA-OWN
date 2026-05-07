import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dsaProblems } from '../data/dsaProblems';
import { useLocalProgress } from '../hooks/useLocalProgress';
import ProgressRing from '../components/ProgressRing';
import StatsBar from '../components/StatsBar';
import FilterBar from '../components/FilterBar';
import ProblemRow from '../components/ProblemRow';

const DSAProblemsPage = () => {
  const { progress, markProblemSolved, markProblemUnsolved } = useLocalProgress();
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [typingText, setTypingText] = useState('');
  
  const problemsPerPage = 20;

  // Get all unique topics
  const topics = useMemo(() => ['All', ...new Set(dsaProblems.map(topic => topic.topic))], []);
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  // Filter problems
  const filteredProblems = useMemo(() => {
    let allProblems = [];
    
    dsaProblems.forEach(topicData => {
      if (selectedTopic === 'All' || topicData.topic === selectedTopic) {
        topicData.problems.forEach(problem => {
          if (selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty) {
            allProblems.push({
              ...problem,
              topic: topicData.topic
            });
          }
        });
      }
    });
    
    return allProblems;
  }, [selectedTopic, selectedDifficulty]);

  const totalFiltered = filteredProblems.length;
  const solvedCount = filteredProblems.filter(p => progress[p.id]?.solved).length;

  // All problems for Stats
  const allFlattenedProblems = useMemo(() => {
    let all = [];
    dsaProblems.forEach(t => {
      t.problems.forEach(p => {
        all.push({ ...p, topic: t.topic });
      });
    });
    return all;
  }, []);

  const totalOverallSolved = allFlattenedProblems.filter(p => progress[p.id]?.solved).length;

  // Pagination
  const totalPages = Math.ceil(totalFiltered / problemsPerPage);
  const startIndex = (currentPage - 1) * problemsPerPage;
  const currentProblems = filteredProblems.slice(startIndex, startIndex + problemsPerPage);

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
    setCurrentPage(1);
  };

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setCurrentPage(1);
  };

  const toggleSolved = (id) => {
    if (progress[id]?.solved) {
      markProblemUnsolved(id);
    } else {
      markProblemSolved(id);
    }
  };

  // Typing effect
  useEffect(() => {
    const fullText = `Loading your coding journey... ${totalOverallSolved} problems solved... Keep going!_`;
    let i = 0;
    const interval = setInterval(() => {
      setTypingText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [totalOverallSolved]);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold font-mono text-white mb-4 animate-glitch tracking-tighter" data-text="MASTER DSA">
              MASTER DSA
            </h1>
            <div className="h-8">
              <p className="text-neon-cyan font-mono text-sm md:text-base opacity-80">
                {typingText}
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0 bg-dark-bg p-4 rounded-full shadow-[0_0_30px_rgba(0,255,65,0.1)] border border-neon-green/20">
            <ProgressRing progress={totalOverallSolved} total={allFlattenedProblems.length} />
          </div>
        </div>

        {/* System Design Banner */}
        <div className="mb-12">
          <Link to="/system-design-masterclass" className="glass-card flex flex-col md:flex-row items-center justify-between p-6 border-l-4 border-l-neon-cyan hover:border-l-neon-yellow transition-all duration-300 group shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,0,0.2)]">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="text-5xl group-hover:scale-110 transition-transform">🏗️</div>
              <div>
                <h2 className="text-2xl font-bold font-mono text-white mb-1 group-hover:text-neon-cyan transition-colors">System Design Masterclass</h2>
                <p className="text-gray-400 font-mono text-sm">50+ Real-world case studies (Netflix, Uber, etc.), Cheat-sheets, and Basics.</p>
              </div>
            </div>
            <div className="px-6 py-3 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan font-mono font-bold rounded group-hover:bg-neon-yellow/10 group-hover:border-neon-yellow group-hover:text-neon-yellow transition-colors whitespace-nowrap">
              START LEARNING [↗]
            </div>
          </Link>
        </div>

        {/* Stats Sticky Bar */}
        <StatsBar problems={allFlattenedProblems} progress={progress} />

        {/* Filter Section */}
        <FilterBar 
          topics={topics}
          difficulties={difficulties}
          selectedTopic={selectedTopic}
          selectedDifficulty={selectedDifficulty}
          onTopicChange={handleTopicChange}
          onDifficultyChange={handleDifficultyChange}
        />

        {/* Problems List */}
        <div className="space-y-3 mb-8">
          {currentProblems.map((problem, index) => (
            <div 
              key={problem.id}
              className="animate-fade-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProblemRow 
                problem={problem}
                globalIndex={startIndex + index}
                isSolved={progress[problem.id]?.solved}
                toggleSolved={toggleSolved}
              />
            </div>
          ))}
          
          {currentProblems.length === 0 && (
            <div className="text-center py-16 border border-dashed border-gray-700 rounded-lg glass-card">
              <span className="text-4xl block mb-4">🤖</span>
              <p className="text-gray-400 font-mono">No problems match the current filters.</p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 font-mono">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="btn-terminal border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {'<'} PREV
            </button>
            
            <div className="flex items-center gap-1 mx-4 text-sm">
              <span className="text-neon-cyan">{currentPage}</span>
              <span className="text-gray-600">/</span>
              <span className="text-gray-500">{totalPages}</span>
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="btn-terminal border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              NEXT {'>'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default DSAProblemsPage;