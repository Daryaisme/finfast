const headerMenu = document.querySelectorAll('.header__menu');
for (let menu of headerMenu) menu.addEventListener('click', handleHeaderMenuClick);

const burgerMenu = document.querySelector('.burger-menu');

function handleHeaderMenuClick() {
  document.documentElement.style.overflowY = burgerMenu.classList.toggle('burger-menu_open') ? 'hidden' : 'visible';
}
