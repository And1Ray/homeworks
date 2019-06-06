$(document).ready(() => {
  const $popup = $('.js-popup');
  const $openBtnPopup = $('.js-open-popup');
  const $closeBtnPopup = $('.js-close-popup');

  $openBtnPopup.click(() => {
    $popup.addClass('popup_active');

    setTimeout(() => {
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
    responsive:{
      768:{
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

  $(".next").click(function(){
    $(".js-slider").trigger("next.owl.carousel");
  });
  $(".prev").click(function(){
    $(".js-slider").trigger("prev.owl.carousel");
  });
});