import { data } from '../data/data.js';

export function slugifyText(text) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export function getDormFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const dormName = urlParams.get('dormName');

  return data.find((dorm) => slugifyText(dorm.name) === dormName);
}
