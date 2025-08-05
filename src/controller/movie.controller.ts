import { Request, Response } from "express";
import { MovieService } from "../services/movie.service";

export class MovieController {

    static async getAllMovies(req: Request, res: Response) {
        try {
            const movies = await MovieService.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving movies", error });
        }
    }

    static async getProducersWithWinIntervals(req: Request, res: Response) {
        try{
            const result = await MovieService.getProducersWithWinIntervals();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving producers with win intervals", error });
        }
    }
}