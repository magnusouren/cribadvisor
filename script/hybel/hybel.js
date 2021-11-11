import { getDormFromUrl } from '../common.js';
import {
  createAboutSection,
  createDormImage,
  createSlideshow,
  createDormName,
  createDormRatings,
  createHostSection,
  createRatingSection,
} from './hybelComponents.js';

/**
 * create404() er en funksjon som lager en feilmelding
 * og putter det inn i siden
 *
 * @param {HTMLElement} container HTML element som får nytt innhold
 */
function create404(container) {
  let heading = document.createElement('h1');
  heading.innerHTML = 'Finner ikke hybelen :(';

  container.appendChild(heading);
}

/**
 * createDorm() er en funksjon som lager alt innholdet til en hybel.
 * Den gjør dette med å kalle funksjoner fra /script/hybel/hybelComponents.js
 * som lager hver komponent.
 *
 * @param {HTMLElement} container HTML element som får nytt innhold
 * @param {Dorm} dorm Hybel objekt fra /data/data.js
 */
function createDorm(container, dorm) {
  createDormName(container, dorm.name);
  createDormRatings(container, dorm.ratings);
  createDormImage(container, dorm.images);
  createSlideshow(dorm.images);
  createHostSection(container, dorm.host);
  createAboutSection(container, dorm);
  createRatingSection(container, dorm.ratings);
}

/**
 * createDormOr404() er en funksjon som lager enten
 * en hybel side eller en feilmelding, basert på om
 * den finner hybel fra et parameter i urlen.
 */
function createDormOr404() {
  const dorm = getDormFromUrl();
  let container = document.getElementById('container');

  dorm ? createDorm(container, dorm) : create404(container);
}

createDormOr404(); // Kaller createDormOr404() når siden lastes inn
