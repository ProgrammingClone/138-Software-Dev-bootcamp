import Movie from "../models/Movie.js";
import Review from "../models/Review.js";

// POST /movies/:movieId/reviews - add a review to a movie
export async function createReview(req, res) {
  try {
    const { movieId } = req.params;
    const { reviewerName, comment, rating } = req.body;

    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).render("show", { movie: null, reviews: [], notFound: true });
    }

    await Review.create({ movie: movie._id, reviewerName, comment, rating });
    res.redirect(`/movies/${movieId}`);
  } catch (err) {
    console.error(err)
  }
}

// POST /movies/:movieId/reviews/:reviewId/delete - delete a single review
export async function deleteReview(req, res) {
  try {
    const { movieId, reviewId } = req.params;
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/movies/${movieId}`);
  } catch (err) {
    console.error(err)
  }
}
