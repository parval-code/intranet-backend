import { createService, registerService } from '../../skeleton/services';
import GroupsMiddlewares from './groups.middleware';
import GroupsEntity from './groups.entity';

export default registerService<GroupsEntity>(() => ({
  name: 'groups',
  entity: 'groups',
  service: createService<GroupsEntity>(GroupsEntity),
  middlewares: GroupsMiddlewares,
}));
