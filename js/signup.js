// variables
// form variables
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let userError = document.getElementById("username-error");
let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
let passwordLess = document.getElementById("password-less");
// eye variables
let eyeToggle = document.querySelector(".fa-eye");

// form validation if users insert an invalid or empty value that will show him error.
function showError() {
  //username
  if (username.value !== "") {
    userError.style.display = "none";
    username.style.outlineColor = "#d9d9d9";
  } else if (username.value == "") {
    userError.style.display = "block";
    username.style.outlineColor = "red";
  } else {
    userError.style.display = "none";
    username.style.outlineColor = "#d9d9d9";
  }

  //email
  if (email.value !== "") {
    emailError.style.display = "none";
    email.style.outlineColor = "#d9d9d9";
  } else {
    emailError.style.display = "block";
    email.style.outlineColor = "red";
  }

  //password
  if (password.value !== "") {
    passwordError.style.display = "none";
    password.style.outlineColor = "#d9d9d9";
  } else if (password.value == "") {
    passwordError.style.display = "block";
    password.style.outlineColor = "red";
  } else {
    passwordError.style.display = "none";
    password.style.outlineColor = "#d9d9d9";
  }
  if (password.value.length < 8) {
    password.style.outlineColor = "red";
    passwordLess.style.display = "block";
  }
  if (password.value.length > 8) {
    password.style.outlineColor = "#d9d9d9";
    passwordLess.style.display = "none";
  }
}
// blue outline when client focus on input
function userBlue() {
  username.style.outlineColor = "#0047ff";
}
function emailBlue() {
  email.style.outlineColor = "#0047ff";
}
function passwordBlue() {
  password.style.outlineColor = "#0047ff";
}
// end form validation code
// show and hide password when client click on the eye icon
function showHide() {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    eyeToggle.classList.remove("fa-eye");
    eyeToggle.classList.add("fa-eye-slash");
  } else {
    password.setAttribute("type", "password");
    eyeToggle.classList.remove("fa-eye-slash");
    eyeToggle.classList.add("fa-eye");
  }
}
// end show and hide password
