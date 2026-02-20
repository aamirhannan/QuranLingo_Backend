import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { authGuard } from '../middlewares/auth.middleware';

const router = Router();

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Protected routes
router.get('/:id', authGuard, userController.getProfile);

export default router;