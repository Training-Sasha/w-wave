var popup = document.querySelector('.popup');
document.addEventListener('mousedown', function(e) {
    if (e.target.closest('.popup') === null) {
        popup.style.display = 'none';
    }
});



/*=============== MENU CLOSE CLICK CONTAINER ===============*/
// const modalEnter = document.querySelectorById('modal-enter');

document.addEventListener('click', (e) => {
    // const withinBoundaries = e.composedPath().includes(modalEnter);

    if (!withinBoundaries) {
        modalEnter.style.display = 'none'; // скрываем элемент т к клик был за его пределами
    }
})

/*=============== MENU CLOSE CLICK ESC ===============*/

document.addEventListener('keydown', function(e) {
    if (e.key == 27) { // код клавиши Escape, но можно использовать e.key
        div.style.display = 'none';
    }
});