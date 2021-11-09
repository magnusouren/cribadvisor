import { createNewPopup, displayPopup } from './componentsPopup.js';
import { getDormFromUrl } from './hybel.js';

function createContentOr404(button) {
  const dorm = getDormFromUrl();
  let container = document.getElementById('popupContent');

  dorm ? createContent(container, dorm, button) : create404(container);
}
function createContact(container, dorm) {
  let header = document.createElement('h3');
  header.innerText = 'Kontakt:';
  container.appendChild(header);

  let phone = document.createElement('div');
  phone.className = 'pop-up-data';

  let tlf = document.createElement('b');
  tlf.innerText = 'Tlf:';

  let hostNumber = document.createElement('span');
  hostNumber.innerText = dorm.host.phone;

  phone.appendChild(tlf);
  phone.appendChild(hostNumber);
  container.appendChild(phone);

  let email = document.createElement('div');
  email.className = 'pop-up-data';

  let epost = document.createElement('b');
  epost.innerText = 'Epost:';

  let hostEmail = document.createElement('span');
  hostEmail.innerText = dorm.host.email;

  email.appendChild(epost);
  email.appendChild(hostEmail);
  container.appendChild(email);
}
function stars(parrent, type, count) {
  let rowOfStars = document.createElement('div');
  rowOfStars.className = 'row-of-stars';
  for (let i = 0; i < count; i++) {
    let starImg = document.createElement('img');
    starImg.className = 'rating-star';
    starImg.id = type + (i + 1);
    starImg.src = '/img/others/star.png';
    rowOfStars.appendChild(starImg);
  }
  parrent.appendChild(rowOfStars);
  mouseOverRating();
}
function createRating(container) {
  let header = document.createElement('h3');
  header.innerText = 'Gi vurdering:';

  let folka = document.createElement('div');
  folka.className = 'pop-up-data';
  folka.id = 'folka';
  let folkaTekst = document.createElement('b');
  folkaTekst.innerText = 'Folka:';
  folka.appendChild(folkaTekst);
  stars(folka, 'folka', 5);

  let utseende = document.createElement('div');
  utseende.className = 'pop-up-data';
  utseende.id = 'utseende';
  let utseendeTekst = document.createElement('b');
  utseendeTekst.innerText = 'Utseende:';
  utseende.appendChild(utseendeTekst);
  stars(utseende, 'utseende', 5);

  let beligenhet = document.createElement('div');
  beligenhet.className = 'pop-up-data';
  beligenhet.id = 'beligenhet';
  let beligenhetTekst = document.createElement('b');
  beligenhetTekst.innerText = 'Beligenhet:';
  beligenhet.appendChild(beligenhetTekst);
  stars(beligenhet, 'beligenhet', 5);

  let sendButton = document.createElement('button');
  sendButton.id = 'popup-button';
  sendButton.innerText = 'Send inn';

  container.appendChild(header);
  container.appendChild(folka);
  container.appendChild(utseende);
  container.appendChild(beligenhet);
  container.appendChild(sendButton);
}

function inputStars(score, type) {
  let divElement = document.getElementById(type);
  divElement.innerHTML = '';

  let description = document.createElement('b');
  description.innerText = type.charAt(0).toUpperCase() + type.slice(1) + ':';
  divElement.appendChild(description);
  stars(divElement, type, score);
}

function mouseOverRating() {
  document.querySelectorAll('.rating-star').forEach((star) => {
    star.addEventListener('click', (event) => {
      let starId = star.id;
      let score = starId.charAt(starId.length - 1);
      let type = starId.slice(0, -1);
      inputStars(score, type);
    });
  });
}
function sendRating(container) {
  container.innerHTML = '';

  let message = document.createElement('h3');
  message.innerText = 'Takk for din vurdering!';

  container.appendChild(message);
}
function buttonEvtListener(container) {
  let sendButton = document.getElementById('popup-button');

  sendButton.addEventListener('click', function () {
    sendRating(container);
  });
}
function createContent(container, dorm, buttonName) {
  if (buttonName === 'contact') {
    createContact(container, dorm);
  } else if (buttonName === 'rating') {
    createRating(container);
    mouseOverRating();
    buttonEvtListener(container);
  }
}

function createPopup(buttonName) {
  if (document.body.contains(document.getElementById('popupDiv'))) {
    displayPopup();
    createContentOr404(buttonName);
  } else {
    createNewPopup();
    createContentOr404(buttonName);
  }
}

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
