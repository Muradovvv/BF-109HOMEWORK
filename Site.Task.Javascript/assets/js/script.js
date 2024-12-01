import { BASE_URL } from "./constant.js";

const flowerCard = document.querySelector(".row");

async function getData() {
  let response = await axios.get(BASE_URL);
  console.log(response.data);
  drawCard(response.data);
}
getData();

function drawCard(array) {
  flowerCard.innerHTML = "";
  array.forEach((flower) => {
    flowerCard.innerHTML += `
       <div class="col-12 col-md-6 col-lg-4 allflowers>
          <div class="card align-center w-75">
  <img src="${flower.image}" class="card-img-top">
  <div class="card-body my-3">
    <h5 class="card-name text-center name">${flower.name}</h5>
    <p class="card-price text-center price"><i>${flower.price}</i></p>
    <a href="detail.html" class="btn btn-outline-primary detail" data-id=${flower.id}><i class="fa-solid fa-circle-info" style="color: #639be3;"></i></a>
     <button class="btn btn-outline-danger delete" data-id=${flower.id}><i class="fa-regular fa-trash-can" style="color: #f52439;"></i></button>
  </div>
  </div>
    </div>
       `;
  });

  const deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      deleteFlowers(id);
    });
  });
}

async function deleteFlowers(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  getData();
}
