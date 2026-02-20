import { Router } from 'express';
import * as wordController from '../controllers/word.controller';

const router = Router();

router.post('/create', wordController.createWord);
router.post('/create-bulk', wordController.createBulkWords);

export default router;
