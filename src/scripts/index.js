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

});