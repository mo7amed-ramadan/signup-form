// cookies variables
// let username = document.getElementById("username");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
let checklist = document.getElementById("checkbox");
let userValue = username.value;
let emailValue = email.value;
let passwordValue = password.value;
var expiryDate = new Date();
expiryDate.setMonth(expiryDate.getMonth() + 1);
// save cookies when client clicks on checkbox
checklist.addEventListener("click", function () {
  var userCookie = (document.cookie =
    "usernamecookie = " + username.value + "; expires = " + expiryDate);
  var emailCookie = (document.cookie =
    "useremailcookie = " + email.value + "; expires = " + expiryDate);
  var passwordCookie = (document.cookie =
    "userpasswordcookie = " + password.value + "; expires = " + expiryDate);
  console.log(userCookie);
  console.log(emailCookie);
  console.log(passwordCookie);
});
// end save cookies
