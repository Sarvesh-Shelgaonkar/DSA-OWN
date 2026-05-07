/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'neon-green': '#00ff41',
        'neon-cyan': '#00d4ff',
        'neon-red': '#ff3131',
        'neon-yellow': '#ffff00',
        'dark-bg': '#0a0a0a',
        'dark-card': '#111111',
        'dark-border': '#1a1a1a',
        'glass': 'rgba(255,255,255,0.05)'
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 255, 65, 0.8), 0 0 30px rgba(0, 255, 65, 0.4)' },
        },
        'pulse-neon-cyan': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.4)' },
        },
        'pulse-neon-red': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 49, 49, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 49, 49, 0.8), 0 0 30px rgba(255, 49, 49, 0.4)' },
        },
        'pulse-neon-yellow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 255, 0, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 255, 0, 0.8), 0 0 30px rgba(255, 255, 0, 0.4)' },
        },
        'type-cursor': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#00ff41' },
        },
        'fade-slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        glitch: 'glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite',
        'pulse-neon': 'pulse-neon 2s infinite',
        'pulse-neon-cyan': 'pulse-neon-cyan 2s infinite',
        'pulse-neon-red': 'pulse-neon-red 2s infinite',
        'pulse-neon-yellow': 'pulse-neon-yellow 2s infinite',
        'type-cursor': 'type-cursor 1s step-end infinite',
        'fade-slide-up': 'fade-slide-up 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}