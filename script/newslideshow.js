import { fetchData } from "./common.js";

//Henter ut data fra json-fil ved hjelp av funksjon i common
async function getData() {
  const data = await fetchData();

  //Kaller på funksjon til å bytte bilde hvert 5. sekund
  let counter = 1;
  setTimeout(
    () =>
      setInterval(() => {
        console.log(counter);
        swapImg(data[counter]);
        counter++;
        if (counter == data.length) {
          counter = 0;
        }
      }, 5000),
    800
  );
}

function swapImg(data) {
  let slideshow = document.getElementById("imgSlide");

  slideshow.src = data.images[0].src;
  fadeInn();
}

function fadeInn() {
  let slideshow = document.getElementById("imgSlide");
  slideshow.style.opacity = 1;
}
function fadeOut() {
  let slideshow = document.getElementById("imgSlide");
  slideshow.style.opacity = 0.5;
}

getData();

setInterval(fadeOut, 5000);
