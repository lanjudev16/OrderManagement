import { Schema, model } from 'mongoose';
import { TAdress, TFullName, TOrders, TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
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
  hobbies: {
    type: [String],
    required: true,
  },
  orders: {
    type: [ordersSchema],
  },
});
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salts_rounds),
  );
  next();
});
userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});
export const UserModel = model<TUser>('User', userSchema);
