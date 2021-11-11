import { slugifyText } from '../common.js';

/**
 * Funksjon som lager bilde av hybel
 *
 * @param {HTMLelement} container HTML element som får nytt innhold
 * @param {Image[]} images Bilder fra hybel i data.js
 */
export function createDormImage(container, images) {
  let img = document.createElement('img');
  img.src = images[0].src;
  img.alt = images[0].imageText;
  img.className = 'dorm-image';
  container.appendChild(img);
}

/**
 * Funksjon som lager navn på hybel
 *
 * @param {HTMLelement} container HTML element som får nytt innhold
 * @param {string} name Navn på hybel
 */
function createDormName(container, name) {
  let dormName = document.createElement('h2');
  dormName.innerHTML = name;
  container.appendChild(dormName);
}

/**
 * Funksjon som lager adresse tekst til hybel
 *
 * @param {HTMLelement} container HTML element som får nytt innhold
 * @param {string} address
 */
function createDormAddress(container, address) {
  let dormAddress = document.createElement('h3');
  dormAddress.innerHTML = address;
  container.appendChild(dormAddress);
}

/**
 * Lager liste med eventer til hybelen
 *
 * @param {HTMLelement} container HTML element som får nytt innhold
 * @param {string[]} events Array med events fra hybel i data.js
 */
function createEventList(container, events) {
  let eventListContainer = document.createElement('div');
  eventListContainer.className = 'event-list-container';
  let eventListHeader = document.createElement('p');
  eventListHeader.innerHTML = 'Tilbyr:';
  eventListContainer.appendChild(eventListHeader);

  let eventList = document.createElement('ul');
  for (let i = 0; i < events.length; i++) {
    let event = document.createElement('li');
    event.innerHTML = events[i];
    eventList.appendChild(event);
  }
  eventListContainer.appendChild(eventList);
  container.appendChild(eventListContainer);
}

/**
 * Funksjon som lager antall vurderinger tekst
 *
 * @param {HTMLElement} container HTML element som får nytt innhold
 * @param {Rating[]} ratings Liste med rating objekter fra hybel i data.js
 */
function createDormRatings(container, ratings) {
  let dormRatings = document.createElement('p');
  dormRatings.className = 'dorm-ratings';
  dormRatings.innerHTML = `${ratings.numberOfRatings} vurderinger`;
  container.appendChild(dormRatings);
}

/**
 * Funksjon som setter sammen alt av tekst-content til hybel
 *
 * @param {HTMLElement} container HTML element som får nytt innhold
 * @param {string} name Navn på hybel
 * @param {string} address Adresse på hybel
 * @param {string[]} events Array med events fra hybel i data.js
 * @param {Rating[]} ratings Liste med rating objekter fra hybel i data.js
 */
export function createDormTextContent(
  container,
  name,
  address,
  events,
  ratings
) {
  let textContentContainer = document.createElement('div');
  textContentContainer.className = 'text-content-container';

  createDormName(textContentContainer, name);
  createDormAddress(textContentContainer, address);
  createEventList(textContentContainer, events);
  createDormRatings(textContentContainer, ratings);

  container.appendChild(textContentContainer);
}

/**
 * Lager knapp som linker til hybel siden
 *
 * @param {HTMLElement} container HTML element som får nytt innhold
 * @param {string} dormName Navn på hybel
 */
export function createButton(container, dormName) {
  let linkButton = document.createElement('a');
  linkButton.className = 'dorm-link button';

  const slugifiedName = slugifyText(dormName);
  linkButton.innerHTML = 'Se Hybel';
  linkButton.href = `hybel.html?dormName=${slugifiedName}`;

  container.appendChild(linkButton);
}
