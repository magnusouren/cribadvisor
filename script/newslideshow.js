import { fetchData } from "./common.js";

async function getData() {
  const data = await fetchData();

  let counter = 0;
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
getData();
function swapImg(data) {
  let slideshow = document.getElementById("imgSlide");
  console.log(data.images[0].src);
  slideshow.src = data.images[0].src;
  imgSlide.style.opacity = 1;
}
function fadeOut() {
  imgSlide.style.opacity = 0.5;
}
setInterval(fadeOut, 5000);
