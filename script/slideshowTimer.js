const bilder = ["img1.jpg", "img2.jpg", "img3.jpg"];
const imgSlide = document.getElementById("imgSlide");

function swapImg(i) {
  imgSlide.src = "img/test/" + bilder[i];
}

swapImg(1);
