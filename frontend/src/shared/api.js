import axios from "./axios.config";

function errorFlow(func) {
  try {
    func();
  } catch (err) {
    console.error(err);
  }
}

/* MOVIE API */
const updateMovieLikeAPI = async (movie, setMovie) => {
  errorFlow(async () => {
    await axios.post("/api/v1/movies/set-movie-like", {
      imdbId: movie.imdbId,
    });
    movie.liked = !movie.liked;
    setMovie(movie);
  });
};

const getMoviesAPI = async (setMovies, setLikedMovies, setLikedFilteredMovies) => {
  errorFlow(async () => {
    const response = await axios.get("/api/v1/movies");
    const m = [...response.data];
    const lm = m.filter((movie) => movie.liked);
    setMovies(m);
    setLikedMovies(lm);
    setLikedFilteredMovies(lm);
  });
};

const getMovieAPI = async (movieId, setMovie, setReviews) => {
  errorFlow(async () => {
    const response = await axios.get(`/api/v1/movies/${movieId}`);
    const m = response.data;
    const r = response.data.reviews;
    setMovie(m);
    setReviews(r);
  });
};

/* REVIEW API */
const putReviewAPI = async (reviewBody, imdbId) => {
  errorFlow(async () => {
    await axios.post("/api/v1/reviews", {
      reviewBody: reviewBody,
      imdbId: imdbId
    });
  });
};

const updateReviewBodyAPI = async (reviewId, reviewBody) => {
  errorFlow(async () => {
    await axios.post("/api/v1/reviews/update-body", {
      reviewId: reviewId,
      reviewBody: reviewBody,
    });
  });
};

const deleteReviewAPI = async (reviewId) => {
  errorFlow(async () => {
    await axios.delete(`/api/v1/reviews/delete/${reviewId}`);
  });
};

/* GENRES */
const getGenresAPI = async (setGenres) => {
  errorFlow(async () => {
    let g = [];
    const response = await axios.get("/api/v1/genres/get-all");
    response.data["gname"].forEach((name) => {
      g.push({
        name: name,
        checked: true,
      });
    });
    setGenres(g);
  });
};

export {
  getMoviesAPI,
  getMovieAPI,
  updateMovieLikeAPI,
  putReviewAPI,
  updateReviewBodyAPI,
  deleteReviewAPI,
  getGenresAPI
};
