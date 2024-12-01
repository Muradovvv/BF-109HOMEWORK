import { User } from "./class.js";
import { setDataToLocalStorage, getDataFromLocalStorage } from "./helpers.js"

const registerForm = document.querySelector("form");
const userNameInput = document.querySelector("#username");
const userEmailInput = document.querySelector("#email");
const userPasswordInput = document.querySelector("#reg-password");

const users = getDataFromLocalStorage("users") || [];

registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let userName = userNameInput.value.trim();
    let userEmail = userEmailInput.value.trim();
    let userPassword = userPasswordInput.value.trim();

    const newUser = {userName, userEmail, userPassword};
    const bool = users.some(
        (user) => user.email === email || user.userName === userName
      );

  if (!bool) {
    users.push(newUser);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Succesfully Signed Up!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.replace("login.html");
    });
    setDataToLocalStorage("users", users);
    resetForm();
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Already a user about the information u entered!",
      showConfirmButton: false,
      timer: 1500,

    });
  }
});
function resetForm() {
    registerForm.reset();
  }