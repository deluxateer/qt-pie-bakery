const navSubMenu = document.querySelector('.navbar-submenu');
const navbarBtn = document.querySelector('.navbar-toggle');

if (navSubMenu && navbarBtn) {
  navbarBtn.addEventListener('click', () => navSubMenu.classList.toggle('navbar-active'));
}
