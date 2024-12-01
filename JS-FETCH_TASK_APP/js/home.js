import { BASE_URL } from "./data.js";

window.addEventListener("DOMContentLoaded", function() {
    getData("products")
});

function getData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      // console.log(data);
      drawCard(data);
    })
    .catch((error) => {
      
    });
}
const cardContainer = document.querySelector(".row");

function drawCard(array) {
  cardContainer.innerHTML = "";
  array.forEach((product) => {
    cardContainer.innerHTML += `
          <div class="col-12 col-md-6 col-lg-3 allcars">
           <div class="product-clothes">
             <div class="products-data my-5">
                  <img src="${product.image}"
                   <h3>${product.title}</h3>
                  <p>${product.description.slice(0, 25)}...</p>
                  <span class="product-price">${product.price}$</span>
                  <br>
                  <button class="btn btn-outline-danger delete" data-id=${
                    product.id
                  }>Delete</button>
                <a href="details.html"><button class="btn btn-outline-info details" data-id=${
                    product.id
                  }>Details</button></a>
                  <button class="btn btn-outline-warning edit " data-id=${
                    product.id
                  }>Edit</button>
             </div>
        `;
  });
}