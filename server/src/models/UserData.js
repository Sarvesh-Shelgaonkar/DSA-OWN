import mongoose from 'mongoose';

/**
 * A single document per user holding everything that used to live in the
 * browser's localStorage. Kept as loose objects (minimize: false so empty
 * objects persist) because the shape is owned by the client.
 */
const userDataSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
      index: true,
    },
    progress: { type: Object, default: {} }, // { [problemId]: { solved, solvedAt } }
    bookmarks: { type: Object, default: {} }, // { [problemId]: true }
    revision: { type: Object, default: {} }, // { [problemId]: { rating, reviseCount, lastRevised } }
    timers: { type: Object, default: {} }, // { [problemId]: seconds }
    puzzlesReviewed: { type: Object, default: {} }, // { [puzzleId]: true }
    lessonsCompleted: { type: Object, default: {} }, // { [stageId]: { [conceptIndex]: true } }
    username: { type: String, default: '' },
  },
  { timestamps: true, minimize: false }
);

export const UserData = mongoose.model('UserData', userDataSchema);
