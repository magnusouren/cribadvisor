import { fetchData } from "./common.js";

function startImageSlideshow() {
  // Henter ut data fra js-fil ved hjelp av funksjon i common
  const data = fetchData();
  let slideshow = document.getElementById("imgSlide");

  createButton();

  let counter = 1;
  setInterval(() => {
    fadeOut(slideshow);
  }, 5000);

  // Kaller på funksjon til å bytte bilde hvert 5. sekund

  setTimeout(
    () =>
      setInterval(() => {
        swapImg(data[counter], slideshow);
        counter++;
        if (counter == data.length) {
          counter = 0;
        }
      }, 5000),
    800
  );
}

function swapImg(data, slideshow) {
  slideshow.src = data.images[0].src;
  fadeIn(slideshow);
}

function fadeIn(slideshow) {
  slideshow.style.opacity = 1;
}
function fadeOut(slideshow) {
  slideshow.style.opacity = 0.5;
}

function createButton() {
  let slideshow = document.getElementById("slideshow");
  let button = document.createElement("a");
  button.innerHTML = "Se Hybler";
  button.href = "hybler.html";
  button.className = "buttonHybler";
  slideshow.appendChild(button);
}

startImageSlideshow();
