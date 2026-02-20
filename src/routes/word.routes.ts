import { Router } from 'express';
import * as wordController from '../controllers/word.controller';
import { authGuard } from '../middlewares/auth.middleware';

const router = Router();

router.post('/create', authGuard, wordController.createWord);
router.post('/create-bulk', authGuard, wordController.createBulkWords);

export default router;
