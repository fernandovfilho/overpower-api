import { DatabaseUsersRepository } from "../../../repositories/implementations/DatabaseUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const databaseUsersRepository = new DatabaseUsersRepository();
const createUserUseCase = new CreateUserUseCase(databaseUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
