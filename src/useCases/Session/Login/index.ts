import { DatabaseSessionRepository } from '../../../repositories/implementations/DatabaseSessionRepository';
import { PrismaDatabaseClient } from '../../../repositories/PrismaClient';
import { LoginController } from './LoginController';
import { LoginUseCase } from './LoginUseCase';

const prismaDatabaseClient = new PrismaDatabaseClient();

const databaseSessionRepository = new DatabaseSessionRepository(
  prismaDatabaseClient.client,
);
const loginUseCase = new LoginUseCase(databaseSessionRepository);

const loginController = new LoginController(loginUseCase);

export { loginController };
