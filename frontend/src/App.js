import "./app.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import Header from "./header";
import Trailer from "./pages/home/partial/trailer/trailer";
import Favorites from "./pages/favorites/favorites";
import { getMoviesAPI, getGenresAPI } from './shared/api';

function App() {
  const [updater, setUpdater] = useState();
  /*
  <Route
            path="/Reviews/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
                setMovie={setMovie}
              />
            }
          ></Route>
  */
  useEffect(() => {
    getMoviesAPI();
    getGenresAPI();
  }, []);
  return (
    <div className="app-style">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
          <Route
            path="/favorites"
            element={
              <Favorites />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
