import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import { connectDB } from './db.js';
import authRoutes from './routes/auth.js';
import dataRoutes from './routes/data.js';
import interviewRoutes from './routes/interview.js';

const app = express();

// Behind Render's proxy — needed for secure cookies + rate limiting.
app.set('trust proxy', 1);

app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());

const origins = (process.env.CLIENT_ORIGIN || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: origins.length ? origins : true,
    credentials: true,
  })
);

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.use(
  '/api/auth',
  rateLimit({ windowMs: 15 * 60 * 1000, max: 100, standardHeaders: true, legacyHeaders: false }),
  authRoutes
);
app.use('/api/data', dataRoutes);

// AI resume analysis — heavier + hits an external API, so rate-limit it tightly.
app.use(
  '/api/interview',
  rateLimit({ windowMs: 15 * 60 * 1000, max: 20, standardHeaders: true, legacyHeaders: false }),
  interviewRoutes
);

app.use((req, res) => res.status(404).json({ error: 'Not found' }));

const PORT = process.env.PORT || 4000;

connectDB(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`[api] listening on :${PORT}`));
  })
  .catch((err) => {
    console.error('[api] failed to start:', err.message);
    process.exit(1);
  });
