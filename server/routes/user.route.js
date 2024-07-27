import express from 'express';
import { Test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const userRouter= express.Router();

userRouter.get('/',Test)
userRouter.post('/update/:id',verifyToken, updateUser);

export default userRouter;