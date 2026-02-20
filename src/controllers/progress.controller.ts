import { Request, Response, NextFunction } from 'express';
import * as progressService from '../services/progress.service';

export const readWord = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { wordId } = req.body;

        if (!wordId) {
            res.status(400).json({ success: false, message: 'wordId is required' });
            return;
        }

        const historyEntry = await progressService.recordWordRead(req.user!.userID, wordId);

        res.status(200).json({
            success: true,
            message: 'Word recorded successfully',
            data: historyEntry
        });
    } catch (error: any) {
        if (error.message === 'Word not found') {
            res.status(404).json({ success: false, message: error.message });
            return;
        }
        next(error);
    }
};

export const getHistory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const history = await progressService.getWordHistory(req.user!.userID);

        res.status(200).json({ success: true, data: history });
    } catch (error) {
        next(error);
    }
};

export const getProgress = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const summary = await progressService.getProgressSummary(req.user!.userID);

        res.status(200).json({ success: true, data: summary });
    } catch (error) {
        next(error);
    }
};
