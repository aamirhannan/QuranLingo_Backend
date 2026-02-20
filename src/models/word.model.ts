import { Schema, model, Document } from 'mongoose';

export interface IExample {
    arabic: string;
    translation: string;
    translations: {
        en: string;
        ur: string;
        ur_en: string;
    };
    ref: string;
}

export interface IWord extends Document {
    phaseId: string;
    chapterId: string;
    wordId: string;
    arabic: string;
    transliteration: string;
    translations: {
        en: string;
        ur: string;
        ur_en: string;
    };
    gender?: string;
    examples: IExample[];
    createdAt: Date;
    updatedAt: Date;
}

const wordSchema = new Schema<IWord>({
    phaseId: { type: String, required: true },
    chapterId: { type: String, required: true },
    wordId: { type: String, required: true, unique: true },
    arabic: { type: String, required: true },
    transliteration: { type: String, required: true },
    translations: {
        en: { type: String, required: true },
        ur: { type: String, required: true },
        ur_en: { type: String, required: true }
    },
    gender: { type: String },
    examples: [{
        arabic: { type: String, required: true },
        translation: { type: String, required: true },
        translations: {
            en: { type: String, required: true },
            ur: { type: String, required: true },
            ur_en: { type: String, required: true }
        },
        ref: { type: String, required: true }
    }]
}, { timestamps: true });

export const Word = model<IWord>('Word', wordSchema);
