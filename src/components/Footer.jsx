import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './ui/Icon';

const COLUMNS = [
  {
    title: 'Learn',
    links: [
      { label: 'Roadmap', to: '/roadmap' },
      { label: 'Patterns', to: '/patterns' },
      { label: 'Practice Sheets', to: '/sheets' },
      { label: 'Company Problems', to: '/companies' },
      { label: 'Study Resources', to: '/resources' },
      { label: 'Topics', to: '/topics' },
      { label: 'Problems', to: '/problems' },
      { label: 'Notes & Resources', to: '/notes' },
    ],
  },
  {
    title: 'Practice',
    links: [
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'Revision', to: '/revision' },
      { label: 'Challenges', to: '/contests' },
      { label: 'Puzzles', to: '/puzzles' },
      { label: 'Code Editor', to: '/code-editor' },
      { label: 'Ranks', to: '/leaderboard' },
    ],
  },
  {
    title: 'Interview',
    links: [
      { label: 'Interview Session', to: '/interview' },
      { label: 'System Design', to: '/system-design' },
      { label: 'Resume & HR', to: '/interview/resume' },
      { label: 'SQL', to: '/interview/sql' },
      { label: 'Operating Systems', to: '/interview/os' },
      { label: 'Computer Networks', to: '/interview/cn' },
      { label: 'Java Notes', to: '/java-notes' },
    ],
  },
];

const Footer = () => (
  <footer className="mt-24 border-t border-border bg-surface">
    <div className="container-page py-14">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-fg">
              <Icon name="code" size={18} strokeWidth={2.25} />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-fg">
              My<span className="text-primary">DSA</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-fg-muted">
            A focused, open learning platform to master Data Structures & Algorithms and
            track your interview-prep progress — free and private, right in your browser.
          </p>
          <a
            href="https://github.com/Sarvesh-Shelgaonkar/DSA-OWN"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            <Icon name="github" size={18} /> Star on GitHub
          </a>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-fg">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-fg-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
        <p className="text-sm text-fg-subtle">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://github.com/Sarvesh-Shelgaonkar"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-fg-muted transition-colors hover:text-primary"
          >
            Sarvesh Shelgaonkar
          </a>
          . All rights reserved.
        </p>
        <p className="text-sm text-fg-subtle">
          MyDSA — built &amp; owned by Sarvesh Shelgaonkar.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
