import { Word, IWord } from '../models/word.model';

export const createWord = async (data: Partial<IWord>): Promise<IWord> => {
    return await Word.create(data);
};

export const createBulkWords = async (data: Partial<IWord>[]): Promise<IWord[]> => {
    return await Word.insertMany(data) as unknown as IWord[];
};
