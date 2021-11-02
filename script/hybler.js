import { fetchData } from './common.js';

async function createListOfDorms() {
  const data = await fetchData();

  for (let i = 0; i < data.length; i++) {
    createDorm(data[i]);
  }
}

function createDorm(dorm) {
  const { name, address, capasity, events, about, ratings, images } = dorm;

  let container = document.createElement('div');
  container.className = 'container';

  let img = document.createElement('img');
  img.src = images[0].src;
  img.className = 'dorm-image';
  container.appendChild(img);

  let dormName = document.createElement('h2');
  dormName.innerHTML = name;
  container.appendChild(dormName);

  let dormAddress = document.createElement('h3');
  dormAddress.innerHTML = address;
  container.appendChild(dormAddress);

  let eventListContainer = document.createElement('div');
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

  let dormRatings = document.createElement('p');
  dormRatings.innerHTML = `${ratings.numberOfRatings} vurderinger`;
  container.appendChild(dormRatings);

  document.getElementById('hybler').appendChild(container);
}

createListOfDorms();
