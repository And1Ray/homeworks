function calc() {

	//ModalCalc

	let calcBtn = document.getElementsByClassName('popup_calc_btn'),
			popupCalcBtn = document.getElementsByClassName('popup_calc_button')[0],
			popupCalcProfileBtn = document.getElementsByClassName('popup_calc_profile_button')[0],
			modalCalc = document.getElementsByClassName('popup_calc')[0],
			modalCalcProfile = document.getElementsByClassName('popup_calc_profile')[0],
			modalCalcEnd = document.getElementsByClassName('popup_calc_end')[0],
			closeCalc = document.getElementsByClassName('popup_calc_close');
		
	function addCalc() {
		for (let i = 0; i < calcBtn.length; i++) {
			calcBtn[i].addEventListener('click', () => {
				modalCalc.style.display = 'flex';
			});
		closeCalc[0].addEventListener('click', () => {
			modalCalc.style.display = 'none';
		});
		}
	}
	addCalc();

	function calcMod(btn, modal, modalprev) {
		btn.addEventListener('click', () => {
			modal.style.display = 'flex';
			modalprev.style.display = 'none';
			console.log(info);
			console.log(JSON.stringify(info));
		});
		for (let i = 0; i < closeCalc.length; i++) {
			closeCalc[i].addEventListener('click', () => {
				modal.style.display = 'none';
				info.form = undefined;
				info.widthInfo = undefined;
				info.heightInfo = undefined;
				info.typeInfo = undefined;
				info.temp = undefined;
				width.value = '';
				height.value = '';
			});
		}
	}

	calcMod(popupCalcBtn, modalCalcProfile, modalCalc);
	calcMod(popupCalcProfileBtn, modalCalcEnd, modalCalcProfile);

	//CalcPicture

	let iconsMini = document.getElementsByClassName('mini_img'),
			iconsBig = document.getElementsByClassName('big_png'),
			formWindow;


	function icons (icon, icBig) {
		for (let i = 0; i < icon.length; i++) {
			icon[i].addEventListener('click', (e) => {
				e.preventDefault();
				info.form = e.target;
				for (let j = 0; j < icon.length; j++) {
					if (j == i) {
						icon[j].style.width = '114px';
						icon[j].style.height = '67px';
						icBig[j].style.display = 'inline-block';
					} else {
						icon[j].style.width = '94px';
						icon[j].style.height = '47px';
						icBig[j].style.display = 'none';
					}
				}
			});
		}
	}
	icons(iconsMini, iconsBig);

	//calcWiHe

	let width = document.getElementById('width'),
	    height = document.getElementById('height');

	function check(elem) {
		elem.addEventListener('keyup', function () {
			this.value = this.value.replace(/[^\d]/,'').substr(0,6); 
		}); 
	}
	check(width);
	check(height);
	width.addEventListener('change', () => {
		info.widthInfo = width.value;
	});
	height.addEventListener('change', () => {
		info.heightInfo = height.value;
	});

	//calcCheckBox

	let checkBox = document.querySelectorAll('.checkbox');

	checkBox[0].addEventListener('click', (e) => {
		info.temp = 'cold';
		checkBox[1].checked = false;
	});
	checkBox[1].addEventListener('click', (e) => {
		info.temp = 'warm';
		checkBox[0].checked = false;
	});

	let select = document.getElementById('view_type');

	select.addEventListener('change', () => {
		info.typeInfo = select.value;
	});

		//ObjCalc
  let a, b, c, d, e;
	let info = {
		form: e,
		widthInfo: a,
		heightInfo: b,
		typeInfo: c,
		temp: d
	}

}

module.exports = calc;