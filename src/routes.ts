import { Router } from 'express';
import { sessionRoutes } from './useCases/Session/sessionRoutes';
import { userRoutes } from './useCases/User/userRoutes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/session', sessionRoutes);

export { routes };
