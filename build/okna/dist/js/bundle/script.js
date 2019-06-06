'use strict';

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