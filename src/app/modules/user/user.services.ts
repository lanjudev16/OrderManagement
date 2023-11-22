import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDb = async (userData: TUser) => {
  const result = await UserModel.create(userData);
  return result;
};
const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};
const getSingleUserFromDB = async (id: string) => {
  const result = await UserModel.findOne({ id });
  return result;
};
export const userServices = {
  createUserIntoDb,
  getAllUserFromDB,
  getSingleUserFromDB,
};
