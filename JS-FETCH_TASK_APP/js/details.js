import { BASE_URL } from "./data.js";

const clothesId = new URLSearchParams(window.location.search).get("id");
// console.log(clothesId);
window.addEventListener("DOMContentLoaded", function () {
  getData("products");
});

function getData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}/${clothesId}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    //   console.log(data);
      drawCard(data);
    })
    .catch((err) => {
     console.log(err);
     
    });
}
const productDiv = document.querySelector(".clothes");

function drawCard(product) {
    console.log(product);
    
  productDiv.innerHTML = `
         <div class="col-12 col-md-6">
           <div class="product-clothes">
             <div class="products-data my-5 m-auto ">
                <img src="${product.image}" alt="${product.title}"> 
                   <h3>${product.title}</h3>
                  <p>${product.description}</p>
                  <span class="product-price">${product.price}$</span>
                  <br>
                  <a href="./home.html">
                  <button class="btn btn-outline-primary">Go Back</button>
                </a>

             </div>
             </div>
    `;
}
