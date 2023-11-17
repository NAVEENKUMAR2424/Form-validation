const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const cpass = document.querySelector("#cpass");
const result = document.getElementById("result");
let success = true;

form.addEventListener("submit", (e) => {
  // validateinputs();

  if (success) {
    alert("Thanks for submitting");
    form.reset();
  } else {
    validateinputs();
  }
  e.preventDefault();
});

function validateuser() {
  const userVal = username.value.trim();
  if (userVal === "") {
    setError(username, "Username Required");
    success = false;
  } else {
    setSuccess(username);
    success=true;
    console.log("username",userVal);
  }
}

function validateEmail() {
  const emailVal = email.value.trim();
  if (emailVal === "") {
    setError(email, "Email Required");
    success = false;
  } else if (!validateEmailFormat(emailVal)) {
    setError(email, "Not an Email Format");
    success = false;
  } else {
    setSuccess(email);
    success=true;
    console.log("Email",emailVal);
  }
}

function validatepass() {
  const passVal = pass.value.trim();
  if (passVal === "") {
    setError(pass, "Password Required");
    success = false;
  } else if (passVal.length < 8) {
    setError(pass, "Password must be at least 8 characters");
    success = false;
  } else {
    setSuccess(pass);
    success=true;
    console.log("Password",passVal);
  }
}

function validatecpass() {
  const cpassVal = cpass.value.trim();
  const passVal = pass.value.trim();
  if (cpassVal === "") {
    setError(cpass, "Password Required");
    success = false;
  } else if (cpassVal === passVal) {
    setSuccess(cpass);
    success=true;
    console.log("Confirm Password",cpassVal);
  } else {
    setError(cpass, "Passwords do not match");
    success = false;
  }
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

const validateEmailFormat = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validateinputs() {
  validateuser();
  validateEmail();
  validatepass();
  validatecpass();
}
