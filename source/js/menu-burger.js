let button = document.querySelector('.main-nav__toggle');
let nav = document.querySelector('.main-nav');

button.onclick = function() {
  nav .classList.toggle('main-nav--closed');
  nav .classList.toggle('main-nav--opened');
};
