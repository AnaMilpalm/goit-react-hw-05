import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ListMovies from "../../components/ListMovies/ListMovies";
import { fetchMovies } from "../../services/api";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSetQuery = async (newQuery) => {
    if (newQuery === query) return; // Уникаємо зайвого запиту, якщо запит не змінився
    setQuery(newQuery);

    try {
      const data = await fetchMovies(newQuery); // Виконуємо пошуковий запит
      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error.message);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <SearchBar handleSetQuery={handleSetQuery} initialQuery={query} />
      <ListMovies movies={movies} />
    </div>
  );
};

export default Movies;
