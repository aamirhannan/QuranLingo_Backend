import * as userRepository from '../repositories/user.repository';
import * as userWordHistoryRepository from '../repositories/userWordHistory.repository';
import { Word } from '../models/word.model';

/**
 * Record that a user has read a word.
 * - Validates the word exists
 * - Adds to word history
 * - Updates the user's currentWordId
 */
export const recordWordRead = async (userID: string, wordId: string) => {
    // Validate word exists
    const word = await Word.findOne({ wordId });
    if (!word) {
        throw new Error('Word not found');
    }

    // Add to history (upsert — safe to call multiple times)
    const historyEntry = await userWordHistoryRepository.addWordToHistory(userID, wordId);

    // Update user's current word
    await userRepository.updateCurrentWordId(userID, wordId);

    return historyEntry;
};

/**
 * Get the full word history for a user (most recent first)
 */
export const getWordHistory = async (userID: string) => {
    return await userWordHistoryRepository.getWordHistory(userID);
};

/**
 * Get the total number of words a user has read
 */
export const getWordsReadCount = async (userID: string) => {
    return await userWordHistoryRepository.getWordCount(userID);
};

/**
 * Get user's current progress summary
 */
export const getProgressSummary = async (userID: string) => {
    const user = await userRepository.findUserByUserID(userID);
    const wordsRead = await userWordHistoryRepository.getWordCount(userID);

    return {
        currentWordId: user?.currentWordId || null,
        totalWordsRead: wordsRead,
    };
};
