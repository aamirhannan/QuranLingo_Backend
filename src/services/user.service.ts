import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IUser } from '../models/user.model';
import * as userRepository from '../repositories/user.repository';
import { generateUUID } from '../utils/utilFunction';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const JWT_EXPIRES_IN = '24h';

export const signup = async (userData: Partial<IUser>) => {
  const { name, email, password } = userData;

  // Check if user already exists
  const existingUser = await userRepository.findUserByEmail(email!);
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password!, salt);

  // create userID
  const userID = generateUUID();

  // Create user
  const user = await userRepository.createUser({
    name,
    email,
    password: hashedPassword,
    userID
  });

  // Return user without password
  const userResponse = (user as any).toObject();
  delete (userResponse as any).password;

  return userResponse;
};

export const login = async (loginData: Pick<IUser, 'email' | 'password'>) => {
  const { email, password } = loginData;

  // Check if user exists
  const user = await userRepository.findUserByEmail(email);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  // Return user without password
  const userResponse = (user as any).toObject();
  delete (userResponse as any).password;

  // Generate Token with full user info
  const token = jwt.sign(userResponse, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  return { user: userResponse, token };
};

// Keep existing methods for compatibility if needed, but update implementation
export const getUserById = async (id: string) => {
  const user = await userRepository.findUserById(id);
  if (user) {
    // Avoid returning the password even in this helper method, for security
    const userResponse = (user as any).toObject();
    delete (userResponse as any).password;
    return userResponse;
  }
  return null;
};

export const createUser = async (userData: any) => {
  return signup(userData);
}
