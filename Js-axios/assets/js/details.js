import { BASE_URL } from "./constant.js";

async function getData(){
    const bId = new URLSearchParams(window.location.search).get("id");
    try{
         const response = await axios.get(`${BASE_URL}/${bId}`);
    console.log(response.data);
    renderDetail(response.data)
    }catch(error) {
     console.log(error);
    }
    
  
       
}
getData()

function renderDetail(data) {
    const blogDetails = document.querySelector(".blog-details");
    blogDetails.innerHTML = `
       <h3>${data.title}</h3> 
       <p>${data.body}</p>
       <span>${data.author}</span> 
       <button class="btn btn-primary go-back w-25">Go Back</button>
    `;

    const goBackBtn = document.querySelector(".go-back");
    goBackBtn.addEventListener("click", function() {
        window.history.back()
    });
    
}