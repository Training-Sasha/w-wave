// alert('sdf')

// ACCORDION

new Accordion('.accordion-container');

// CHOICES

const element = document.querySelector(".js-choice")

const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ""
})

// TABS

document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

    const tabs = () => { // объявляем основную функцию для вкладок, чтобы вся логика была в одном месте
        const head = document.querySelector('.tabs__head') // ищем элемент с кнопками и записываем в константу
        const body = document.querySelector('.tabs__body') // ищем элемент с контентом и записываем в константу

        const getActiveTabName = () => { // объявляем функцию для получения названия активной вкладки
            return head.querySelector('.tabs__caption_active').dataset.tab // возвращаем значение data-tab активной кнопки
        }

        const setActiveContent = () => { // объявляем функцию для установки активного элемента контента
            if (body.querySelector('.tabs__content_active')) { // если уже есть активный элемент контента
                body.querySelector('.tabs__content_active').classList.remove('tabs__content_active') // то скрываем его
            }
            body.querySelector(`[data-tab='${getActiveTabName()}']`).classList.add('tabs__content_active') // затем ищем элемент контента, у которого значение data-tab совпадает со значением data-tab активной кнопки и отображаем его
        }

        // проверяем при загрузке страницы, есть ли активная вкладка
        if (!head.querySelector('.tabs__caption_active')) { // если активной вкладки нет
            head.querySelector('.tabs__caption').classList.add('tabs__caption_active') // то делаем активной по-умолчанию первую вкладку
        }

        setActiveContent(getActiveTabName()) // устанавливаем активный элемент контента в соответствии с активной кнопкой при загрузке страницы

        head.addEventListener('click', e => { // при клике на .tabs__head
            const caption = e.target.closest('.tabs__caption') // узнаем, был ли клик на кнопке
            if (!caption) return // если клик был не на кнопке, то прерываем выполнение функции
            if (caption.classList.contains('tabs__caption_active')) return // если клик был на активной кнопке, то тоже прерываем выполнение функции и ничего не делаем

            if (head.querySelector('.tabs__caption_active')) { // если уже есть активная кнопка
                head.querySelector('.tabs__caption_active').classList.remove('tabs__caption_active') // то удаляем ей активный класс
            }

            caption.classList.add('tabs__caption_active') // затем добавляем активный класс кнопке, на которой был клик

            setActiveContent(getActiveTabName()) // устанавливаем активный элемент контента в соответствии с активной кнопкой
        })
    }

    tabs() // вызываем основную функцию

})

// form_validation

const selector = document.querySelector("input[type='tel']");

const im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate(".form", {
    rules: {
        name: {
            required: true,
            minLength: 2,
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            },
        },
        mail: {
            required: "Вы не ввели e-mail",
            email: true,
        },
    },

    messages: {
        mail: {
            required: "Вы не ввели e-mail",
            email: "Введите корректный e-mail",
        },
        name: {
            required: "Вы не ввели имя",
            minLenght: "Имя должно содержать минимум 2 символа",
        },
        tel: {
            required: "Вы не ввели телефон",
            function: "Недостаточноное колличество символов",
        },
    },
    colorWrong: "#FF5C00",
});