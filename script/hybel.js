import { slugifyText, getDormFromUrl } from './common.js';
import {
  createAboutSection,
  createDormImage,
  createDormName,
  createDormRatings,
  createHostSection,
  createRatingSection,
} from './hybelComponents.js';

function create404(container) {
  let heading = document.createElement('h1');
  heading.innerHTML = 'Finner ikke hybelen :(';

  container.appendChild(heading);
}

function createDorm(container, dorm) {
  createDormName(container, dorm.name);
  createDormRatings(container, dorm.ratings);
  createDormImage(container, dorm.images);
  createHostSection(container, dorm.host);
  createAboutSection(container, dorm);
  createRatingSection(container, dorm.ratings);
}

function createDormOr404() {
  const dorm = getDormFromUrl();
  let container = document.getElementById('container');

  dorm ? createDorm(container, dorm) : create404(container);
}

createDormOr404();
