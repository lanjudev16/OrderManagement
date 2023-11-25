import { Types } from 'mongoose';
import { TOrders, TUser } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDb = async (
  userData: TUser,
): Promise<TUser | null | string> => {
  const user = new UserModel(userData);
  if (await user.isUserExists(user.userId)) {
    return 'User already exits ';
  }
  const result = await user.save();
  return result;
};
const getAllUserFromDB = async () => {
  const result = await UserModel.find(
    {},
    { username: 1, fullName: 1, age: 1, email: 1, address: 1, _id: 0 },
  );
  return result;
};
const getSingleUserFromDB = async (id: string): Promise<TUser | null> => {
  const result = await UserModel.findOne(
    { userId: id },
    {
      username: 1,
      userId: 1,
      fullName: 1,
      isActive: 1,
      hobbies: 1,
      age: 1,
      email: 1,
      address: 1,
      _id: 0,
    },
  );
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
//order new added
const AddNewProductIntoDb = async (
  userData: TOrders,
  id: number,
): Promise<TUser | null | string> => {
  const userObj = new UserModel(userData);
  const user = await userObj.isUserExists(id);
  if (!user) {
    return 'User not found';
  }
  if (user.orders) {
    user?.orders.push(userData);
  }
  const result = await userObj.save();
  return result;
};
export const userServices = {
  createUserIntoDb,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateSingleUserFromDB,
  deleteSingleUserFromDB,
  AddNewProductIntoDb,
};
