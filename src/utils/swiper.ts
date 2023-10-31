import 'swiper/css';

import $ from 'jquery';
import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

// Home Swiper

function articlesSwiper() {
  // swiper show - programmation
  $('.blog-cards_component').each(function () {
    const id = $(this).data('id');

    new Swiper($(this).find('.swiper.is-3-cards')[0], {
      modules: [Navigation, Mousewheel, Keyboard],
      direction: 'horizontal',
      slidesPerView: 1,
      //* bug on loop à régler
      loop: true,
      grabCursor: true,
      slideToClickedSlide: true,
      autoHeight: false,
      speed: 500,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        thresholdDelta: 1,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        // Navigation arrows
        nextEl: `.swiper-button-next[data-nav-id="${id}"]`,
        prevEl: `.swiper-button-prev[data-nav-id="${id}"]`,
      },
      slideActiveClass: 'is-active',
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
        // tablet
        768: {
          slidesPerView: 2,
          spaceBetween: '4%',
        },
        // desktop
        992: {
          slidesPerView: 3,
          spaceBetween: '4%',
        },
      },
    });
  });
}

function referencesSwiper() {
  // swiper show - programmation
  $('.home-references_swiper-w').each(function () {
    const id = $(this).data('id');

    new Swiper($(this).find('.swiper.is-1-card')[0], {
      modules: [Navigation, Mousewheel, Keyboard],
      direction: 'horizontal',
      //* bug on loop à régler
      loop: true,
      grabCursor: true,
      slideToClickedSlide: true,
      autoHeight: true,
      speed: 500,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        thresholdDelta: 1,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        // Navigation arrows
        nextEl: `.swiper-button-next[data-nav-id="${id}"]`,
        prevEl: `.swiper-button-prev[data-nav-id="${id}"]`,
      },
      slideActiveClass: 'is-active',
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
        // tablet
        768: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
        // desktop
        992: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
      },
    });
  });
}

// Blog Swiper
function uneBlogSwiper() {
  // swiper show - programmation
  $('.blog-cards-une_component, .accompli_wrapper').each(function () {
    const id = $(this).data('id');

    new Swiper($(this).find('.swiper.is-blog-hero, .swiper.is-accompli')[0], {
      modules: [Navigation, Mousewheel, Keyboard],
      direction: 'horizontal',
      //* bug on loop à régler
      loop: true,
      grabCursor: true,
      slideToClickedSlide: true,
      autoHeight: true,
      speed: 500,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        thresholdDelta: 1,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        // Navigation arrows
        nextEl: `.swiper-button-next[data-nav-id="${id}"]`,
        prevEl: `.swiper-button-prev[data-nav-id="${id}"]`,
      },
      slideActiveClass: 'is-active',
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
        // tablet
        768: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
        // desktop
        992: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
      },
    });
  });
}

// Blog Swiper
function chiffresSwiper() {
  // swiper show - programmation
  $('.chiffres_slider-w').each(function () {
    const id = $(this).data('id');

    new Swiper($(this).find('.swiper.is-chiffres')[0], {
      modules: [Navigation, Mousewheel, Keyboard],
      direction: 'horizontal',
      //* bug on loop à régler
      loop: true,
      grabCursor: true,
      slideToClickedSlide: true,
      autoHeight: true,
      speed: 500,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        thresholdDelta: 1,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        // Navigation arrows
        nextEl: `.swiper-button-next[data-nav-id="${id}"]`,
        prevEl: `.swiper-button-prev[data-nav-id="${id}"]`,
      },
      slideActiveClass: 'is-active',
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
        // tablet
        768: {
          slidesPerView: 1,
          spaceBetween: '4%',
        },
        // desktop
        992: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      },
    });
  });
}

export { articlesSwiper, chiffresSwiper, referencesSwiper, uneBlogSwiper };
