/**
 * Funksjon som regner ut og returnerer høyde på siden.
 * Henter ut ulike høyde-verdier og bruker den med høyeste verdi.
 * Noe forskjellig fra nettleser til nettleser hvordan disse oppfører seg.
 *
 * @return {number} Høyde på siden brukeren er på nå.
 */
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

/**
 * Lager et div-element og setter id for å senere kunne style.
 * Legger til div-elementet nederst i filen
 */
function addBackground() {
  let background = document.createElement('div');
  background.id = 'popupBackground';
  background.style.height = getHeightOfContent() + 'px';

  document.body.appendChild(background);
}

/**
 * Lager et div-element med id for å senere kunne styles og henvises til.
 * Legger til div-en nederst i filen.
 */
function addDiv() {
  let div = document.createElement('div');
  div.id = 'popupDiv';

  document.body.appendChild(div);
}

/**
 * Funksjon som henter ut HTML-element og legger til en a-tag med id.
 *
 * @param {HTMLElemet} popup HTML element som senere får nytt innhold.
 */
function addCross(popup) {
  let cross = document.createElement('a');
  cross.id = 'closePopup';

  popup.appendChild(cross);
}

/**
 * Funksjon som legger til en div med id som senere skal få innhold
 *
 * @param {HTMLElement} popup HTML element som senere får nytt innhold
 */
function addContent(popup) {
  let content = document.createElement('div');
  content.id = 'popupContent';

  popup.appendChild(content);
}

/**
 * Funksjon som finner og fjerner innholdet i div-elementet popupContent, og skjuler div-ene popup og background
 *
 * @param {HTMLElement} popup HTML element som blir satt til display: none
 * @param {HTMLElement} background HTML element som blir satt til display: none
 */
function exitPopup(popup, background) {
  let popupContent = document.getElementById('popupContent');

  popupContent.innerHTML = '';
  popup.style.display = 'none';
  background.style.display = 'none';
}

/**
 * Funksjon som lager en eventlistener som starter når cross blir trykket på
 *
 * @param {HTMLElement} cross HTML-element som skal få eventListener
 * @param {HTMLElement} popup HTML-element som skal tas med som parameter-verdi videre
 * @param {HTMLELement} background HTML-element som skal tas med som parameter-verdi
 */
function addEvtLstClosePopUp(cross, popup, background) {
  cross.addEventListener('click', function () {
    exitPopup(popup, background);
  });
}

/**
 * Finner HTML-elementene popupDiv og popupBackground og setter display: block
 */
export function displayPopup() {
  let popup = document.getElementById('popupDiv');
  let background = document.getElementById('popupBackground');

  popup.style.display = 'block';
  background.style.display = 'block';
}

/**
 *
 * Kaller opp funksjonene som lager popup-elementene og tar med disse elementene som parameterverider
 * inn i nye funkjsoner som legger til content og skaper eventlistener til å lukke popup
 */
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
