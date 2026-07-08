import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MatrixRain from './components/MatrixRain';
import Notes from './pages/Notes';
import CppStlNotes from './pages/CppStlNotes';
import DsaPdfNotes from './pages/DsaPdfNotes';
import SqlNotes from './pages/SqlNotes';
import SystemDesignNotes from './pages/SystemDesignNotes';
import WebdevNotes from './pages/WebdevNotes';
import DSAProblemsPage from './pages/DSAProblemsPage';
import CodeEditorPage from './pages/CodeEditorPage';
import SystemDesignMasterclass from './pages/SystemDesignMasterclass';
import AiEngineeringNotes from './pages/AiEngineeringNotes';
import BackendConceptsNotes from './pages/BackendConceptsNotes';
import JavaNotes from './pages/JavaNotes';
import OtherConceptsNotes from './pages/OtherConceptsNotes';

const CoreSubjectsNotes = React.lazy(() => import('./pages/CoreSubjectsNotes'));

const App = () => {
  return (
    <Router>
      <div className="min-h-screen relative font-sans text-gray-100 overflow-x-hidden">
        {/* Global Matrix Rain Background */}
        <MatrixRain />
        
        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center font-mono text-neon-green">
              <span className="animate-pulse-neon text-xl">{'>'} Loading system components...</span>
            </div>
          }>
            <Routes>
              <Route path="/" element={<DSAProblemsPage />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/cpp-stl-notes" element={<CppStlNotes />} />
              <Route path="/dsa-pdf-notes" element={<DsaPdfNotes />} />
              <Route path="/sql-notes" element={<SqlNotes />} />
              <Route path="/system-design-notes" element={<SystemDesignNotes />} />
              <Route path="/core-subjects-notes" element={<CoreSubjectsNotes />} />
              <Route path="/webdev-notes" element={<WebdevNotes />} />
              <Route path="/code-editor" element={<CodeEditorPage />} />
              <Route path="/system-design-masterclass" element={<SystemDesignMasterclass />} />
              <Route path="/ai-engineering-notes" element={<AiEngineeringNotes />} />
              <Route path="/backend-concepts-notes" element={<BackendConceptsNotes />} />
              <Route path="/java-notes" element={<JavaNotes />} />
              <Route path="/other-concepts-notes" element={<OtherConceptsNotes />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
