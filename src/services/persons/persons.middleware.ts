import { IMiddlewaresSchema } from '../../skeleton/services/IMiddlewaresSchema';
import validateAuthTokenAccessMiddleware
    from '../../middlewares/validateAuthTokenAccess.middleware';
import { AddGroupsForUsersMiddleware } from './middlewares/addGroupsForUsers.middleware';

const middlewares: IMiddlewaresSchema = {
  before: {
    all: [validateAuthTokenAccessMiddleware()],
    find: [],
    get: [],
    create: [],
    update: [],
    delete: [],
  },
  after: {
    all: [],
    find: [AddGroupsForUsersMiddleware()],
    get: [],
    create: [],
    update: [],
    delete: [],
  },
};

export default middlewares;
