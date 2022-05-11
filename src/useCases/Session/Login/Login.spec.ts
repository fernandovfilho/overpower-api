import { User } from '../../../entities/User';
import { DatabaseSessionRepository } from '../../../repositories/implementations/DatabaseSessionRepository';
import { PrismaDatabaseClient } from '../../../repositories/PrismaClient';
import { ILoginRequestDTO } from './LoginDTO';
import { LoginUseCase } from './LoginUseCase';

describe(`${LoginUseCase.name}::execute`, () => {
  let loginUseCase: LoginUseCase;
  const prismaClient = new PrismaDatabaseClient().client;
  const databaseSessionRepository = new DatabaseSessionRepository(prismaClient);
  const requestValidLoginUser = {
    email: 'user@test.com',
    password: '1234567',
  } as ILoginRequestDTO;

  const requestInvalidLoginUser = {
    email: 'user@test.com',
    password: '12345678',
  } as ILoginRequestDTO;

  const testLoginUser = {
    id: 'test-user',
    email: 'user@test.com',
    password: '1234567',
    name: 'Test',
  } as User;

  beforeAll(async () => {
    loginUseCase = new LoginUseCase(databaseSessionRepository);
    await prismaClient.user.create({ data: testLoginUser });
  });

  test('Should return login token with valid credentials', async () => {
    const validUser = await loginUseCase.execute(requestValidLoginUser);
    expect(validUser.token).toBeTruthy();
  });

  test('Should return error with invalid credentials', async () => {
    expect.assertions(1);

    try {
      await loginUseCase.execute(requestInvalidLoginUser);
    } catch (e) {
      expect(e.message).toBe('Invalid login');
    }
  });

  afterAll(async () => {
    await prismaClient.user.deleteMany();
  });
});
