import { slideshow } from './hybelSlideshow.js';

/**
 * Funksjon som setter navn på hybelen
 *
 * @param {HTMLElement} container HTML element som får nytt innhold
 * @param {string} name Navn på hybel
 */
export function createDormName(container, name) {
  let dormName = document.getElementById('top-text');
  dormName.innerHTML = name;
}

/**
 * Funksjon som lager en tekst med antall ratinger til hybelen
 *
 * @param {HTMLelement} container HTML element som får nytt innhold
 * @param {Rating[]} ratings Ratings array fra hybel i data.js
 */
export function createDormRatings(container, ratings) {
  let dormRatings = document.createElement('p');
  dormRatings.className = 'dorm-ratings';
  dormRatings.innerHTML = `${ratings.numberOfRatings} vurderinger`;
  container.appendChild(dormRatings);
}

/**
 * Funksjon som lager slideshow container og setter
 * det første bilde til hybelen
 *
 * @param {HTMLelement} container HTML element som får nytt innhold
 * @param {Image[]} images Bilde array fra hybel i data.js
 */
export function createDormImage(container, images) {
  let slideDiv = document.createElement('div');
  slideDiv.id = 'dorm-slideshow';

  let img = document.createElement('img');
  img.src = images[0].src;
  img.alt = images[0].imageText;
  img.className = 'dorm-image';
  img.id = 'slideshow-image';

  slideDiv.appendChild(img);
  container.appendChild(slideDiv);
}

/**
 * Funksjon som lager ui til slideshow
 *
 * @param {Image[]} images Bilde array fra hybel i data.js
 */
export function createSlideshow(images) {
  let slideDiv = document.getElementById('dorm-slideshow');

  let caption = document.createElement('div');
  caption.id = 'slideCaption';
  caption.innerText = images[0].imageText;

  let nextImg = document.createElement('div');
  nextImg.className = 'slideArrow';
  nextImg.id = 'nextImg';
  nextImg.addEventListener('click', () => slideshow(images, 1));
  nextImg.innerText = '\u2192'; // Unicode for pil til høyre

  let prevImg = document.createElement('div');
  prevImg.className = 'slideArrow';
  prevImg.id = 'prevImg';
  prevImg.addEventListener('click', () => slideshow(images, -1));
  prevImg.innerText = '\u2190'; // Unicode for pil til venstre

  slideDiv.appendChild(caption);
  slideDiv.appendChild(nextImg);
  slideDiv.appendChild(prevImg);
}

/**
 * Funksjon som lager innhold om host av hybel
 *
 * @param {HTMLelement} container HTML element som får nytt innhold
 * @param {Host} host host objekt fra hybel i data.js
 */
export function createHostSection(container, host) {
  let hostContainer = document.createElement('div'); // Container til innholdet
  hostContainer.className = 'host-container';

  // Lager bilde av hosten
  let hostImage = document.createElement('img');
  hostImage.src = host.image;
  hostImage.alt = host.name;
  hostContainer.appendChild(hostImage);

  // Lager navnet til hosten
  let hostName = document.createElement('h2');
  hostName.innerHTML = host.name;
  hostContainer.appendChild(hostName);

  // Lager om-tekst av hosten
  let aboutHostText = document.createElement('p');
  aboutHostText.innerHTML = host.about;
  hostContainer.appendChild(aboutHostText);

  // Lager container til knapper
  let buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'buttons-container';

  // Lager kontakt knapp
  let contactButton = document.createElement('button');
  contactButton.innerHTML = 'Kontakt';
  contactButton.id = 'contactButton';
  buttonsContainer.appendChild(contactButton);

  // Lager ratings knapp
  let giveRatingButton = document.createElement('button');
  giveRatingButton.innerHTML = 'Gi vurdering';
  giveRatingButton.id = 'ratingButton';
  buttonsContainer.appendChild(giveRatingButton);

  hostContainer.appendChild(buttonsContainer);

  // Lager divider
  let divider = document.createElement('hr');
  hostContainer.appendChild(divider);

  // Putter alt det nye innholdet inn i containeren til siden
  container.appendChild(hostContainer);
}

