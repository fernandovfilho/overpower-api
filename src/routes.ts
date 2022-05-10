import { Router } from 'express';
import { userRoutes } from './useCases/User/userRoutes';

const routes = Router();

routes.use('/users', userRoutes);

export { routes };
