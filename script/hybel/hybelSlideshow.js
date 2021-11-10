export function slideshow(images, direction) {
  let slideImg = document.getElementById('slideImg');
  let caption = document.getElementById('slideCaption');

  let longImgSrc = slideImg.src;
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
    nextImageSlideshow(images, index, slideImg, caption);
  } else if (direction === -1) {
    previousImageSlideshow(images, index, slideImg, caption);
  }
}

function nextImageSlideshow(images, index, slideImg, caption) {
  if (index + 1 === images.length) {
    slideImg.src = images[0].src;
    caption.innerText = images[0].imageText;
  } else {
    slideImg.src = images[index + 1].src;
    caption.innerText = images[index + 1].imageText;
  }
}
function previousImageSlideshow(images, index, slideImg, caption) {
  if (index === 0) {
    slideImg.src = images[images.length - 1].src;
    caption.innerText = images[images.length - 1].imageText;
  } else {
    slideImg.src = images[index - 1].src;
    caption.innerText = images[index - 1].imageText;
  }
}
