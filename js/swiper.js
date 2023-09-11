if (window.innerWidth < 768) {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10,
        slidesPerView: (document.documentElement.clientWidth - 20) / 240,
        breakpoints: {
            // when window width is >= 320px
            400: {
                slidesPerView: (document.documentElement.clientWidth - 25) / 240,
                spaceBetween: 15
            },
            // when window width is >= 480px
            520: {
                slidesPerView: (document.documentElement.clientWidth - 50) / 240,
                spaceBetween: 20
            },
            768: {
                enable: false
            }


        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

    });

} else {
    if (window.innerWidth >= 768) {
        let slider = document.body.querySelector('.swiper-wrapper')
        slider.classList.remove('swiper-wrapper')
    }

}
document.querySelector('.brands__buttons--button').addEventListener('click', readMore)
function readMore() {
    document.querySelector('.brands__list__wrapper').classList.toggle('autoRows')
    document.querySelector('.brands__buttons--img').classList.toggle('rotate')

    if (document.querySelector('.textContent').textContent === 'Показать все') {
        document.querySelector('.textContent').textContent = 'Скрыть'

    } else {
        document.querySelector('.textContent').textContent = 'Показать все';

    }
}
