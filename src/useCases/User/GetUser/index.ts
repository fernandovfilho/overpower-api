import { DatabaseUsersRepository } from '../../../repositories/implementations/DatabaseUsersRepository';
import { PrismaDatabaseClient } from '../../../repositories/PrismaClient';
import { GetUserController } from './GetUserController';
import { GetUserUseCase } from './GetUserUseCase';

const prismaDatabaseClient = new PrismaDatabaseClient();

const databaseUsersRepository = new DatabaseUsersRepository(
  prismaDatabaseClient.client,
);
const getUserUseCase = new GetUserUseCase(databaseUsersRepository);

const getUserController = new GetUserController(getUserUseCase);

export { getUserController };
