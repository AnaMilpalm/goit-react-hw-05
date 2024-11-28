import { useEffect, useState } from "react";
import { fetchCastByMovieId } from "../../services/api";
import { useParams } from "react-router-dom";
import css from "./Cast.module.css";

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCastByMovieId(movieId);
        setCasts(data.cast);
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      <h2>Cast</h2>
      <ul className={css.castList}>
        {casts.length > 0 ? (
          casts.slice(0, 10).map((cast) => (
            <li key={cast.cast_id} className={css.castItem}>
              <p>{cast.name}</p>
              <div
                className={css.imgContainer}
                style={{
                  backgroundImage: cast.profile_path
                    ? `url(https://image.tmdb.org/t/p/w200${cast.profile_path})`
                    : `url(https://via.placeholder.com/200x300?text=No+Image)`, // Якщо фото немає
                }}
              ></div>
            </li>
          ))
        ) : (
          <p>No cast information available</p>
        )}
      </ul>
    </>
  );
};

export default Cast;
