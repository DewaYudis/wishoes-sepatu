// TOGGLE CLASS ACTIVE
const navbarNav = document.querySelector('.navbar-nav');
// KETIKA MENU DI KLIK
document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

//KLIK DI LUAR SIDE BAR UNTUK MENGHILANGKAN NAV
const menu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
