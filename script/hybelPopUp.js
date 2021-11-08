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

function addCross() {
  let div = document.getElementById('popupDiv');

  let cross = document.createElement('a');
  cross.id = 'closePopup';

  div.appendChild(cross);
}
function exitPopup() {
  let popup = document.getElementById('popupDiv');
  let background = document.getElementById('popupBackground');

  popup.style.display = 'none';
  background.style.display = 'none';
}

function addEvtLstClosePopUp() {
  let cross = document.getElementById('closePopup');
  cross.addEventListener('click', exitPopup);
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
    addDiv();
    addCross();
    addEvtLstClosePopUp();
  }
}

window.onload = function () {
  let ratingButton = document.getElementById('ratingButton');
  let contactButton = document.getElementById('contactButton');

  ratingButton.addEventListener('click', createPopup);
  contactButton.addEventListener('click', createPopup);
};
