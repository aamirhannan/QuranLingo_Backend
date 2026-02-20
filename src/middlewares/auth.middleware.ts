import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as userRepository from '../repositories/user.repository';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

/**
 * Token payload shape after decoding — matches the full user object
 */
export interface TokenPayload {
    _id: string;
    name: string;
    email: string;
    role: string;
    userID: string;
    isVerified: boolean;
    tokenVersion: number;
    createdAt: string;
    updatedAt: string;
    iat: number;
    exp: number;
}

/**
 * Extend Express Request to carry the decoded user info
 */
declare global {
    namespace Express {
        interface Request {
            user?: TokenPayload;
        }
    }
}

/**
 * Middleware 1: Token Extractor
 * 
 * Runs on EVERY request (registered globally in app.ts).
 * Checks if a JWT token exists in the cookies.
 * If yes → decodes it and attaches the payload to `req.user`.
 * If no token or token is invalid → silently continues (does NOT block the request).
 */
export const tokenExtractor = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies?.token;

        if (token) {
            const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
            req.user = decoded;
        }
    } catch (error) {
        // Token is invalid or expired — clear it and move on silently
        req.user = undefined;
    }

    next();
};

/**
 * Middleware 2: Auth Guard
 * 
 * Applied to protected routes only.
 * 1. Checks if `req.user` was populated by the tokenExtractor (valid JWT)
 * 2. Verifies the user still exists in the database (not deleted/deactivated)
 * 3. Compares tokenVersion from JWT with the DB — rejects outdated tokens
 * If any check fails → aborts with 401 Unauthorized.
 */
export const authGuard = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        res.status(401).json({
            success: false,
            message: 'Unauthorized — Please login to access this resource'
        });
        return;
    }

    // Verify user still exists in the database
    const dbUser = await userRepository.findUserByUserID(req.user.userID);
    if (!dbUser) {
        res.status(401).json({
            success: false,
            message: 'Unauthorized — User no longer exists'
        });
        return;
    }

    // Compare token version — reject if token was issued before logout/password change
    if (req.user.tokenVersion !== dbUser.tokenVersion) {
        res.status(401).json({
            success: false,
            message: 'Unauthorized — Token has been revoked, please login again'
        });
        return;
    }

    next();
};
