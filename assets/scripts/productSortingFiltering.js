import generateProducts from "./generateProducts.js";
import productListView from "./pagination.js";

const productGroupCount = 25;
const allProducts = generateProducts(productGroupCount);

const productsContainer = document.querySelector('.market__product-tiles');

const selectLocationContainer = document.querySelector('.select-list__container');
selectLocationContainer.addEventListener('click', handleSelectParameterClick);

const selectLocationTitle = document.querySelector('.select-list__title');
const selectLocationOptionList = document.querySelectorAll('.select-list-option');
const selectLocation = document.querySelector('.select-list');
selectLocation.addEventListener('click', updateSelectLocationProperty);

const productsPerPage = 20;
const pageCount = Math.ceil(allProducts.length / productsPerPage);

const paginationContainer = document.querySelector('.market__pagination');
const paginationNumberItems = createPaginationItems(pageCount);
paginationNumberItems.forEach(paginationNumberItem => {
  paginationContainer.prepend(paginationNumberItem);
  paginationNumberItem.addEventListener('click', handlePaginationNumberClick);
});

let products = productListView(allProducts, productsPerPage, 1);
updateProductListView(products);

function handleSelectParameterClick() {
  selectLocation.classList.toggle('select-list_active');
  selectLocationTitle.classList.toggle('select-list__title_active');
}

function updateSelectLocationProperty(e) {
  const property = e.target;
  
  Array.from(selectLocationOptionList).forEach(option => option.classList.remove('select-list-option_active'));
  property.classList.add('select-list-option_active');

  selectLocationTitle.innerHTML = property.innerHTML;
}

function updateProductListView(products) {
  productsContainer.innerHTML = '';
  for (let product of products) productsContainer.appendChild(product);
}

function createPaginationItems(n) {
  const paginationNumberItems = [];
  
  for (let i = n; i > 0; i--) {
    const paginationNumberItem = document.createElement('div');
    paginationNumberItem.classList.add('pagination__item', 'pagination__number');
    if (i === 1) paginationNumberItem.classList.add('pagination__number_active');
    paginationNumberItem.innerHTML = i;

    paginationNumberItems.push(paginationNumberItem);
  }

  return paginationNumberItems;
}

function handlePaginationNumberClick(e) {
  const pageNumber = +e.currentTarget.innerHTML;

  paginationNumberItems.forEach(number => number.classList.remove('pagination__number_active'));
  e.currentTarget.classList.add('pagination__number_active');

  products = productListView(allProducts, productsPerPage, pageNumber);
  updateProductListView(products);  
}
