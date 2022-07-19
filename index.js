const hamburger = document.querySelectorAll('.hamMenu')[1];
const burgerMenu = document.querySelector('.navItems');

hamburger.addEventListener('click', function(){
  burgerMenu.classList.add('large')
})