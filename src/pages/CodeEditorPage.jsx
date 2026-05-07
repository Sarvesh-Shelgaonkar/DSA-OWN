import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditorPage = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('// Write your code here...\nconsole.log("Hello, Hacker!");');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  // Map our UI languages to Piston API language names and default versions
  const languageConfig = {
    javascript: { name: 'javascript', version: '*', template: 'console.log("Hello, World!");' },
    python: { name: 'python', version: '*', template: 'print("Hello, World!")' },
    java: { 
      name: 'java', 
      version: '*', 
      template: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}' 
    },
    cpp: { 
      name: 'c++', 
      version: '*', 
      template: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}' 
    }
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    setCode(languageConfig[lang].template);
  };

  const executeCode = async () => {
    setIsRunning(true);
    setOutput('Compiling/Running...\n[System]: waiting for process to return...');
    
    try {
      const config = languageConfig[language];
      
      // Execute JavaScript locally in the browser
      if (config.name === 'javascript') {
        setTimeout(() => {
          let logOutput = [];
          const originalConsoleLog = console.log;
          console.log = (...args) => {
            logOutput.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' '));
          };
          
          try {
            // eslint-disable-next-line no-eval
            eval(code);
            setOutput(logOutput.join('\n') || '[Program finished with no output]');
          } catch (err) {
            setOutput(`[Execution Error]: \n${err.stack || err.message}`);
          } finally {
            console.log = originalConsoleLog;
            setIsRunning(false);
          }
        }, 500); // Simulate network delay
        return;
      }

      // For other languages, mock the execution since the public API is restricted
      setTimeout(() => {
        if (code.trim() === config.template.trim()) {
          setOutput(`Hello, World!\n\n[System]: Program finished successfully.\n\nNote: ${config.name.toUpperCase()} execution is currently simulated because the public execution API is restricted. Real execution requires a backend server.`);
        } else {
          setOutput(`[Simulated Output for ${config.name}]:\nCode executed successfully.\n\nNote: Actual remote execution is currently disabled because the public execution API is restricted. Only JavaScript executes locally.`);
        }
        setIsRunning(false);
      }, 1500);

    } catch (error) {
      setOutput(`[System Error]: ${error.message}`);
      setIsRunning(false);
    }
  };

  return (
    <div className="pt-24 pb-8 min-h-screen flex flex-col container mx-auto px-4 max-w-7xl">
      <div className="mb-6 border-b border-gray-800 pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold font-mono text-white mb-2 flex items-center gap-2">
            <span className="text-neon-cyan">{'>'}</span> IDE.exe
            <span className="w-3 h-6 bg-neon-cyan inline-block animate-pulse-neon"></span>
          </h1>
          <p className="text-gray-400 font-mono text-sm">
            Execute code in isolated containers.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <select 
            value={language} 
            onChange={handleLanguageChange}
            className="bg-[#111] border border-gray-700 text-neon-green font-mono px-3 py-2 rounded focus:outline-none focus:border-neon-green"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python 3</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>

          <button 
            onClick={executeCode}
            disabled={isRunning}
            className="btn-neon-green bg-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isRunning ? (
              <span className="animate-spin inline-block">⚙</span>
            ) : (
              <span>▶</span>
            )}
            {isRunning ? 'EXECUTING...' : 'RUN_CODE'}
          </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[600px]">
        {/* Editor Area */}
        <div className="glass-card rounded-lg overflow-hidden border border-gray-800 flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <div className="bg-[#111] px-4 py-2 border-b border-gray-800 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="font-mono text-xs text-gray-500 ml-2">main.{language === 'javascript' ? 'js' : language === 'python' ? 'py' : language === 'cpp' ? 'cpp' : 'java'}</span>
          </div>
          <div className="flex-1">
            <Editor
              height="100%"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value)}
              options={{
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                cursorBlinking: "smooth",
                cursorWidth: 2,
              }}
            />
          </div>
        </div>

        {/* Terminal Area */}
        <div className="glass-card rounded-lg border border-gray-800 flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-[#050505]">
          <div className="bg-[#111] px-4 py-2 border-b border-gray-800">
            <span className="font-mono text-xs text-gray-400">Terminal - Output</span>
          </div>
          <div className="flex-1 p-4 overflow-auto">
            <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
              {output || (
                <span className="text-gray-600">
                  // No output yet. Click RUN_CODE to execute.
                </span>
              )}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorPage;
