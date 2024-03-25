import { Double } from "typeorm"

export class videogameInterface{
    
    id: string

    name : string

    background_image : string

    rating : number

    released : string

    platforms : []
}