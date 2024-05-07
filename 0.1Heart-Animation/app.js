const greyHeart = document.querySelector(".grey-heart");
const redHeart = document.querySelector(".red-heart");

greyHeart.addEventListener("click", () => {
  redHeart.classList.add("animation");
  greyHeart.classList.add("fill-color");
});

redHeart.addEventListener("click", () => {
  redHeart.classList.remove("animation");
  greyHeart.classList.remove("fill-color");
});
