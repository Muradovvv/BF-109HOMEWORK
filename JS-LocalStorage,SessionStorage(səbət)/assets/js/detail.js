import { carsData } from "./data.js";
import { User } from "./class.js"
const carsDetails = document.querySelector(".cars-details");
const carId = new URLSearchParams(window.location.search).get("id");


const car = carsData.find((q) => q.id == carId);
  carsDetails.innerHTML = `
          <div class="col-12 col-md-6">
            <img src="${car.image}" class="w-100"/>
          </div>
          <div class="col-12 col-md-6">
            <h5>${car.name}</h5>
            <p>${car.type}</p>
            <p>${car.transmission}</p>
            <p>Fuel: ${car.fuel}</p>
            <p>Price: $ ${car.price}</p>
          </div>

          <a href="./home.html">
                    <button class="btn btn-primary go-back">Go Back</button>
          </a>
`;

const goBackBtn = document.querySelector(".go-back");
goBackBtn.addEventListener("click", function () {
  window.history.back();
});