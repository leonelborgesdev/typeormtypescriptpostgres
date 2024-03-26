import axios from "axios"
import { genrestInterface } from "../types/genresType";
import { genres } from "../entities/genres";


export const getAllGenresApi=async( api : string )=>{
    const result= await axios(`https://api.rawg.io/api/genres?key=${api}`);
    if (result) {
        const data= result.data.results;
        const listGenres = data.map((genre: genrestInterface)=>{
            return {
                id : genre.id,
                name : genre.name
            }
        })
        listGenres.map( async( genre : genrestInterface ) => {
            const objGenre = new genres();
            objGenre.id = genre.id;
            objGenre.nombre = genre.name;
            await objGenre.save()
        })
        return listGenres;
    }
    return []
}