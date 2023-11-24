import { Request, Response } from 'express';
import { userServices } from './user.services';
import { userValidateSchema } from './user.validate';
//create new user
const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  const { error, value } = userValidateSchema.validate(data);
  if (error) {
    res.json({
      success: false,
      message: 'User do not created',
      data: error,
    });
  }
  const result = await userServices.createUserIntoDb(value);
  res.json({
    success: true,
    message: 'User created successfully!',
    data: result,
  });
};
//get all user controller
const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserFromDB();
    res.json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
//get single user from controller
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await userServices.getSingleUserFromDB(id);
    res.json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: error,
      },
    });
  }
};
//update user controller
const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const id = req.params.id;
    const result = await userServices.updateSingleUserFromDB(id, userData);
    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: error,
      },
    });
  }
};
//Delete user controller
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await userServices.deleteSingleUserFromDB(id);
    res.json({
      success: true,
      message: 'User Delete successfully!',
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: error,
      },
    });
  }
};
export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
