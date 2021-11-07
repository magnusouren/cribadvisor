import { fetchData, slugifyText } from './common.js';

function getDormFromUrl() {
  const data = fetchData();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const dormName = urlParams.get('dormName');

  return data.find((dorm) => slugifyText(dorm.name) === dormName);
}

function createDormOr404() {
  const dorm = getDormFromUrl();
  let container = document.getElementById('container');

  dorm ? createDorm(container, dorm) : create404(container);
}

function create404(container) {
  let heading = document.createElement('h1');
  heading.innerHTML = 'Finner ikke hybelen :(';

  container.appendChild(heading);
}

function createDormName(container, name) {
  let dormName = document.createElement('h1');
  dormName.innerHTML = name;
  container.appendChild(dormName);
}

function createDormRatings(container, ratings) {
  let dormRatings = document.createElement('p');
  dormRatings.className = 'dorm-ratings';
  dormRatings.innerHTML = `${ratings.numberOfRatings} vurderinger`;
  container.appendChild(dormRatings);
}

function createDormImage(container, images) {
  let img = document.createElement('img');
  img.src = images[0].src;
  img.className = 'dorm-image';
  container.appendChild(img);
}

function createHostSection(container, host) {
  let hostContainer = document.createElement('div');
  hostContainer.className = 'host-container';

  let hostImage = document.createElement('img');
  hostImage.src = host.image;
  hostContainer.appendChild(hostImage);

  let hostName = document.createElement('h2');
  hostName.innerHTML = host.name;
  hostContainer.appendChild(hostName);

  let aboutHostText = document.createElement('p');
  aboutHostText.innerHTML = host.about;
  hostContainer.appendChild(aboutHostText);

  let buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'buttons-container';

  let contactButton = document.createElement('button');
  contactButton.innerHTML = 'Kontakt';
  buttonsContainer.appendChild(contactButton);

  let giveRatingButton = document.createElement('button');
  giveRatingButton.innerHTML = 'Gi vurdering';
  buttonsContainer.appendChild(giveRatingButton);

  hostContainer.appendChild(buttonsContainer);

  let divider = document.createElement('hr');
  hostContainer.appendChild(divider);

  container.appendChild(hostContainer);
}

function createAboutSection(container, dorm) {
  const { address, capasity, events, ratings } = dorm;
  let aboutSectionContainer = document.createElement('div');
  aboutSectionContainer.className = 'about-container';

  let aboutHeading = document.createElement('h2');
  aboutHeading.innerHTML = 'Om hybelen';
  aboutSectionContainer.appendChild(aboutHeading);

  let addressElement = document.createElement('p');
  let addressText = document.createElement('b');
  addressText.innerHTML = 'Adresse: ';
  addressElement.appendChild(addressText);
  addressElement.innerHTML += address;
  aboutSectionContainer.appendChild(addressElement);

  let capasityElement = document.createElement('p');
  let capasityText = document.createElement('b');
  capasityText.innerHTML = 'Plass til: ';
  capasityElement.appendChild(capasityText);
  capasityElement.innerHTML += capasity;
  aboutSectionContainer.appendChild(capasityElement);

  let eventList = document.createElement('ul');
  for (let i = 0; i < events.length; i++) {
    let event = document.createElement('li');
    event.innerHTML = events[i];
    eventList.appendChild(event);
  }

  let eventsElement = document.createElement('p');
  let eventsText = document.createElement('b');
  eventsText.innerHTML = 'Tilbyr: ';
  eventsElement.appendChild(eventsText);
  eventsElement.appendChild(eventList);
  aboutSectionContainer.appendChild(eventsElement);

  container.appendChild(aboutSectionContainer);
}

function createRatings(ratingsContainer, name, numberOfStars) {
  if (name !== 'numberOfRatings') {
    let engToNorMap = [
      { eng: 'people', nor: 'Folka' },
      { eng: 'appearence', nor: 'Utseende' },
      { eng: 'location', nor: 'Beligenhet' },
    ];
    let ratingContainer = document.createElement('div');
    ratingsContainer.className = 'ratings-container';

    let ratingText = document.createElement('h3');
    ratingText.innerHTML = engToNorMap.find((names) => names.eng === name).nor;
    ratingContainer.appendChild(ratingText);

    for (let i = 0; i < numberOfStars; i++) {
      let starImg = document.createElement('img');
      starImg.src = '/img/others/star.png';
      ratingContainer.appendChild(starImg);
    }

    ratingsContainer.appendChild(ratingContainer);
  }
}

function createRatingSection(container, ratings) {
  let ratingSectionContainer = document.createElement('div');

  let ratingHeading = document.createElement('h2');
  ratingHeading.innerHTML = 'Rating';
  ratingSectionContainer.appendChild(ratingHeading);

  for (let [key, value] of Object.entries(ratings)) {
    createRatings(ratingSectionContainer, key, value);
  }

  container.appendChild(ratingSectionContainer);
}

function createDorm(container, dorm) {
  createDormName(container, dorm.name);
  createDormRatings(container, dorm.ratings);
  createDormImage(container, dorm.images);
  createHostSection(container, dorm.host);
  createAboutSection(container, dorm);
  createRatingSection(container, dorm.ratings);
}

createDormOr404();
