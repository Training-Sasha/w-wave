const GUESTS = [{
        name: "Сергей Денисов",
        description: "Один из самых известных современных российских писателей и сценаристов, автор множества книг и киносценариев.",
        photo: "img/plug.jpg",
    },
    {
        name: "Матвей Мечников",
        description: "Выдающийся ученый, доктор физико-математических наук, профессор, специалист в области теоретической физики.",
        photo: "img/plug.jpg",
    },
    {
        name: "Иван Калитников",
        description: "Известный актер театра и кино, режиссер, сценарист и продюсер.",
        photo: "img/plug.jpg",
    },
    {
        name: "Денис Тельман",
        description: "Художник-абстракционист, создающий уникальные цветовые композиции.",
        photo: "img/plug.jpg",
    },
    {
        name: "Евгений Войновский",
        description: "Композитор, пишущий музыку для кинофильмов, завоевавший множество наград.",
        photo: "img/plug.jpg",
    },
    {
        name: "Ольга Мартынова",
        description: "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты Коммерсантъ. Ведёт активную блогерскую деятельность как куратор музея Гараж, коим является с 2016 года.",
        photo: "img/guests-1.jpg",
    },
    {
        name: "Дмитрий Михалок",
        description: "Танцор, основатель собственного стиля, изменивший мир танца навсегда.",
        photo: "img/plug.jpg",
    },
    {
        name: "Пётр Пиотровский",
        description: "Фотограф, запечатлевший красоту природы и человеческого духа.",
        photo: "img/plug.jpg",
    },
    {
        name: "Юрий Горин",
        description: "Актер, играющий глубокие психологические роли, вызывающий восторг критиков.",
        photo: "img/plug.jpg",
    },
    {
        name: "Олег Свиридовский",
        description: "Дирижер, управляющий симфоническим оркестром с виртуозной легкостью.",
        photo: "img/plug.jpg",
    },
    {
        name: "Владислав Кауперс",
        description: "Автор, создавший серию бестселлеров о приключениях юного героя.",
        photo: "img/plug.jpg",
    },
    {
        name: "Михаил Пожитников",
        description: "Режиссёр, превративший театр в площадку для экспериментов и инноваций.",
        photo: "img/plug.jpg",
    },
    {
        name: "Георгий Полуян",
        description: "Пианист, исполняющий классические произведения с непревзойденным мастерством.",
        photo: "img/plug.jpg",
    },
    {
        name: "Максим Сергеев",
        description: "Гитарист, исполняющий виртуозные соло, вдохновляющий поколения музыкантов.",
        photo: "img/plug.jpg",
    },
];

const guestItems = document.querySelectorAll('.guest-item')

guestItems.forEach((item) => {
    item.addEventListener('click', selectGuest)
})

function selectGuest(event) {
    const guestIndex = event.target.dataset.index
    const selectedGuest = GUESTS[guestIndex] // update selected guest in HTML
}

// Получаем элементы
const guestName = document.querySelector('.ac-text-item[data-content=""]');
const guestDescription = document.querySelector('#guest-description');
const guestImage = document.querySelector('#guest-image');

if (guestName && guestDescription && guestImage) {
    // Устанавливаем контент
    guestName.textContent = selectGuest.name;
    guestDescription.textContent = selectGuest.description;
    guestImage.setAttribute('src', selectGuest.photo);
}