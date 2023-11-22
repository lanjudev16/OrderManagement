import Joi from 'joi';
const addressSchema = Joi.object({
  city: Joi.string(),
  country: Joi.string(),
  street: Joi.string(),
});

const fullNameSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
});

const ordersSchema = Joi.object({
  price: Joi.number().required(),
  productName: Joi.string().required(),
  quantity: Joi.number().required(),
});

export const userValidateSchema = Joi.object({
  userId: Joi.number().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  address: addressSchema.required(),
  fullName: fullNameSchema.required(),
  age: Joi.number().required(),
  email: Joi.string().required(),
  isActive: Joi.boolean().default(true),
  hobbies: Joi.array().items(Joi.string()),
  orders: Joi.array().items(ordersSchema),
});
