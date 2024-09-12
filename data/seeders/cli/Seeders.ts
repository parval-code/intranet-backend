import * as path from 'path';
import * as glob from 'glob';
import { Connection, ObjectType } from 'typeorm';
import Factory, { FactoryDefineFunction, FactoryStatic } from '../../factories/Factory/Factory';

const factories: FactoryStatic = new Map() as FactoryStatic;

// Directories
export function define<T>(entityClass: ObjectType<T>,
                          factoryDefineFunction: FactoryDefineFunction<T>, connection: Connection) {
  const factory = new Factory(connection, entityClass, factoryDefineFunction, factories);
  factories.set(entityClass, factory);
}

export function factory<T>(entityClass: ObjectType<T>): Factory<T> {
  const factory = factories.get(entityClass) as Factory<T>;
  return factory as Factory<T>;
}

export function loadFactories(factoriesDir: string): void {
  glob.sync(factoriesDir).forEach((file: string) => {
    require(path.resolve(file));
  });
}

export async function loadSeeders(seedersDir: string): Promise<void> {
  const seeders: any = [];
  glob.sync(seedersDir).forEach((file: string) => {
    const seederFile = require(path.resolve(file));
    if (seederFile['default']) {
      const seeder = new seederFile['default']();
      seeders.push(seeder);
    }
  });

  for (const seeder of seeders) {
    console.log('Seeding: ', seeder);
    await seeder.seed(factories);
  }
}
