import express from "express";
import { createReview, deleteReview } from "../controller/reviewController.js";

const router = express.Router();

router.post("/:movieId/reviews/", createReview);
router.post("/:movieId/reviews/:reviewId/delete", deleteReview);

export default router;
