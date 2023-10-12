const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector("#close");
const menu = document.querySelector("nav ul");

bars.addEventListener("click", function () {
  bars.style.display = "none";
  xmark.style.display = "block";
  menu.style.display = "flex";
});

xmark.addEventListener("click", function () {
  xmark.style.display = "none";
  bars.style.display = "block";
  menu.style.display = "none";
});
