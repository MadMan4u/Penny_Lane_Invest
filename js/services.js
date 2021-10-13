const sliderOne = new Swiper(".slider__one", {
  slidesPerView: 'auto',
  sliderPerGroup: 1,
  spaceBetween: 110,
  grabCursor: !0,
  scrollbar: {
    el: ".swiper-scrollbar",
    dragSize: 307,
  },
});
const sliderDescr = new Swiper(".slider__descr", {
  slidesPerView: "1",
  spaceBetween: 300,
  thumbs: {
    swiper: sliderOne,
  },
});
const sliderTwo = new Swiper(".slider__two", {
  simulateTouch: !1,
  spaceBetween: 80,
  thumbs: {
    swiper: sliderOne,
  },
});
const sliderInTwo = new Swiper(".slider__intwo", {
  slidesPerView: 3,
  spaceBetween: 20,
  grabCursor: !0,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1420: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
const sliderOne1 = new Swiper(".slider__one1", {
  slidesPerView: "auto",
  // spaceBetween: 110,
  grabCursor: !0,
  scrollbar: {
    el: ".swiper-scrollbar",
    dragSize: 197,
  },
  breakpoints: {
    320: {
      spaceBetween: 0,
    },
    680: {
      spaceBetween: 110,
    }
  }
});
const sliderTwo1 = new Swiper(".slider__two1", {
  slidesPerView: "auto",
  spaceBetween: 150,
  thumbs: {
    swiper: sliderOne1,
  },
});
