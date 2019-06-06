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