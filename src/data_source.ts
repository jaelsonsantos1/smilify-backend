import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from "typeorm";

const port = parseInt(process.env.DB_PORT) || undefined;

export const AppDataSource = new DataSource({
    type: "postgres",
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USERNAME,
    password: "root",
    entities: ['src/entities/*.ts'],
    migrations: ['src/database/migrations/*.ts'],
});