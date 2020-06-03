let title = document.querySelector('.side-in');
let sideBar = document.querySelector('.sidebar-menu');

title.addEventListener('click', () => {
  title.classList.toggle('side-in-hover');
  sideBar.classList.toggle('animation_hide');
});