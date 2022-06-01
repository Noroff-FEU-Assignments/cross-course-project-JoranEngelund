import { movies } from "./data/products.js";

const search = document.querySelector("#search");
const movieSection = document.querySelector(".movie-section");

let moviesToRender = movies;

function renderTeams() {
  movieSection.innerHTML = "";
  moviesToRender.forEach(function (movie) {
    movieSection.innerHTML += `<div class="movie-item">
                                    <img class="movie-cover" src="${movie.imgsrc}" alt=""/>
                                    <h3 class="movie-title">${movie.name}</h3>
                                    <h4 class="movie-title">$${movie.price}</h4>
                                </div>`;
  });
}

search.onkeyup = function (event) {
  const searchValue = event.target.value.trim().toLowerCase();
  const filteredMovies = movies.filter(function (movie) {
    if (movie.name.toLowerCase().startsWith(searchValue)) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filteredMovies);

  moviesToRender = filteredMovies;
  renderTeams();
};
