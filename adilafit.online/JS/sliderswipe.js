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
    next();
  } else {
    prev();
  }
}
