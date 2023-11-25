import { Model } from 'mongoose';

export type TFullName = {
  firstName: string;
  lastName: string;
};
export type TAdress = {
  street: string;
  city: string;
  country: string;
};
export type TOrders = {
  productName: string;
  price: number;
  quantity: number;
};
export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAdress;
  orders?: TOrders[];
};
//creating a custom instance method
export type TUserMethods = {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: number): Promise<TUser | null>;
  // eslint-disable-next-line no-unused-vars
  isOrderExists(id: number): Promise<TUser | null>;
};

export type TUserModel = Model<TUser, Record<string, never>, TUserMethods>;
