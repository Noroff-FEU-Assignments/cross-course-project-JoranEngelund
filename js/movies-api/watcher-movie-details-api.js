const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const movieUrl =
  "https://movies-api-squareeyes.engelund.site/wp-json/wc/store/products/" + id;

const movieProductContainer = document.querySelector(".movie-product");
const loader = document.querySelector(".loader");

const hiddenLoader = () => loader.classList.remove("loader");

async function getMovieDetails(movieUrl) {
  try {
    const response = await fetch(movieUrl);
    const details = await response.json();
    hiddenLoader();

    document.title = `Square Eyes | ${details.name}`;
    movieProductContainer.innerHTML += `<section class="movie-cover">
                                            <div>
                                                <img class="movie-image" src="${details.images[1].src}" alt="${details.images[1].alt}" />
                                            </div>
                                        </section>
                                        <section class="movie-info">
                                            <div>
                                                <h1 class="movie-product-title">${details.name}</h1>
                                            </div>
                                            <div class="movie-rating">
                                                ${details.attributes[0].terms[0].name}
                                            </div>
                                            <div class="movie-description">
                                                ${details.description}
                                            </div>
                                            <div class="pay-price">
                                                <div class="pay-per-view_container">
                                                    <a href="./purchase-page_movie_watcher.html?id=${details.id}" class="cta pay-per-view"
                                                    ><i class="far fa-credit-card"></i> Pay per view</a>
                                                </div>
                                                <h3 class="price">${details.prices.currency_prefix}${details.prices.currency_suffix}${details.prices.price}</h3>
                                            </div>
                                        </section>`;
  } catch (error) {
    hiddenLoader();
    movieProductContainer.innerHTML += `<div class="card error">An error has occured: ${error}</div>`;
    console.log(error);
  }
}

getMovieDetails(movieUrl);
