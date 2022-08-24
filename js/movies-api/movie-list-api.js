const resultContainer = document.querySelector(".movie-section");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const url =
  "https://movies-api-squareeyes.engelund.site/wp-json/wc/store/products";

const stopLoader = () => loader.classList.remove("loader");

async function getMoviesApi() {
  try {
    const response = await fetch(url);
    const movies = await response.json();
    stopLoader();
    movies.forEach(function (movies) {
      let movieRating = movies.attributes[0].terms[0].name;
      resultContainer.innerHTML += `<div class="movie-item">
                                        <a href="/movie.html?id=${movies.id}"><img class="movie-cover" src=${movies.images[0].src} alt="${movies.images[0].alt}"/></a>
                                        <div class="movie-rating">${movieRating}</div>
                                        <h3 class="movie-title">${movies.name}</h3>
                                        <a href="/movie.html?id=${movies.id}" class="cta cta_play-now"
                                        ><i class="fas fa-play"></i> Play Now</a>
                                    </div>`;
    });
  } catch (error) {
    stopLoader();
    resultContainer.innerHTML += `<div class="card error">An error has occured: ${error}</div>`;
    console.log(error);
  }
}
getMoviesApi();
