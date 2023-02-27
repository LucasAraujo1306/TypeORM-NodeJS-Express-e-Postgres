import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm";
import { CreateTable1677452254293 } from "./migrations/1677452254293-CreateTable";
import User from '../app/entities/User';


const port = process.env.DB_PORT as number | undefined
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,

    entities: [User],
    migrations: [CreateTable1677452254293]
})