import productData from "../data/products.json" with { type: 'json' };

function generateProducts(n) {
  const products = [];

  generateGroupProducts(products, productData[0], n);
  generateGroupProducts(products, productData[1], n + 4);
  generateGroupProducts(products, productData[2], n - 1);

  return products;
}

function generateGroupProducts(arr, data, n) {
  for (let i = 0; i < n; i++) arr.push(generateProduct(data));
}

function generateProduct(data) {
  const product = document.createElement('article');
  product.classList.add('product-tile');

  const productContainer = document.createElement('div');
  productContainer.classList.add('product-tile__container');

  const productImagesContainer = document.createElement('div');
  productImagesContainer.classList.add('product-tile__images-container');

  const productImagesCount = data.images.length;
  for (let j = 0; j < productImagesCount; j++) {
    const productImage = document.createElement('img');
    productImage.src = data.images[j];
    productImage.alt = "Hotel";
    productImage.title = "Hotel";
    productImage.classList.add('product-tile__image');
    if (j === 0) productImage.classList.add('product-tile__image_active');

    productImagesContainer.appendChild(productImage);
  }

  const productImagesSlider = document.createElement('div');
  productImagesSlider.classList.add('product-tile__image-slider', 'dot-slider');

  const leftArrowSlider = document.createElement('div');
  leftArrowSlider.classList.add('product-tile__image-slider-arrow', 'product-tile__image-slider-arrow_left');

  const rightArrowSlider = document.createElement('div');
  rightArrowSlider.classList.add('product-tile__image-slider-arrow', 'product-tile__image-slider-arrow_right');

  for (let j = 0; j < productImagesCount; j++) {
    const sliderDot = document.createElement('div');
    sliderDot.classList.add('dot-silder__dot');
    if (j === 0) sliderDot.classList.add('dot-silder__dot_active');

    productImagesSlider.appendChild(sliderDot);
  }

  const heartIcon = document.createElement('img');
  heartIcon.src = 'assets/images/heart2-icon.svg';
  heartIcon.alt = "Heart icon";
  heartIcon.title = "Heart icon";
  heartIcon.classList.add('product-tile__heart-icon');

  productImagesContainer.append(heartIcon, productImagesSlider, leftArrowSlider, rightArrowSlider);

  const productInformation = document.createElement('div');
  productInformation.classList.add('product-tile__info');

  const productDescription = document.createElement('div');
  productDescription.classList.add('product-tile__description');

  const productLocation = document.createElement('div');
  productLocation.classList.add('product-tile__location');
  productLocation.innerHTML = data.location;

  const productConceptType = document.createElement('div');
  productConceptType.classList.add('product-tile__concept-type');
  productConceptType.innerHTML = data.conceptType;

  const productArea = document.createElement('div');
  productArea.classList.add('product-tile__area');
  productArea.innerHTML = data.area;

  const productPrice = document.createElement('div');
  productPrice.classList.add('product-tile__price');
  productPrice.innerHTML = data.price;

  productDescription.append(productLocation, productConceptType, productArea, productPrice);

  const productRating = document.createElement('div');
  productRating.classList.add('product-tile__rating');

  const productId = document.createElement('div');
  productId.classList.add('product-tile__id');
  productId.innerHTML = `ID: ${data.id}`;

  const productMarkIcons = document.createElement('div');
  productMarkIcons.classList.add('product-tile__mark-icons');

  const like = document.createElement('img');
  like.classList.add('product-tile__mark-icon');
  like.src = 'assets/images/like_icon.svg';
  like.alt = "Like icon";
  like.title = "Like icon";

  const dislike = document.createElement('img');
  dislike.classList.add('product-tile__mark-icon');
  dislike.src = 'assets/images/dislike_icon.svg';
  dislike.alt = "Dislike icon";
  dislike.title = "Dislike icon";

  productMarkIcons.append(like, dislike);

  productRating.append(productId, productMarkIcons);

  productInformation.append(productDescription, productRating);

  productContainer.append(productImagesContainer, productInformation);

  product.appendChild(productContainer);

  return product;
}

export default generateProducts;
