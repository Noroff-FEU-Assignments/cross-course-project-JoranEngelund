import { movies } from "./data/productsDetail.js";

const search = document.querySelector("#search");
const movieProduct = document.querySelector(".movie-product");

function renderMovies(moviesToRender) {
  movieProduct.innerHTML = "";
  moviesToRender.forEach(function (movie) {
    movieProduct.innerHTML += `<section class="movie-cover">
                                    <div>
                                        <img class="movie-image" src="${movie.imgsrc}" alt=""/>
                                    </div>
                                </section>
                                <section class="movie-info">
                                    <div>
                                        <h1 class="movie-product-title">${movie.name}</h1>
                                    </div>
                                    <div class="movie-rating">
                                        <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                    <div>
                                        <p class="movie-description">${movie.description}</p>
                                    </div>
                                    <div class="pay-price">
                                        <div class="pay-per-view_container">
                                            <a href="${movie.location}" class="cta pay-per-view"
                                            ><i class="far fa-credit-card"></i> Pay per view</a>
                                        </div>
                                        <h3 class="price">$ ${movie.price}</h3>
                                    </div>
                                </section>`;
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

  renderMovies(filteredMovies);
};
