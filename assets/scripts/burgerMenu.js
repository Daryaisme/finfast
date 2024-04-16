// const REALESTATE = 'real-estate';
// const FINANCE = 'finance';
// const BUSINESS = 'business';
// const NATIONALITY = 'nationality';

const headerMenu = document.querySelectorAll('.header__menu');
for (let menu of headerMenu) menu.addEventListener('click', handleHeaderMenuClick);

const burgerMenu = document.querySelector('.burger-menu');

const burgerMenuNavItems = document.querySelectorAll('.burger-menu__nav-item');
burgerMenuNavItems.forEach(item => item.addEventListener('click', handleNavItemClick));

const burgerMenuNavContent = document.querySelectorAll('.burger-menu__nav-content');

function handleHeaderMenuClick() {
  document.documentElement.style.overflowY = burgerMenu.classList.toggle('burger-menu_open') ? 'hidden' : 'visible';
}

function handleNavItemClick(e) {
  const item = e.currentTarget;
  const itemType = item.dataset.navItemType;

  burgerMenuNavItems.forEach(item => item.classList.remove('burger-menu__nav-item_active'));
  item.classList.add('burger-menu__nav-item_active');

  burgerMenuNavContent.forEach(content => content.classList.remove('burger-menu__nav-content_active'));
  burgerMenuNavContent.forEach(content => {if (content.dataset.navItemType === itemType) content.classList.add('burger-menu__nav-content_active')});
}
