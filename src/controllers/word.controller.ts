import { Request, Response, NextFunction } from 'express';
import * as wordService from '../services/word.service';
import { generateUUID } from 'src/utils/utilFunction';

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
