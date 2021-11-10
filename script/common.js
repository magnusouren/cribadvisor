import { data } from '../data/data.js';

export function slugifyText(text) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}
