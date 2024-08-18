document.addEventListener('DOMContentLoaded', function() { //убедиться что документ загрузился и нам безопсно выбирать элементы на странице. document - это html. DOMContentLoaded - это событие происходит при загрузке страницы один раз
    // получаем кнопки и табы
    const userButtons = document.querySelectorAll('.user-button') //querySelectorAll - выберет все элементы с классом .user-button.
    const userTabs = document.querySelectorAll('.user-tab') //querySelectorAll - выберет все элементы с классом .user-tab.

    // перебираем все кнопки и повесим на них событие клика
    userButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const userId = event.target.dataset.userId // безопасно так как в кнопке только текст, в другом случае "const userid = event.target.closest('.user-button').dataset.userid"

            //удаляем класс active у всех кнопок и табов
            userButtons.forEach(button => button.classList.remove('active')) // удаляет у кнопок active
            userTabs.forEach(tab => tab.classList.remove('active')) // удаляет у tab active

            // добавляем класс active текущей кнопке и табу
            button.classList.add('active')
            document.querySelector(`.user-tab[data-user-id="${userId}"]`).classList.add('active')
        })
    })
})