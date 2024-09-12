import { createService, registerService } from '../../skeleton/services';
import PermissionsMiddlewares from './permissions.middleware';
import PermissionsEntity from './permissions.entity';

export default registerService<PermissionsEntity>(() => ({
  name: 'permissions',
  entity: 'permissions',
  service: createService<PermissionsEntity>(PermissionsEntity),
  middlewares: PermissionsMiddlewares,
}));
