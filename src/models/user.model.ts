import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  userID: string;
  isVerified: boolean;
  tokenVersion: number;
  currentWordId: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  userID: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  tokenVersion: { type: Number, default: 0 },
  currentWordId: { type: String, default: null },
}, { timestamps: true });

export const User = model<IUser>('User', userSchema);
