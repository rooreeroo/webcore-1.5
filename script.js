if (document.documentElement.clientWidth < 500) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1.2,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

    });
} else {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        slidesPerView: 2,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

    });
}
function readMore() {
    if (document.querySelector('.hidden').style.display !== 'flex') {
        document.querySelector('.slider__big').style.gridAutoRows = '90px';
        document.querySelector('.visible').style.display = 'none';
        document.querySelector('.hidden').style.display = 'flex';
    } else {
        document.querySelector('.slider__big').style.gridAutoRows = '0';
        document.querySelector('.visible').style.display = 'flex';
        document.querySelector('.hidden').style.display = 'none';
    }
}
