import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendMovie } from "../../services/api";

const HomePage = () => {
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
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
