import { DatabaseUsersRepository } from '../../../repositories/implementations/DatabaseUsersRepository';
import { prismaClient } from '../../../repositories/PrismaClient';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const databaseUsersRepository = new DatabaseUsersRepository(prismaClient);
const createUserUseCase = new CreateUserUseCase(databaseUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
