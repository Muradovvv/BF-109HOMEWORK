import { BASE_URL } from "./constant.js";

const blogCard = document.querySelector(".row");

let products = null;
async function getData(){
    const res = await axios.get(`${BASE_URL}`);
    products = res.data
    drawCard(res.data)
    
}
getData()

function drawCard(blogs){
    blogCard.innerHTML ="";
    blogs.forEach((blog) => {
        blogCard.innerHTML += `
         <div class="col-12 col-md-6 col-lg-4 allblogs">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="blog-title">${blog.title}</h5>
                          <p class="blog-body">${blog.body}</p>
                          <p class="blog-author">${blog.author}</p>
                          <a href="details.html?id=${blog.id}" class="btn btn-primary details">Read More</a>
                          <button class="btn btn-danger delete" data-id=${blog.id}>Delete</button>
                          <a href="edit.html" class="btn btn-warning edit" data-id=${blog.id}>Edit</a>
                        </div>
                    </div>
                </div>
        `;
    });

    const deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", function(){
            const id = this.getAttribute("data-id");
            deleteBlogs(id)
        });
    });

    const detailBtns = document.querySelectorAll(".details");
}

async function deleteBlogs(id){
    await axios.delete(`${BASE_URL}/${id}`)
    getData()
} 

const searchInput = document.querySelector(".search-bar");
searchInput.addEventListener("input", function (event) {
  const filteredProducts = products.filter((b) =>
    b.title.toLowerCase().includes(event.target.value.toLowerCase().trim())
  );
  drawCard(filteredProducts);
});