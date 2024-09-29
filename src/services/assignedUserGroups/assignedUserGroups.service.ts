import { createService, registerService } from '../../skeleton/services';
import AssignedUserGroupsMiddlewares from './assignedUserGroups.middleware';
import AssignedUserGroupsEntity from './assignedUserGroups.entity';

export default registerService<AssignedUserGroupsEntity>(() => ({
  name: 'assigned-user-groups',
  entity: 'assignedUserGroups',
  service: createService<AssignedUserGroupsEntity>(AssignedUserGroupsEntity),
  middlewares: AssignedUserGroupsMiddlewares,
}));
