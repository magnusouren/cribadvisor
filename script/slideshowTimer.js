const bilder = ["img1.jpg", "img2.jpg", "img3.jpg"];
const imgSlide = document.getElementById("imgSlide");

var i = 1;
let x = 1;
function swapImg() {
  if (i == bilder.length) {
    i = 0;
  }
  imgSlide.src = "img/test/" + bilder[i];
  imgSlide.style.opacity = 1;
  i++;
}
function fadeOut() {
  imgSlide.style.opacity = 0.5;
}
function fadeInn() {
  imgSlide.style.opacity = 1;
}

setInterval(fadeOut, 5000);
setTimeout(() => setInterval(swapImg, 5000), 500);
//setTimeout(fadeInn, 2000);
