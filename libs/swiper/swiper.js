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
    breackpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        2920: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});