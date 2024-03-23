import { Router } from "express";
import { createUser } from "../controllers/user.controller";

const router= Router()

router.get('/users', (req, res)=> res.send("Hola mundo"))

router.post('/users', createUser)

export default router