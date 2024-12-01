const products = [
  {
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest.",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve.",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter.",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen.",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
];

function displayProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product, index) => {
    productList.innerHTML += `
        <div class="col-md-3 mb-4">
          <div class="card h-100">
            <img
              src="${product.image}"
              class="card-img-top"
              alt="${product.title}"
              style="height: 200px; object-fit: cover;"
            />
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">$${product.price}</p>
              <p class="card-text text-muted">${product.description}</p>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <button class="btn btn-primary btn-sm" onclick="showDetails(${index})">Details</button>
              <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Delete</button>
            </div>
          </div>
        </div>
      `;
  });
}

document.getElementById("productForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const price = parseFloat(document.getElementById("price").value);
  const description = document.getElementById("description").value;
  const imageInput = document.getElementById("image").value;

  const image = imageInput
    ? imageInput
    : "https://via.placeholder.com/200?text=No+Image";

  if (title && price && description) {
    products.push({ title, price, description, image });
    displayProducts();
  } else {
    alert("Zəhmət olmasa, bütün sahələri doldurun!");
  }

  e.target.reset();
});

function deleteProduct(index) {
  products.splice(index, 1);
  displayProducts();
}

function showDetails(index) {
  const product = products[index];
  alert(
    `Title: ${product.title}\nPrice: $${product.price}\nDescription: ${product.description}`
  );
}
displayProducts();