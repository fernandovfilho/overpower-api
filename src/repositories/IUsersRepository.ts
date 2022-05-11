import { User, UserWithoutPassword } from '../entities/User';
import { IRequestGetUser } from '../useCases/User/GetUser/GetUserDTO';

export interface IUsersRepository {
  save(user: User): Promise<User>;
  update(user: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
  getUser(data: IRequestGetUser): Promise<UserWithoutPassword>;
  list(): Promise<User[]>;
  delete(id: string): Promise<void>;
}

export type RequestWithUser<T> = Partial<T> & { _authUser: User };
