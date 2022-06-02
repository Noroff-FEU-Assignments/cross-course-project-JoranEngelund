const form = document.querySelector(".loginForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");
const submit = document.querySelector("button");

let validForm = false;
const checkLength = (value, len) => {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
};

const emailValidator = (email) => {
  const regEx = /\S+@\S+\.\S+/;
  const pattern = regEx.test(email);
  return pattern;
};

function formValidator() {
  if (emailValidator(email.value) === true) {
    emailError.style.display = "none";
    validForm = true;
  } else {
    emailError.style.display = "block";
    validForm = false;
  }
  if (checkLength(password.value, 7) === true) {
    passwordError.style.display = "none";
    validForm = true;
  } else {
    passwordError.style.display = "block";
    validForm = false;
  }
}

email.addEventListener("keyup", formValidator);
password.addEventListener("keyup", formValidator);

function formSubmit(event) {
  event.preventDefault();
  if (validForm === true) {
    form.addEventListener("submit", formSubmit);
  }
  form.reset();
}
