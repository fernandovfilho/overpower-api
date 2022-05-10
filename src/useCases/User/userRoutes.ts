import { Request, Response, Router } from 'express';
import { createUserController } from './CreateUser';

const userRoutes = Router();

userRoutes.post('/', (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

export { userRoutes };
