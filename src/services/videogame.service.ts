import axios from "axios";


export const getVideogamesapi= async ( api : string) =>{
    const videogamesApi= await axios(`https://api.rawg.io/api/games?key=${api}`);
    console.log(api)
    if (videogamesApi && api != "") {
        return videogamesApi;
    }else{
        return []
    }
}