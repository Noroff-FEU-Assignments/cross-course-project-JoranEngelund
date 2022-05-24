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

const checkLength = (value, length) => {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
};

const formValidator = () => {
  if (checkLength(fullName.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (checkLength(phone.value, 7) === true) {
    telError.style.display = "none";
  } else {
    telError.style.display = "block";
  }
  if (checkLength(message.value, 9) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  if (emailValidator(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
};

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
  event.preventDefauly();
  form.reset();
};

form.addEventListener("submit", formSubmit);
