import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class DatabaseUsersRepository implements IUsersRepository {
  save(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
