let items = document.querySelectorAll(".item");
let item_x = document.querySelector(".item-x");
let nav = document.getElementById("nav");
document.addEventListener("scroll", (event) => {
  // if (window.scrollY > 500) {
  //   nav.classList.add("tofixed");
  // } else {
  //   nav.classList.remove("tofixed");
  // }
  items.forEach((item) => {
    if (item.offsetTop - window.scrollY < 350) {
      item.classList.add("active");
    }
  });
});

document.addEventListener("scroll", (e) => {
  if (item_x.offsetTop - window.scrollY < 450) {
    item_x.classList.add("active");
  }
});

const parentContainer = document.querySelector(".read-more-container");

parentContainer.addEventListener("click", (event) => {
  const current = event.target;

  const isReadMoreBtn = current.className.includes("read-more-btn");

  if (!isReadMoreBtn) return;

  const currentText = event.target.parentNode.querySelector(".read-more-text");

  currentText.classList.toggle("read-more-text--show");

  current.textContent = current.textContent.includes("Đọc thêm")
    ? "Thu gọn..."
    : "Đọc thêm...";
});
