import axios from "axios";
import { videogameInterface } from "../types/videogame";


export const getVideoGamesApi= async ( api : string) =>{
    const result= await axios(`https://api.rawg.io/api/games?key=${api}`);
    if (api != "") {
        if (result) {
            const data= result.data.results;
            const listVideogame=data.map((videogame : videogameInterface)=>{
                return {
                    id: videogame.id,
                    name: videogame.name,
                    background_image : videogame.background_image,                
                    rating : videogame.rating,                
                    released : videogame.released
                }
            })
            console.log(listVideogame)
            return data;
        }
    }
    return []
}