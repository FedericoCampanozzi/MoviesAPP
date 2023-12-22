import "./app.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import Header from "./header";
import Trailer from "./pages/home/partial/trailer/trailer";
import Favorites from "./pages/favorites/favorites";
import ReviewsLayout from "./pages/reviews/reviews-layout";
import { SharedStateProvider } from "./shared/state-context";

function App() {
  return (
    <SharedStateProvider>
      <div className="app-style">
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
            <Route path="/Reviews/:movieId" element={<ReviewsLayout updater={"some text"}/>}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </div>
    </SharedStateProvider>
  );
}

export default App;
