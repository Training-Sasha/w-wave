// Объект document позволяет работать со всей HTML структурой сайта за счёт языка JavaScript; 
// if позволяет задать условие, при котором выполнится блок кода
// function это блок кода, предназначенный для выполнения определенной задачи
// (e) условие; e - это event - событие из eventListener
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
        if (e.target.closest('.popup') === null) { // цель условия исключить обработку событий клика внутри .popup  
            modalEnter.classList.remove('show-menu') //  сlassList.remove удаляет у modalEnter класс 'show-menu'

            document.removeEventListener('mousedown', closePopup); // mousedown/mouseup. Кнопка мыши нажата/отпущена над элементом function closePopup
            document.removeEventListener('keydown', closeByEsc); // removeEventListener() Удаляет 'keydown', function closeByEsc
        }
    }

    function closeByEsc(e) { // условие функции closeByEsc
        if (e.key === 'Escape') { // условие, которое произойдет при клике на клавишу Escape, условие проверяет нажата ли клавиша ESC, если нажата, то код будет выполнен
            modalEnter.classList.remove('show-menu') // сlassList.remove удаляет у modalEnter класс 'show-menu'

            document.removeEventListener('keydown', closeByEsc); // обработчик события removeEventListener удаляет событие - 'keydown' из функции closeByEsc. 
            document.removeEventListener('mousedown', closePopup); // обработчик события removeEventListener удаляет событие - 'mousedown' из функции closePopup.
        }
    }

    modalToggle.addEventListener('click', () => { // при 'клике' по элементу modalToggle
        modalEnter.classList.add('show-menu') //  modalEnter добавляется класс 'show-menu'

        const popup = document.querySelector('.popup'); // поиск эдемента с классом '.popup'
        document.addEventListener('mousedown', closePopup); // обработчик события addEventListener добавляет событие - 'mousedown' из функции closePopup.
        document.addEventListener('keydown', closeByEsc); // обработчик события addEventListener добавляет событие - 'keydown' из функции closeByEsc.
    })

    modalClose.addEventListener('click', () => { // при 'клике' по элементу modalToggle
        modalEnter.classList.remove('show-menu') // on click close button remove class 'show-menu' from menu

        document.removeEventListener('mousedown', closePopup); // обработчик события removeEventListener удаляет событие - 'mousedown' из функции closePopup.
        document.removeEventListener('keydown', closeByEsc); // обработчик события removeEventListener удаляет событие - 'keydown' из функции closeByEsc.
    })
}