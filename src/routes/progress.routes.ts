import { Router } from 'express';
import * as progressController from '../controllers/progress.controller';
import { authGuard } from '../middlewares/auth.middleware';

const router = Router();

// All progress routes are protected
router.post('/read-word', authGuard, progressController.readWord);
router.get('/history', authGuard, progressController.getHistory);
router.get('/summary', authGuard, progressController.getProgress);

export default router;
