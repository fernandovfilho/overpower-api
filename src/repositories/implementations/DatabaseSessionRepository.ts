import { PrismaClient } from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import sha1 from 'sha1';
import config from '../../config';
import { UserWithoutPassword } from '../../entities/User';
import {
  ILoginRequestDTO,
  ILoginResponse,
} from '../../useCases/Session/Login/LoginDTO';
import { ISessionRepository } from '../ISessionRepository';

export class DatabaseSessionRepository implements ISessionRepository {
  private readonly jwtSecret = config.jwtSecret;

  constructor(private prismaClient: PrismaClient) {}

  async login(user: ILoginRequestDTO): Promise<ILoginResponse> {
    const findedUser = await this.prismaClient.user.findFirst({
      select: { password: false, email: true, name: true, id: true },
      where: { email: user.email, password: sha1(user.password) },
    });
    if (!findedUser) {
      return null;
    }
    return {
      email: findedUser.email,
      id: findedUser.id,
      token: this.generateJWToken(findedUser),
    };
  }

  private generateJWToken(plainUser: UserWithoutPassword): string {
    return jwt.sign(plainUser, this.jwtSecret);
  }
}
