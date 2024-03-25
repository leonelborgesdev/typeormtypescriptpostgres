import axios from "axios";
import { videogameInterface } from "../types/videogame";
import { VideoGame } from "../entities/videogame";


export const getVideoGamesApi= async ( api : string) =>{
    const result= await axios(`https://api.rawg.io/api/games?key=${api}`);
    if (api != "") {
        if (result) {
            const data= result.data.results;
            let listVideogame:any = [];
            data.map(async (videogameObj : videogameInterface)=>{
                let platformsApi="";
                videogameObj.platforms.map((platform:{
                    platform: {id: string, name: string},
                    name: string
                }, index: number)=>{
                    if(videogameObj.platforms.length-1 === index){
                        platformsApi=platformsApi+`${platform.platform.name}.`
                    }else{
                        platformsApi=platformsApi+platform.platform.name+", "
                    }
                })
                const videoGameReturn= {
                    id: videogameObj.id.toString(),
                    name: videogameObj.name,
                    background_image : videogameObj.background_image,                
                    rating : videogameObj.rating,                
                    released : videogameObj.released,
                    platforms : platformsApi
                }
                const ObjectVideoGame=new VideoGame();
                
                ObjectVideoGame.id= videogameObj.id.toString()
                ObjectVideoGame.Nombre= videogameObj.name
                ObjectVideoGame.Image = videogameObj.background_image
                ObjectVideoGame.Rating = videogameObj.rating
                ObjectVideoGame.Fecha_lanzamiento = videogameObj.released
                ObjectVideoGame.Plataformas = platformsApi
                ObjectVideoGame.Descripción = ""
                await ObjectVideoGame.save()
                listVideogame.push(videoGameReturn);
            })
            console.log(listVideogame,"listvideogame")
            return listVideogame;
        }
    }
    return []
}