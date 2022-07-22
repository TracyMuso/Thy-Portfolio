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
const email = document.getElementById('email');
const emailRegex = /^[a-z@._0-9]*$/;
const invalidEmail = document.querySelector('.error-msg');

form.addEventListener('submit', (e) => {
  if (!email.value.match(emailRegex)) {
    invalidEmail.textContent = 'Please type the email in lower case!';
    e.preventDefault();
    return false;
  }
  return true;
});

//form data storage//

const fullName = document.getElementById('textn')
const textArea = document.getElementById('add');
const formInputs = {
  names: fullName.value,
  email: email.value,
  text; textArea.value,
};




function storeData() {
  localStorage.setItem('formInputs', JSON.stringify(formInputs));
  sessionStorage.setItem('formInputs', JSON.stringify(formInputs))


storeData()

const getData = localStorage.getItem('formInputs'); 
if (getData != null) {
  getData = JSON.parse(getData);
  fullName.value = getData.names;
  email.value = getData.email;
  textArea.value = getData.text
}

//end of script