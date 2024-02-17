const URL = "https://api.themoviedb.org/3";
const API_KEY = "58e6eb6950d2e03556ac2af37dd40921";

const getTrendingMovies = async () => {
  const res = await axios.get(`${URL}/movie/upcoming?api_key=${API_KEY}`);
  return res.data.results;
};

const searchMovies = async (name) => {
  const res = await axios.get(
    `${URL}/search/movie?api_key=${API_KEY}&query=${name}`
  );
  return res.data.results;
};

export { getTrendingMovies, searchMovies };
