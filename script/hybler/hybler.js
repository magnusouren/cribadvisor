import { data } from '../../data/data.js';
import {
  createDormImage,
  createDormTextContent,
  createButton,
} from './hyblerComponents.js';

/**
 * Funksjon som lager hybel innhold.
 * Bruker funksjoner fra hyblerComponents.js for å lage
 * innholdet
 *
 * @param {Dorm} dorm hybel objekt fra data.js
 */
function createDorm(dorm) {
  // Henter relevant data fra hybel objektet
  const { name, address, capasity, events, ratings, images } = dorm;

  let container = document.createElement('div');
  container.className = 'dorm-container';

  createDormImage(container, images);
  createDormTextContent(container, name, address, events, ratings);
  createButton(container, name);

  document.getElementById('hybler').appendChild(container);
}

/**
 * Funksjon som looper gjennom data fra data.js
 * og kaller createDorm() for hvert hybel objekt
 */
function createListOfDorms() {
  for (let i = 0; i < data.length; i++) {
    createDorm(data[i]);
  }
}

createListOfDorms();
