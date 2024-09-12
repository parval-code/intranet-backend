import { createService, registerService } from '../../skeleton/services';
import DepartmentsMiddlewares from './departments.middleware';
import DepartmentsEntity from './departments.entity';

export default registerService<DepartmentsEntity>(() => ({
  name: 'departments',
  entity: 'departments',
  service: createService<DepartmentsEntity>(DepartmentsEntity),
  middlewares: DepartmentsMiddlewares,
}));
