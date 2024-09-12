import { Application } from 'express';
import { IApplicationService } from './utils';

/**
 *
 */
export default interface IAppProvider extends Application {
  service: <T>(name: string) => IApplicationService<T>;
  registeredServices: any;
  useService: <T>(name: string, service: IApplicationService<T>) => void;
  get(a: any): any;
  set(a: any, b: any): any;
  use(...params): any;
}
