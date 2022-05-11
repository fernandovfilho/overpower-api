import { Prisma, PrismaClient } from '@prisma/client';
import sha1 from 'sha1';

export class PrismaDatabaseClient {
  client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
    this.userMiddleware();
  }

  private userMiddleware() {
    this.client.$use(async (params: Prisma.MiddlewareParams, next) => {
      if (
        params.model === Prisma.ModelName.User &&
        (params.action === 'create' || params.action === 'update') &&
        params.args.data.password
      ) {
        params.args.data.password = sha1(params.args.data.password);
      }
      const result = await next(params);
      return result;
    });
  }
}
