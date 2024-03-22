import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const Appdatasource=new DataSource({
    type: 'postgres',
    host: "localhost",
    username: "postgres",
    password: "uajms",
    port: 5432,
    database: "typeormts",
    entities: [ User],
    logging: true,
    synchronize: true
})