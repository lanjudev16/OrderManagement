import { Types } from 'mongoose';
import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDb = async (userData: TUser): Promise<TUser | null> => {
  const result = await UserModel.create(userData);
  return result;
};
const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};
const getSingleUserFromDB = async (id: string): Promise<TUser | null> => {
  const result = await UserModel.findOne({ userId: id });
  return result;
};
const updateSingleUserFromDB = async (
  id: string,
  userData: TUser,
): Promise<TUser | null> => {
  const result = await UserModel.findByIdAndUpdate(
    { _id: new Types.ObjectId(id) },
    userData,
    {
      new: true,
      runValidators: true,
    },
  );

  return result;
};

const deleteSingleUserFromDB = async (id: string) => {
  const result = await UserModel.deleteOne({ userId: id });
  return result;
};
export const userServices = {
  createUserIntoDb,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateSingleUserFromDB,
  deleteSingleUserFromDB,
};
