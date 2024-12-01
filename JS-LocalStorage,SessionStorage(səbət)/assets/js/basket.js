import {
    getDataFromLocalStorage,
    setDataToLocalStorage,
  } from "./helpers.js";
  
  import { products } from "./data.js";

  const tBody = document.querySelector("tbody");
  const clearAll = document.querySelector(".clear-all");

  const users = getDataFromLocalStorage("users") || [];

  function renderDraw(array){
    tBody.innerHTML="";
    array.forEach((item)=>{
        tBody.innerHTML+=`
        <tr>
           <td>${item.id}</td>
           <td><img src="${item.image}"</td>
           <td>${item.title}</td>
           <td>${item.price}</td>
           <td><button class="btn btn-outline-danger delete">Delete</button></td>
         </tr>
        `
    })
  }