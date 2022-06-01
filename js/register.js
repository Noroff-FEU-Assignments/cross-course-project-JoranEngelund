const form = document.querySelector(".registerForm");
const title = document.querySelector(".create_title");
const firstName = document.querySelector("#firstname");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#password2");
const nameError = document.querySelector(".nameError");
const surnameError = document.querySelector(".surnameError");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");
const repeatPasswordError = document.querySelector(".repeatPasswordError");
const submit = document.querySelector("button");
const logInButton = document.querySelector(".afterRegisterCta");
const successMessage = document.querySelector(".successMessage");

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
  if (checkLength(repeatPassword.value, 7) === true) {
    repeatPasswordError.style.display = "none";
    validForm = true;
  } else {
    repeatPasswordError.style.display = "block";
    validForm = false;
  }
}

firstName.addEventListener("keyup", formValidator);
surname.addEventListener("keyup", formValidator);
email.addEventListener("keyup", formValidator);
password.addEventListener("keyup", formValidator);
repeatPassword.addEventListener("keyup", formValidator);

const formSubmit = (event) => {
  event.preventDefault();
  if (validForm === true) {
    successMessage.style.display = "block";
    successMessage.innerHTML =
      "Your account has been successfully created! Enter the site to watch movies";
    logInButton.style.display = "block";
    form.style.display = "none";
    title.innerHTML = "Account Created!";
  } else {
    sucessMessage.innerHTML = "";
    logInButton.style.display = "none";
  }
  form.reset();
};

form.addEventListener("submit", formSubmit);
