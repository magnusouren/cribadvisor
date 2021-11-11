export function slideshow(images, direction) {
  let slideshowImage = document.getElementById('slideshow-image');
  let caption = document.getElementById('slideCaption');

  let longImgSrc = slideshowImage.src;
  let splitSrc = longImgSrc.split('/');
  let imgSrc = splitSrc[splitSrc.length - 1];

  let index = 0;
  for (let i = 0; i < images.length; i++) {
    if (images[i].src.includes(imgSrc)) {
      index = i;
      break;
    }
  }

  if (direction === 1) {
    switchToNextImage(images, index, slideshowImage, caption);
  } else if (direction === -1) {
    switchToPrevImage(images, index, slideshowImage, caption);
  }
}

function switchToNextImage(images, index, slideshowImage, caption) {
  if (index + 1 === images.length) {
    slideshowImage.src = images[0].src;
    caption.innerText = images[0].imageText;
  } else {
    slideshowImage.src = images[index + 1].src;
    caption.innerText = images[index + 1].imageText;
  }
}

function switchToPrevImage(images, index, slideshowImage, caption) {
  if (index === 0) {
    slideshowImage.src = images[images.length - 1].src;
    caption.innerText = images[images.length - 1].imageText;
  } else {
    slideshowImage.src = images[index - 1].src;
    caption.innerText = images[index - 1].imageText;
  }
}
