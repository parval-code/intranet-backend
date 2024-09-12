import IAppProvider from './services/IAppProvider';
import { IApplicationService } from './services/utils';
import * as express from 'express';
import { createConnection } from 'typeorm';

/**
 *
 * @returns {IAppProvider}
 */
export async function createApp(config: any): Promise<IAppProvider> {
  // Connection to database,
  await createConnection(config.database);

  const app = (express() as any) as IAppProvider;

  Object.keys(config).forEach(key => {
    app.set(key, config[key]);
  });

  app.registeredServices = {};
  app.useService = (name: string, service: IApplicationService<any>) => {
    app.registeredServices[name] = service;
  };
  app.service = (name: string) => app.registeredServices[name];
  return app;
}
