const button = document.querySelector('.main-nav__toggle');
const nav = document.querySelector('.main-nav');

button.onclick = function() {
  nav.classList.toggle('main-nav--closed');
  nav.classList.toggle('main-nav--opened');
};
