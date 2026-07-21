import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { TimerProvider } from './context/TimerContext';
import { AuthProvider } from './context/AuthContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <TimerProvider>
          <App />
        </TimerProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
