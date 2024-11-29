import { useEffect, useState } from "react";
import ListMovies from "../../components/ListMovies/ListMovies";
import { fetchTrendMovie } from "../../services/api";

const Home = () => {
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
      <ListMovies movies={movies} />
    </div>
  );
};

export default Home;
