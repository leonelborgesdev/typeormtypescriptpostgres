import { Request, Response } from "express";
import { videogame } from "../entities/videogame";

export const getAllVideogames =async ( req : Request, res : Response )=>{
    try {
        const allVideogames=await videogame.find();
        return res.json(allVideogames)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}