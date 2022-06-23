import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = new Router();

userRouter.post('/reg', userController.registration);
userRouter.get('/test', userController.test);
userRouter.post('/test', userController.test1);

export default userRouter;