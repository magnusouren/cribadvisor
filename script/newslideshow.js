import { fetchData } from "./common.js";

async function createListOfDorms() {
  const data = await fetchData();

  // for (let i = 0; i < data.length; i++) {
  //   swapImg(data[i]);
  //   //console.log(data.indexOf(data[i]));
  // }
  let counter = 0;
  setInterval(() => {
    console.log(counter);
    swapImg(data[counter]);
    counter++;
    if (counter == data.length) {
      counter = 0;
    }
  }, 5000);
}
createListOfDorms();
function swapImg(data) {
  let slideshow = document.getElementById("imgSlide");
  console.log(data.images[0].src);
  slideshow.src = data.images[0].src;
}
