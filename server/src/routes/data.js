import { Router } from 'express';
import { UserData } from '../models/UserData.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// Only these fields may be written by the client.
const FIELDS = ['progress', 'bookmarks', 'revision', 'timers', 'puzzlesReviewed', 'lessonsCompleted', 'username'];

const shape = (doc) => ({
  progress: doc?.progress || {},
  bookmarks: doc?.bookmarks || {},
  revision: doc?.revision || {},
  timers: doc?.timers || {},
  puzzlesReviewed: doc?.puzzlesReviewed || {},
  lessonsCompleted: doc?.lessonsCompleted || {},
  username: doc?.username || '',
  updatedAt: doc?.updatedAt || null,
});

// GET /api/data — the signed-in user's synced data
router.get('/', requireAuth, async (req, res) => {
  try {
    let doc = await UserData.findOne({ user: req.userId });
    if (!doc) doc = await UserData.create({ user: req.userId });
    return res.json({ data: shape(doc) });
  } catch (err) {
    console.error('[data:get]', err);
    return res.status(500).json({ error: 'Could not load your data.' });
  }
});

// PUT /api/data — replace the user's synced data (client sends merged state)
router.put('/', requireAuth, async (req, res) => {
  try {
    const update = {};
    for (const key of FIELDS) {
      if (req.body?.[key] !== undefined) {
        if (key === 'username') update[key] = String(req.body[key]).slice(0, 60);
        else if (typeof req.body[key] === 'object' && req.body[key] !== null) update[key] = req.body[key];
      }
    }
    const doc = await UserData.findOneAndUpdate(
      { user: req.userId },
      { $set: update },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.json({ data: shape(doc) });
  } catch (err) {
    console.error('[data:put]', err);
    return res.status(500).json({ error: 'Could not save your data.' });
  }
});

export default router;
