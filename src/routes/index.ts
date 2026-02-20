import { Router } from 'express';
import userRoutes from './user.routes';
import phaseRoutes from './phase.routes';
import chapterRoutes from './chapter.routes';
import wordRoutes from './word.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/phases', phaseRoutes);
router.use('/chapters', chapterRoutes);
router.use('/words', wordRoutes);

export default router;
