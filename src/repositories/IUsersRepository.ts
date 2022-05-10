import { User } from '../entities/User';

export interface IUsersRepository {
  save(user: User): Promise<void>;
  update(user: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
  list(): Promise<User[]>;
  delete(id: string): Promise<void>;
}
