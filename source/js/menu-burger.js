const button = document.querySelector('.main-nav__toggle');
const nav = document.querySelector('.main-nav');
const logo = document.querySelector('.page-header__logo');

nav.classList.add('main-nav--closed');
logo.classList.add('page-header__logo--order');

button.onclick = function() {
  nav.classList.toggle('main-nav--closed');
  nav.classList.toggle('main-nav--opened');
};
