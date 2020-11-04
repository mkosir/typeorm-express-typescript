import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const configSeed: ConnectionOptions = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: ['src/typeorm/entities/**/*.ts'],
  migrations: ['src/typeorm/seeds/**/*.ts'],
  cli: {
    migrationsDir: 'src/typeorm/seeds',
  },
  namingStrategy: new SnakeNamingStrategy(),
};

export = configSeed;
