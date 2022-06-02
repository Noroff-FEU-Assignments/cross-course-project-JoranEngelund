import { movies } from "../data/products.js";

const search = document.querySelector("#search");
const movieSection = document.querySelector(".movie-section");

function renderTeams(moviesToRender) {
  movieSection.innerHTML = "";
  moviesToRender.forEach(function (movie) {
    movieSection.innerHTML += `<div class="movie-item">
                                    <a href="${movie.location}"><img class="movie-cover" src="${movie.imgsrc}" alt=""/></a>
                                    <div class="movie-rating">
                                        <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                        </div>
                                    <h3 class="movie-title">${movie.name}</h3>
                                    <a href="${movie.location}" class="cta cta_play-now"
                                    ><i class="fas fa-play"></i> Play Now</a>
                                </div>`;
  });
}

search.onkeyup = function (event) {
  const searchValue = event.target.value.trim().toLowerCase();
  if (searchValue === "") {
    return renderTeams(movies);
  }
  const filteredMovies = movies.filter(function (movie) {
    if (movie.name.toLowerCase().startsWith(searchValue)) {
      return true;
    } else {
      return false;
    }
  });

  renderTeams(filteredMovies);
};