/**
 * Funksjon som lager om-hybel seksjon
 *
 * @param {HTMLElement} container HTML element som får nytt innhold
 * @param {Dorm} dorm Hybel objekt fra data.js
 */
export function createAboutSection(container, dorm) {
  // Henter relevant data fra dorm objektet
  const { address, capasity, events, ratings } = dorm;
  let aboutSectionContainer = document.createElement('div');
  aboutSectionContainer.className = 'about-container';

  // Lager Om hybelen overskrift
  let aboutHeading = document.createElement('h2');
  aboutHeading.innerHTML = 'Om hybelen';
  aboutSectionContainer.appendChild(aboutHeading);

  // Lager adresse tekst
  let addressElement = document.createElement('p');
  let addressText = document.createElement('b');
  addressText.innerHTML = 'Adresse: ';
  addressElement.appendChild(addressText);
  addressElement.innerHTML += address;
  aboutSectionContainer.appendChild(addressElement);

  // Lager Plass til tekst
  let capasityElement = document.createElement('p');
  let capasityText = document.createElement('b');
  capasityText.innerHTML = 'Plass til: ';
  capasityElement.appendChild(capasityText);
  capasityElement.innerHTML += capasity;
  aboutSectionContainer.appendChild(capasityElement);

  // Lager en liste som viser hvilke events hybelen har
  let eventList = document.createElement('ul');
  for (let i = 0; i < events.length; i++) {
    let event = document.createElement('li');
    event.innerHTML = events[i];
    eventList.appendChild(event);
  }

  // Lager tekst som står over eventList
  let eventsElement = document.createElement('p');
  let eventsText = document.createElement('b');
  eventsText.innerHTML = 'Tilbyr: ';
  eventsElement.appendChild(eventsText);
  eventsElement.appendChild(eventList);
  aboutSectionContainer.appendChild(eventsElement);

  // Putter innholdet inn i container til siden
  container.appendChild(aboutSectionContainer);
}

/**
 * Funksjon som lager ratings innhold til hver type rating
 *
 * @param {HTMLelement} ratingsContainer HTML element som får nytt innhold
 * @param {string} name Navn på rating typen
 * @param {number} numberOfStars Antall stjeren til rating
 */
export function createRatings(ratingsContainer, name, numberOfStars) {
  if (name !== 'numberOfRatings') {
    // Array brukt for å mappe engelske navn til norske navn
    let engToNorMap = [
      { eng: 'people', nor: 'Folka' },
      { eng: 'appearence', nor: 'Utseende' },
      { eng: 'location', nor: 'Beligenhet' },
    ];

    // Lager container til nytt ratings innhold
    let ratingContainer = document.createElement('div');
    ratingsContainer.className = 'ratings-container';

    // Setter norsk tekst til rating
    let ratingText = document.createElement('h3');
    ratingText.innerHTML = engToNorMap.find((names) => names.eng === name).nor;
    ratingContainer.appendChild(ratingText);

    // Lager en stjerne for antall stjerner i ratingen
    for (let i = 0; i < numberOfStars; i++) {
      let starImg = document.createElement('img');
      starImg.src = 'img/others/star.png';
      starImg.alt = 'Stjerne';
      ratingContainer.appendChild(starImg);
    }

    // Putter nytt innhold inn i ratings containeren
    ratingsContainer.appendChild(ratingContainer);
  }
}

/**
 * Funksjon som lager rating seksjon
 *
 * @param {HTMLElement} container HTML element som får nytt innhold
 * @param {Rating[]} ratings Rating object fra hybel i data.js
 */
export function createRatingSection(container, ratings) {
  let ratingSectionContainer = document.createElement('div');

  let ratingHeading = document.createElement('h2');
  ratingHeading.innerHTML = 'Rating';
  ratingSectionContainer.appendChild(ratingHeading);

  // Looper gjennom alle ratingsene og kaller
  // createRatings() for å lage ratingens innhold
  for (let [key, value] of Object.entries(ratings)) {
    createRatings(ratingSectionContainer, key, value);
  }

  // Putter nytt innhold inn i side containeren
  container.appendChild(ratingSectionContainer);
}
