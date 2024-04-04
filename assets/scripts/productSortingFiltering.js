const selectLocationContainer = document.querySelector('.select-list__container');
selectLocationContainer.addEventListener('click', handleSelectParameterClick);

const selectLocationTitle = document.querySelector('.select-list__title');
const selectLocationOptionList = document.querySelectorAll('.select-list-option');
const selectLocation = document.querySelector('.select-list');
selectLocation.addEventListener('click', updateSelectLocationProperty);

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
