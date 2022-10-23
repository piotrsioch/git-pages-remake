const images = document.querySelectorAll(".img-slide");
let index = 0;

const pos = {
  index: 0,
};

const slider = function (images, pos) {
  if (pos.index !== images.length - 1) {
    images[pos.index].classList.remove("img-active");
    images[pos.index + 1].classList.add("img-active");
    pos.index++;
  } else if (pos.index === images.length - 1) {
    images[pos.index].classList.remove("img-active");
    pos.index = 0;
    images[pos.index].classList.add("img-active");
  }
};

setInterval(slider, 2000, images, pos);
