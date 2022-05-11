import { DatabaseUsersRepository } from '../../../repositories/implementations/DatabaseUsersRepository';
import { PrismaDatabaseClient } from '../../../repositories/PrismaClient';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const prismaDatabaseClient = new PrismaDatabaseClient();

const databaseUsersRepository = new DatabaseUsersRepository(
  prismaDatabaseClient.client,
);
const createUserUseCase = new CreateUserUseCase(databaseUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
