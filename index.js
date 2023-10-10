const hamburger = document.querySelector(".fa-bars");
const show = document.querySelector("ul");
const close = document.querySelector(".fa-solid");

const opener = function () {
  show.classList.remove("hidden");
  hamburger.classList.add("hidden");
  hamburger.classList.remove("fa-bars");
  hamburger.classList.remove("fa-solid");
  close.classList.remove("hidden");
  close.classList.add("fa-xmark");
  close.classList.add("fa-solid");
  console.log("opener");
};

hamburger.addEventListener("click", opener);
close.addEventListener("click", function () {
  console.log("close");
});
