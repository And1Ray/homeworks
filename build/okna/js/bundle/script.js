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