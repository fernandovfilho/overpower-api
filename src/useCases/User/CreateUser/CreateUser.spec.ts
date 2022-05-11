import { User } from '../../../entities/User';
import { DatabaseUsersRepository } from '../../../repositories/implementations/DatabaseUsersRepository';
import { PrismaDatabaseClient } from '../../../repositories/PrismaClient';
import { CreateUserUseCase } from './CreateUserUseCase';

describe(`${CreateUserUseCase.name}::execute`, () => {
  let createUserUseCase: CreateUserUseCase;
  const prismaClient = new PrismaDatabaseClient().client;
  const databaseUsersRepository = new DatabaseUsersRepository(prismaClient);
  const testUser = {
    email: 'user@test.com',
    name: 'Test User',
    password: '1234567',
  } as User;

  beforeAll(() => {
    createUserUseCase = new CreateUserUseCase(databaseUsersRepository);
  });

  test('Should create a new user', async () => {
    const findByEmailSpy = jest.spyOn(databaseUsersRepository, 'findByEmail');
    const saveSpy = jest.spyOn(databaseUsersRepository, 'save');
    await createUserUseCase.execute(testUser);

    const newUser = await databaseUsersRepository.findByEmail(testUser.email);

    expect(findByEmailSpy).toHaveBeenCalledWith(testUser.email);
    expect(saveSpy).toHaveBeenCalledTimes(1);
    expect(newUser.name).toEqual(testUser.name);
  });

  afterAll(async () => {
    await prismaClient.user.deleteMany();
  });
});
