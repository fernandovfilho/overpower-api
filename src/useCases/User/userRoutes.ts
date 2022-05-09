import { Router } from "express";
import { createUserController } from "./CreateUser";

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);

export { userRoutes };
