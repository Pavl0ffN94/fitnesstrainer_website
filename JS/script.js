const image = document.querySelectorAll(".slider .slider__line img");
const sliderLine = document.querySelector(".slider__line");
let count = 0;
let width = 0;

function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * image.length + "px";
  image.forEach((item) => {
    item.style.width = width + "px";
    item.style.heiht = "60%";
  });
}
window.addEventListener("resize", init);
init();
document.querySelector(".slider-next").addEventListener("click", function () {
  count++;
  if (count >= image.length) {
    count = 0;
  }
  rollSlider();
});
document.querySelector(".slider-prev").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = image.length - 1;
  }
  rollSlider();
});
function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}
