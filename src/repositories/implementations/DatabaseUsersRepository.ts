import { PrismaClient } from '@prisma/client';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class DatabaseUsersRepository implements IUsersRepository {
  constructor(private prismaClient: PrismaClient) {}

  async save(user: User): Promise<User> {
    await this.prismaClient.user.create({ data: user });
    return await this.findByEmail(user.email);
  }
  update(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  async findByEmail(email: string): Promise<User> {
    return await this.prismaClient.user.findUnique({ where: { email: email } });
  }
  list(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
