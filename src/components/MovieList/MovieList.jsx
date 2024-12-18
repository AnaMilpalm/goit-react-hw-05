import css from "./MovieList.module.css";
import Movie from "../Movie/Movie";

const MovieList = ({ movies, location }) => {
  return (
    <div>
      <ul className={css.list}>
        {movies?.length > 0 ? (
          <Movie movies={movies} location={location} />
        ) : (
          <p>Loading ...</p>
        )}
      </ul>
    </div>
  );
};

export default MovieList;
