import { createContext, useContext, useState } from "react";

const SharedStateContext = createContext();

export const SharedStateProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [liked_movies, setLikedMovies] = useState([]);
  const [liked_filtered_movies, setLikedFilteredMovies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movie, setMovie] = useState();
  const [reviewBody, setReviewBody] = useState("");
  const [editReviewIndex, setEditReviewIndex] = useState(-1);

  return (
    <SharedStateContext.Provider
      value={{
        movies,
        setMovies,
        liked_movies,
        setLikedMovies,
        liked_filtered_movies,
        setLikedFilteredMovies,
        reviews,
        setReviews,
        genres,
        setGenres,
        movie,
        setMovie,
        reviewBody,
        setReviewBody,
        editReviewIndex,
        setEditReviewIndex
      }}
    >
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => useContext(SharedStateContext);
