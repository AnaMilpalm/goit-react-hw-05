import { useEffect, useState } from "react";
import css from "./ListMovies.module.css";
import { fetchTrendMovie } from "../../services/api";
import Movie from "../Movie/Movie";
const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTrendMovie();
        console.log(data);
        setMovies(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Trending movies</h2>
      <ul className={css.list}>
        {movies?.length > 0 ? <Movie movies={movies} /> : <p>Loading ...</p>}
      </ul>
    </div>
  );
};

export default ListMovies;
