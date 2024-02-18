const URL = "https://api.themoviedb.org/3";
const API_KEY = "";

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

const getById = async (id) => {
  const res = await axios.get(`${URL}/movie/${id}?api_key=${API_KEY}`);
  return res.data;
};
export { getTrendingMovies, searchMovies, getById };
