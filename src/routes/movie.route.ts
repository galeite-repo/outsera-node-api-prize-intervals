import { Router } from "express";
import { MovieController } from "../controller/movie.controller";


const router = Router();

router.get("/movies", MovieController.getAllMovies);
router.get("/producers/prize-intervals", MovieController.getProducersWithWinIntervals);


export default router;