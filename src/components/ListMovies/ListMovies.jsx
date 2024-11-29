import css from "./ListMovies.module.css";

import Movie from "../Movie/Movie";
const ListMovies = ({ movies }) => {
  return (
    <div>
      <ul className={css.list}>
        {movies?.length > 0 ? <Movie movies={movies} /> : <p>Loading ...</p>}
      </ul>
    </div>
  );
};

export default ListMovies;
