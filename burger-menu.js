const burgerIcon = document.querySelector('.burger-icon');
const menuList = document.querySelector('.menu-list');

burgerIcon.addEventListener('click', function () {
    burgerIcon.classList.toggle('show-mobile');
    menuList.classList.toggle('show-mobile');
});

// Tilføjet en ekstra lytter for at lukke burgermenuen, når der klikkes uden for den
document.addEventListener('click', function (event) {
    if (!event.target.closest('.menu-container')) {
        menuList.classList.remove('show-mobile');
        burgerIcon.classList.remove('show-mobile');
    }
});

// Forhindre klik på burgerikonet i at lukke burgermenuen, da det allerede håndteres af den første lytter
burgerIcon.addEventListener('click', function (event) {
    event.stopPropagation();
});



