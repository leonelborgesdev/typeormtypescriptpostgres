import { Double } from "typeorm"

export interface videogameApiInterface{    
    id: string
    name : string
    background_image : string
    rating : number
    released : string
    platforms : []
}

export interface videogameInterfaceModel{
    id: string            
    name : string            
    background_image : string            
    rating : number            
    released : string            
    platforms : string
}