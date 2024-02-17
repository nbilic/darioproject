import { getTrendingMovies, searchMovies } from "./api-service.js";

const POSTER_PATH = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
const DEFAULT_POSTER = "https://www.movienewz.com/img/films/poster-holder.jpg";

const renderHomepage = (movies) => {
  const moviesDiv = document.querySelector(".movies");
  moviesDiv.innerHTML = "";
  movies.forEach((movie) => {
    const img = createImg(movie.poster_path, "200px");
    img.addEventListener("click", () => renderSingleMovie(movie));
    moviesDiv.appendChild(img);
  });
};

const search = async (event) => {
  if (event.key === "Enter") {
    const movies = await searchMovies(event.target.value);
    renderHomepage(movies);
  }
};

const renderSingleMovie = ({ poster_path, overview, original_title }) => {
  const poster = document.querySelector(".movie-poster");
  const title = document.querySelector(".movie-title");
  const details = document.querySelector(".movie-overview");
  poster.src = `${POSTER_PATH}${poster_path}`;
  poster.style.width = "300px";
  details.innerHTML = overview;
  title.innerHTML = original_title;
  scrollToTop();
};

const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const createImg = (src, width) => {
  const imgElement = document.createElement("img");
  imgElement.src = src ? `${POSTER_PATH}${src}` : DEFAULT_POSTER;
  imgElement.style.width = width;
  return imgElement;
};

// CREATE EVENT LISTENERS
document.getElementById("inputbox").addEventListener("keypress", search);

// INITIALIZE APP
const initApp = async () => {
  const trendingMovies = await getTrendingMovies();
  renderHomepage(trendingMovies);
};

initApp();
