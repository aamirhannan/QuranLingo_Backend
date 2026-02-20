import { Request, Response, NextFunction } from 'express';
import * as curriculumService from '../services/curriculum.service';

export const getCurriculum = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const curriculum = await curriculumService.getCurriculumOverview();

        res.status(200).json({ success: true, data: curriculum });
    } catch (error) {
        next(error);
    }
};

export const getChapterWords = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const phaseId = req.params.phaseId as string;
        const chapterId = req.params.chapterId as string;

        if (!phaseId || !chapterId) {
            res.status(400).json({ success: false, message: 'phaseId and chapterId are required' });
            return;
        }

        const chapter = await curriculumService.getChapterWords(phaseId, chapterId);

        res.status(200).json({ success: true, data: chapter });
    } catch (error: any) {
        if (error.message === 'Chapter not found' || error.message === 'Chapter does not belong to this phase') {
            res.status(404).json({ success: false, message: error.message });
            return;
        }
        next(error);
    }
};
