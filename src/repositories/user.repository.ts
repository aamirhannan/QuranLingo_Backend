import { User, IUser } from '../models/user.model';

export const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email });
};

export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
  return await User.create(userData);
};

export const findUserById = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};

export const findUserByUserID = async (userID: string): Promise<IUser | null> => {
  return await User.findOne({ userID });
};
