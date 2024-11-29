import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ListMovies from "../../components/ListMovies/ListMovies";
import { fetchMovies } from "../../services/api";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSetQuery = async (newQuery) => {
    setQuery(newQuery);

    if (newQuery.trim() === "") {
      setSearchResults([]); // Порожній список для порожнього запиту
      return;
    }

    try {
      const data = await fetchMovies(newQuery);
      setSearchResults(data.results || []); // Оновлення результатів пошуку
    } catch (error) {
      console.error("Error fetching movies:", error.message);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <SearchBar handleSetQuery={handleSetQuery} />
      {searchResults.length > 0 && (
        <ListMovies movies={searchResults} query={query} />
      )}
    </div>
  );
};

export default Movies;
