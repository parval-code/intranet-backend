import { registerService } from '../../skeleton/services';
import AuthMiddlewares from './auth.middleware';
import AuthService from './auth.class';

export default registerService<AuthService>(app => ({
  name: 'login',
  entity: 'auth',
  service: new AuthService(app),
  middlewares: AuthMiddlewares(app),
}));
