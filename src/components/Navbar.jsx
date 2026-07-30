import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Icon from './ui/Icon';
import ThemeToggle from './ThemeToggle';
import CommandPalette from './CommandPalette';
import { useDsaStats } from '../hooks/useDsaStats';
import { useAuth } from '../context/AuthContext';

const initialsOf = (name = '') =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() || '')
    .join('') || 'U';

const NAV_LINKS = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Problems', path: '/problems' },
  { name: 'Roadmap', path: '/roadmap' },
  { name: 'Engineering', path: '/engineering' },
  { name: 'Patterns', path: '/patterns' },
  { name: 'Interview', path: '/interview' },
];

const MORE_LINKS = [
  { name: 'System Design', path: '/system-design', icon: 'layers' },
  { name: 'Sheets', path: '/sheets', icon: 'route' },
  { name: 'Companies', path: '/companies', icon: 'grid' },
  { name: 'Resources', path: '/resources', icon: 'book' },
  { name: 'My Library', path: '/library', icon: 'book' },
  { name: 'Revision', path: '/revision', icon: 'reset' },
  { name: 'Topics', path: '/topics', icon: 'grid' },
  { name: 'Challenges', path: '/contests', icon: 'trophy' },
  { name: 'Puzzles', path: '/puzzles', icon: 'sparkles' },
  { name: 'Ranks', path: '/leaderboard', icon: 'award' },
  { name: 'Notes', path: '/notes', icon: 'book' },
  { name: 'Code Editor', path: '/code-editor', icon: 'code' },
];

