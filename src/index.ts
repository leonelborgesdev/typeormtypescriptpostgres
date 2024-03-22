import "reflect-metadata"
import app from "./app"
import { Appdatasource } from "./db";

async function main() {
    try {        
        await Appdatasource.initialize()
        app.listen(3000)
        console.log('server on port ', 3000)
    } catch (error) {
        console.log(error)
    }
}

main()