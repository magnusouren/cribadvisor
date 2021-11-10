import { createNewPopup, displayPopup } from './popupComponents.js';
import { getDormFromUrl } from '../common.js';

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

function createContentOr404(button) {
  const dorm = getDormFromUrl();
  let container = document.getElementById('popupContent');

  dorm ? createContent(container, dorm, button) : create404(container);
}

function createContact(container, dorm) {
  createHeader(container, 'Kontakt:');

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
    starImg.src = 'img/others/star.png';
    rowOfStars.appendChild(starImg);
  }

  parrent.appendChild(rowOfStars);
  mouseOverRating();
}

function createTextAndStars(container, text, amountStars, stars) {
  let div = document.createElement('div');
  div.className = 'pop-up-data';
  div.id = text;

  let textNode = document.createElement('b');
  textNode.innerText = text + ':';

  div.appendChild(textNode);

  stars(div, text, amountStars);

  container.appendChild(div);
}

function createButton(container) {
  let sendButton = document.createElement('button');
  sendButton.id = 'popup-button';
  sendButton.innerText = 'Send inn';

  container.appendChild(sendButton);
}

function createHeader(container, text) {
  let header = document.createElement('h3');
  header.innerText = text;

  container.appendChild(header);
}

function createRating(container) {
  createHeader(container, 'Gi vurdering');
  createTextAndStars(container, 'Folka', 5, stars);
  createTextAndStars(container, 'Utseende', 5, stars);
  createTextAndStars(container, 'Beligenhet', 5, stars);
  createButton(container);
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
  message.className = 'feedback-on-send';
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
