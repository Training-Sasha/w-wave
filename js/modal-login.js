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
const modalLogin = document.getElementById('modal-login'), // this is burger menu itself
    modalLoginToggle = document.querySelectorAll('.modal-login--btn'), // this is burger button
    modalLoginClose = document.getElementById('modal-login-close') // this is close button inside menu

/* Validate if constant exists */
if (modalLoginToggle && modalLoginClose) { // условие для modalToggle и modalClose
    function closePopup(e) { // условие функции closePopup 
        if (e.target.closest('.popup') === null) { // цель условия исключить обработку событий клика внутри .popup  
            modalLogin.classList.remove('show-menu') //  сlassList.remove удаляет у modalLogin класс 'show-menu'

            document.removeEventListener('mousedown', closePopup); // mousedown/mouseup. Кнопка мыши нажата/отпущена над элементом function closePopup
            document.removeEventListener('keydown', closeByEsc); // removeEventListener() Удаляет 'keydown', function closeByEsc
        }
    }

    function closeByEsc(e) { // условие функции closeByEsc
        if (e.key === 'Escape') { // условие, которое произойдет при клике на клавишу Escape, условие проверяет нажата ли клавиша ESC, если нажата, то код будет выполнен
            modalLogin.classList.remove('show-menu') // сlassList.remove удаляет у modalLogin класс 'show-menu'

            document.removeEventListener('keydown', closeByEsc); // обработчик события removeEventListener удаляет событие - 'keydown' из функции closeByEsc. 
            document.removeEventListener('mousedown', closePopup); // обработчик события removeEventListener удаляет событие - 'mousedown' из функции closePopup.
        }
    }

    modalLoginToggle.forEach((loginButton) => {
        loginButton.addEventListener('click', () => {
            modalLogin.classList.add('show-menu')

            const popup = document.querySelector('.popup');
            document.addEventListener('mousedown', closePopup);
            document.addEventListener('keydown', closeByEsc);
        })
    })
    modalLoginToggle.addEventListener('click', () => { // при 'клике' по элементу modalLoginToggle
        modalLogin.classList.add('show-menu') //  modalLogin добавляется класс 'show-menu'

        const popup = document.querySelector('.popup'); // поиск эдемента с классом '.popup'
        document.addEventListener('mousedown', closePopup); // обработчик события addEventListener добавляет событие - 'mousedown' из функции closePopup.
        document.addEventListener('keydown', closeByEsc); // обработчик события addEventListener добавляет событие - 'keydown' из функции closeByEsc.
    })
    modalLoginClose.addEventListener('click', () => { // при 'клике' по элементу modalLoginToggle
        modalLogin.classList.remove('show-menu') // on click close button remove class 'show-menu' from menu

        document.removeEventListener('mousedown', closePopup); // обработчик события removeEventListener удаляет событие - 'mousedown' из функции closePopup.
        document.removeEventListener('keydown', closeByEsc); // обработчик события removeEventListener удаляет событие - 'keydown' из функции closeByEsc.
    })
}