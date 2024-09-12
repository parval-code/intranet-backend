import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  port: 80,
  database: {
    type: process.env.DB_TYPE_PRODUCTION,
    host: process.env.DB_HOST_PRODUCTION,
    username: process.env.DB_USERNAME_PRODUCTION,
    password: process.env.DB_PASSWORD_PRODUCTION,
    synchronize: false,
    database: process.env.DB_DATABASE_PRODUCTION,
    port: 1433,
  },
  token: {
    secretKey: 'secret',
    tokenExpiration: '30m',
  },
  redis: {
    host: 'localhost',
    port: 6379,
  },
  gateway: {
    url: 'https://online.parval.com.do/ApiUbibroker_Mobile/RestEndpoint',
    urlApiParval: 'http://179.51.66.30/pviewRest/PViewISAPI.dll/la/rest/TView',
  },
  tokenAccount: 'Lw$547DrBpUi',
  emailTest: 'vencimientos@parval.com.do',
  emailProduction: 'status@parval.com.do',
};

export default config;
