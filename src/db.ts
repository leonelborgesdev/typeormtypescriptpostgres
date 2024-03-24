import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const Appdatasource=new DataSource({
    type: 'postgres',
    host: process.env.host,
    username: process.env.username,
    password: process.env.password,
    port: 5432,
    database: process.env.database,
    entities: [ User],
    logging: true,
    synchronize: true
})