
import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/User.routes";
import videoGameRouter from "./routes/Videogame.routes"
import genresRouter from "./routes/Genres.routes";

const app=express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(userRouter)
app.use(videoGameRouter)
app.use(genresRouter)

export default app;