import React, { useCallback, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Icon from './ui/Icon';
import { useAuth } from '../context/AuthContext';
import GoogleSignInButton from './GoogleSignInButton';

const HAS_GOOGLE = Boolean(import.meta.env.VITE_GOOGLE_CLIENT_ID);

const AuthForm = ({ mode }) => {
  const isSignup = mode === 'signup';
  const { login, signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || '/dashboard';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      if (isSignup) await signup(name.trim(), email.trim(), password);
      else await login(email.trim(), password);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  const onGoogle = useCallback(
    async (credential) => {
      setError('');
      setBusy(true);
      try {
        await loginWithGoogle(credential);
        navigate(redirectTo, { replace: true });
      } catch (err) {
        setError(err.message || 'Could not sign in with Google. Please try again.');
      } finally {
        setBusy(false);
      }
    },
    [loginWithGoogle, navigate, redirectTo],
  );

  return (
    <div className="container-page flex min-h-[80vh] items-center justify-center pt-24 pb-16">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <Link to="/" className="mb-4 inline-flex items-center gap-2" aria-label="MyDSA home">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-fg shadow-sm">
              <Icon name="code" size={20} strokeWidth={2.25} />
            </span>
            <span className="text-xl font-extrabold tracking-tight text-fg">
              My<span className="text-primary">DSA</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight text-fg">
            {isSignup ? 'Create your account' : 'Welcome back'}
          </h1>
          <p className="mt-1 text-sm text-fg-muted">
            {isSignup
              ? 'Save your progress and access it from any device.'
              : 'Sign in to sync your progress across devices.'}
          </p>
        </div>

        <div className="card space-y-4 p-6">
          {HAS_GOOGLE && (
            <>
              <GoogleSignInButton
                onCredential={onGoogle}
                onError={(err) => setError(err.message || 'Google Sign-In failed.')}
                text={isSignup ? 'signup_with' : 'signin_with'}
              />
              <div className="flex items-center gap-3">
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs font-medium uppercase tracking-wide text-fg-subtle">or</span>
                <span className="h-px flex-1 bg-border" />
              </div>
            </>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            {error && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-lg border border-hard/30 bg-hard/10 px-3 py-2.5 text-sm text-hard"
              >
                <Icon name="bell" size={16} className="mt-0.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {isSignup && (
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-fg">Name</label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                  placeholder="Ada Lovelace"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">Email</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-fg">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPw ? 'text' : 'password'}
                  autoComplete={isSignup ? 'new-password' : 'current-password'}
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pr-11"
                  placeholder={isSignup ? 'At least 6 characters' : '••••••••'}
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-fg-subtle hover:text-fg"
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                >
                  <Icon name={showPw ? 'eyeOff' : 'eye'} size={17} />
                </button>
              </div>
            </div>

            <button type="submit" disabled={busy} className="btn-primary btn-md w-full">
              {busy ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Please wait…
                </>
              ) : (
                <>{isSignup ? 'Create account' : 'Sign in'}</>
              )}
            </button>
          </form>
        </div>

        <p className="mt-5 text-center text-sm text-fg-muted">
          {isSignup ? 'Already have an account? ' : "Don't have an account? "}
          <Link
            to={isSignup ? '/login' : '/signup'}
            state={location.state}
            className="font-semibold text-primary hover:underline"
          >
            {isSignup ? 'Sign in' : 'Sign up free'}
          </Link>
        </p>

        <p className="mt-3 text-center text-xs text-fg-subtle">
          You can also keep using MyDSA without an account — your progress stays in this browser.
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
