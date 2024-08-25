// ACCORDION

new Accordion('.accordion-container');

// CHOICES

const element = document.querySelector(".js-choice")

const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ""
})

// form_validation

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

    },
    colorWrong: "#FF5C00",
});