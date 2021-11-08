function getHeightOfContent() {
  let body = document.body;
  let html = document.documentElement;

  var height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  return height;
}

function addBackground() {
  let background = document.createElement("div");
  background.id = "popupBackground";
  background.style.height = getHeightOfContent() + "px";

  document.body.appendChild(background);
}

function addDiv() {
  let div = document.createElement("div");
  div.id = "popupDiv";
  document.body.appendChild(div);
}

function createPopup() {
  addBackground();
  addDiv();
}

window.onload = function () {
  let ratingButton = document.getElementById("ratingButton");
  let contactButton = document.getElementById("contactButton");

  ratingButton.addEventListener("click", createPopup);
  contactButton.addEventListener("click", createPopup);
};
