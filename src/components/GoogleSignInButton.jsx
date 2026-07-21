import React, { useEffect, useRef, useState } from 'react';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
const SRC = 'https://accounts.google.com/gsi/client';

let scriptPromise = null;
function loadGis() {
  if (window.google?.accounts?.id) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Failed to load Google Sign-In.'));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

const isDark = () =>
  typeof document !== 'undefined' &&
  (document.documentElement.classList.contains('dark') ||
    document.documentElement.getAttribute('data-theme') === 'dark');

/**
 * Renders the official "Sign in with Google" button. When VITE_GOOGLE_CLIENT_ID
 * isn't configured, renders nothing so the email form is still fully usable.
 */
const GoogleSignInButton = ({ onCredential, onError, text = 'continue_with' }) => {
  const holder = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!CLIENT_ID) return;
    let cancelled = false;

    loadGis()
      .then(() => {
        if (cancelled || !holder.current || !window.google?.accounts?.id) return;
        window.google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: (resp) => {
            if (resp?.credential) onCredential?.(resp.credential);
            else onError?.(new Error('No credential returned from Google.'));
          },
        });
        holder.current.innerHTML = '';
        window.google.accounts.id.renderButton(holder.current, {
          type: 'standard',
          theme: isDark() ? 'filled_black' : 'outline',
          size: 'large',
          text,
          shape: 'rectangular',
          logo_alignment: 'center',
          width: holder.current.offsetWidth || 360,
        });
      })
      .catch((err) => {
        if (cancelled) return;
        setFailed(true);
        onError?.(err);
      });

    return () => {
      cancelled = true;
    };
  }, [onCredential, onError, text]);

  if (!CLIENT_ID || failed) return null;

  // min-height reserves space so the layout doesn't shift while GIS renders.
  return <div ref={holder} className="flex min-h-[44px] w-full justify-center" aria-label="Sign in with Google" />;
};

export default GoogleSignInButton;
