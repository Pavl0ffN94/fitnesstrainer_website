const image = document.querySelectorAll(".slider .slider__line img");
const sliderLine = document.querySelector(".slider__line");
let count = 0;
let width = 0;

function init() {
  console.log("resize");
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * image.length + "px";
  image.forEach((item) => {
    item.style.width = width + "px";
    item.style.heiht = "auto";
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
/* function swipe */
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

const logBlock = document.querySelector(".slider");

let x1 = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  x1 = firstTouch.clientX;
}

function handleTouchMove(event) {
  if (!x1) {
    return false;
  }
  let x2 = event.touches[0].clientX;
  let xDiff = x2 - x1;
  if (xDiff > 0) {
  } else {
    prev;
  }
}
