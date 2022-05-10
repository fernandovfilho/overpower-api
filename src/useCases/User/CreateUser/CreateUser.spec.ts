import { User } from '../../../entities/User';
import { DatabaseUsersRepository } from '../../../repositories/implementations/DatabaseUsersRepository';
import { CreateUserUseCase } from './CreateUserUseCase';

describe('CreateUserUseCase::execute', () => {
  let createUserUseCase: CreateUserUseCase;
  const databaseUsersRepository = new DatabaseUsersRepository();
  const testUser = {
    email: 'user@test.com',
    name: 'Test User',
    password: '123456',
  } as User;

  beforeAll(() => {
    createUserUseCase = new CreateUserUseCase(databaseUsersRepository);
  });

  test('Should create a new user', async () => {
    const findByEmailSpy = jest.spyOn(databaseUsersRepository, 'findByEmail');
    await createUserUseCase.execute(testUser);

    const newUser = await databaseUsersRepository.findByEmail(testUser.email);

    expect(findByEmailSpy).toHaveBeenCalledWith(testUser.email);
    expect(newUser.name).toEqual(testUser.name);
  });
});
