import IAppProvider from '../skeleton/services/IAppProvider';
import * as moment from 'moment-timezone';

function momentInstance(date?: Date) {
  return moment(date).tz('America/Santo_Domingo').utc(true);
}

export const verifyExistRedis = async (app: IAppProvider, path: string) => {
  return  await new Promise((resolve) => {
    app.get('redis').get(`${path}`, (_err, reply) => resolve(JSON.parse(reply)));
  });
};

export const setRedisData = (app:IAppProvider, slug: string, data: any, time: number) => {
  const todayEnd = momentInstance().add(4, 'h').add(time, 's');
  app.get('redis').set(`${slug}`, JSON.stringify(data));
  app.get('redis').expireat(`${slug}`, todayEnd.unix());
};

export const deleteKeyRedisData = (app:IAppProvider, slug: string) => {
  app.get('redis').del(slug);
};
