import { IMiddlewaresSchema } from '../../skeleton/services/IMiddlewaresSchema';
import { disallow } from '../../skeleton/middlewares';
import setTokenHeader from './middleware/setTokenHeader';
import IAppProvider from '../../skeleton/services/IAppProvider';

const middlewares  = (_app: IAppProvider): IMiddlewaresSchema => {
  return {
    before: {
      all: [],
      find: [disallow()],
      get: [disallow()],
      create: [],
      update: [disallow()],
      delete: [disallow()],
    },
    after: {
      all: [],
      find: [],
      get: [],
      create: [setTokenHeader()],
      update: [],
      delete: [],
    },
  };
};

export default middlewares;
