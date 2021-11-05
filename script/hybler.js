import { fetchData } from './common.js';

function createDormImage(container, images) {
  let img = document.createElement('img');
  img.src = images[0].src;
  img.className = 'dorm-image';
  container.appendChild(img);
}

function createDormName(container, name) {
  let dormName = document.createElement('h2');
  dormName.innerHTML = name;
  container.appendChild(dormName);
}

function createDormAddress(container, address) {
  let dormAddress = document.createElement('h3');
  dormAddress.innerHTML = address;
  container.appendChild(dormAddress);
}

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

function createDormRatings(container, ratings) {
  let dormRatings = document.createElement('p');
  dormRatings.className = 'dorm-ratings';
  dormRatings.innerHTML = `${ratings.numberOfRatings} vurderinger`;
  container.appendChild(dormRatings);
}

function createDormTextContent(container, name, address, events, ratings) {
  let textContentContainer = document.createElement('div');
  textContentContainer.className = 'text-content-container';

  createDormName(textContentContainer, name);
  createDormAddress(textContentContainer, address);
  createEventList(textContentContainer, events);
  createDormRatings(textContentContainer, ratings);

  container.appendChild(textContentContainer);
}

function createButton(container) {
  let button = document.createElement('button');
  button.innerHTML = 'Se Hybel';
  container.appendChild(button);
}

function createListOfDorms() {
  const data = fetchData();

  for (let i = 0; i < data.length; i++) {
    createDorm(data[i]);
  }
}

function createDorm(dorm) {
  const { name, address, capasity, events, about, ratings, images } = dorm;

  let container = document.createElement('div');
  container.className = 'dorm-container';

  createDormImage(container, images);
  createDormTextContent(container, name, address, events, ratings);

  createButton(container);

  document.getElementById('hybler').appendChild(container);
}

createListOfDorms();
