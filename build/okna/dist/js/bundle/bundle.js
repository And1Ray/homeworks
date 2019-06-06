"use strict";

(function () {
	function r(e, n, t) {
		function o(i, f) {
			if (!n[i]) {
				if (!e[i]) {
					var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
				}var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
					var n = e[i][1][r];return o(n || r);
				}, p, p.exports, r, e, n, t);
			}return n[i].exports;
		}for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
			o(t[i]);
		}return o;
	}return r;
})()({ 1: [function (require, module, exports) {
		window.addEventListener('DOMContentLoaded', function () {

			var tabs = require('../parts/tabs.js');
			var calc = require('../parts/calc.js');
			var forms = require('../parts/forms.js');
			var modal = require('../parts/modal.js');
			var click = require('../parts/clickPicture.js');
			var timer = require('../parts/timer.js');

			tabs();
			calc();
			forms();
			modal();
			click();
			timer();
		});
	}, { "../parts/calc.js": 2, "../parts/clickPicture.js": 3, "../parts/forms.js": 4, "../parts/modal.js": 5, "../parts/tabs.js": 6, "../parts/timer.js": 7 }], 2: [function (require, module, exports) {
		function calc() {

			//ModalCalc

			var calcBtn = document.getElementsByClassName('popup_calc_btn'),
			    popupCalcBtn = document.getElementsByClassName('popup_calc_button')[0],
			    popupCalcProfileBtn = document.getElementsByClassName('popup_calc_profile_button')[0],
			    modalCalc = document.getElementsByClassName('popup_calc')[0],
			    modalCalcProfile = document.getElementsByClassName('popup_calc_profile')[0],
			    modalCalcEnd = document.getElementsByClassName('popup_calc_end')[0],
			    closeCalc = document.getElementsByClassName('popup_calc_close');

			function addCalc() {
				for (var i = 0; i < calcBtn.length; i++) {
					calcBtn[i].addEventListener('click', function () {
						modalCalc.style.display = 'flex';
					});
					closeCalc[0].addEventListener('click', function () {
						modalCalc.style.display = 'none';
					});
				}
			}
			addCalc();

			function calcMod(btn, modal, modalprev) {
				btn.addEventListener('click', function () {
					modal.style.display = 'flex';
					modalprev.style.display = 'none';
					console.log(info);
					console.log(JSON.stringify(info));
				});
				for (var i = 0; i < closeCalc.length; i++) {
					closeCalc[i].addEventListener('click', function () {
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

			var iconsMini = document.getElementsByClassName('mini_img'),
			    iconsBig = document.getElementsByClassName('big_png'),
			    formWindow = void 0;

			function icons(icon, icBig) {
				var _loop = function _loop(i) {
					icon[i].addEventListener('click', function (e) {
						e.preventDefault();
						info.form = e.target;
						for (var j = 0; j < icon.length; j++) {
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
				};

				for (var i = 0; i < icon.length; i++) {
					_loop(i);
				}
			}
			icons(iconsMini, iconsBig);

			//calcWiHe

			var width = document.getElementById('width'),
			    height = document.getElementById('height');

			function check(elem) {
				elem.addEventListener('keyup', function () {
					this.value = this.value.replace(/[^\d]/, '').substr(0, 6);
				});
			}
			check(width);
			check(height);
			width.addEventListener('change', function () {
				info.widthInfo = width.value;
			});
			height.addEventListener('change', function () {
				info.heightInfo = height.value;
			});

			//calcCheckBox

			var checkBox = document.querySelectorAll('.checkbox');

			checkBox[0].addEventListener('click', function (e) {
				info.temp = 'cold';
				checkBox[1].checked = false;
			});
			checkBox[1].addEventListener('click', function (e) {
				info.temp = 'warm';
				checkBox[0].checked = false;
			});

			var select = document.getElementById('view_type');

			select.addEventListener('change', function () {
				info.typeInfo = select.value;
			});

			//ObjCalc
			var a = void 0,
			    b = void 0,
			    c = void 0,
			    d = void 0,
			    e = void 0;
			var info = {
				form: e,
				widthInfo: a,
				heightInfo: b,
				typeInfo: c,
				temp: d
			};
		}

		module.exports = calc;
	}, {}], 3: [function (require, module, exports) {
		function click() {
			var divPicture = document.createElement('div'),
			    imgPicture = document.createElement('img'),
			    zoom = document.getElementsByClassName('zoom'),
			    zoomPic = document.querySelectorAll('.zoom > a'),
			    ourWorks = document.querySelector('.works');

			divPicture.classList.add('div_picture');
			imgPicture.classList.add('div_picture_img');

			var _loop2 = function _loop2(i) {
				zoom[i].addEventListener('click', function (event) {
					event.preventDefault();
					divPicture.style.display = 'flex';
					ourWorks.appendChild(divPicture);
					divPicture.appendChild(imgPicture);
					for (var _i = 0; _i < zoomPic.length; _i++) {
						zoomPic[_i].getAttribute('href');
					}
					imgPicture.setAttribute('src', zoomPic[i].href);
				});
			};

			for (var i = 0; i < zoom.length; i++) {
				_loop2(i);
			}

			divPicture.addEventListener('click', function (event) {
				var target = event.target;
				if (target == divPicture) {
					divPicture.style.display = 'none';
				}
			});
		}

		module.exports = click;
	}, {}], 4: [function (require, module, exports) {
		function forms() {
			var message = new Object();
			message.loading = 'Загрузка...';
			message.success = 'Спасибо! Скоро мы с вами свяжемся.';
			message.failure = 'Что то пошло не так...';

			var form = document.getElementsByClassName('form'),
			    input = void 0,
			    statusMessage = document.createElement('div');
			statusMessage.classList.add('status');

			for (var i = 0; i < form.length; i++) {
				input = form[i].getElementsByTagName('input');
			}

			function sendForm(elem) {
				elem.addEventListener('submit', function (e) {
					e.preventDefault();
					elem.appendChild(statusMessage);
					var formData = new FormData(elem);

					function postData(data) {
						return new Promise(function (resolve, reject) {
							var request = new XMLHttpRequest();
							request.open('POST', 'server.php');
							request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
							request.onreadystatechange = function () {
								if (request.readyState < 4) {
									resolve();
								} else if (request.readyState === 4) {
									if (request.status == 200 && request.status < 300) {
										resolve();
									} else {
										reject();
									}
								}
							};
							request.send(data);
						});
					}
					postData(formData).then(function () {
						return statusMessage.style.color = 'black';
					}).then(function () {
						return statusMessage.innerHTML = message.loading;
					}).then(function () {
						return statusMessage.innerHTML = message.success;
					}).catch(function () {
						return statusMessage.innerHTML = message.failure;
					});
				});
			}
			function clearInput() {
				for (var _i2 = 0; _i2 < input.length; _i2++) {
					input[_i2].value = '';
				}
			}

			for (var _i3 = 0; _i3 < form.length; _i3++) {
				sendForm(form[_i3]);
				clearInput();
			}

			var phone = document.getElementsByName('user_phone');

			for (var _i4 = 0; _i4 < phone.length; _i4++) {
				phone[_i4].addEventListener('keyup', function () {
					this.value = this.value.replace(/[^\d]/, '').substr(0, 11);
				});
			}
		}

		module.exports = forms;
	}, {}], 5: [function (require, module, exports) {
		function modal() {
			var btnPopupEngineer = document.querySelector('.popup_engineer_btn'),
			    phoneLink = document.querySelectorAll('.phone_link'),
			    modalPopupEngineer = document.querySelector('.popup_engineer'),
			    closeButton = document.querySelectorAll('.popup_close'),
			    modalPopup = document.querySelector('.popup');

			function modalWindowOpenClose(elem, value, modal) {
				elem.addEventListener('click', function (e) {
					e.preventDefault();
					modal.style.display = value;
				});

				modal.addEventListener('click', function (event) {
					var target = event.target;
					if (target == this) {
						modal.style.display = 'none';
					}
				});
			}

			modalWindowOpenClose(btnPopupEngineer, 'flex', modalPopupEngineer);
			modalWindowOpenClose(closeButton[1], 'none', modalPopupEngineer);

			for (var i = 0, j = 0; i < phoneLink.length, j < closeButton.length; i++, j++) {
				modalWindowOpenClose(phoneLink[i], 'flex', modalPopup);
				modalWindowOpenClose(closeButton[j], 'none', modalPopup);
			}

			function sixtySeconds(modal) {
				modalPopup.style.display = 'flex';
			}
			setTimeout(sixtySeconds, 60000);
		}

		module.exports = modal;
	}, {}], 6: [function (require, module, exports) {
		function tabs() {
			var tabGlazing = document.getElementsByClassName('glazing_slider_tab'),
			    tabContentGlazing = document.getElementsByClassName('tab_content_link');

			var tabDecoration = document.getElementsByClassName('decoration_tab'),
			    tabContentDecoration = document.getElementsByClassName('tab_content_decoration');

			function tabs(tab, tabContent, classen) {
				var _loop3 = function _loop3(i) {
					tab[i].addEventListener('click', function () {
						for (var j = 0; j < tab.length; j++) {
							if (j == i) {
								tab[j].classList.add(classen);
								tabContent[j].style.display = 'block';
							} else {
								tab[j].classList.remove(classen);
								tabContent[j].style.display = 'none';
							}
						}
					});
				};

				for (var i = 0; i < tab.length; i++) {
					_loop3(i);
				}
			}

			tabs(tabGlazing, tabContentGlazing, 'active');
			tabs(tabDecoration, tabContentDecoration, 'after_click');
		}

		module.exports = tabs;
	}, {}], 7: [function (require, module, exports) {
		function timer() {
			var deadline = '2019-07-06';

			function getTimeRemaining(endtime) {
				var t = Date.parse(endtime) - Date.parse(new Date()) - 10800000,
				    seconds = Math.floor(t / 1000 % 60),
				    minutes = Math.floor(t / 1000 / 60 % 60),
				    hours = Math.floor(t / (1000 * 60 * 60));

				return {
					'total': t,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				};
			};

			function setClock(id) {
				var endtime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : deadline;

				var timer = document.getElementById(id),
				    hours = timer.querySelector('.hours'),
				    minutes = timer.querySelector('.minutes'),
				    seconds = timer.querySelector('.seconds');

				function updateClock() {
					var t = getTimeRemaining(endtime);
					hours.innerHTML = t.hours;
					if (hours.innerHTML < 10) hours.innerHTML = '0' + hours.innerHTML;
					minutes.innerHTML = t.minutes;
					if (minutes.innerHTML < 10) minutes.innerHTML = '0' + minutes.innerHTML;
					seconds.innerHTML = t.seconds;
					if (seconds.innerHTML < 10) seconds.innerHTML = '0' + seconds.innerHTML;

					var timeInterval = setInterval(updateClock, 1000);

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
	}, {}] }, {}, [1]);