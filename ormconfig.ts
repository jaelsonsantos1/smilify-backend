import 'dotenv/config';
import { DataSource } from 'typeorm';

const port = parseInt(process.env.DB_PORT) || undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['src/entities/*.ts'],
  logging: true,
  synchronize: false,
  migrationsRun: false,
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migration',
});