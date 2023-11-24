import express from 'express';
import { userController } from './user.controller';
const router = express.Router();
router.post('/users', userController.createUser);
router.get('/users', userController.getUser);
router.get('/users/:id', userController.getSingleUser);
router.patch('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
export const userRoutes = router;
