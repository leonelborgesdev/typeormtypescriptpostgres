import { Request, Response } from "express";
import { User } from "../entities/User";

export const getUsers=async(req:Request, res:Response)=>{
    try {
        const users=await User.find();
        return res.json(users)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export const createUser=async(req:Request, res:Response)=>{
    const {firstname, lastname}= req.body;

    const user=new User()
    user.firstname=firstname;
    user.lastname=lastname;

    const userCreate=await user.save()
    console.log(user)
    return res.status(200).json(userCreate)
}

export const updateUser=async(req: Request, res: Response)=>{
    const { id }=req.params;
    const { firstname, lastname}=req.body

    const user= await User.findOneBy({id: parseInt(id)})

    if (user) {
        const userUpdate= await User.update({
            id: parseInt(id)},{
            firstname, lastname});
        console.log(userUpdate);
    }else{
        return res.json({message: "User doesn't exist"})
    }
}