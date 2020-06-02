let title = document.querySelector('.header__title');
let sideBar = document.querySelector('.sidebar-menu');

title.addEventListener('click', function() {
    sideBar.classList.toggle('visually-hidden');
    
    // if (sideBar.classList.contains('visually-hidden')) {
    //     title.classList.toggle('header__title_no-hover');
    // } 
})

