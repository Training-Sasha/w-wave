/*=============== SHOW MENU ===============*/
const modalEnter = document.getElementById('modal-enter'), // this is burger menu itself
    modalToggle = document.getElementById('madal-toggle'), // this is burger button
    modalClose = document.getElementById('modal-close') // this is close button inside menu

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (modalToggle) {
    modalToggle.addEventListener('click', () => {
        modalEnter.classList.add('show-menu') // on click add class 'show-menu' to menu
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (modalClose) {
    modalClose.addEventListener('click', () => {
        modalEnter.classList.remove('show-menu') // on click close button remove class 'show-menu' from menu
    })
}



/*=============== "ЭТОТ КОД НЕ РАБОТАЕТ" ===============*/


/*=============== MENU CLOSE CLICK CONTAINER ===============*/
// var popup = document.querySelector('.popup');
// document.addEventListener('mousedown', function(e) {
//     if (e.target.closest('.popup') === null) {
//         popup.style.display = 'none';
//     }
// });

/*=============== MENU CLOSE CLICK ESC ===============*/
// document.addEventListener('keydown', function(e) {
//     if (e.key == 27) { // код клавиши Escape, но можно использовать e.key
//         div.style.display = 'none';
//     }
// });