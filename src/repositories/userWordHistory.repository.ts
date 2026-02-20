import { UserWordHistory, IUserWordHistory } from '../models/userWordHistory.model';

export const addWordToHistory = async (userID: string, wordId: string): Promise<IUserWordHistory> => {
    // upsert to avoid duplicate errors — if already exists, just update the timestamp
    return await UserWordHistory.findOneAndUpdate(
        { userID, wordId },
        { userID, wordId },
        { upsert: true, new: true, setDefaultsOnInsert: true }
    ) as IUserWordHistory;
};

export const getWordHistory = async (userID: string): Promise<IUserWordHistory[]> => {
    return await UserWordHistory.find({ userID }).sort({ createdAt: -1 });
};

export const getWordCount = async (userID: string): Promise<number> => {
    return await UserWordHistory.countDocuments({ userID });
};

export const hasUserReadWord = async (userID: string, wordId: string): Promise<boolean> => {
    const entry = await UserWordHistory.findOne({ userID, wordId });
    return !!entry;
};
