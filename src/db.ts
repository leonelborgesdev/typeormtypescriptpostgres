import { DataSource } from "typeorm";
import { User } from "./entities/User";
import dotenv from "dotenv";
dotenv.config()

const port = process.env.PORT ? parseInt(process.env.PORT) : undefined;

export const Appdatasource=new DataSource({
    type: 'postgres',
    host: process.env.HOST,
    username: process.env.NAMEUSER,
    password: process.env.PASSWORD,
    port: port,
    database: process.env.DATABASE,
    entities: [ User],
    logging: true,
    synchronize: true
})