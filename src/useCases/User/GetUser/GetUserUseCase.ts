import { UserWithoutPassword } from '../../../entities/User';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { IRequestGetUser } from './GetUserDTO';

export class GetUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: IRequestGetUser): Promise<UserWithoutPassword> {
    const user = await this.usersRepository.getUser(data);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
