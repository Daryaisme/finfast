const productTileImageContainers = document.querySelectorAll('.product-tile__images-container');
productTileImageContainers.forEach(imageContainer => imageContainer.addEventListener('click', handleProductImageClick));

function handleProductImageClick(e) {
  const arrowDirection = e.target.classList.contains('product-tile__image-slider-arrow_left') ? 'left' : 'right';

  flipSlider(e, arrowDirection);
}

function flipSlider(e, direction) {
  const images = Array.from(e.currentTarget.children).filter(child => child.tagName === 'IMG');
  const activeImage = images.filter(image => image.classList.contains('product-tile__image_active'))[0];

  const activeImageIndex = images.findIndex(image => image === activeImage);
  const nextImageIndex = activeImageIndex + 1;
  const previousImageIndex = activeImageIndex - 1;

  const dots = Array.from(e.currentTarget.children).filter(child => child.classList.contains('dot-slider'))[0].children;

  switch (direction) {
    case 'right':
      if (nextImageIndex < images.length - 1) {
        const marginLeft = images[0].style.marginLeft.slice(0, -2) - activeImage.offsetWidth / 2 - images[nextImageIndex].offsetWidth / 2;
        images[0].style.marginLeft = `${marginLeft}px`;
        activeImage.classList.remove('product-tile__image_active');
        images[nextImageIndex].classList.add('product-tile__image_active');
        dots[activeImageIndex].classList.remove('dot-silder__dot_active');
        dots[nextImageIndex].classList.add('dot-silder__dot_active');
        // flipSliderToLeft(marginLeft, nextImageIndex);
      }
      break;
    case 'left':
      if (previousImageIndex >= 0) {
        const marginLeft = +images[0].style.marginLeft.slice(0, -2) + activeImage.offsetWidth / 2 + images[previousImageIndex].offsetWidth / 2;
        images[0].style.marginLeft = `${marginLeft}px`;
        activeImage.classList.remove('product-tile__image_active');
        images[previousImageIndex].classList.add('product-tile__image_active');
        dots[activeImageIndex].classList.remove('dot-silder__dot_active');
        dots[previousImageIndex].classList.add('dot-silder__dot_active');
        // flipSliderToLeft(previousImageIndex);
      }
  }
}

// function flipSliderToLeft(margin, index) {
  
// }
