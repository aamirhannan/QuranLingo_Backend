import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.signup(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error: any) {
    if (error.message === 'User already exists') {
      res.status(409).json({ success: false, message: error.message });
      return;
    }
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await userService.login({ email, password });

    // Set token as httpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });

    res.status(200).json({ success: true, data: { user } });
  } catch (error: any) {
    if (error.message === 'Invalid credentials') {
      res.status(401).json({ success: false, message: error.message });
      return;
    }
    next(error);
  }
};

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.getUserById(req.params.id as string);

    if (!user) {
      res.status(404).json({ success: false, message: 'User not found' });
      return;
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Bump tokenVersion to invalidate all existing tokens
    await userService.logout(req.user!.userID);

    // Clear the cookie
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    res.status(200).json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    next(error);
  }
};
