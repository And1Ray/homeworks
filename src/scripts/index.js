$(document).ready(() => {
  //Validation form
  Vue.use(window.vuelidate.default);
  Vue.use(VueMask.VueMaskPlugin);

  const required = validators.required;
  const email = validators.email;
  const minLength = validators.minLength;
  const maxLength = validators.maxLength;

  new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data: {
      email: '',
      name: '',
      phone: '',
      mask: '+7(###)###-##-##',
      check: false
    },
    methods: {
      submitFormOffer() {
        this.check = true;
        if (!this.$v.name.$error && !this.$v.name.$invalid && !this.$v.phone.$error && !this.$v.phone.$invalid) {
          const info = {
            name: this.name,
            phone: this.phone
          };
          this.check = false;
          console.log(`Данные отправлены`, info);
        } else {
          this.check = true;
        }
      },
      submitFormFeedback() {
        this.check = true;
        if (!this.$v.$invalid && !this.$v.$error) {
          const info = {
            email: this.email,
            name: this.name,
            phone: this.phone
          };
          this.check = false;
          console.log(`Данные отправлены`, info);
        } else {
          this.check = true;
        }
      }
    },
    validations: {
      email: {
        email,
        required
      },
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(15)
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

  let count = 0;
  ymaps.ready(init());

  function init() {
      $('.footer__map').hover(function () {
        if (count === 0) {
          const myMap = new ymaps.Map("map", {
            center: [55.43287307, 37.26863050],
            zoom: 17
          });

          myMap.geoObjects.add(new ymaps.Placemark([55.43287307, 37.26863050], {
            balloonContent: '<strong>Мы здесь</strong>'
          }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
          }));

          myMap.behaviors.disable('scrollZoom');
        }
      }, function () {
        count = 1;
      });
  }

});