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
