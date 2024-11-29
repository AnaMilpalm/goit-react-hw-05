import PropTypes from "prop-types";
import css from "./Movie.module.css";
import { NavLink } from "react-router-dom";

const Movie = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id} className={css.listItem}>
          <NavLink to={`/movies/${movie.id}`} className={css.link}>
            <h4 className={css.titleMovie}>{movie.title}</h4>
            <div
              className={css.imgContainer}
              style={{
                backgroundImage: `url(${
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                })`,
              }}
            ></div>
          </NavLink>
        </li>
      ))}
    </>
  );
};

Movie.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movie;
