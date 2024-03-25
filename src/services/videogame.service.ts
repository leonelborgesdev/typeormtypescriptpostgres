import axios from "axios";
import { videogameInterface } from "../types/videogame";
import { platform } from "os";


export const getVideoGamesApi= async ( api : string) =>{
    const result= await axios(`https://api.rawg.io/api/games?key=${api}`);
    if (api != "") {
        if (result) {
            const data= result.data.results;
            const listVideogame=data.map((videogame : videogameInterface)=>{
                let platformsApi="";
                // console.log("platform_videogame",videogame.platforms)
                videogame.platforms.map((platform:{
                    platform: {id: number, name: string},
                    name: string
                }, index: number)=>{
                    if(videogame.platforms.length-1 === index){
                        platformsApi=platformsApi+`${platform.platform.name}.`
                    }else{
                        platformsApi=platformsApi+platform.platform.name+", "
                    }
                })
                return {
                    id: videogame.id,
                    name: videogame.name,
                    background_image : videogame.background_image,                
                    rating : videogame.rating,                
                    released : videogame.released,
                    platforms : platformsApi
                }
            })
            console.log(listVideogame)
            return data;
        }
    }
    return []
}