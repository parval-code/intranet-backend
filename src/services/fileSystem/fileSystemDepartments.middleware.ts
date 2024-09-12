import { IMiddlewaresSchema } from '../../skeleton/services/IMiddlewaresSchema';
import validateAuthTokenAccessMiddleware
    from '../../middlewares/validateAuthTokenAccess.middleware';
import { InsertValueInitialMiddleware } from './midldlewares/insertValueInitial.middleware';
import { headersMiddleware } from './../../utils/headersMiddleware';

const middlewares: IMiddlewaresSchema = {
  before: {
    all: [headersMiddleware(), validateAuthTokenAccessMiddleware()],
    find: [],
    get: [],
    create: [],
    update: [],
    delete: [],
  },
  after: {
    all: [],
    find: [InsertValueInitialMiddleware()],
    get: [],
    create: [],
    update: [],
    delete: [],
  },
};

export default middlewares;
