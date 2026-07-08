import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const MatrixRain = () => {
  const canvasRef = useRef(null);
  const location = useLocation();
  const colorRef = useRef('#00ff41'); // default green

  // Track path changes and update color smoothly without re-initializing canvas
  useEffect(() => {
    const path = location.pathname;
    let color = '#00ff41'; // default green
    
    if (path === '/notes') {
      color = '#00d4ff'; // neon cyan
    } else if (path === '/cpp-stl-notes') {
      color = '#00d4ff'; // neon cyan
    } else if (path === '/sql-notes') {
      color = '#ffff00'; // neon yellow
    } else if (path === '/system-design-notes' || path === '/system-design-masterclass') {
      color = '#ff3131'; // neon red
    } else if (path === '/core-subjects-notes') {
      color = '#00d4ff'; // neon cyan
    } else if (path === '/webdev-notes') {
      color = '#00ff41'; // neon green
    } else if (path === '/ai-engineering-notes') {
      color = '#ffff00'; // neon yellow
    } else if (path === '/java-notes') {
      color = '#00d4ff'; // neon cyan
    } else if (path === '/backend-concepts-notes') {
      color = '#00d4ff'; // neon cyan
    } else if (path === '/other-concepts-notes') {
      color = '#ff3131'; // neon red
    } else if (path === '/code-editor') {
      color = '#00d4ff'; // neon cyan
    }
    
    colorRef.current = color;
  }, [location.pathname]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Make the canvas full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters to display - mixing katakana and latin for that classic matrix look
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    // Array of drops - one per column
    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // Black background with slight opacity for trailing effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = colorRef.current; // Dynamic neon color
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly to create staggered effect
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    // Run animation
    const interval = setInterval(draw, 33); // ~30fps

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-35"
    />
  );
};

export default MatrixRain;
