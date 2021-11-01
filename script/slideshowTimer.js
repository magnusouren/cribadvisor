//Definerer hvilke bilder som skal brukes
const bilder = ["img1.jpg", "img2.jpg", "img3.jpg"];
const imgSlide = document.getElementById("imgSlide");

let i = 1;

//Funk som endrer bildekilde og endrer opacity til 1
function swapImg() {
  //Om indeks er utenfor range starter på nytt
  if (i == bilder.length) {
    i = 0;
  }
  //Bytter ut bile
  imgSlide.src = "img/test/" + bilder[i];
  imgSlide.style.opacity = 1;
  i++;
}

//Gir bildet opacity for å få overgang
function fadeOut() {
  imgSlide.style.opacity = 0.5;
}

window.onload = function () {
  //Kaller på funk hvert 5. sekund
  setInterval(fadeOut, 5000);
  //Venter i 5.8 sek, og kaller deretter på funk hvert 5 sek.
  setTimeout(() => setInterval(swapImg, 5000), 800);
};
