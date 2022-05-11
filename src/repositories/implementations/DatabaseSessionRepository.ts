import { PrismaClient, User } from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import sha1 from 'sha1';
import {
  ILoginRequestDTO,
  ILoginResponse,
} from '../../useCases/Session/Login/LoginDTO';
import { ISessionRepository } from '../ISessionRepository';

export class DatabaseSessionRepository implements ISessionRepository {
  private readonly jwtSecret = process.env.JWT_SECRET || 'overpowersecret';

  constructor(private prismaClient: PrismaClient) {}

  async login(user: ILoginRequestDTO): Promise<ILoginResponse> {
    const findedUser = await this.prismaClient.user.findFirst({
      select: { password: false, email: true, name: true, id: false },
      where: { email: user.email, password: sha1(user.password) },
    });
    if (!findedUser) {
      return null;
    }
    return {
      email: findedUser.email,
      token: this.generateJWToken(findedUser),
    };
  }

  private generateJWToken(plainUser: Omit<User, 'password' | 'id'>): string {
    return jwt.sign(plainUser, this.jwtSecret);
  }
}
