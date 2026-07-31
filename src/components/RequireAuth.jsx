import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Blocks unauthenticated access. While the session is resolving, show a
 * spinner so protected content never flashes. Guests are sent to /login with
 * the original destination in location.state.from so they return after sign-in.
 */
const RequireAuth = ({ children }) => {
  const { status, isAuthed } = useAuth();
  const location = useLocation();

  if (status === 'loading') {
    return (
      <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" />
        <span className="sr-only">Checking session…</span>
      </div>
    );
  }

  if (!isAuthed) {
    return <Navigate to="/login" replace state={{ from: location.pathname + location.search }} />;
  }

  return children;
};

export default RequireAuth;
