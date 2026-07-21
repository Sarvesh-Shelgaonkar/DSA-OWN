import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 60 },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    // Optional: Google-only accounts have no local password.
    passwordHash: { type: String, default: '' },
    avatar: { type: String, default: '' },
    // Set for accounts created / linked via Google Sign-In.
    googleId: { type: String, default: null, index: true, sparse: true },
    provider: { type: String, enum: ['local', 'google'], default: 'local' },
  },
  { timestamps: true }
);

// Never leak the password hash in JSON responses.
userSchema.methods.toSafeJSON = function toSafeJSON() {
  return {
    id: this._id.toString(),
    name: this.name,
    email: this.email,
    avatar: this.avatar,
    provider: this.provider,
    createdAt: this.createdAt,
  };
};

export const User = mongoose.model('User', userSchema);
