(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function () {

	let tabs = require('../parts/tabs.js');
	let calc = require('../parts/calc.js');
	let forms = require('../parts/forms.js');
	let modal = require('../parts/modal.js');
	let click = require('../parts/clickPicture.js');
	let timer = require('../parts/timer.js');

	tabs();
	calc();
	forms();
	modal();
	click();
	timer();

});
},{"../parts/calc.js":2,"../parts/clickPicture.js":3,"../parts/forms.js":4,"../parts/modal.js":5,"../parts/tabs.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
function click() {
	let divPicture = document.createElement('div'),
			imgPicture = document.createElement('img'),
			zoom = document.getElementsByClassName('zoom'),
			zoomPic = document.querySelectorAll('.zoom > a'),
			ourWorks = document.querySelector('.works');

			divPicture.classList.add('div_picture');
			imgPicture.classList.add('div_picture_img');

	for (let i = 0; i < zoom.length; i++) {
		zoom[i].addEventListener('click', (event) => {
			event.preventDefault();
			divPicture.style.display = 'flex';
			ourWorks.appendChild(divPicture);
			divPicture.appendChild(imgPicture);
			for (let i = 0; i < zoomPic.length; i++) {
				zoomPic[i].getAttribute('href');
			}
			imgPicture.setAttribute('src', zoomPic[i].href);
		});
	}

	divPicture.addEventListener('click', (event) => {
		let target = event.target;
		if (target == divPicture) {
			divPicture.style.display = 'none';
		}
	});
}

module.exports = click;
},{}],4:[function(require,module,exports){
function forms() {
	let message = new Object();
			message.loading = 'Загрузка...';
			message.success = 'Спасибо! Скоро мы с вами свяжемся.';
			message.failure = 'Что то пошло не так...';

	let form = document.getElementsByClassName('form'),
			input,
			statusMessage = document.createElement('div');
			statusMessage.classList.add('status');

			for(let i = 0; i < form.length; i++) {
			  input = form[i].getElementsByTagName('input');
			}


	function sendForm (elem) {
 		elem.addEventListener('submit', function (e) {
		e.preventDefault();
		elem.appendChild(statusMessage);
		let formData = new FormData(elem);

		function postData(data) {
			return new Promise(function(resolve, reject){
				let request = new XMLHttpRequest();
				request.open('POST', 'server.php');
				request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				request.onreadystatechange = function () {
			if (request.readyState < 4) {
				resolve()
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						resolve()
					} else {
						reject()
					}
				}
			}
			request.send(data);
		});
		}
		postData(formData)
			.then(()=> statusMessage.style.color = 'black')
			.then(()=> statusMessage.innerHTML = message.loading)
			.then(()=> statusMessage.innerHTML = message.success)
			.catch(()=> statusMessage.innerHTML = message.failure)
	 });
	}
	function clearInput () {
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	}

	for (let i = 0; i < form.length; i++) {
		sendForm(form[i]);
		clearInput();
	}

	
	let phone = document.getElementsByName('user_phone');
	
	for (let i = 0; i < phone.length; i++) {
		phone[i].addEventListener('keyup', function () {
			this.value = this.value.replace(/[^\d]/,'').substr(0,11); 
		});
	}
}

module.exports = forms;
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
function tabs() {
		let tabGlazing = document.getElementsByClassName('glazing_slider_tab'),
			tabContentGlazing = document.getElementsByClassName('tab_content_link');

	let tabDecoration = document.getElementsByClassName('decoration_tab'),
			tabContentDecoration = document.getElementsByClassName('tab_content_decoration');

	function tabs (tab, tabContent, classen) {
		for (let i = 0; i < tab.length; i++) {
			tab[i].addEventListener('click', function() {
				for (let j = 0; j < tab.length; j++) {
					if (j == i) {
						tab[j].classList.add(classen);
						tabContent[j].style.display = 'block';
					} else {
						tab[j].classList.remove(classen);
						tabContent[j].style.display = 'none';
					}
				}
			});
		}
	}

	tabs(tabGlazing, tabContentGlazing, 'active');
	tabs(tabDecoration, tabContentDecoration, 'after_click');
}

module.exports = tabs;
},{}],7:[function(require,module,exports){
function timer() {
	let deadline = '2019-07-06';

	function getTimeRemaining (endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()) - 10800000,
		seconds = Math.floor( (t/1000) % 60 ),
		minutes = Math.floor( (t/1000/60) % 60),
		hours = Math.floor( (t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock (id, endtime = deadline) {
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

				function updateClock () {
					let t = getTimeRemaining(endtime);
					hours.innerHTML = t.hours;
					if (hours.innerHTML < 10) hours.innerHTML = '0' + hours.innerHTML;
					minutes.innerHTML = t.minutes;
					if (minutes.innerHTML < 10) minutes.innerHTML = '0' + minutes.innerHTML;
					seconds.innerHTML = t.seconds;
					if (seconds.innerHTML < 10) seconds.innerHTML = '0' + seconds.innerHTML;

					let timeInterval = setInterval(updateClock, 1000);


					if (t.total <= 0) {
						clearInterval(timeInterval);
						hours.innerHTML = '00';
						minutes.innerHTML = '00';
						seconds.innerHTML = '00';
						}
				};
				updateClock();
				
	};
	setClock('timer');
}

module.exports = timer;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNjcmlwdC5qcyIsIi4uL3BhcnRzL2NhbGMuanMiLCIuLi9wYXJ0cy9jbGlja1BpY3R1cmUuanMiLCIuLi9wYXJ0cy9mb3Jtcy5qcyIsIi4uL3BhcnRzL21vZGFsLmpzIiwiLi4vcGFydHMvdGFicy5qcyIsIi4uL3BhcnRzL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGxldCB0YWJzID0gcmVxdWlyZSgnLi4vcGFydHMvdGFicy5qcycpO1xyXG5cdGxldCBjYWxjID0gcmVxdWlyZSgnLi4vcGFydHMvY2FsYy5qcycpO1xyXG5cdGxldCBmb3JtcyA9IHJlcXVpcmUoJy4uL3BhcnRzL2Zvcm1zLmpzJyk7XHJcblx0bGV0IG1vZGFsID0gcmVxdWlyZSgnLi4vcGFydHMvbW9kYWwuanMnKTtcclxuXHRsZXQgY2xpY2sgPSByZXF1aXJlKCcuLi9wYXJ0cy9jbGlja1BpY3R1cmUuanMnKTtcclxuXHRsZXQgdGltZXIgPSByZXF1aXJlKCcuLi9wYXJ0cy90aW1lci5qcycpO1xyXG5cclxuXHR0YWJzKCk7XHJcblx0Y2FsYygpO1xyXG5cdGZvcm1zKCk7XHJcblx0bW9kYWwoKTtcclxuXHRjbGljaygpO1xyXG5cdHRpbWVyKCk7XHJcblxyXG59KTsiLCJmdW5jdGlvbiBjYWxjKCkge1xyXG5cclxuXHQvL01vZGFsQ2FsY1xyXG5cclxuXHRsZXQgY2FsY0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BvcHVwX2NhbGNfYnRuJyksXHJcblx0XHRcdHBvcHVwQ2FsY0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BvcHVwX2NhbGNfYnV0dG9uJylbMF0sXHJcblx0XHRcdHBvcHVwQ2FsY1Byb2ZpbGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3B1cF9jYWxjX3Byb2ZpbGVfYnV0dG9uJylbMF0sXHJcblx0XHRcdG1vZGFsQ2FsYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BvcHVwX2NhbGMnKVswXSxcclxuXHRcdFx0bW9kYWxDYWxjUHJvZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BvcHVwX2NhbGNfcHJvZmlsZScpWzBdLFxyXG5cdFx0XHRtb2RhbENhbGNFbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3B1cF9jYWxjX2VuZCcpWzBdLFxyXG5cdFx0XHRjbG9zZUNhbGMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3B1cF9jYWxjX2Nsb3NlJyk7XHJcblx0XHRcclxuXHRmdW5jdGlvbiBhZGRDYWxjKCkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjYWxjQnRuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNhbGNCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0bW9kYWxDYWxjLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcblx0XHRcdH0pO1xyXG5cdFx0Y2xvc2VDYWxjWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRtb2RhbENhbGMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRhZGRDYWxjKCk7XHJcblxyXG5cdGZ1bmN0aW9uIGNhbGNNb2QoYnRuLCBtb2RhbCwgbW9kYWxwcmV2KSB7XHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcblx0XHRcdG1vZGFscHJldi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhpbmZvKTtcclxuXHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoaW5mbykpO1xyXG5cdFx0fSk7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNsb3NlQ2FsYy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjbG9zZUNhbGNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHRpbmZvLmZvcm0gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aW5mby53aWR0aEluZm8gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aW5mby5oZWlnaHRJbmZvID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGluZm8udHlwZUluZm8gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aW5mby50ZW1wID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdHdpZHRoLnZhbHVlID0gJyc7XHJcblx0XHRcdFx0aGVpZ2h0LnZhbHVlID0gJyc7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2FsY01vZChwb3B1cENhbGNCdG4sIG1vZGFsQ2FsY1Byb2ZpbGUsIG1vZGFsQ2FsYyk7XHJcblx0Y2FsY01vZChwb3B1cENhbGNQcm9maWxlQnRuLCBtb2RhbENhbGNFbmQsIG1vZGFsQ2FsY1Byb2ZpbGUpO1xyXG5cclxuXHQvL0NhbGNQaWN0dXJlXHJcblxyXG5cdGxldCBpY29uc01pbmkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtaW5pX2ltZycpLFxyXG5cdFx0XHRpY29uc0JpZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JpZ19wbmcnKSxcclxuXHRcdFx0Zm9ybVdpbmRvdztcclxuXHJcblxyXG5cdGZ1bmN0aW9uIGljb25zIChpY29uLCBpY0JpZykge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpY29uLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGljb25baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRpbmZvLmZvcm0gPSBlLnRhcmdldDtcclxuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGljb24ubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdGlmIChqID09IGkpIHtcclxuXHRcdFx0XHRcdFx0aWNvbltqXS5zdHlsZS53aWR0aCA9ICcxMTRweCc7XHJcblx0XHRcdFx0XHRcdGljb25bal0uc3R5bGUuaGVpZ2h0ID0gJzY3cHgnO1xyXG5cdFx0XHRcdFx0XHRpY0JpZ1tqXS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpY29uW2pdLnN0eWxlLndpZHRoID0gJzk0cHgnO1xyXG5cdFx0XHRcdFx0XHRpY29uW2pdLnN0eWxlLmhlaWdodCA9ICc0N3B4JztcclxuXHRcdFx0XHRcdFx0aWNCaWdbal0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpY29ucyhpY29uc01pbmksIGljb25zQmlnKTtcclxuXHJcblx0Ly9jYWxjV2lIZVxyXG5cclxuXHRsZXQgd2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkdGgnKSxcclxuXHQgICAgaGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlaWdodCcpO1xyXG5cclxuXHRmdW5jdGlvbiBjaGVjayhlbGVtKSB7XHJcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5yZXBsYWNlKC9bXlxcZF0vLCcnKS5zdWJzdHIoMCw2KTsgXHJcblx0XHR9KTsgXHJcblx0fVxyXG5cdGNoZWNrKHdpZHRoKTtcclxuXHRjaGVjayhoZWlnaHQpO1xyXG5cdHdpZHRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHRcdGluZm8ud2lkdGhJbmZvID0gd2lkdGgudmFsdWU7XHJcblx0fSk7XHJcblx0aGVpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHRcdGluZm8uaGVpZ2h0SW5mbyA9IGhlaWdodC52YWx1ZTtcclxuXHR9KTtcclxuXHJcblx0Ly9jYWxjQ2hlY2tCb3hcclxuXHJcblx0bGV0IGNoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94Jyk7XHJcblxyXG5cdGNoZWNrQm94WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdGluZm8udGVtcCA9ICdjb2xkJztcclxuXHRcdGNoZWNrQm94WzFdLmNoZWNrZWQgPSBmYWxzZTtcclxuXHR9KTtcclxuXHRjaGVja0JveFsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRpbmZvLnRlbXAgPSAnd2FybSc7XHJcblx0XHRjaGVja0JveFswXS5jaGVja2VkID0gZmFsc2U7XHJcblx0fSk7XHJcblxyXG5cdGxldCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld190eXBlJyk7XHJcblxyXG5cdHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblx0XHRpbmZvLnR5cGVJbmZvID0gc2VsZWN0LnZhbHVlO1xyXG5cdH0pO1xyXG5cclxuXHRcdC8vT2JqQ2FsY1xyXG4gIGxldCBhLCBiLCBjLCBkLCBlO1xyXG5cdGxldCBpbmZvID0ge1xyXG5cdFx0Zm9ybTogZSxcclxuXHRcdHdpZHRoSW5mbzogYSxcclxuXHRcdGhlaWdodEluZm86IGIsXHJcblx0XHR0eXBlSW5mbzogYyxcclxuXHRcdHRlbXA6IGRcclxuXHR9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNhbGM7IiwiZnVuY3Rpb24gY2xpY2soKSB7XHJcblx0bGV0IGRpdlBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdFx0aW1nUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLFxyXG5cdFx0XHR6b29tID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnem9vbScpLFxyXG5cdFx0XHR6b29tUGljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnpvb20gPiBhJyksXHJcblx0XHRcdG91cldvcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtzJyk7XHJcblxyXG5cdFx0XHRkaXZQaWN0dXJlLmNsYXNzTGlzdC5hZGQoJ2Rpdl9waWN0dXJlJyk7XHJcblx0XHRcdGltZ1BpY3R1cmUuY2xhc3NMaXN0LmFkZCgnZGl2X3BpY3R1cmVfaW1nJyk7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgem9vbS5sZW5ndGg7IGkrKykge1xyXG5cdFx0em9vbVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRkaXZQaWN0dXJlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcblx0XHRcdG91cldvcmtzLmFwcGVuZENoaWxkKGRpdlBpY3R1cmUpO1xyXG5cdFx0XHRkaXZQaWN0dXJlLmFwcGVuZENoaWxkKGltZ1BpY3R1cmUpO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHpvb21QaWMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR6b29tUGljW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGltZ1BpY3R1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCB6b29tUGljW2ldLmhyZWYpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRkaXZQaWN0dXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cdFx0aWYgKHRhcmdldCA9PSBkaXZQaWN0dXJlKSB7XHJcblx0XHRcdGRpdlBpY3R1cmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjbGljazsiLCJmdW5jdGlvbiBmb3JtcygpIHtcclxuXHRsZXQgbWVzc2FnZSA9IG5ldyBPYmplY3QoKTtcclxuXHRcdFx0bWVzc2FnZS5sb2FkaW5nID0gJ9CX0LDQs9GA0YPQt9C60LAuLi4nO1xyXG5cdFx0XHRtZXNzYWdlLnN1Y2Nlc3MgPSAn0KHQv9Cw0YHQuNCx0L4hINCh0LrQvtGA0L4g0LzRiyDRgSDQstCw0LzQuCDRgdCy0Y/QttC10LzRgdGPLic7XHJcblx0XHRcdG1lc3NhZ2UuZmFpbHVyZSA9ICfQp9GC0L4g0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6Li4uJztcclxuXHJcblx0bGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtJyksXHJcblx0XHRcdGlucHV0LFxyXG5cdFx0XHRzdGF0dXNNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnc3RhdHVzJyk7XHJcblxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZm9ybS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQgIGlucHV0ID0gZm9ybVtpXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gc2VuZEZvcm0gKGVsZW0pIHtcclxuIFx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRlbGVtLmFwcGVuZENoaWxkKHN0YXR1c01lc3NhZ2UpO1xyXG5cdFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGVsZW0pO1xyXG5cclxuXHRcdGZ1bmN0aW9uIHBvc3REYXRhKGRhdGEpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcblx0XHRcdFx0bGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oJ1BPU1QnLCAnc2VydmVyLnBocCcpO1xyXG5cdFx0XHRcdHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG5cdFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlIDwgNCkge1xyXG5cdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XHJcblx0XHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgMzAwKSB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmVxdWVzdC5zZW5kKGRhdGEpO1xyXG5cdFx0fSk7XHJcblx0XHR9XHJcblx0XHRwb3N0RGF0YShmb3JtRGF0YSlcclxuXHRcdFx0LnRoZW4oKCk9PiBzdGF0dXNNZXNzYWdlLnN0eWxlLmNvbG9yID0gJ2JsYWNrJylcclxuXHRcdFx0LnRoZW4oKCk9PiBzdGF0dXNNZXNzYWdlLmlubmVySFRNTCA9IG1lc3NhZ2UubG9hZGluZylcclxuXHRcdFx0LnRoZW4oKCk9PiBzdGF0dXNNZXNzYWdlLmlubmVySFRNTCA9IG1lc3NhZ2Uuc3VjY2VzcylcclxuXHRcdFx0LmNhdGNoKCgpPT4gc3RhdHVzTWVzc2FnZS5pbm5lckhUTUwgPSBtZXNzYWdlLmZhaWx1cmUpXHJcblx0IH0pO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBjbGVhcklucHV0ICgpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aW5wdXRbaV0udmFsdWUgPSAnJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybS5sZW5ndGg7IGkrKykge1xyXG5cdFx0c2VuZEZvcm0oZm9ybVtpXSk7XHJcblx0XHRjbGVhcklucHV0KCk7XHJcblx0fVxyXG5cclxuXHRcclxuXHRsZXQgcGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndXNlcl9waG9uZScpO1xyXG5cdFxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGhvbmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdHBob25lW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5yZXBsYWNlKC9bXlxcZF0vLCcnKS5zdWJzdHIoMCwxMSk7IFxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1zOyIsImZ1bmN0aW9uIG1vZGFsKCkge1xyXG5cdGxldCBidG5Qb3B1cEVuZ2luZWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2VuZ2luZWVyX2J0bicpLFxyXG5cdFx0XHRwaG9uZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGhvbmVfbGluaycpLFxyXG5cdFx0XHRtb2RhbFBvcHVwRW5naW5lZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfZW5naW5lZXInKSxcclxuXHRcdFx0Y2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfY2xvc2UnKSxcclxuXHRcdFx0bW9kYWxQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xyXG5cclxuXHJcblx0ZnVuY3Rpb24gbW9kYWxXaW5kb3dPcGVuQ2xvc2UgKGVsZW0sIHZhbHVlLCBtb2RhbCkge1xyXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IHZhbHVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblx0XHRcdFx0aWYgKHRhcmdldCA9PSB0aGlzKSB7XHJcblx0XHRcdFx0XHRtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG1vZGFsV2luZG93T3BlbkNsb3NlIChidG5Qb3B1cEVuZ2luZWVyLCAnZmxleCcsIG1vZGFsUG9wdXBFbmdpbmVlcik7XHJcblx0bW9kYWxXaW5kb3dPcGVuQ2xvc2UgKGNsb3NlQnV0dG9uWzFdLCAnbm9uZScsIG1vZGFsUG9wdXBFbmdpbmVlcik7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHBob25lTGluay5sZW5ndGgsIGogPCBjbG9zZUJ1dHRvbi5sZW5ndGg7IGkrKywgaisrKSB7XHJcblx0XHRtb2RhbFdpbmRvd09wZW5DbG9zZShwaG9uZUxpbmtbaV0sICdmbGV4JywgbW9kYWxQb3B1cCk7XHJcblx0XHRtb2RhbFdpbmRvd09wZW5DbG9zZSAoY2xvc2VCdXR0b25bal0sICdub25lJywgbW9kYWxQb3B1cCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzaXh0eVNlY29uZHMobW9kYWwpIHtcclxuICBcdG1vZGFsUG9wdXAuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHR9XHJcblx0c2V0VGltZW91dChzaXh0eVNlY29uZHMsIDYwMDAwKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb2RhbDsiLCJmdW5jdGlvbiB0YWJzKCkge1xyXG5cdFx0bGV0IHRhYkdsYXppbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnbGF6aW5nX3NsaWRlcl90YWInKSxcclxuXHRcdFx0dGFiQ29udGVudEdsYXppbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWJfY29udGVudF9saW5rJyk7XHJcblxyXG5cdGxldCB0YWJEZWNvcmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVjb3JhdGlvbl90YWInKSxcclxuXHRcdFx0dGFiQ29udGVudERlY29yYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWJfY29udGVudF9kZWNvcmF0aW9uJyk7XHJcblxyXG5cdGZ1bmN0aW9uIHRhYnMgKHRhYiwgdGFiQ29udGVudCwgY2xhc3Nlbikge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YWIubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dGFiW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0YWIubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdGlmIChqID09IGkpIHtcclxuXHRcdFx0XHRcdFx0dGFiW2pdLmNsYXNzTGlzdC5hZGQoY2xhc3Nlbik7XHJcblx0XHRcdFx0XHRcdHRhYkNvbnRlbnRbal0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0YWJbal0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VuKTtcclxuXHRcdFx0XHRcdFx0dGFiQ29udGVudFtqXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0YWJzKHRhYkdsYXppbmcsIHRhYkNvbnRlbnRHbGF6aW5nLCAnYWN0aXZlJyk7XHJcblx0dGFicyh0YWJEZWNvcmF0aW9uLCB0YWJDb250ZW50RGVjb3JhdGlvbiwgJ2FmdGVyX2NsaWNrJyk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdGFiczsiLCJmdW5jdGlvbiB0aW1lcigpIHtcclxuXHRsZXQgZGVhZGxpbmUgPSAnMjAxOC0wNy0wNic7XHJcblxyXG5cdGZ1bmN0aW9uIGdldFRpbWVSZW1haW5pbmcgKGVuZHRpbWUpIHtcclxuXHRcdGxldCB0ID0gRGF0ZS5wYXJzZShlbmR0aW1lKSAtIERhdGUucGFyc2UobmV3IERhdGUoKSkgLSAxMDgwMDAwMCxcclxuXHRcdHNlY29uZHMgPSBNYXRoLmZsb29yKCAodC8xMDAwKSAlIDYwICksXHJcblx0XHRtaW51dGVzID0gTWF0aC5mbG9vciggKHQvMTAwMC82MCkgJSA2MCksXHJcblx0XHRob3VycyA9IE1hdGguZmxvb3IoICh0LygxMDAwKjYwKjYwKSkgKTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHQndG90YWwnOiB0LFxyXG5cdFx0XHQnaG91cnMnOiBob3VycyxcclxuXHRcdFx0J21pbnV0ZXMnOiBtaW51dGVzLFxyXG5cdFx0XHQnc2Vjb25kcyc6IHNlY29uZHNcclxuXHRcdH07XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gc2V0Q2xvY2sgKGlkLCBlbmR0aW1lID0gZGVhZGxpbmUpIHtcclxuXHRcdGxldCB0aW1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSxcclxuXHRcdFx0XHRob3VycyA9IHRpbWVyLnF1ZXJ5U2VsZWN0b3IoJy5ob3VycycpLFxyXG5cdFx0XHRcdG1pbnV0ZXMgPSB0aW1lci5xdWVyeVNlbGVjdG9yKCcubWludXRlcycpLFxyXG5cdFx0XHRcdHNlY29uZHMgPSB0aW1lci5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kcycpO1xyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiB1cGRhdGVDbG9jayAoKSB7XHJcblx0XHRcdFx0XHRsZXQgdCA9IGdldFRpbWVSZW1haW5pbmcoZW5kdGltZSk7XHJcblx0XHRcdFx0XHRob3Vycy5pbm5lckhUTUwgPSB0LmhvdXJzO1xyXG5cdFx0XHRcdFx0aWYgKGhvdXJzLmlubmVySFRNTCA8IDEwKSBob3Vycy5pbm5lckhUTUwgPSAnMCcgKyBob3Vycy5pbm5lckhUTUw7XHJcblx0XHRcdFx0XHRtaW51dGVzLmlubmVySFRNTCA9IHQubWludXRlcztcclxuXHRcdFx0XHRcdGlmIChtaW51dGVzLmlubmVySFRNTCA8IDEwKSBtaW51dGVzLmlubmVySFRNTCA9ICcwJyArIG1pbnV0ZXMuaW5uZXJIVE1MO1xyXG5cdFx0XHRcdFx0c2Vjb25kcy5pbm5lckhUTUwgPSB0LnNlY29uZHM7XHJcblx0XHRcdFx0XHRpZiAoc2Vjb25kcy5pbm5lckhUTUwgPCAxMCkgc2Vjb25kcy5pbm5lckhUTUwgPSAnMCcgKyBzZWNvbmRzLmlubmVySFRNTDtcclxuXHJcblx0XHRcdFx0XHRsZXQgdGltZUludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlQ2xvY2ssIDEwMDApO1xyXG5cclxuXHJcblx0XHRcdFx0XHRpZiAodC50b3RhbCA8PSAwKSB7XHJcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGltZUludGVydmFsKTtcclxuXHRcdFx0XHRcdFx0aG91cnMuaW5uZXJIVE1MID0gJzAwJztcclxuXHRcdFx0XHRcdFx0bWludXRlcy5pbm5lckhUTUwgPSAnMDAnO1xyXG5cdFx0XHRcdFx0XHRzZWNvbmRzLmlubmVySFRNTCA9ICcwMCc7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHVwZGF0ZUNsb2NrKCk7XHJcblx0XHRcdFx0XHJcblx0fTtcclxuXHRzZXRDbG9jaygndGltZXInKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0aW1lcjsiXX0=
