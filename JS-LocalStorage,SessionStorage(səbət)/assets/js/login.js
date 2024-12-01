import {User} from "./class.js"
import { setDataToLocalStorage, getDataFromLocalStorage } from "./helpers.js"

const loginForm = document.querySelector("form");
const emailAndUserName = document.querySelector("#username-email");
const userPassword = document.querySelector("#password");

const users = getDataFromLocalStorage("users") || [];

loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    let password = userPassword.value.trim();
    let emailUsername = emailAndUserName.value.trim();
    const existUser = users.find((user) => user.userPassword == password && (user.userEmail == emailUsername || user.userName == emailUsername));
    
    console.log(existUser);
    
    if(existUser) {
        existUser.isLogged = true;
        setDataToLocalStorage("users", users)
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Succesfully Logged In!",
        showConfirmButton: true,
        timer: 1500,
      }).then(() => {
        window.location.replace("home.html");
      })
    }
       else {
      window.alert("The information u entered is incorrect");
      }
    });
       function resetForm() {
         registerForm.reset();
     };