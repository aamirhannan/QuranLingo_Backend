import { Request, Response, NextFunction } from 'express';
import * as chapterService from '../services/chapter.service';
import { generateUUID } from 'src/utils/utilFunction';

export const createChapter = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { phaseId, name, description } = req.body;

        if (!phaseId || !name || !description) {
            res.status(400).json({ success: false, message: 'Missing required fields: phaseId, name, description' });
            return;
        }

        const chapterId = generateUUID();

        const chapter = await chapterService.createChapter({ phaseId, chapterId, name, description });
        res.status(201).json({ success: true, data: chapter });
    } catch (error) {
        next(error);
    }
};
