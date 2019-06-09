$(document).ready(() => {
  //Validation form
    Vue.use(window.vuelidate.default);
    Vue.use(VueMask.VueMaskPlugin);

  const required = validators.required;
  const email = validators.email;

  new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data: {
      email: '',
      name: '',
      phone: '',
      mask: '+#(###)###-##-##'
    },
    methods: {

    },
    validations: {
      email: {
        email,
        required
      },
      name: {
        required
      },
      phone: {
        required
      }
    }
  });

  const $popup = $('.js-popup');
  const $openBtnPopup = $('.js-open-popup');
  const $closeBtnPopup = $('.js-close-popup');

  let int;

  $openBtnPopup.click(() => {
    clearInterval(int);
    $popup.addClass('popup_active');
    int = setTimeout(() => {
      $popup.removeClass('popup_active');
    }, 5000);
  });

  $closeBtnPopup.click(() => {
    $popup.removeClass('popup_active');
  });

  const $btnUp = $('.js-btn-up');

  $btnUp.click(function () {
    $('html, body').animate({scrollTop: 0}, 500);
  });

  //slider
  $(".js-slider").owlCarousel({
    items: 3,
    margin: 30,
    nav: true,
    loop: true,
    autoHeight: false,
    onInitialized: function nonNav() {
      if ($('.owl-nav').hasClass('disabled')) {
        $('.owl-nav').removeClass('disabled');
      }
    },
    onChanged: function nonNav() {
      if ($('.owl-nav').hasClass('disabled')) {
        $('.owl-nav').removeClass('disabled');
      }
    },
    responsive: {
      768: {
        items: 3,
        dots: false,
        autoHeight: false,
        autoWidth: false
      },
      320: {
        items: 1,
        dots: false,
        autoHeight: false,
        autoWidth: false
      }
    }
  });

  $(".next").click(function () {
    $(".js-slider").trigger("next.owl.carousel");
  });
  $(".prev").click(function () {
    $(".js-slider").trigger("prev.owl.carousel");
  });

  //animation

  const $pointStart = $('.slider').offset().top;
  const $items = $('.price__item');
  const $up = $('.button-up');
  const $pointBtn = $('.offer').offset().top;

  $(window).scroll(() => {
    if ($(document).scrollTop() >= $pointStart) {
      $items.each((i, item) => {
        $(item).addClass('js-rise');
      });
    }

    if ($(document).scrollTop() >= $pointBtn) {
      $up.removeClass('hide-btn');
      $up.addClass('show-btn');
    } else if ($(document).scrollTop() === 0) {
      $up.removeClass('show-btn');
      $up.addClass('hide-btn');
    }
  });
});