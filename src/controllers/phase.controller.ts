import { Request, Response, NextFunction } from 'express';
import * as phaseService from '../services/phase.service';
import { generateUUID } from '../utils/utilFunction';

export const createPhase = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, description } = req.body;

        if (!name || !description) {
            res.status(400).json({ success: false, message: 'Missing required fields: name, description' });
            return;
        }

        const phaseId = generateUUID();

        const phase = await phaseService.createPhase({ phaseId, name, description });
        res.status(201).json({ success: true, data: phase });
    } catch (error) {
        next(error);
    }
};
