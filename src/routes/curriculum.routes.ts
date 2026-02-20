import { Router } from 'express';
import * as curriculumController from '../controllers/curriculum.controller';
import { authGuard } from '../middlewares/auth.middleware';

const router = Router();

// Protected routes — user must be logged in to access curriculum
router.get('/', authGuard, curriculumController.getCurriculum);
router.get('/:phaseId/:chapterId', authGuard, curriculumController.getChapterWords);

export default router;
