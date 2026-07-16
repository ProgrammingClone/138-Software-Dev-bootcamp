import express from 'express';
import {
  getAllMovies,
  
} from "../controller/movieController.js";

const router = express.Router();

router.get("/", getAllMovies);
// router.post("/", createMovie);
// router.get("/:id", getMovieById);
// router.post("/:id/delete", deleteMovie);

export default router;