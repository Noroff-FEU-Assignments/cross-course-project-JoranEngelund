const form = document.querySelector(".contactForm");
const fullName = document.querySelector("#fullname");
const email = document.querySelector("#email");
const phone = document.querySelector("#tel");
const message = document.querySelector("#message");
const submit = document.querySelector("button");
const nameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const telError = document.querySelector(".telError");
const messageError = document.querySelector(".messageError");
const successMessage = document.querySelector(".successMessage");
const browseMoreCTA = document.querySelector(".browseMore");

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

let validForm = false;

function formValidator() {
  if (checkLength(fullName.value, 0) === true) {
    nameError.style.display = "none";
    validForm = true;
  } else {
    nameError.style.display = "block";
    validForm = false;
  }
  if (checkLength(phone.value, 7) === true) {
    telError.style.display = "none";
    validForm = true;
  } else {
    telError.style.display = "block";
    validForm = false;
  }
  if (checkLength(message.value, 9) === true) {
    messageError.style.display = "none";
    validForm = true;
  } else {
    messageError.style.display = "block";
    validForm = false;
  }
  if (emailValidator(email.value) === true) {
    emailError.style.display = "none";
    validForm = true;
  } else {
    emailError.style.display = "block";
    validForm = false;
  }
}

const emailValidator = (email) => {
  const regEx = /\S+@\S+\.\S+/;
  const pattern = regEx.test(email);
  return pattern;
};

fullName.addEventListener("keyup", formValidator);
phone.addEventListener("keyup", formValidator);
message.addEventListener("keyup", formValidator);
email.addEventListener("keyup", formValidator);

const formSubmit = (event) => {
  event.preventDefault();
  if (validForm === true) {
    successMessage.style.display = "block";
    browseMoreCTA.style.display = "block";
    successMessage.innerHTML =
      "Your message has been successfully sent to us! We'll respond to you as fast as possible";
  } else {
    successMessage.innerHTML = "";
  }
  form.reset();
};

form.addEventListener("submit", formSubmit);
