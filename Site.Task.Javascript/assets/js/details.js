import { BASE_URL } from "./constant.js";

async function getData() {
  const flowerId = new URLSearchParams(window.location.search).get("id");
  // const response = await axios.get(BASE_URL);
  // console.log(response.data);
  // renderDetail(response.data)
  try {
    const response = await axios.get(`${BASE_URL}/${flowerId}`);
    // console.log(response.data);
    renderDetail(response.data);
  } catch (error) {
    console.log(error);
  }
}
getData();

function renderDetail(data) {
  const flowerDetails = document.querySelector(".flowers-details");
  flowerDetails.innerHTML = `
       <div class="col-12 col-md-6">
            <img src="${data.image}"/>
          </div>
          <div class="col-12 col-md-6">
            <h5 class="text1-center">${data.name}</h5>
            <p>Price: ${data.price}</p>
          </div>
          <button class="btn  go-back w-25">Go Back</button>
    `;
  const goBackBtn = document.querySelector(".go-back");
  goBackBtn.addEventListener("click", function () {
    window.history.back();
  });
}
