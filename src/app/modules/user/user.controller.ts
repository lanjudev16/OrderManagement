import { Request, Response } from 'express';
import { userServices } from './user.services';
//create new user
const createUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const result = await userServices.createUserIntoDb(data);
    res.json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'User do not created',
      data: error,
    });
  }
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
export const userController = {
  createUser,
  getUser,
};
