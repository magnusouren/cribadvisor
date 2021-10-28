const bilder = ["img1.jpg", "img2.jpg", "img3.jpg"];
const imgSlide = document.getElementById("imgSlide");

var i = 1;
function swapImg() {
  console.log(i);
  if (i == bilder.length) {
    i = 0;
  } else {
    imgSlide.src = "img/test/" + bilder[i];
  }
  i++;
}

setInterval(swapImg, 2000);
