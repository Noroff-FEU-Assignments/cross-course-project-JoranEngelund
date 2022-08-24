const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const movieUrl =
  "https://movies-api-squareeyes.engelund.site/wp-json/wc/store/products/" + id;

const movieProductContainer = document.querySelector(".create_account-page");
const backBtnContainer = document.querySelector(".back");
const loader = document.querySelector(".loader");

const stopLoader = () => loader.classList.remove("loader");

async function getMovieDetails(movieUrl) {
  try {
    const response = await fetch(movieUrl);
    const details = await response.json();
    stopLoader();

    document.title = `Square Eyes | ${details.name}`;
    backBtnContainer.innerHTML += `
        <div>
          <a href="./movie_watcher.html?id=${details.id}" class="back_btn"
            ><i class="fas fa-arrow-left"></i
          ></a>
        </div>`;
    movieProductContainer.innerHTML += `
    <img src="${details.images[2].src}" alt="${details.images[2].alt}" />
    <h2 class="purchase-title">${details.name}</h2>
    <h3 class="purchase-price">${details.prices.currency_prefix}${details.prices.currency_suffix}${details.prices.price}</h3>
    <h1 class="create_title purchase-info">Purchase Info</h1>
    <form
          method="get"
          action="./purchase-successful-m.html${details.id}"
          class="form_input purchaseForm"
        >
          <div class="form_input_type">
            <label for="firstname"><i class="fas fa-user"></i></label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Name *"
              class="form_input_field"
              required
            />
          </div>
          <div class="contactFormError nameError">
            First name needs at least 1 character
          </div>
          <div class="form_input_type">
            <label for="surname"><i class="fas fa-user"></i></label>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Surname *"
              class="form_input_field"
              required
            />
          </div>
          <div class="contactFormError surnameError">
            Surname needs at least 1 character
          </div>
          <div class="form_input_type">
            <label for="cc"><i class="far fa-credit-card"></i></label>
            <input
              type="tel"
              inputmode="numeric"
              name="cc"
              id="cc"
              autocomplete="cc-number"
              maxlength="19"
              placeholder="**** **** **** ****"
              pattern="[0-9]+"
              class="form_input_field"
              required
            />
          </div>
          <div class="contactFormError ccError">
            Credit Card needs at least 19 digits
          </div>
          <div class="form_input_type">
            <label for="date"><i class="fas fa-calendar-day"></i></label>
            <input
              type="tel"
              name="date"
              id="date"
              autocomplete="cc-exp"
              placeholder="MM/YY *"
              class="form_input_field"
              required
              maxlength="5"
              pattern="[0-9]+"
            />
          </div>
          <div class="contactFormError dateError">
            Expiry date needs 5 digits
          </div>
          <div class="form_input_type">
            <label for="cvc"><i class="far fa-credit-card"></i></label>
            <input
              type="tel"
              name="cvc"
              id="cvc"
              placeholder="CVC *"
              class="form_input_field"
              pattern="[0-9]+"
              required
              maxlength="3"
            />
          </div>
          <div class="contactFormError cvcError">CVC needs 3 digits</div>
          <div>
            <div class="login-btn">
              <button type="submit" class="cta cta-create_account-medium">
                <i class="far fa-credit-card"></i> Buy Now
              </button>
            </div>
            <div class="login-btn">
              <a href="./movie_watcher.html?id=${details.id}" class="cta cta-create_account-small"
                ><i class="fas fa-times"></i> Cancel</a
              >
            </div>
          </div>
        </form>`;
  } catch (error) {
    stopLoader();
    movieProductContainer.innerHTML += `<div class="card error">An error has occured: ${error}</div>`;
  }
}

getMovieDetails(movieUrl);
