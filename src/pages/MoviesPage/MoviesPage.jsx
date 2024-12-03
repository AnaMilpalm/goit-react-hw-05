import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../services/api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]); // Стан для фільмів
  const [searchParams, setSearchParams] = useSearchParams(); // Параметри пошуку

  const query = searchParams.get("query") ?? ""; // Отримуємо значення параметра `query`

  const handleSetQuery = (newValue) => {
    searchParams.set("query", newValue); // Встановлюємо новий параметр
    setSearchParams(searchParams); // Оновлюємо URL
  };

  useEffect(() => {
    if (!query) return; // Якщо немає запиту, не виконуємо запит на сервер

    const getData = async () => {
      try {
        const data = await fetchMovies(query); // Отримуємо фільми за запитом
        setMovies(data.results || []); // Оновлюємо стан фільмів
      } catch (error) {
        console.error("Error fetching movies:", error.message); // Обробка помилки
      }
    };

    getData(); // Викликаємо функцію завантаження даних
  }, [query]); // Виконуємо щоразу при зміні `query`

  return (
    <div>
      <h1>Search Movies</h1>
      <SearchBar handleSetQuery={handleSetQuery} initialQuery={query} />
      <MovieList movies={movies} location={location} />
    </div>
  );
};

export default MoviesPage;
