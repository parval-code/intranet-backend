import { createService, registerService } from '../../skeleton/services';
import PersonsMiddlewares from './persons.middleware';
import PersonsEntity from './persons.entity';

export default registerService<PersonsEntity>(() => ({
  name: 'persons',
  entity: 'persons',
  service: createService<PersonsEntity>(PersonsEntity),
  middlewares: PersonsMiddlewares,
}));
