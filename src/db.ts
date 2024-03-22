import { DataSource } from "typeorm";

export const Appdatasource=new DataSource({
    type: 'postgres',
    host: "localhost",
    username: "postgres",
    password: "uajms",
    port: 5432,
    database: "typeormts",
    entities: []
})