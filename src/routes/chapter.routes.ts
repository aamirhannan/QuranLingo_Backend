import { Router } from 'express';
import * as chapterController from '../controllers/chapter.controller';
import { authGuard } from '../middlewares/auth.middleware';

const router = Router();

router.post('/create', authGuard, chapterController.createChapter);

export default router;
