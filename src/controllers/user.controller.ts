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
    return res.status(200).json(userCreate)
}

export const updateUser=async(req: Request, res: Response)=>{
    try {
        const { id }=req.params;
    const { firstname, lastname}=req.body

    const user= await User.findOneBy({id: parseInt(id)})

    if (user) {
        const userUpdate= await User.update({
            id: parseInt(id)},{
            firstname, lastname});
        console.log(userUpdate);
        return res.status(200).json(req.body)
    }else{
        return res.json({message: "User doesn't exist"})
    }
    } catch (error) {
        return res.status(500).json({error})
    }
}

export const deleteUser= async (req: Request, res: Response)=>{
    try {
        const { id }=req.params

        const userDelete = await User.delete({id: parseInt(id)})

        if (userDelete.affected === 0) {
            return res.status(400).json({message: "User not found"})
        }
        return res.status(200).json(userDelete)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error})
        }
    }
}

export const getUserById= async ( req : Request, res : Response ) => {
    try {
        const { id } = req.params

        const userById = await User.findOneBy({id: parseInt(id)})

        return res.status(200).json(userById)

    } catch (error) {

        return res.status(500).json(error)

    }
}