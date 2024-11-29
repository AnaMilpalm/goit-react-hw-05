import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import css from "./App.module.css";
import Movies from "./pages/Movies/Movies";
// import Movie from "./components/Movie/Movie";
import MovieItem from "./pages/MovieItem/MovieItem";
import Header from "./components/Header/Header";

import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div className={css.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieItem />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
