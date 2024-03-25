import axios from "axios";


export const getVideoGamesApi= async ( api : string) =>{
    const result= await axios(`https://api.rawg.io/api/games?key=${api}`);
    if (api != "") {
        if (result) {
            const data= result.data.results;
            data.map((videogame : {
                id : number,
                name: string})=>{
                return {
                    id: videogame.id,
                    name: videogame.name
                }
            })
            return data;
        }
    }
    return []
}