import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../config';
import { User } from '../entities/User';

export class RouteGuard {
  static async execute(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { authorization } = request.headers;
      const token = authorization.split(' ')[1];
      const verify = jwt.verify(token, config.jwtSecret);
      if (!verify) {
        throw new Error('Verify error');
      }
      const tokenUser = jwt.decode(token);
      request.body._authUser = tokenUser as User;
    } catch (error) {
      console.log(error);
      return response.status(401).send('Invalid credentials');
    }

    return next();
  }
}
