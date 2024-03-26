import { Request, Response } from "express";
import { genres } from "../entities/genres";
import { getAllGenresApi } from "../services/genres.service";


export const getAllGenres= async (req: Request, res: Response)=>{
    try {
        const allGenres= await genres.find();
        console.log(allGenres);
        if (allGenres.length === 0) {            
            const apikeyVideogame = process.env.apikeyVidogame ? process.env.apikeyVidogame.toString() : "";
            const AllGenresApi= await getAllGenresApi(apikeyVideogame);
            
            return res.status(200).json({
                ok : true,
                genres : AllGenresApi
            })
        }
        return res.status(200).json({
            ok : true,
            genres : allGenres
        })
    } catch (error) {
        
    }
}