import { IMiddlewaresSchema } from '../../skeleton/services/IMiddlewaresSchema';
import validateAuthTokenAccessMiddleware
    from '../../middlewares/validateAuthTokenAccess.middleware';

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
    find: [],
    get: [],
    create: [],
    update: [],
    delete: [],
  },
};

export default middlewares;
