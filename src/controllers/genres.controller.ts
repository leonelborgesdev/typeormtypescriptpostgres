import { Request, Response } from "express";
import { genres } from "../entities/genres";


export const getAllGenres= async (req: Request, res: Response)=>{
    try {
        const allGenres= await genres.find();
        console.log(allGenres);

        return res.status(200).json({
            ok : true,
            genres : allGenres
        })
    } catch (error) {
        
    }
}