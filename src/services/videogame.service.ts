import axios from "axios";


export const getVideogamesapi= async ( api : string) =>{
    const result= await axios(`https://api.rawg.io/api/games?key=${api}`);
    if (result) {
        const data= result.data.results;
        // console.log(data)
        return data;
    }else{
        return []
    }
}