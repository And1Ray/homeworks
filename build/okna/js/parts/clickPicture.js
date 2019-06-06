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