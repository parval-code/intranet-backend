import { createService, registerService } from '../../skeleton/services';
import NewsMiddlewares from './news.middleware';
import NewsEntity from './news.entity';

export default registerService<NewsEntity>(() => ({
  name: 'news',
  entity: 'news',
  service: createService<NewsEntity>(NewsEntity),
  middlewares: NewsMiddlewares,
}));
