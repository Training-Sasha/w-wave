/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('modal-enter'), // this is burger menu itself
    navToggle = document.getElementById('nav-toggle'), // this is burger button
    navClose = document.getElementById('nav-close') // this is close button inside menu

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu') // on click add class 'show-menu' to menu
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu') // on click close button remove class 'show-menu' from menu
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))