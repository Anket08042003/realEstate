import express from 'express';
import { Test } from '../controllers/user.controller.js';

const userRouter= express.Router();

userRouter.get('/',Test)

export default userRouter;