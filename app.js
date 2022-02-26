const hamburgermenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.links');

hamburgermenu.addEventListener("click" , mobileMenu);

function mobileMenu() {
    hamburgermenu.classList.toggle("active");
    navMenu.classList.toggle("active");

}


