/*
document.addEventListener('DOMContentLoaded', () => {

  const popup = document.querySelector('.js-popup');
  const openBtnPopup = document.querySelector('.js-open-popup');
  const closeBtnPopup = document.querySelector('.js-close-popup');

  openBtnPopup.addEventListener('click', () => {
    popup.classList.add('popup_active');

    setTimeout(() => {
      popup.classList.remove('popup_active');
    }, 5000)
  });

  closeBtnPopup.addEventListener('click', () => {
    popup.classList.remove('popup_active');
  });

});*/

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

  $closeBtnPopup.click(() => { $popup.removeClass('popup_active'); })

  const $btnUp = $('.js-btn-up');

  $btnUp.click(function() {
    $('html, body').animate({scrollTop: 0},500);
  })

});