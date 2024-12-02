import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ListMovies from "../../components/ListMovies/ListMovies";
import { fetchMovies } from "../../services/api";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(); //оголошення  збергаємо query url

  const query = searchParams.get("query") ?? "";
  const handleSetQuery = async (newValue) => {
    searchParams.set("query", newValue);
    setSearchParams(searchParams); // встановлюємо\зберігаємо урл

    try {
      const data = await fetchMovies(newValue);
      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error.message);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <SearchBar handleSetQuery={handleSetQuery} initialQuery={query} />
      <ListMovies movies={movies} location={location} />
    </div>
  );
};

export default Movies;
