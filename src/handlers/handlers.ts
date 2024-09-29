import { headersMiddleware } from '../utils/headersMiddleware';
import { SendEmailNewFoldersHandlers } from './sendEmailNewFolders.handlers';
import { ChangesGroupPersonsHandlers } from './changesGroupPersons.handlers';

interface IList {
  before: any[];
  route: string;
  handler: any;
  method?: 'get'| 'post' | 'put' | 'delete';
}

const List: IList[] | any[] = [
  {
    method: 'post',
    before:[headersMiddleware],
    route:'/send-notification-new-folders',
    handler: SendEmailNewFoldersHandlers,
  },
  {
    method: 'post',
    before:[headersMiddleware],
    route:'/updated-gruop-persons',
    handler: ChangesGroupPersonsHandlers,
  }
];

export default List;
