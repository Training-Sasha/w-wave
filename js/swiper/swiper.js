let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction"
    },
    navigation: {
        nextEl: ".about__swiper-btn--next",
        prevEl: ".about__swiper-btn--prev"
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        440: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 27,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1920: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});