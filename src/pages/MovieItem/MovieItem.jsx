import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../../services/api";
import css from "./MovieItem.module.css";

const MovieItem = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieById(movieId);
        console.log(movie);
        setMovie(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className={css.bg}>
      <Link to={location.state}>Go back</Link>
      <div className={css.span}>
        <div
          className={css.imgContainer}
          style={{
            backgroundImage: movie.backdrop_path
              ? `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`
              : `url(https://via.placeholder.com/500x300?text=No+Image)`,
          }}
        ></div>
        <div className={css.movieDescription}>
          <div className={css.titleBox}>
            <h4 className={css.titleMovie}>{movie.title}</h4>
            <span>({movie.release_date.split("-")[0]})</span>
          </div>
          <p>User score: {Math.round(movie.vote_average * 10)}%</p>
          <p>Genre: {movie.genres.map((genre) => genre.name).join(", ")}</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
        </div>
      </div>
      <div className={css.info}>
        <div className={css.infoTitle}>Aditional information</div>
        <nav>
          <Link to="cast">cast</Link>
          <Link to="reviews">reviews</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieItem;