const ALL_MOBILE_LINKS = [...NAV_LINKS, ...MORE_LINKS, { name: 'Profile', path: '/profile' }];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const moreRef = useRef(null);
  const userRef = useRef(null);
  const { stats } = useDsaStats();
  const { isAuthed, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Close the "More" / user menus on outside click / route change
  useEffect(() => {
    const onClick = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false);
      if (userRef.current && !userRef.current.contains(e.target)) setUserOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);
  useEffect(() => {
    setMoreOpen(false);
    setUserOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    setUserOpen(false);
    await logout();
    navigate('/');
  };
  const moreActive = MORE_LINKS.some((l) => location.pathname.startsWith(l.path));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Cmd/Ctrl+K shortcut for the command palette
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const linkClass = ({ isActive }) =>
    `relative rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ease-out-expo ${
      isActive
        ? 'bg-surface-2 text-fg shadow-[inset_0_0_0_1px_rgb(var(--border)/0.7)]'
        : 'text-fg-muted hover:bg-surface/70 hover:text-fg'
    }`;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-expo ${
          scrolled
            ? 'border-b border-border/80 bg-bg/85 shadow-[0_1px_0_rgb(255_255_255/0.015)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8" aria-label="Primary">
          {/* Logo */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2.5 rounded-lg outline-none"
            aria-label="MyDSA home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-primary text-primary-fg shadow-[0_1px_2px_rgb(0_0_0/0.18)] transition-transform duration-200 ease-out-expo group-hover:scale-[1.02]">
              <Icon name="code" size={17} strokeWidth={2.25} />
            </span>
            <span className="text-[17px] font-bold tracking-[-0.025em] text-fg">
              My<span className="text-primary">DSA</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="ml-3 hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}

            {/* More dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen((o) => !o)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                className={`relative flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200 ease-out-expo ${
                  moreActive
                    ? 'bg-surface-2 text-fg shadow-[inset_0_0_0_1px_rgb(var(--border)/0.7)]'
                    : 'text-fg-muted hover:bg-surface/70 hover:text-fg'
                }`}
              >
                More
                <Icon name="chevronDown" size={15} className={`transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              {moreOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-xl border border-border bg-surface p-1.5 shadow-popover animate-scale-in">
                  {MORE_LINKS.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          isActive ? 'bg-primary/10 text-primary' : 'text-fg-muted hover:bg-surface-2 hover:text-fg'
                        }`
                      }
                    >
                      <Icon name={link.icon} size={16} />
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="ml-auto flex min-w-0 items-center gap-2">
            {/* Search trigger */}
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="nav-search hidden xl:flex"
              aria-label="Search"
            >
              <Icon name="search" size={15} className="shrink-0" />
              <span className="min-w-0 flex-1 text-left">Search</span>
              <kbd className="rounded-md border border-border/80 bg-bg/60 px-1.5 py-0.5 text-[10px] font-semibold text-fg-subtle">⌘K</kbd>
            </button>

            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="nav-icon-button grid xl:hidden"
              aria-label="Search"
            >
              <Icon name="search" size={17} />
            </button>

            {/* Streak */}
            <Link
              to="/dashboard"
              className="nav-utility hidden sm:flex"
              title={`${stats.currentStreak}-day streak`}
            >
              <Icon name="flame" size={16} className="text-medium" />
              {stats.currentStreak}
            </Link>

            {/* Notifications */}
            <button
              type="button"
              className="nav-icon-button relative hidden sm:grid"
              aria-label="Notifications"
              onClick={() => navigate('/dashboard')}
            >
              <Icon name="bell" size={18} />
              {stats.recommended.length > 0 && (
                <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-primary" />
              )}
            </button>

            <ThemeToggle />

            {/* Auth area */}
            {isAuthed ? (
              <div className="relative hidden sm:block" ref={userRef}>
                <button
                  type="button"
                  onClick={() => setUserOpen((o) => !o)}
                  aria-expanded={userOpen}
                  aria-haspopup="true"
                  className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary to-accent text-sm font-bold text-white"
                  aria-label="Account menu"
                >
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt=""
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    initialsOf(user?.name)
                  )}
                </button>
                {userOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-border bg-surface p-1.5 shadow-popover animate-scale-in">
                    <div className="border-b border-border px-3 py-2">
                      <p className="truncate text-sm font-semibold text-fg">{user?.name}</p>
                      <p className="truncate text-xs text-fg-subtle">{user?.email}</p>
                    </div>
                    <NavLink
                      to="/profile"
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
                    >
                      <Icon name="user" size={16} /> Profile
                    </NavLink>
                    <NavLink
                      to="/revision"
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
                    >
                      <Icon name="reset" size={16} /> Revision
                    </NavLink>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-hard transition-colors hover:bg-hard/10"
                    >
                      <Icon name="logout" size={16} /> Log out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden items-center gap-2.5 md:flex">
                <Link to="/login" className="nav-auth-secondary">Log in</Link>
                <Link to="/signup" className="nav-auth-primary">Sign up</Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="nav-icon-button grid xl:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <Icon name={mobileOpen ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-x-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-surface p-4 animate-fade-slide-up">
            <div className="grid gap-1">
              {ALL_MOBILE_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? 'bg-primary/10 text-primary' : 'text-fg hover:bg-surface-2'
                    }`
                  }
                >
                  {link.name}
                  <Icon name="chevronRight" size={18} className="text-fg-subtle" />
                </NavLink>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-surface-2 px-4 py-3 text-sm">
              <Icon name="flame" size={16} className="text-medium" />
              <span className="font-semibold text-fg">{stats.currentStreak}-day streak</span>
              <span className="ml-auto text-fg-muted">{stats.totalSolved} solved</span>
            </div>

            {/* Auth actions */}
            <div className="mt-3">
              {isAuthed ? (
                <div className="rounded-xl border border-border p-3">
                  <p className="truncate text-sm font-semibold text-fg">{user?.name}</p>
                  <p className="mb-3 truncate text-xs text-fg-subtle">{user?.email}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      handleLogout();
                    }}
                    className="btn-secondary btn-sm w-full"
                  >
                    <Icon name="logout" size={16} /> Log out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2.5">
                  <Link to="/login" onClick={() => setMobileOpen(false)} className="nav-auth-secondary h-11 justify-center">
                    Log in
                  </Link>
                  <Link to="/signup" onClick={() => setMobileOpen(false)} className="nav-auth-primary h-11 justify-center">
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
};

export default Navbar;
