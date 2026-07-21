import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Icon from './ui/Icon';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Icon name={isDark ? 'sun' : 'moon'} size={18} />
    </button>
  );
};

export default ThemeToggle;
