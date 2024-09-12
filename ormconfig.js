const env = require('./config/loader')['default']['database'];

const config = {
  type: env.type,
  host: env.host,
  synchronize: env.synchronize,
  username: env.username,
  password: env.password,
  database: env.database,
  port: env.port,
  logging: env.logging,
  entities: env.entities,
  migrationsTableName: env.migrationsTableName,
  migrations: env.migrations,
  cli: env.cli
};

module.exports = config;
