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

export const incrementTokenVersion = async (userID: string): Promise<IUser | null> => {
  return await User.findOneAndUpdate(
    { userID },
    { $inc: { tokenVersion: 1 } },
    { new: true }
  );
};

export const updateCurrentWordId = async (userID: string, wordId: string): Promise<IUser | null> => {
  return await User.findOneAndUpdate(
    { userID },
    { currentWordId: wordId },
    { new: true }
  );
};
