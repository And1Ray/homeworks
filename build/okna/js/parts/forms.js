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