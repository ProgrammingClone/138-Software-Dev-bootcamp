import { use, expect } from "chai";
import chaiHttp from "chai-http";
import app from "../src/app.js";
import Movie from "../src/models/Movie.js";
import Review from "../src/models/Review.js";

const chai = use(chaiHttp);

// These are unit tests: no real MongoDB is used. Before each test we
// temporarily replace the Mongoose method we need (e.g. Movie.findById)
// with our own fake function that returns whatever data we want, run the
// request, then put the real method back at the end of the test.

describe("Express App Tests", () => {
  describe("GET /movies", () => {
    it("should render the homepage with the movies from the model", (done) => {
      // 1. Save the real method so we can restore it later.
      const realFind = Movie.find;

      // 2. Replace it with a fake that returns one movie.
      Movie.find = () => ({
        sort: () =>
          Promise.resolve([
            { _id: "1", title: "Inception", releaseYear: 2010, posterUrl: "x.jpg" },
          ]),
      });

      chai.request
        .execute(app)
        .get("/movies")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.include("Inception");

          // 3. Put the real method back before the test finishes.
          Movie.find = realFind;
          done();
        });
    });

    it("should show an empty state when there are no movies", (done) => {
      const realFind = Movie.find;
      Movie.find = () => ({ sort: () => Promise.resolve([]) });

      chai.request
        .execute(app)
        .get("/movies")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.include("No movies yet");

          Movie.find = realFind;
          done();
        });
    });
  });

  describe("GET /movies/:id", () => {
    it("should show movie details and its reviews when the movie exists", (done) => {
      const realFindById = Movie.findById;
      const realReviewFind = Review.find;

      Movie.findById = () =>
        Promise.resolve({
          _id: "1",
          title: "Interstellar",
          description: "A space adventure.",
          releaseYear: 2014,
          posterUrl: "x.jpg",
        });

      Review.find = () => ({
        sort: () =>
          Promise.resolve([
            { _id: "r1", reviewerName: "Alex", comment: "Great!", rating: 5 },
          ]),
      });

      chai.request
        .execute(app)
        .get("/movies/1")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.include("Interstellar");
          expect(res.text).to.include("Alex");

          Movie.findById = realFindById;
          Review.find = realReviewFind;
          done();
        });
    });

    it("should return a friendly not-found page if the movie does not exist", (done) => {
      const realFindById = Movie.findById;
      Movie.findById = () => Promise.resolve(null);

      chai.request
        .execute(app)
        .get("/movies/does-not-exist")
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.text).to.include("Movie not found");

          Movie.findById = realFindById;
          done();
        });
    });

  });

  describe("POST /movies", () => {
    it("should create a movie and redirect to /movies", (done) => {
      const realCreate = Movie.create;
      let whatWasSaved = null;

      Movie.create = (movieData) => {
        whatWasSaved = movieData;
        return Promise.resolve({});
      };

      chai.request
        .execute(app)
        .post("/movies")
        .redirects(0)
        .send({
          title: "The Matrix",
          description: "A hacker discovers reality is a simulation.",
          releaseYear: 1999,
          posterUrl: "x.jpg",
        })
        .end((err, res) => {
          expect(res).to.have.status(302);
          expect(res.headers.location).to.equal("/movies");
          expect(whatWasSaved).to.include({ title: "The Matrix" });

          Movie.create = realCreate;
          done();
        });
    });
  });

  describe("POST /movies/:id/delete", () => {
    it("should delete a movie and its reviews, then redirect to /movies", (done) => {
      const realFindByIdAndDelete = Movie.findByIdAndDelete;
      const realDeleteMany = Review.deleteMany;

      let deletedMovieId = null;
      let reviewDeleteFilter = null;

      Movie.findByIdAndDelete = (id) => {
        deletedMovieId = id;
        return Promise.resolve({});
      };
      Review.deleteMany = (filter) => {
        reviewDeleteFilter = filter;
        return Promise.resolve({});
      };

      chai.request
        .execute(app)
        .post("/movies/1/delete")
        .redirects(0)
        .end((err, res) => {
          expect(res).to.have.status(302);
          expect(res.headers.location).to.equal("/movies");
          expect(deletedMovieId).to.equal("1");
          expect(reviewDeleteFilter).to.deep.equal({ movie: "1" });

          Movie.findByIdAndDelete = realFindByIdAndDelete;
          Review.deleteMany = realDeleteMany;
          done();
        });
    });
  });

  describe("POST /movies/:movieId/reviews", () => {
    it("should add a review to an existing movie and redirect back to it", (done) => {
      const realFindById = Movie.findById;
      const realCreate = Review.create;
      let whatWasSaved = null;

      Movie.findById = () => Promise.resolve({ _id: "1" });
      Review.create = (reviewData) => {
        whatWasSaved = reviewData;
        return Promise.resolve({});
      };

      chai.request
        .execute(app)
        .post("/movies/1/reviews")
        .redirects(0)
        .send({ reviewerName: "Jordan", comment: "Loved it.", rating: 4 })
        .end((err, res) => {
          expect(res).to.have.status(302);
          expect(res.headers.location).to.equal("/movies/1");
          expect(whatWasSaved).to.include({ reviewerName: "Jordan" });

          Movie.findById = realFindById;
          Review.create = realCreate;
          done();
        });
    });

    it("should return not-found if the movie does not exist", (done) => {
      const realFindById = Movie.findById;
      Movie.findById = () => Promise.resolve(null);

      chai.request
        .execute(app)
        .post("/movies/does-not-exist/reviews")
        .send({ reviewerName: "Jordan", comment: "Loved it.", rating: 4 })
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.text).to.include("Movie not found");

          Movie.findById = realFindById;
          done();
        });
    });
  });

  describe("POST /movies/:movieId/reviews/:reviewId/delete", () => {
    it("should delete a review and redirect back to the movie page", (done) => {
      const realFindByIdAndDelete = Review.findByIdAndDelete;
      let deletedReviewId = null;

      Review.findByIdAndDelete = (id) => {
        deletedReviewId = id;
        return Promise.resolve({});
      };

      chai.request
        .execute(app)
        .post("/movies/1/reviews/99/delete")
        .redirects(0)
        .end((err, res) => {
          expect(res).to.have.status(302);
          expect(res.headers.location).to.equal("/movies/1");
          expect(deletedReviewId).to.equal("99");

          Review.findByIdAndDelete = realFindByIdAndDelete;
          done();
        });
    });
  });

 
});