import { createNewPopup, displayPopup } from './componentsPopup.js';
import { fetchData, slugifyText } from './common.js';
function getDormFromUrl() {
  const data = fetchData();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const dormName = urlParams.get('dormName');

  return data.find((dorm) => slugifyText(dorm.name) === dormName);
}

function createContentOr404() {
  const dorm = getDormFromUrl();
  let container = document.getElementById('popupContent');

  dorm ? createContent(container, dorm) : create404(container);
}

function createContent(container, dorm) {}

function createPopup() {
  if (document.body.contains(document.getElementById('popupDiv'))) {
    displayPopup();
    createContentOr404();
  } else {
    createNewPopup();
    createContentOr404();
  }
}

window.onload = function () {
  let ratingButton = document.getElementById('ratingButton');
  let contactButton = document.getElementById('contactButton');

  ratingButton.addEventListener('click', createPopup);
  contactButton.addEventListener('click', createPopup);
};
