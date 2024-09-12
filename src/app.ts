import * as compression from 'compression';
import * as cors from 'cors';
import { createApp } from './skeleton/createApp';
import * as BodyParser from 'body-parser';
import * as expressFileupload from 'express-fileupload';
import appMiddlewares from './app.middlewares';
import MassiveImport from './utils/masiveImport';
import List from './handlers/handlers';
import { Gateway } from './gateway/gateway';

export async function buildApp(config: any) {
  const app = await createApp(config);
  // App Middlewares
  app.use(compression());
  app.use(cors());
  app.use(BodyParser.urlencoded({ extended: false }));
  app.use(BodyParser.json());
  app.use(expressFileupload());

  app.set('appMiddlewares', appMiddlewares);

  const gateway = new Gateway(
      app, app.get('gateway').url,
      app.get('gateway').parvalGateway
      );
  app.set('gateway', gateway);

  // Services
  // set the service dir for searching all services into services directory
  const servicesDir = `${__dirname}/services/**/*.service{.ts,.js}`;

  // get all services importing them with masiveImportUtilsTest function
  const services = MassiveImport.getInstance(servicesDir);

  if (services && services.length) {
    // register all services
    services.forEach(service => service.register(app));
  }

  for (let element: number = 0; element < List.length; element += 1) {
    app[List[element].method || 'post'](List[element].route, ...List[element].before.map(a => a(app)), List[element].handler(app));
  }

  return app;
}
