import { Router } from "express";
import { getAllGenres } from "../controllers/genres.controller";

const router = Router();

router.get('/genres', getAllGenres);

export default router;