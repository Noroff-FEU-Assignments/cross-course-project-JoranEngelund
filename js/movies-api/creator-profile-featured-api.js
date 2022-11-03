const resultContainer = document.querySelector(".featured-movies");
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
      resultContainer.innerHTML += `
        <div class="movie-item profile-movies">
          <a href="./movie_creator.html?id=${movies.id}"
            ><img
              class="movie-cover"
              src="${movies.images[0].src}" alt="${movies.images[0].alt}"
          /></a>
          <div class="movie-rating profile-movie-rating"> ${movies.attributes[0].terms[0].name}
          </div>
          <h3 class="movie-title profile-movie-title">${movies.name}</h3>
          <a
            href="./movie_creator.html?id=${movies.id}"
            class="cta cta_play-now profile_cta-play-now"
            ><i class="fas fa-play"></i> Play </a
          >
        </div>`;
    });
  } catch (error) {
    stopLoader();
    resultContainer.innerHTML += `<div class="card error">
                                          <p>An error has occured:</p>
                                          <p>Please return soon, while we resolve the issue. If you have any inqueries, do not hesitate to reach out on email:</p>
                                          <p>eyessquare@email.com</p>
                                          <p>Thanks</p>
                                        </div>`;
    console.log(error);
  }
}
getMoviesApi();
