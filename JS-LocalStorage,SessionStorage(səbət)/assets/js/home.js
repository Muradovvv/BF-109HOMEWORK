import { carsData } from "./data.js";

const carsCard = document.querySelector(".row");

function carsProduct(array) {
  carsCard.innerHTML = "";
  array.forEach((car) => { 
    carsCard.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3 allcars">
         <div class="product-cars">
         <div class="cars-data my-5">
         <h5 class="cars-name">${car.name}</h5>
         <p class="cars-type">${car.type}</p>
         <img src="${car.image}" class="images">
         </div>

         <div class="icons">
         
         <i class="fa-solid fa-gas-pump" style="color: #adb5c2;"></i><span>${car.fuel}
         </span>

           <i class="fa-solid fa-life-ring" style="color: #adb5c2;"></i><span>${car.transmission}
           </span>

           <i class="fa-solid fa-users" style="color: #adb5c2;"></i><span>${car.passengers}
           </span>
         </div>
         <div class="price px-2">
         <span>$${car.price.toFixed(2)}/<sub>day</sub>
         </span>

         <button class="btn btn-outline-warning basketbtn" data-id=${car.id}
         ><i class="fa-solid fa-cart-shopping" style="color: #FFD43B;"></i></button>

                              <a class="btn btn-outline-primary detailsbtn" href="./details.html?id=${car.id}"><i class="fa-solid fa-circle-info fa-sm"></i></a>
                     <button class="btn btn-outline-danger favoritesbtn" data-id=${car.id}><i class="fa-regular fa-heart"></i></button>


         </div>

        </div>
        </div>
        `;
  });
}


carsProduct(carsData);
