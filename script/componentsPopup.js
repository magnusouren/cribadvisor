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
  content.id = 'popupContent';

  popup.appendChild(content);
}

function exitPopup(popup, background) {
  let popupContent = document.getElementById('popupContent');

  popupContent.innerHTML = '';
  popup.style.display = 'none';
  background.style.display = 'none';
}

function addEvtLstClosePopUp(cross, popup, background) {
  cross.addEventListener('click', function () {
    exitPopup(popup, background);
  });
}

export function displayPopup() {
  let popup = document.getElementById('popupDiv');
  let background = document.getElementById('popupBackground');

  popup.style.display = 'block';
  background.style.display = 'block';
}

export function createNewPopup() {
  addBackground();
  let background = document.getElementById('popupBackground');

  addDiv();
  let popup = document.getElementById('popupDiv');

  addCross(popup);
  let cross = document.getElementById('closePopup');

  addContent(popup);
  addEvtLstClosePopUp(cross, popup, background);
}
