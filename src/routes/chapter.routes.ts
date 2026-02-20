import { Router } from 'express';
import * as chapterController from '../controllers/chapter.controller';

const router = Router();

router.post('/create', chapterController.createChapter);

export default router;
