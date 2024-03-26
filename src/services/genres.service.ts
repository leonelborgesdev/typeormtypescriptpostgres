import axios from "axios"


export const getAllGenresApi=async( api : string )=>{
    const result= await axios(`https://api.rawg.io/api/genres?key=${api}`);
    if (result) {
        const data= result.data.results;
        console.log(data)
        return data;
    }
    return []
}