import { createService, registerService } from '../../skeleton/services';
import VacationsMiddlewares from './vacations.middleware';
import VacationsEntity from './vacations.entity';

export default registerService<VacationsEntity>(() => ({
  name: 'vacations',
  entity: 'vacations',
  service: createService<VacationsEntity>(VacationsEntity),
  middlewares: VacationsMiddlewares,
}));
