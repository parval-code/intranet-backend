import { createService, registerService } from '../../skeleton/services';
import CategoriesNewsMiddlewares from './categoriesNews.middleware';
import CategoriesNewsEntity from './categoriesNews.entity';

export default registerService<CategoriesNewsEntity>(() => ({
  name: 'categories-news',
  entity: 'categoriesNews',
  service: createService<CategoriesNewsEntity>(CategoriesNewsEntity),
  middlewares: CategoriesNewsMiddlewares,
}));
