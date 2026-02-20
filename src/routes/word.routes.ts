import { Router } from 'express';
import * as wordController from '../controllers/word.controller';

const router = Router();

router.post('/create', wordController.createWord);

export default router;
