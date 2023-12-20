const burgerIcon = document.querySelector('.burger-icon');
const menuList = document.querySelector('.menu-list');

burgerIcon.addEventListener('click', function () {
    menuList.classList.toggle('show-mobile');
});