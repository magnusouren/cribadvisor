function getHeight() {
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
  background.style.height = getHeight() + "px";

  document.body.appendChild(background);
}

function addDiv() {
  let div = document.createElement("div");
  div.id = "popupDiv";
  document.body.appendChild(div);
}

function ratings() {
  addBackground();
  addDiv();
}

window.onload = function () {
  let buttons = document.getElementById("rating");
  buttons.addEventListener("click", ratings);
};
