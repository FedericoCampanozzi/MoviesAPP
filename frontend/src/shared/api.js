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
  //const { movie, setMovie } = useSharedState();
  errorFlow(async () => {
    await axios.post("/api/v1/movies/set-movie-like", {
      imdbId: movie.imdbId,
    });
    movie.liked = !movie.liked;
    setMovie(movie);
  });
};

const getMoviesAPI = async (setMovies, setLikedMovies, setLikedFilteredMovies) => {
  //const { setMovies, setLikedMovies, setLikedFilteredMovies } = useSharedState();
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
  //const { setMovie, setReviews } = useSharedState();
  errorFlow(async () => {
    const response = await axios.get(`/api/v1/movies/${movieId}`);
    const m = response.data;
    const r = response.data.reviews;
    setMovie(m);
    setReviews(r);
  });
};

/* REVIEW API */
const putReviewAPI = async (reviewBody, movieId) => {
  errorFlow(async () => {
    await axios.post("/api/v1/reviews", {
      reviewBody: reviewBody,
      imdbId: movieId,
    });
  });
};

const updateReviewBodyAPI = async (reviewId, reviewBody, reviewIndex, setReviews) => {
  //const { setReviews } = useSharedState();
  errorFlow(async () => {
    await api.post("/api/v1/reviews/update-body", {
      reviewId: reviewId,
      reviewBody: reviewBody,
    });
    const r = [...reviews];
    r[reviewIndex].body = reviewBody;
    setReviews(r);
  });
};

const deleteReviewAPI = async (reviewId, reviewIndex, setReviews) => {
  //const { setReviews } = useSharedState();
  errorFlow(async () => {
    await api.delete(`/api/v1/reviews/delete/${reviewId}`);
    let r = [...reviews];
    r = r.splice(reviewIndex, 1);
    setReviews(r);
  });
};

/* GENRES */
const getGenresAPI = async (setGenres) => {
  //const { setGenres } = useSharedState();
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
