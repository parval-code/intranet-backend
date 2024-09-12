import { FactoryStatic } from './factories/Factory/Factory';
import { define, factory, loadFactories, loadSeeders } from './seeders/cli/Seeders';

export interface Seeder {
  seed(factory: FactoryStatic): Promise<void>;
}

export { FactoryStatic } from './factories/Factory/Factory';
export { define, factory, loadSeeders, loadFactories };
