import { Request, Response, Router } from 'express';
import { loginController } from './Login';

const sessionRoutes = Router();

sessionRoutes.post('/login', (request: Request, response: Response) => {
  return loginController.handle(request, response);
});

export { sessionRoutes };
