import { createNewPopup, displayPopup } from './componentsPopup.js';
import { fetchData, slugifyText } from './common.js';
import { getDormFromUrl } from './hybel.js';
import { data } from '../data/data.js';

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
  hostNumber.innerText = '22 22 55 55';

  phone.appendChild(tlf);
  phone.appendChild(hostNumber);
  container.appendChild(phone);

  let email = document.createElement('div');
  email.className = 'pop-up-data';

  let epost = document.createElement('b');
  epost.innerText = 'Epost:';

  let hostEmail = document.createElement('span');
  hostEmail.innerText = 'herkommeren@mail.com';

  email.appendChild(epost);
  email.appendChild(hostEmail);
  container.appendChild(email);
}
function createRating(container, dorm) {
  container.innerHTML = 'Stars';
}

function createContent(container, dorm, button) {
  if (button == 'contact') {
    createContact(container, dorm);
  } else if ((button = 'rating')) {
    createRating(container, dorm);
  }
}

function createPopup(button) {
  if (document.body.contains(document.getElementById('popupDiv'))) {
    displayPopup();
    createContentOr404(button);
  } else {
    createNewPopup();
    createContentOr404(button);
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
