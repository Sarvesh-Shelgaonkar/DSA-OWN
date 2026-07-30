import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useCloudSync } from './hooks/useCloudSync';

// Core pages (kept in the main chunk for instant navigation)
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import ProblemsPage from './pages/ProblemsPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Secondary app pages (code-split)
const Roadmap = lazy(() => import('./pages/Roadmap'));
const EngineeringHub = lazy(() => import('./pages/EngineeringHub'));
const EngineeringDsaLesson = lazy(() => import('./pages/EngineeringDsaLesson'));
const RoadmapStage = lazy(() => import('./pages/RoadmapStage'));
const Topics = lazy(() => import('./pages/Topics'));
const Profile = lazy(() => import('./pages/Profile'));
const Contests = lazy(() => import('./pages/Contests'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));
const Puzzles = lazy(() => import('./pages/Puzzles'));
const Patterns = lazy(() => import('./pages/Patterns'));
const Sheets = lazy(() => import('./pages/Sheets'));
const Companies = lazy(() => import('./pages/Companies'));
const CompanyDetail = lazy(() => import('./pages/CompanyDetail'));
const Resources = lazy(() => import('./pages/Resources'));
const Library = lazy(() => import('./pages/Library'));
const Revision = lazy(() => import('./pages/Revision'));
const InterviewHub = lazy(() => import('./pages/InterviewHub'));
const InterviewBankPage = lazy(() => import('./pages/InterviewBankPage'));
const SystemDesign = lazy(() => import('./pages/SystemDesign'));
const TopicNotes = lazy(() => import('./pages/TopicNotes'));

// Legacy content pages (dark-themed, code-split)
const Notes = lazy(() => import('./pages/Notes'));
const CppStlNotes = lazy(() => import('./pages/CppStlNotes'));
const DsaPdfNotes = lazy(() => import('./pages/DsaPdfNotes'));
const SqlNotes = lazy(() => import('./pages/SqlNotes'));
const SystemDesignNotes = lazy(() => import('./pages/SystemDesignNotes'));
const CoreSubjectsNotes = lazy(() => import('./pages/CoreSubjectsNotes'));
const WebdevNotes = lazy(() => import('./pages/WebdevNotes'));
const CodeEditorPage = lazy(() => import('./pages/CodeEditorPage'));
const SystemDesignMasterclass = lazy(() => import('./pages/SystemDesignMasterclass'));
const AiEngineeringNotes = lazy(() => import('./pages/AiEngineeringNotes'));
const BackendConceptsNotes = lazy(() => import('./pages/BackendConceptsNotes'));
const JavaNotes = lazy(() => import('./pages/JavaNotes'));
const OtherConceptsNotes = lazy(() => import('./pages/OtherConceptsNotes'));

const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" />
    <span className="sr-only">Loading…</span>
  </div>
);

// Legacy notes/editor pages keep their dark "terminal" aesthetic regardless of theme.
const LegacyDark = ({ children }) => (
  <div className="dark min-h-screen bg-dark-bg text-gray-100">{children}</div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);
  return null;
};

const App = () => {
  useCloudSync();
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main id="main" className="min-h-screen">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/problems" element={<ProblemsPage />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/engineering" element={<EngineeringHub />} />
            <Route path="/engineering/dsa/how-to-solve-dsa-problems" element={<EngineeringDsaLesson />} />
            <Route path="/roadmap/:stageId" element={<RoadmapStage />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contests" element={<Contests />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/puzzles" element={<Puzzles />} />
            <Route path="/patterns" element={<Patterns />} />
            <Route path="/sheets" element={<Sheets />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:slug" element={<CompanyDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/library" element={<Library />} />
            <Route path="/revision" element={<Revision />} />
            <Route path="/interview" element={<InterviewHub />} />
            <Route path="/interview/:bankId" element={<InterviewBankPage />} />
            <Route path="/system-design" element={<SystemDesign />} />
            <Route path="/dsa-notes" element={<TopicNotes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Notes hub + DSA resources use the app theme (light/dark aware) */}
            <Route path="/notes" element={<Notes />} />
            <Route path="/dsa-pdf-notes" element={<DsaPdfNotes />} />

            {/* Legacy content pages */}
            <Route path="/cpp-stl-notes" element={<LegacyDark><CppStlNotes /></LegacyDark>} />
            <Route path="/sql-notes" element={<LegacyDark><SqlNotes /></LegacyDark>} />
            <Route path="/system-design-notes" element={<LegacyDark><SystemDesignNotes /></LegacyDark>} />
            <Route path="/core-subjects-notes" element={<LegacyDark><CoreSubjectsNotes /></LegacyDark>} />
            <Route path="/webdev-notes" element={<LegacyDark><WebdevNotes /></LegacyDark>} />
            <Route path="/code-editor" element={<LegacyDark><CodeEditorPage /></LegacyDark>} />
            <Route path="/system-design-masterclass" element={<LegacyDark><SystemDesignMasterclass /></LegacyDark>} />
            <Route path="/ai-engineering-notes" element={<LegacyDark><AiEngineeringNotes /></LegacyDark>} />
            <Route path="/backend-concepts-notes" element={<LegacyDark><BackendConceptsNotes /></LegacyDark>} />
            <Route path="/java-notes" element={<JavaNotes />} />
            <Route path="/other-concepts-notes" element={<LegacyDark><OtherConceptsNotes /></LegacyDark>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
