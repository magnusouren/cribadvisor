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
  let background = document.createElement('div');
  background.id = 'popupBackground';
  background.style.height = getHeightOfContent() + 'px';

  document.body.appendChild(background);
}

function addDiv() {
  let div = document.createElement('div');
  div.id = 'popupDiv';

  document.body.appendChild(div);
}

function addCross(popup) {
  let cross = document.createElement('a');
  cross.id = 'closePopup';

  popup.appendChild(cross);
}
function addContent(popup) {
  let content = document.createElement('div');
  content.id = 'popupContent'; // Henvis til denne ID-en for å legge til innhold

  popup.appendChild(content);
}

function exitPopup(popup, background) {
  let content = document.getElementById('popupContent');

  content.innerHTML = '';
  popup.style.display = 'none';
  background.style.display = 'none';
}

function addEvtLstClosePopUp(cross, popup, background) {
  cross.addEventListener('click', function () {
    exitPopup(popup, background);
  });
}

function displayPopup() {
  let popup = document.getElementById('popupDiv');
  let background = document.getElementById('popupBackground');

  popup.style.display = 'block';
  background.style.display = 'block';
}

function createPopup() {
  if (document.body.contains(document.getElementById('popupDiv'))) {
    displayPopup();
  } else {
    addBackground();
    let background = document.getElementById('popupBackground');

    addDiv();
    let popup = document.getElementById('popupDiv');

    addCross(popup);
    let cross = document.getElementById('closePopup');

    addContent(popup);
    addEvtLstClosePopUp(cross, popup, background);
  }
}

window.onload = function () {
  let ratingButton = document.getElementById('ratingButton');
  let contactButton = document.getElementById('contactButton');

  ratingButton.addEventListener('click', createPopup);
  contactButton.addEventListener('click', createPopup);
};
