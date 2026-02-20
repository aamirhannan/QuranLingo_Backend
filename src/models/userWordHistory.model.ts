import { Schema, model, Document } from 'mongoose';

export interface IUserWordHistory extends Document {
    userID: string;
    wordId: string;
    createdAt: Date;
    updatedAt: Date;
}

const userWordHistorySchema = new Schema<IUserWordHistory>({
    userID: { type: String, required: true },
    wordId: { type: String, required: true },
}, { timestamps: true });

// Index for fast lookups: all words a user has read
userWordHistorySchema.index({ userID: 1, wordId: 1 }, { unique: true });

export const UserWordHistory = model<IUserWordHistory>('UserWordHistory', userWordHistorySchema);
