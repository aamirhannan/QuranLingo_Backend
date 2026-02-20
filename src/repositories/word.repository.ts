import { Word, IWord } from '../models/word.model';

export const createWord = async (data: Partial<IWord>): Promise<IWord> => {
    return await Word.create(data);
};

export const createBulkWords = async (data: Partial<IWord>[]): Promise<IWord[]> => {
    return await Word.insertMany(data) as unknown as IWord[];
};

export const getWordsByChapterId = async (chapterId: string): Promise<IWord[]> => {
    return await Word.find({ chapterId }).sort({ createdAt: 1 });
};

export const getWordCountByChapterId = async (chapterId: string): Promise<number> => {
    return await Word.countDocuments({ chapterId });
};
