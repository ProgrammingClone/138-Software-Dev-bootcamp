import Movie from '../models/Movie.js';
import Review from '../models/Review.js';

// get all movies 
export async function getAllMovies(req, res) {
    try {
        const movies = await Movie.find().sort({createdAt: -1});
        res.render("index",{movies})
    } catch (error) {
        console.error(error)
    }
}

// get a movie by id 
export async function getMovieById(req, res){
    try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).render("show", { movie: null, reviews: [], notFound: true });
    }
    const reviews = await Review.find({ movie: movie._id }).sort({ createdAt: -1 });
    res.render("show", {movie, reviews, notfound:false})

    const reviews = await Review.find({ movie: movie._id }).sort({ createdAt: -1 });
    } catch (error) {
        console.error(error)
    }
}

// post : create a movie
export async function createMovie(req, res) {
  try {
    const { title, description, releaseYear, posterUrl } = req.body;
    await Movie.create({ title, description, releaseYear, posterUrl });
    res.redirect("/movies");
  } catch (err) {
    console.error(error)
  }
}

// delete: delete a movie by its id
export async function deleteMovie(req, res) {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    await Review.deleteMany({ movie: id });
    res.redirect("/movies");
  } catch (err) {
    console.error(error)
  }
}