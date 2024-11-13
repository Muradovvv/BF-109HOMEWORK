const container = document.createElement("div");
container.className = "container mt-2";

const largeBox = document.createElement("div");
largeBox.className =
  "bg-dark text-light d-flex justify-content-center align-items-center";
largeBox.style.height = "360px";
largeBox.textContent = "960p x 360px";
container.append(largeBox);

const plusIcon = document.createElement("div");
plusIcon.className = "text-success text-center my-4 fs-2";
plusIcon.textContent = "+";
container.append(plusIcon);

const row = document.createElement("div");
row.className = "row";

for (let i = 0; i < 3; i++) {
  const col = document.createElement("div");
  col.className = "col-md-4 text-center";

  const smallBox = document.createElement("div");
  smallBox.className =
    "bg-dark text-light d-flex justify-content-center align-items-center mb-3";
  smallBox.style.height = "180px";
  smallBox.textContent = "290 x 180px";
  col.append(smallBox);

  const subtitle = document.createElement("div");
  subtitle.className = "text-muted";
  subtitle.textContent = "Indonectetus facilis";
  col.append(subtitle);

  const description = document.createElement("div");
  description.className = "text-muted";
  description.textContent =
    "Nullam lacus dui, ipsum consequat lobortis non, euismod morbi penatibus dapibus urna.";
  col.append(description);

  const readMore = document.createElement("a");
  readMore.href = "javascript:void(0)";
  readMore.className = "text-warning text-decoration-none";
  readMore.textContent = "Read More >>";
  col.append(readMore);
  row.append(col);
}

container.append(row);
document.body.append(container);

const bootstrapCSS = document.createElement("link");
bootstrapCSS.rel = "stylesheet";
bootstrapCSS.href =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
document.head.append(bootstrapCSS);

const bootstrapJS = document.createElement("script");
bootstrapJS.src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
bootstrapJS.defer = true;
document.body.append(bootstrapJS);
