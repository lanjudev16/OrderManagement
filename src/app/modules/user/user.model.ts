import { Schema, model } from 'mongoose';
import { TAdress, TFullName, TOrders, TUser } from './user.interface';
const addressSchema = new Schema<TAdress>({
  city: String,
  country: String,
  street: String,
});
const fullNameSchema = new Schema<TFullName>({
  firstName: String,
  lastName: String,
});
const ordersSchema = new Schema<TOrders>({
  price: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const userSchema = new Schema<TUser>({
  userId: {
    type: Number,
    required: [true, 'UserId is required'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  address: {
    type: addressSchema,
    required: [true, 'Address is required'],
  },
  fullName: {
    type: fullNameSchema,
    required: [true, 'Full name is required'],
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  hobbies: [String],
  orders: [ordersSchema],
});

export const UserModel = model<TUser>('User', userSchema);
