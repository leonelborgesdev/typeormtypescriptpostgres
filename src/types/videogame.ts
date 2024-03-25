import { Double } from "typeorm"

export class videogameInterface{
    
    id: number

    name : string

    background_image : string

    rating : Double

    released : string

    platforms : []
}