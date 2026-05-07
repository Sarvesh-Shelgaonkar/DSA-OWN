import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'NOTES', path: '/notes' },
    { name: 'EDITOR', path: '/code-editor' }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'glass-card border-neon-green/30 shadow-[0_4px_30px_rgba(0,255,65,0.1)] py-2' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Animated Logo */}
        <Link to="/" className="flex items-center gap-2 font-mono group cursor-pointer">
          <span className="text-2xl text-neon-green font-bold animate-pulse-neon group-hover:animate-glitch inline-block">
            {'>_'}
          </span>
          <h1 className="text-xl font-bold tracking-wider text-white flex items-center">
            DSA<span className="text-neon-green">.exe</span>
            <span className="inline-block w-2 h-5 bg-neon-green ml-1 animate-type-cursor border-r-2 border-neon-green"></span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || 
                             (link.path === '/notes' && location.pathname.includes('-notes'));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-mono text-sm tracking-widest px-3 py-1 rounded transition-all duration-300 relative group overflow-hidden ${
                  isActive 
                    ? 'text-neon-green' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {/* Hover bracket effect */}
                <span className={`absolute left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${isActive ? 'text-neon-green' : 'text-neon-cyan'}`}>[</span>
                <span className="relative px-2">{link.name}</span>
                <span className={`absolute right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${isActive ? 'text-neon-green' : 'text-neon-cyan'}`}>]</span>
                
                {/* Active glow line */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neon-green shadow-[0_0_8px_#00ff41]"></div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
