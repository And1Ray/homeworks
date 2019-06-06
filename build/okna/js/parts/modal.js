function modal() {
	let btnPopupEngineer = document.querySelector('.popup_engineer_btn'),
			phoneLink = document.querySelectorAll('.phone_link'),
			modalPopupEngineer = document.querySelector('.popup_engineer'),
			closeButton = document.querySelectorAll('.popup_close'),
			modalPopup = document.querySelector('.popup');


	function modalWindowOpenClose (elem, value, modal) {
		elem.addEventListener('click', (e) => {
			e.preventDefault();
			modal.style.display = value;
		});

		modal.addEventListener('click', function(event) {
				let target = event.target;
				if (target == this) {
					modal.style.display = 'none';
			}
		});
	}

	modalWindowOpenClose (btnPopupEngineer, 'flex', modalPopupEngineer);
	modalWindowOpenClose (closeButton[1], 'none', modalPopupEngineer);

	for (let i = 0, j = 0; i < phoneLink.length, j < closeButton.length; i++, j++) {
		modalWindowOpenClose(phoneLink[i], 'flex', modalPopup);
		modalWindowOpenClose (closeButton[j], 'none', modalPopup);
	}

	function sixtySeconds(modal) {
  	modalPopup.style.display = 'flex';
	}
	setTimeout(sixtySeconds, 60000);
}

module.exports = modal;