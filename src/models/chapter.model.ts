import { Schema, model, Document } from 'mongoose';

export interface IChapter extends Document {
    phaseId: string;
    chapterId: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const chapterSchema = new Schema<IChapter>({
    phaseId: { type: String, required: true },
    chapterId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

export const Chapter = model<IChapter>('Chapter', chapterSchema);
