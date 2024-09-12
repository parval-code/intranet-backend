import { createService, registerService } from '../../skeleton/services';
import LocationMiddlewares from './location.middleware';
import LocationEntity from './location.entity';

export default registerService<LocationEntity>(() => ({
  name: 'location',
  entity: 'location',
  service: createService<LocationEntity>(LocationEntity),
  middlewares: LocationMiddlewares,
})); 
