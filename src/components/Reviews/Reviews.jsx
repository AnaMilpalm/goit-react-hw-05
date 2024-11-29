import { useEffect, useState } from "react";
import { fetchReviewsByMovieId } from "../../services/api";
import { useParams } from "react-router-dom";
import css from "./Reviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchReviewsByMovieId(movieId);
        console.log(data.results);
        setReviews(data.results);
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      <ul className={css.castList}>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id} className={css.castItem}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>No cast information available</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
