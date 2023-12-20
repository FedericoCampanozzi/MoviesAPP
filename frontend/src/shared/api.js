import axios from "./axios.config";
import EnvironmentVariable from './environment-variable';

/* MOVIE API */
const updateMovieLikeAPI = async (e) => {
  e.preventDefault();
  const response = await axios.post("/api/v1/movies/set-movie-like", {
    imdbId: movieId,
  });
  if (response.data == "OK") {
    movie.liked = !movie.liked;
    setMovie(movie);
    const rr = [...reviews];
    setReviews(rr);
  } else {
    throw new Error("Liked not set");
  }
};

const getMoviesAPI = async () => {
  try {
    const response = await axios.get("/api/v1/movies");
    EnvironmentVariable.movies = [...response.data];
    EnvironmentVariable.liked_movies = EnvironmentVariable.movies.filter((movie)=>movie.liked);
    EnvironmentVariable.liked_filtered_movies = EnvironmentVariable.liked_movies;
  } catch (err) {
    console.error(err);
  }
};

const getMovieAPI = async (movieId) => {
  try {
    const response = await api.get(`/api/v1/movies/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/* REVIEW API */
const putReviewAPI = async (e) => {
  e.preventDefault();
  const rev = revText.current;
  try {
    const response = await api.post("/api/v1/reviews", {
      reviewBody: rev.value,
      imdbId: movieId,
    });
    const updatedReviews = [...reviews, { body: rev.value }];
    rev.value = "";
    valueOfText = "";
    setReviews(updatedReviews);
  } catch (err) {
    console.error(err);
  }
};

const updateReviewBodyAPI = async (event, review, index) => {
  event.preventDefault();
  const rev = revText.current;
  try {
    await api.post("/api/v1/reviews/update-body", {
      reviewId: review.reviewId,
      reviewBody: rev.value,
    });
    editReviewIndex = -1;
    const rr = [...reviews];
    rr[index].body = rev.value;
    rev.value = "";
    valueOfTextEdit = "";
    setReviews(rr);
  } catch (err) {
    console.error(err);
  }
};

const deleteReviewAPI = async (event, review, index) => {
  event.preventDefault();
  try {
    await api.delete(`/api/v1/reviews/delete/${review.reviewId}`);
    const rr = [...reviews];
    rr.splice(index, 1);
    setReviews(rr);
  } catch (err) {
    console.error(err);
  }
};

/* GENRES */
const getGenresAPI = async () => {
  try {
    EnvironmentVariable.genres = [];
    const response = await axios.get("/api/v1/genres/get-all");
    response.data["gname"].forEach(name => {
      EnvironmentVariable.genres.push({
        "name": name,
        "checked": true
      });
    });
  } catch (err) {
    console.error(err);
  }
};

export {getMoviesAPI, getGenresAPI};