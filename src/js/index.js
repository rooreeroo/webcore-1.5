import '../scss/style.scss'

document.querySelector('.navigation__button--burger').addEventListener('click', menuOpenFn)
document.querySelector('.navigation__button--close').addEventListener('click', menuOpenFn)
document.querySelector('.menu-wrapper').addEventListener('click', menuCloseFn)
function menuOpenFn() {
    document.querySelector('.menu').classList.contains('menu--open') ?
      document.body.style.overflowY = 'auto' :
      document.body.style.overflowY = 'hidden';
    document.querySelector('.menu').classList.toggle('menu--open')
    document.querySelector('.menu-wrapper').classList.toggle('menu-wrapper--active')
}
function menuCloseFn(e) {
    if (e.target === document.querySelector('.menu-wrapper')) {
        document.querySelector('.menu').classList.remove('menu--open')
        document.querySelector('.menu-wrapper').classList.remove('menu-wrapper--active')
        document.body.style.overflowY = 'auto'
    }
}
if (window.innerWidth >= 1366) {
    document.querySelector('.menu').classList.contains('menu--open') ?
        document.querySelector('.menu-wrapper').classList.remove('menu-wrapper--active') :
        document.querySelector('.menu').classList.add('menu--open')
    document.querySelector('.menu').classList.contains('menu--open') ?
      document.body.style.overflowY = 'auto' :
      null
}
window.addEventListener('resize', menuStatic)
function menuStatic() {
    if (window.innerWidth >= 1366) {
        document.querySelector('.menu').classList.contains('menu--open') ?
          document.querySelector('.menu-wrapper').classList.remove('menu-wrapper--active') :
          document.querySelector('.menu').classList.add('menu--open')
    } else {
        if (document.querySelector('.menu').classList.contains('menu--open') && document.querySelector('.menu-wrapper').classList.contains('menu__wrapper--active')) {
            null
        } else {
            document.querySelector('.menu-wrapper').classList.contains('menu-wrapper--active') ?
              document.querySelector('.menu-wrapper').classList.remove('menu-wrapper--active') :
              null;
            document.querySelector('.menu').classList.contains('menu--open') ?
              document.querySelector('.menu').classList.remove('menu--open') :
              null;
        }


    }
}

let swipers;
const breakpointSwiper = window.matchMedia('(max-width: 767px)')
if (breakpointSwiper.matches) {
    swipers = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10,
        slidesPerView: (document.documentElement.clientWidth - 20) / 240,
        breakpoints: {
            400: {
                slidesPerView: (document.documentElement.clientWidth - 25) / 240,
                spaceBetween: 15
            },
            520: {
                slidesPerView: (document.documentElement.clientWidth - 50) / 240,
                spaceBetween: 20
            },
            768: {
                enable: false
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
} else {
    if (document.querySelector('.swiper').classList.contains('swiper-initialized')) {
        for (let slider of swipers) {
            slider.destroy()
        }
    }
    let slider = document.body.querySelectorAll('.swiper-wrapper')
    for (let slide of slider)
    slide.classList.remove('swiper-wrapper')
}
const brandsButton = document.querySelector('.brands__button')
const brandsWrapper = document.querySelector('.brands__wrapper')
const brandsImg = document.querySelector('.brands__img')
const brandsText = document.querySelector('.brands__text')

brandsButton.addEventListener('click', showBrands)
function showBrands() {
    brandsWrapper.classList.toggle('brands__wrapper--autoRows')
    brandsImg.classList.toggle('brands__img--rotate')
    if (brandsText.textContent === 'Показать все') {
        brandsText.textContent = 'Скрыть'
    } else {
        brandsText.textContent = 'Показать все'
    }
}
const descriptionButton = document.querySelector('.description__button')
const desctiptionText = document.querySelector('.description__text')
const descriptionImg = document.querySelector('.description__img')
const descriptionBtnText = document.querySelector('.description__button--text')

descriptionButton.addEventListener('click', readMore)
function readMore() {
    desctiptionText.classList.toggle('description__text--active')
    descriptionImg.classList.toggle('description__img--rotate')
    if (descriptionBtnText.textContent === 'Читать далее') {
        descriptionBtnText.textContent = 'Скрыть'
    } else {
        descriptionBtnText.textContent = 'Читать далее'
    }
}
const techButton = document.querySelector('.tech__button')
const techWrapper = document.querySelector('.tech__wrapper')
const techImg = document.querySelector('.tech__img')
const techText = document.querySelector('.tech__text')

techButton.addEventListener('click', showTech)
function showTech() {
    techWrapper.classList.toggle('tech__wrapper--autoRows')
    techImg.classList.toggle('tech__img--rotate')
    if (techText.textContent === 'Показать все') {
        techText.textContent = 'Скрыть'
    } else {
        techText.textContent = 'Показать все'
    }
}

let buttonsCall = document.querySelectorAll('.button__call')
const modalCall = document.querySelector('.modal-call__wrapper')
const modalCallBtnClose = document.querySelector('.modal-call__button-close')

for (let button of buttonsCall) {
    button.addEventListener('click', modalCallOpCls)
}
modalCallBtnClose.addEventListener('click', modalCallOpCls)

function modalCallOpCls() {
    modalCall.classList.toggle('modal-call__wrapper--open');

    (modalCall.classList.contains('modal-call__wrapper--open') || document.querySelector('.menu').classList.contains('menu--open')) ?
      document.body.style.overflowY = 'hidden':
      document.body.style.overflowY = 'auto'

}
let buttonsFeedback = document.querySelectorAll('.button__chat')
const modalFeedback = document.querySelector('.modal-feedback__wrapper')
const modalFeedbackBtnClose = document.querySelector('.modal-feedback__button-close')

for (let button of buttonsFeedback) {
    button.addEventListener('click', modalFeedbackOpCls)
}
modalFeedbackBtnClose.addEventListener('click', modalFeedbackOpCls)

function modalFeedbackOpCls() {
    modalFeedback.classList.toggle('modal-feedback__wrapper--open');

    (modalFeedback.classList.contains('modal-feedback__wrapper--open') || document.querySelector('.menu').classList.contains('menu--open')) ?
      document.body.style.overflowY = 'hidden':
      document.body.style.overflowY = 'auto'

}
modalCall.addEventListener('click', modalCallClose)
function modalCallClose(e) {
    if (e.target === modalCall) {
        modalCall.classList.remove('modal-call__wrapper--open');

        (modalCall.classList.contains('modal-call__wrapper--open') || document.querySelector('.menu').classList.contains('menu--open')) ?
          document.body.style.overflowY = 'hidden':
          document.body.style.overflowY = 'auto'
    }
}
modalFeedback.addEventListener('click', modalFeedbackClose)
function modalFeedbackClose(e) {
    if (e.target === modalFeedback) {
        modalFeedback.classList.remove('modal-feedback__wrapper--open');

        (modalFeedback.classList.contains('modal-feedback__wrapper--open') || document.querySelector('.menu').classList.contains('menu--open')) ?
          document.body.style.overflowY = 'hidden':
          document.body.style.overflowY = 'auto'
    }
}





