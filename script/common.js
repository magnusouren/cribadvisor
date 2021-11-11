import { data } from '../data/data.js';

/**
 * Returnerer text på "slugified" form.
 * Det betyr at den gjør text url-safe.
 *
 * @param {string} text Teksten
 * @return {string} Url-safe tekst
 */
export function slugifyText(text) {
  // Bruker Regex for å slugifie teksten
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

/**
 * Finner og returnerer hybel fra
 * data.js ved hjelp av url-parameter
 */
export function getDormFromUrl() {
  // Finner dormName parameteren i urlen
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const dormName = urlParams.get('dormName');

  // Bruker .find() for å finne hybel med likt navn
  return data.find((dorm) => slugifyText(dorm.name) === dormName);
}
