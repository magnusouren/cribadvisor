import { createNewPopup, displayPopup } from './popupComponents.js';
import { getDormFromUrl } from '../common.js';

/**
 * Definerer ratingButton og contactButton når siden lastes
 * Lager eventlisteners ved klikk på elementene som er blitt definert. Da starter funksjonene
 * createPopup med parameterverdi som string utifra hvilken type som blir trykket på
 */
window.onload = function () {
  let ratingButton = document.getElementById('ratingButton');
  let contactButton = document.getElementById('contactButton');

  ratingButton.addEventListener('click', function () {
    createPopup('rating');
  });

  contactButton.addEventListener('click', function () {
    createPopup('contact');
  });
};

/**
 *
 * @param {String} button String-element som tilsvarer typen
 */
function createContentOr404(button) {
  const dorm = getDormFromUrl();
  let container = document.getElementById('popupContent');

  dorm ? createContent(container, dorm, button) : create404(container);
}

/**
 * Funksjon som lager en overskrift og to linjer med innhold.
 * En som skriver ut TLF: + telefonnummer hentet fra dorm
 * En som skriver ut Epost: + epost hentet ut fra dorm
 *
 * Legger overskrift, og begge linjene til container
 *
 * @param {HTMLElement} container HTML-element som skal få innhold
 * @param {Dorm} dorm Object med data
 */
function createContact(container, dorm) {
  createHeader(container, 'Kontakt:');

  let phone = document.createElement('div');
  phone.className = 'pop-up-data';

  let tlf = document.createElement('b');
  tlf.innerText = 'Tlf:';

  let hostNumber = document.createElement('a');
  hostNumber.setAttribute('href', 'tel:' + dorm.host.phone);
  hostNumber.innerText = dorm.host.phone;

  phone.appendChild(tlf);
  phone.appendChild(hostNumber);
  container.appendChild(phone);

  let email = document.createElement('div');
  email.className = 'pop-up-data';

  let epost = document.createElement('b');
  epost.innerText = 'Epost:';

  let hostEmail = document.createElement('a');
  hostEmail.setAttribute('href', 'mailto:' + dorm.host.email);
  hostEmail.innerText = dorm.host.email;

  email.appendChild(epost);
  email.appendChild(hostEmail);
  container.appendChild(email);
}

/**
 * Lager div-element som skal få stjerner. Lager like mange stjerner som counter tilsier, og legger til i div.
 *
 * @param {HTMLElement} parrent
 * @param {String} type
 * @param {Number} count
 */

function createStars(parrent, type, count) {
  let rowOfStars = document.createElement('div');
  rowOfStars.className = 'row-of-stars';

  for (let i = 0; i < count; i++) {
    let starImg = document.createElement('img');
    starImg.className = 'rating-star';
    starImg.id = type + (i + 1);
    starImg.src = 'img/others/star.png';
    starImg.alt = 'Stjerne';
    rowOfStars.appendChild(starImg);
  }

  parrent.appendChild(rowOfStars);
  setStarEventListeners();
}

/**
 * Funksjon som lager div med tekst som er en kategori.
 * Kaller deretter på funksjon som legger til stjerner under denne teksten.
 *
 * @param {HTMLElement} container HTML-element som skal bli lagt til ny div
 * @param {String} text String som skrives ut og som går videre som parameterverdi
 * @param {Number} amountStars Number som tas med som parameterverdi til funksjon som lager stjerner
 */
function createTextAndStars(container, text, amountStars) {
  let starsContainer = document.createElement('div');
  starsContainer.className = 'pop-up-data';
  starsContainer.id = text;

  let textNode = document.createElement('b');
  textNode.innerText = text + ':';
  starsContainer.appendChild(textNode);

  container.appendChild(starsContainer);
  createStars(starsContainer, text, amountStars);
}

/**
 * Funksjon som lager en button med tekst og id og legger til i container
 * @param {HTMLElement} container HTML-element som skal få button
 */
function createButton(container) {
  let sendButton = document.createElement('button');
  sendButton.id = 'popup-button';
  sendButton.innerText = 'Send inn';

  container.appendChild(sendButton);
}

/**
 * Funksjon som lager overskrift i popup, teksten er parameterverdien text
 * @param {HTMLElement} container Html-element som skal få overskrift
 * @param {String} text String som skal bli overskrift
 */
function createHeader(container, text) {
  let header = document.createElement('h3');
  header.innerText = text;

  container.appendChild(header);
}

/**
 * Funksjon som kaller på createHeader, createTextAndStars 3 ganger med ulik tekst, og createButton
 * Funksjonenen som kalles opp legger til innhold i container.
 * @param {*} container
 */
function createRating(container) {
  createHeader(container, 'Gi vurdering');
  createTextAndStars(container, 'Folka', 5);
  createTextAndStars(container, 'Utseende', 5);
  createTextAndStars(container, 'Beligenhet', 5);
  createButton(container);
}

/**
 * Funksjon som fjerner innholdet i diven som har id som parameterverdien type.
 * Legger til overskrift med stor forbokstav i diven.
 * kjører createStars som legger til stjerner i diven.
 *
 * @param {Number} score
 * @param {String} type
 */
function inputStars(score, type) {
  let divElement = document.getElementById(type);
  divElement.innerHTML = '';

  let description = document.createElement('b');
  description.innerText = type.charAt(0).toUpperCase() + type.slice(1) + ':';
  divElement.appendChild(description);

  createStars(divElement, type, score);
}

/**
 * Funksjon som starter eventlistener for alle stjernene.
 * Henter ut tekst og nummer fra iden og bruker dette som parameterverdi inn i inputStars
 */
function setStarEventListeners() {
  document.querySelectorAll('.rating-star').forEach((star) => {
    star.addEventListener('click', (event) => {
      let starId = star.id;
      let score = starId.charAt(starId.length - 1);
      let type = starId.slice(0, -1);
      inputStars(score, type);
    });
  });
}

/**
 * Skriver ut melding i div-elementet container.
 * @param {HTMLElement} container
 */
function sendRating(container) {
  container.innerHTML = '';

  let message = document.createElement('h3');
  message.className = 'feedback-on-send';
  message.innerText = 'Takk for din vurdering!';

  container.appendChild(message);
}

/**
 * Lager eventlistener til knappen som skal sende inn vurderinger
 * @param {HTMLElement} container
 */
function buttonEvtListener(container) {
  let sendButton = document.getElementById('popup-button');

  sendButton.addEventListener('click', function () {
    sendRating(container);
  });
}

/**
 * Funksjon som kalles opp rette funkjoner utifra hvilken knapp som har blitt trykket på.
 * @param {HTMLElement} container HTML-element som brukes som parameterverdi
 * @param {Dorm} dorm Objekt med data som sendes som parameterverdi
 * @param {Strin} buttonName String med type knapp som har blitt trykket på
 */
function createContent(container, dorm, buttonName) {
  if (buttonName === 'contact') {
    createContact(container, dorm);
  } else if (buttonName === 'rating') {
    createRating(container);
    setStarEventListeners();
    buttonEvtListener(container);
  }
}

/**
 * Om popup finnes, men er skjult, kall på funksjon som viser popup, og kall på funksjon som lager innhold.
 * Om popup ikke finnes, lag popup og kall på funksjon som lager innhold
 * @param {*} buttonName
 */
function createPopup(buttonName) {
  if (document.body.contains(document.getElementById('popupDiv'))) {
    displayPopup();
    createContentOr404(buttonName);
  } else {
    createNewPopup();
    createContentOr404(buttonName);
  }
}
