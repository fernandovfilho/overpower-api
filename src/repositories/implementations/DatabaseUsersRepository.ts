import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class DatabaseUsersRepository implements IUsersRepository {
  private users: User[] = [];

  save(user: User): Promise<User> {
    this.users.push(user);
    return Promise.resolve(user);
  }
  update(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    if (!user) {
      return Promise.resolve(null);
    }
    return Promise.resolve(user);
  }
  list(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
