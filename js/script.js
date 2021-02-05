$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__menu-body').toggleClass('active');
    })
})

new Swiper('.comments__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    simulateTouch: false,
    spaceBetween: 60,
});