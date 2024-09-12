import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  port: 80,

  /**
   * Database
   */
  database: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: false,
    database: process.env.DB_DATABASE,
    port: 1433,
    logging: false,
    entities: [`${__dirname}/../src/services/**/*.entity{.ts,.js}`],
    migrationsTableName: 'app_migrations',
    migrations: ['dist/data/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'data/migrations',
      entitiesDir: `${__dirname}/../src/services/**/*.entity{.ts,.js}`,
    },
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
    url: 'https://onlineqa.parval.com.do/ApiUbibroker_Mobile/RestEndpoint',
    urlApiParval: 'https://190.166.105.26/pviewRest/PViewISAPI.dll/la/rest/TView',
  },
  tokenAccount: 'Lw$547DrBpUi',
  emailProduction: 'status@parval.com.do',
};

export default config;
