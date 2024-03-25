import { Request, Response } from "express";
import { videogame } from "../entities/videogame";
import { getVideogamesapi } from "../services/videogame.service";
import dotenv from "dotenv";
dotenv.config()

export const getAllVideogames =async ( req : Request, res : Response )=>{
    try {
        const allVideogames=await videogame.find();
        console.log(allVideogames.length)
        if (allVideogames.length === 0) {
            const apikeyVidogame = process.env.apikeyVidogame ? process.env.apikeyVidogame.toString() : "";
            const videogamesApi= getVideogamesapi(apikeyVidogame)
            return res.status(200).json(videogamesApi)
        }
        return res.json(allVideogames)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}