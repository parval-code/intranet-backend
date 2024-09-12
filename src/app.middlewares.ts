import { IMiddlewaresSchema } from './skeleton/services/IMiddlewaresSchema';
import { sendResponse } from './skeleton/middlewares';
import addDateInPostAndUpdate from './utils/addDateInPostAndUpdate';

const middlewares: IMiddlewaresSchema = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [addDateInPostAndUpdate],
    update: [],
    delete: [],
  },
  after: {
    all: [sendResponse()],
    find: [],
    get: [],
    create: [],
    update: [],
    delete: [],
  },
};

export default middlewares;
