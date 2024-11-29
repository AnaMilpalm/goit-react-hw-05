import axios from "axios";

const API_KEY = "6cd3a1b235b3b6ac41d2c9b134c10edc";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchTrendMovie = async () => {
  const { data } = await axios.get("/trending/movie/day", {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return data.results;
};

export const fetchMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return data;
};

export const fetchCastByMovieId = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return data;
};
export const fetchReviewsByMovieId = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return data;
};

// export const fetchUserById = async (id) => {
//   const { data } = await axios.get(`/users/${id}`);
//   return data;
// };

// export const fetchPostsByUserId = async (id) => {
//   const { data } = await axios.get(`/posts/user/${id}`);
//   return data.posts;
// };

// API ='6cd3a1b235b3b6ac41d2c9b134c10edc'
// key =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2QzYTFiMjM1YjNiNmFjNDFkMmM5YjEzNGMxMGVkYyIsIm5iZiI6MTczMjc5NTE1MS44OTE2OTA3LCJzdWIiOiI2NzQ4NTYxZjM3OWIwM2E5ZjFkMDYxNzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3nUbqT8oLHttyQAuOOrH6VqfJOUYOs_umxOp_Z6hlVg";
