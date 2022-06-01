import { products } from "./data/products.js";

console.log(products);

const movieSection = document.querySelector(".movie-section");
const movieItem = document.querySelector(".movie-item");

for (let i = 0; i < products.length; i++) {
  const movieTitle = products[i].name;
  const movieDescription = products[i].description;
  const movieId = products[i].id;
  const moviePrice = products[i].price;
  const moviePoster = products[i].imgsrc;
  const movieRating = products[i].rating;
  console.log(movieTitle);
  console.log(movieDescription);
  console.log(movieId);
  console.log(moviePrice);
  console.log(moviePoster);

  movieSection.innerHTML += `<div class="movie-item">
                                <a href="movie.html?id=${movieId}"> <img class="movie-cover" src="${moviePoster}" /></a>
                                <h3 class="movie-title">${movieTitle}</h3>
                                <a href="movie.html?id=${movieId}" class="cta cta_play-now"><i class="fas fa-play"></i> Play Now</a>
                            </div>`;
}
