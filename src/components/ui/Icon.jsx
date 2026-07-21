import React from 'react';

/**
 * Lightweight inline icon set (no external dependency).
 * Icons are drawn with `currentColor` and a 24x24 viewBox.
 */
const paths = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </>
  ),
  moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  check: <path d="M20 6 9 17l-5-5" />,
  flame: <path d="M12 2c1 3-1 5-2 6-1.5 1.5-2 3-2 4a6 6 0 0 0 12 0c0-2-1-4-3-6 .5 2-1 3-2 3 0-2 0-5-3-7Z" />,
  chevronRight: <path d="m9 18 6-6-6-6" />,
  chevronLeft: <path d="m15 18-6-6 6-6" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  trophy: (
    <>
      <path d="M6 4h12v4a6 6 0 0 1-12 0V4Z" />
      <path d="M6 6H4a2 2 0 0 0 0 4h2M18 6h2a2 2 0 0 1 0 4h-2M9 20h6M10 14v6M14 14v6" />
    </>
  ),
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.5" fill="currentColor" /></>,
  bookmark: <path d="M6 4h12v16l-6-4-6 4V4Z" />,
  bookmarkFilled: <path d="M6 4h12v16l-6-4-6 4V4Z" fill="currentColor" />,
  code: <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />,
  bell: <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6M10 20a2 2 0 0 0 4 0" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  layers: <path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17l9 5 9-5" />,
  book: <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5ZM19 3v16" />,
  grid: <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  route: <><circle cx="6" cy="19" r="2" /><circle cx="18" cy="5" r="2" /><path d="M8 19h6a4 4 0 0 0 0-8H10a4 4 0 0 1 0-8h6" /></>,
  lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  play: <path d="M6 4v16l14-8L6 4Z" fill="currentColor" stroke="none" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 10h18M8 2v4M16 2v4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
  stopwatch: <><path d="M9 2h6" /><path d="M12 4v3" /><circle cx="12" cy="14" r="8" /><path d="M12 14l3-2" /></>,
  pause: <><path d="M9 5v14" /><path d="M15 5v14" /></>,
  reset: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></>,
  gauge: <><path d="M12 14 15 9" /><path d="M4 18a8 8 0 1 1 16 0" /><circle cx="12" cy="14" r="1" fill="currentColor" /></>,
  star: <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.2l5.9-.9L12 3Z" />,
  starFilled: <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.2l5.9-.9L12 3Z" fill="currentColor" />,
  filter: <path d="M3 5h18l-7 8v6l-4 2v-8L3 5Z" />,
  sparkles: <path d="M12 3v6M9 6h6M6 13l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3ZM17 14l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />,
  github: <path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  external: <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v4h1" /></>,
  award: <><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" /></>,
  heart: <path d="M12 20s-7-4.3-9.5-8.2C1 9 2 5.5 5.2 5A4.3 4.3 0 0 1 12 6a4.3 4.3 0 0 1 6.8-1c3.2.5 4.2 4 2.7 6.8C19 15.7 12 20 12 20Z" />,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
  eyeOff: <><path d="M9.9 4.2A9.5 9.5 0 0 1 12 4c6.5 0 10 7 10 7a13.4 13.4 0 0 1-2.4 3.1M6.6 6.6A13.3 13.3 0 0 0 2 11s3.5 7 10 7a9.4 9.4 0 0 0 3.6-.7M3 3l18 18M9.5 9.5a3 3 0 0 0 4.2 4.2" /></>,
  logout: <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
};

const Icon = ({ name, size = 20, className = '', strokeWidth = 1.75, ...props }) => {
  const content = paths[name];
  if (!content) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {content}
    </svg>
  );
};

export default Icon;
