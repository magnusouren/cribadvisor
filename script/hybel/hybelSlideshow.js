/**
 * Funksjon som håndterer logikk for trykk på slideshow
 *
 * @param {Images[]} images Image array fra hybel i data.js
 * @param {number} direction Retning på slideshowet, positive tall er fram, negative er bak
 */
export function handleSlideshowButtonClick(images, direction) {
  let slideshowImage = document.getElementById('slideshow-image');
  let caption = document.getElementById('slideCaption');

  // Formaterer bilde kilde til riktig form
  let longImgSrc = slideshowImage.src;
  let splitSrc = longImgSrc.split('/');
  let imgSrc = splitSrc[splitSrc.length - 1];

  // Lopper gjennom bilder for å finne ut hvilket bilde
  // Som blir vist. Lagrer index av dette bildet som index
  let index = 0;
  for (let i = 0; i < images.length; i++) {
    if (images[i].src.includes(imgSrc)) {
      index = i;
      break;
    }
  }

  // Bytter til neste / forrige bilde basert på direction parameter
  if (direction === 1) {
    switchToNextImage(images, index, slideshowImage, caption);
  } else if (direction === -1) {
    switchToPrevImage(images, index, slideshowImage, caption);
  }
}

/**
 * Funksjon som bytter til neste bilde
 *
 * @param {Image[]} images Image array fra hybel i data.js
 * @param {number} index Index av bilde som blir vist
 * @param {HTMLElement} slideshowImage HTML element som får nytt innhold
 * @param {string} caption Bildetekst
 */
function switchToNextImage(images, index, slideshowImage, caption) {
  if (index + 1 === images.length) {
    slideshowImage.src = images[0].src;
    caption.innerText = images[0].imageText;
  } else {
    slideshowImage.src = images[index + 1].src;
    caption.innerText = images[index + 1].imageText;
  }
}

/**
 * Funksjon som bytter til forrige bilde
 *
 * @param {Image[]} images Image array fra hybel i data.js
 * @param {number} index Index av bilde som blir vist
 * @param {HTMLElement} slideshowImage HTML element som får nytt innhold
 * @param {string} caption Bildetekst
 */
function switchToPrevImage(images, index, slideshowImage, caption) {
  if (index === 0) {
    slideshowImage.src = images[images.length - 1].src;
    caption.innerText = images[images.length - 1].imageText;
  } else {
    slideshowImage.src = images[index - 1].src;
    caption.innerText = images[index - 1].imageText;
  }
}
