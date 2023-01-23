document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);
  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form)
    if (error === 0) {
      let response = await fetch('sendmail.php'{
        method: 'POST',
        body: formData;
      });
      if(response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
      } else {
        alert('Ошибка')

      }

    } else {
      alert("Заполните обязательные поля!");
    }
  }
  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.removed("_error");
  }
});

//Скрипт карусели
const image = document.querySelectorAll(".slider .slider__line img");
const sliderLine = document.querySelector(".slider__line");
let count = 0;
let width = 0;

function init() {
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
