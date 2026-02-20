import { Request, Response, NextFunction } from 'express';
import * as wordService from '../services/word.service';
import { generateUUID } from '../utils/utilFunction';

export const createWord = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { phaseId, chapterId, arabic, transliteration, translations, gender, examples } = req.body;

        if (!phaseId || !chapterId || !arabic || !transliteration || !translations) {
            res.status(400).json({ success: false, message: 'Missing required fields: phaseId, chapterId, arabic, transliteration, translations' });
            return;
        }

        const wordId = generateUUID();

        const word = await wordService.createWord({
            phaseId,
            chapterId,
            wordId,
            arabic,
            transliteration,
            translations,
            gender,
            examples
        });
        res.status(201).json({ success: true, data: word });
    } catch (error) {
        next(error);
    }
};

export const createBulkWords = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const words = req.body;

        if (!Array.isArray(words) || words.length === 0) {
            res.status(400).json({ success: false, message: 'Request body must be a non-empty array of words' });
            return;
        }

        const wordsToCreate = words.map((word: any) => {
            const { phaseId, chapterId, arabic, transliteration, translations, gender, examples } = word;

            if (!phaseId || !chapterId || !arabic || !transliteration || !translations) {
                throw new Error('Missing required fields in one or more items: phaseId, chapterId, arabic, transliteration, translations');
            }

            return {
                phaseId,
                chapterId,
                wordId: generateUUID(),
                arabic,
                transliteration,
                translations,
                gender,
                examples
            };
        });

        const createdWords = await wordService.createBulkWords(wordsToCreate);
        res.status(201).json({ success: true, data: createdWords });
    } catch (error: any) {
        if (error.message.includes('Missing required fields')) {
            res.status(400).json({ success: false, message: error.message });
            return;
        }
        next(error);
    }
};
