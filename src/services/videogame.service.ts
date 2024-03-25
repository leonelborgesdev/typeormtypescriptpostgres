import axios from "axios";
import { videogameApiInterface, videogameInterfaceModel } from "../types/videogame";
import { videogame } from "../entities/videogame";


export const getVideoGamesApi= async ( api : string) =>{
    const result= await axios(`https://api.rawg.io/api/games?key=${api}`);
    if (api != "") {
        if (result) {
            const data= result.data.results;
            let listVideogame : Array<videogameInterfaceModel> = new Array<videogameInterfaceModel>();
            data.map((videogameObj : videogameApiInterface)=>{
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
                listVideogame.push(videoGameReturn);
            })
            const VideogamesNextPage= await getVideoGamesApiPage(`https://api.rawg.io/api/games?key=${api}&page=2`,listVideogame);
            console.log(listVideogame,"listvideogame")
            console.log(VideogamesNextPage,"VideogamesNextPage")
            await createListVideoGames(listVideogame)
            return listVideogame;
        }
    }
    return []
}

export const getVideoGamesApiPage = async (api: string, listVideogame:any)=>{
    const ApiPage= await axios(api);
    if (ApiPage) {
        const data= ApiPage.data.results;
        return data.map((videogameObj : videogameApiInterface)=>{
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
            const videogameReturn= {
                id: videogameObj.id.toString(),
                name: videogameObj.name,
                background_image : videogameObj.background_image,                
                rating : videogameObj.rating,                
                released : videogameObj.released,
                platforms : platformsApi
            }
            listVideogame.push(videogameReturn);
            return videogameReturn
        })
    }
}
export const createListVideoGames= async(listVideogame:any)=>{
    listVideogame.map(async (videogameObj:any)=>{
        const ObjectVideoGame=new videogame();
                            
        ObjectVideoGame.id= videogameObj.id.toString()
        ObjectVideoGame.Nombre= videogameObj.name
        ObjectVideoGame.Image = videogameObj.background_image
        ObjectVideoGame.Rating = videogameObj.rating
        ObjectVideoGame.Fecha_lanzamiento = videogameObj.released
        ObjectVideoGame.Plataformas = videogameObj.platforms
        ObjectVideoGame.Descripción = ""
        await ObjectVideoGame.save()
    })
}