const form = document.querySelector(".purchaseForm");
const firstName = document.querySelector("#firstname");
const surname = document.querySelector("#surname");
const date = document.querySelector("#date");
const creditCard = document.querySelector("#cc");
const creditVerificationCode = document.querySelector("#cvc");
const submit = document.querySelector("button");
const nameError = document.querySelector(".nameError");
const surnameError = document.querySelector(".surnameError");
const creditCardError = document.querySelector(".ccError");
const creditVerificationCodeError = document.querySelector(".cvcError");
const dateError = document.querySelector(".dateError");

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

let validForm = false;

function formValidator() {
  if (checkLength(firstName.value, 0) === true) {
    nameError.style.display = "none";
    validForm = true;
  } else {
    nameError.style.display = "block";
    validForm = false;
  }
  if (checkLength(surname.value, 0) === true) {
    surnameError.style.display = "none";
    validForm = true;
  } else {
    surnameError.style.display = "block";
    validForm = false;
  }
  if (checkLength(creditCard.value, 18) === true) {
    creditCardError.style.display = "none";
    validForm = true;
  } else {
    creditCardError.style.display = "block";
    validForm = false;
  }
  if (checkLength(date.value, 4) === true) {
    dateError.style.display = "none";
    validForm = true;
  } else {
    dateError.style.display = "block";
    validForm = false;
  }
  if (checkLength(creditVerificationCode.value, 2) === true) {
    creditVerificationCodeError.style.display = "none";
    validForm = true;
  } else {
    creditVerificationCodeError.style.display = "block";
    validForm = "false";
  }
}

firstName.addEventListener("keyup", formValidator);
surname.addEventListener("keyup", formValidator);
creditCard.addEventListener("keyup", formValidator);
date.addEventListener("keyup", formValidator);
creditVerificationCode.addEventListener("keyup", formValidator);

const formSubmit = (event) => {
  event.preventDefault();
  if (validForm === true) {
    form.addEventListener("submit", formSubmit);
  }
  form.reset();
};
