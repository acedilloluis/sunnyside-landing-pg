const navMenu = document.querySelector('#main-nav');
const hamBtn = document.querySelector('#ham-btn');
let isMenuOpen = false;

hamBtn.addEventListener('click', () => {
  isMenuOpen
    ? navMenu.classList.add('visually-hidden')
    : navMenu.classList.remove('visually-hidden');
  isMenuOpen = isMenuOpen ? false : true;
});
