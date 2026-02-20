import { Router } from 'express';
import * as phaseController from '../controllers/phase.controller';

const router = Router();

router.post('/create', phaseController.createPhase);

export default router;
