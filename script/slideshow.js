import { data } from '../data/data.js';

/**
 * startImageSlideshow() er en funksjon som starter
 * bilde slideshow
 *
 * Måten slideshowet fungerer på er som følger:
 * Hvert 5. sekund fader slideshow-containeren ut samtidig som at
 * bildet blir endret på. 800ms etter at containeren har fadet ut
 * blir bildet endret på og containeren fader inn igjen.
 */
function startImageSlideshow() {
  let slideshow = document.getElementById('imgSlide');

  setInterval(() => {
    fadeOut(slideshow); // Kaller fadeOut funksjonen hvert 5. sekund
  }, 5000);

  let counter = 1; // Counter som blir brukt for å vite hvilket bilde som blir vist

  // Venter 800ms før setInterval funksjonen blir kallt
  setTimeout(
    () =>
      setInterval(() => {
        swapImg(data[counter], slideshow);

        // Øker counter eller setter tilbake til 0 hvis lengden er for lang
        counter + 1 == data.length ? (counter = 0) : counter++;
      }, 5000),
    800
  );
}

/**
 * swapImg() er en funksjon som bytter bilde i slideshowet
 * og fader slideshow containeren inn igjen.
 *
 * @param {Dorm} data Hybel object fra data.js
 * @param {HTMLElement} slideshow HTML element, containeren til slideshowet
 */
function swapImg(data, slideshow) {
  slideshow.src = data.images[0].src; // Setter kilde på bilde
  slideshow.alt = data.images[0].imageText; // Setter alt tekst på bilde

  fadeIn(slideshow);
}

/**
 * fadeIn() er en funksjon som endrer opacitien på slideshow containeren til maks.
 *
 * @param {HTMLElement} slideshow HTML element, containeren til slideshowet
 */
function fadeIn(slideshow) {
  slideshow.style.opacity = 1;
}

/**
 * fadeOut() er en funksjon som endrer opacitien på slideshow containeren til 0.5
 *
 * @param {HTMLElement} slideshow HTML element, containeren til slideshowet
 */
function fadeOut(slideshow) {
  slideshow.style.opacity = 0.5;
}

startImageSlideshow(); // Kaller startImageSlideshow når siden lastes inn
