import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Header from "./components/Header/Header";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailesPage = lazy(() =>
  import("./pages/MovieDetailesPage/MovieDetailesPage")
);
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <div className={css.wrapper}>
      <Header />
      <Suspense fallback={<h2>Loading ... </h2>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailesPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
