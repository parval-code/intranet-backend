import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  port: 80,
  /**
   * Database
   */
  database: {
    type: process.env.DB_TYPE_TEST,
    host: process.env.DB_HOST_TEST,
    username: process.env.DB_USERNAME_TEST,
    password: process.env.DB_PASSWORD_TEST,
    synchronize: false,
    database: process.env.DB_DATABASE_TEST,
    port: process.env.DB_PORT_TEST,
    logging: false,
    entities: [`${__dirname}/../src/services/**/*.entity{.ts,.js}`],
    migrationsTableName: 'app_migrations',
    migrations: ['dist/data/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'data/migrations',
      entitiesDir: `${__dirname}/../src/services/**/*.entity{.ts,.js}`,
    },
  },
};

export default config;
