// Объект document позволяет работать со всей HTML структурой сайта за счёт языка JavaScript; 
// if позволяет задать условие, при котором выполнится блок кода
// function это блок кода, предназначенный для выполнения определенной задачи
// (e) условие; e - переменная типа Exception(исключение) значение которой определится автоматически, если в try блоке возникнет ошибка
// target - это свойство объекта события(event), которое указывает на элемент, на котором произошло событие. В JS, это может быть любой элемент на веб-странице, например, кнопка, ссылка, форма и т.д
// Метод closest() возвращает ближайший родительский элемент, который соответствует заданному CSS-селектору. Он ищет элемент родительской цепочки начиная с текущего элемента и вверх по иерархии. Пример использования метода closest(): const element = document.
//  === оператор сравнения
// Метод addEventlistener назнаечат функцию обработчика событий, и будет вызываться при возникновении определенного события, например: клик, наведение курсора мыши, нажатие клавиши и прочие 
// removeEventListener() Удаляет обработчик события, который был зарегистрирован при помощи EventTarget

/*=============== SHOW MENU ===============*/
const modalEnter = document.getElementById('modal-enter'), // this is burger menu itself
    modalToggle = document.getElementById('madal-toggle'), // this is burger button
    modalClose = document.getElementById('modal-close') // this is close button inside menu

/* Validate if constant exists */
if (modalToggle && modalClose) { // условие для modalToggle и modalClose
    function closePopup(e) { // условие функции closePopup 
        if (e.target.closest('.popup') === null) { // цель условия исключить события .popup' и/или пустое значение
            modalEnter.classList.remove('show-menu') //  сlassList.remove удаляет у modalEnter класс 'show-menu'

            document.removeEventListener('mousedown', closePopup); // mousedown/mouseup. Кнопка мыши нажата/отпущена над элементом function closePopup
            document.removeEventListener('keydown', closeByEsc); // removeEventListener() Удаляет 'keydown', function closeByEsc
        }
    }

    function closeByEsc(e) {
        if (e.key === 'Escape') { // код клавиши Escape, но можно использовать e.key
            modalEnter.classList.remove('show-menu')

            document.removeEventListener('keydown', closeByEsc);
            document.removeEventListener('mousedown', closePopup);
        }
    }

    modalToggle.addEventListener('click', () => {
        modalEnter.classList.add('show-menu') // on click add class 'show-menu' to menu

        const popup = document.querySelector('.popup');
        document.addEventListener('mousedown', closePopup);
        document.addEventListener('keydown', closeByEsc);
    })

    modalClose.addEventListener('click', () => {
        modalEnter.classList.remove('show-menu') // on click close button remove class 'show-menu' from menu

        document.removeEventListener('mousedown', closePopup);
        document.removeEventListener('keydown', closeByEsc);
    })
}