document.addEventListener('DOMContentLoaded', () => {

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

  //lazyLoad
  function lazy(el) {
    new LazyLoad({
      elements_selector: el,
      threshold: $(window).height(),
      callback_load() {
        if ($(window).data('plugin_stellar')) {
          $(window)
            .data('plugin_stellar')
            .refresh();
        }
      }
    });
  }

  lazy('.js-lazy');

  //popup
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

  //btn Up
  $('.js-btn-up').click(function () {
    $('html, body').animate({scrollTop: 0}, 500);
  });

  //slider
  const $slider = $(".js-slider");
  const $nav = $('.owl-nav');
  $slider.owlCarousel({
    items: 3,
    margin: 30,
    nav: true,
    loop: true,
    autoHeight: false,
    onInitialized: function nonNav() {
      if ($nav.hasClass('disabled')) {
        $nav.removeClass('disabled');
      }
    },
    onChanged: function nonNav() {
      if ($nav.hasClass('disabled')) {
        $nav.removeClass('disabled');
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
    $slider.trigger("next.owl.carousel");
  });
  $(".prev").click(function () {
    $slider.trigger("prev.owl.carousel");
  });

  //animation
  const $pointStart = $('.slider').offset().top;
  const $items = $('.price__item');
  const $up = $('.button-up');
  const $pointBtn = $('.offer').offset().top;
  const $pointMap = $('.guarantee').offset().top;
  let count = 0;

  $(window).scroll(() => {
    if ($(document).scrollTop() >= $pointStart) {
      $items.each((i, item) => {
        $(item).addClass('js-rise');
      });
    }

    if ($(document).scrollTop() >= $pointMap && count === 0) {
      $('.footer__map').append('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa6598ded4d16efd464668430f23da4cf05f682a6e648171fa8a3429d7ae2205c&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script>');
      count +=1;
    }

    if ($(document).scrollTop() >= $pointBtn) {
      $up.removeClass('hide-btn').addClass('show-btn');
    } else if ($(document).scrollTop() === 0) {
      $up.removeClass('show-btn').addClass('hide-btn');
    }
  });

});
