import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    releaseYear: {
      type: Number,
      required: [true, "Release year is required"],
      min: [2000, "Release year must be a valid year"],
      max: [2026, "Release year must be a valid year"],
    },
    posterUrl: {
      type: String,
      required: [true, "Poster image link is required"],
      trim: true,
    },
  },
  { timestamps: true },
);

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;