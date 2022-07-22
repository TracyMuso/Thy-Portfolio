const menu = document.querySelector('.navItems');
const menuItems = document.querySelectorAll('.pageLinks');
const hamburger = document.querySelector('.hamMenu');
const closeMenu = document.querySelector('.bi-x');
const Seemenu = document.querySelector('.bi-list');

function toggleMenu() {
  if (menu.classList.contains('large')) {
    menu.classList.remove('large');
    closeMenu.style.display = 'none';
    Seemenu.style.display = 'block';
  } else {
    menu.classList.add('large');
    closeMenu.style.display = 'block';
    Seemenu.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);
menuItems.forEach(
  (pageLink) => {
    pageLink.addEventListener('click', toggleMenu);
  },
);

// form validation//
const form = document.getElementById('form');
const fullName = document.getElementById('textn');
const email = document.getElementById('email');
const textArea = document.getElementById('add');
const emailRegex = /^[a-z@.-0-9]*$/;
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const invalidEmail = document.querySelector('.error-msg');

  if (email.value.match(emailRegex)) {
    return true;
  }
  invalidEmail.textContent = 'Please type the email in lower case!';
  return false;
});