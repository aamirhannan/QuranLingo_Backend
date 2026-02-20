import { Router } from 'express';
import * as phaseController from '../controllers/phase.controller';
import { authGuard } from '../middlewares/auth.middleware';

const router = Router();

router.post('/create', authGuard, phaseController.createPhase);

export default router;
