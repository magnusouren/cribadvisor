import { fetchData } from './common.js';
import {
  createDormImage,
  createDormTextContent,
  createButton,
} from './hyblerComponents.js';

function createDorm(dorm) {
  const { name, address, capasity, events, about, ratings, images } = dorm;

  let container = document.createElement('div');
  container.className = 'dorm-container';

  createDormImage(container, images);
  createDormTextContent(container, name, address, events, ratings);
  createButton(container, name);

  document.getElementById('hybler').appendChild(container);
}

function createListOfDorms() {
  const data = fetchData();

  for (let i = 0; i < data.length; i++) {
    createDorm(data[i]);
  }
}

createListOfDorms();
