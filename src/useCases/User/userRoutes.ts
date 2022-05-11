import { Request, Response, Router } from 'express';
import { RouteGuard } from '../../middlewares/RouteGuard';
import { createUserController } from './CreateUser';
import { getUserController } from './GetUser';

const userRoutes = Router();

userRoutes.post('/', (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

userRoutes.get(
  '/',
  RouteGuard.execute,
  (request: Request, response: Response) => {
    return getUserController.handle(request, response);
  },
);

export { userRoutes };
