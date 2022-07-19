const qs = function(selector = '*', element = document) {
  return element.querySelector(selector);
}

const qsa = function(selector = '*', element = document) {
  return [...element.querySelectorAll(selector)];
}

const hamburger = qs('.hamMenu');
const hamburgerIcon = qs('.bi-list', hamburger);
const hamburgerClose = qs('.bi-x', hamburger);
const burgerMenu = qs('.navItems');

const toggleBurger = function() {
  hamburgerIcon.classList.toggle('no-display');
  hamburgerClose.classList.toggle('no-display');
  burgerMenu.classList.toggle('large');
}

hamburgerIcon.addEventListener('click', function(){
  toggleBurger();
});

hamburgerClose.addEventListener('click', () => {
  toggleBurger();
});

qs('.navItems').addEventListener('click', e => {
  const { target } = e;

  if (target.tagName.toLowerCase() !== 'a') return

  toggleBurger();
  qs(target.getAttribute('href')).scrollIntoView();
});
