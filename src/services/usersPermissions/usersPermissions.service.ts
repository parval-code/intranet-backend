import { createService, registerService } from '../../skeleton/services';
import UsersPermissionsMiddlewares from './usersPermissions.middleware';
import UsersPermissionsEntity from './usersPermissions.entity';

export default registerService<UsersPermissionsEntity>(() => ({
  name: 'users-permissions',
  entity: 'usersPermissions',
  service: createService<UsersPermissionsEntity>(UsersPermissionsEntity),
  middlewares: UsersPermissionsMiddlewares,
}));
