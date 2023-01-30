const tabs = (headerSelector, tabSelector, contentSelector, classSelector, display = "block") => {
	const header = document.querySelector(headerSelector),
			tab = document.querySelectorAll(tabSelector),
			content = document.querySelectorAll(contentSelector);

	function hideTabContent() {
		content.forEach(item => {
			item.style.display = "none";
		});

		tab.forEach(item => {
			item.classList.remove(classSelector);
		});
	}

	function showTabContent(i = 0) {
		content[i].style.display = display;
		tab[i].classList.add(classSelector);
	}

	hideTabContent();
	showTabContent();

	header.addEventListener("click", function(e) {
		const target = e.target;

		if (target.classList.contains(tabSelector.replace(/\./, "")) ||
		target.parentElement.classList.contains(tabSelector.replace(/\./, "")) ) {
			tab.forEach( (item, index) => {
				if (item == target || item == target.parentElement) {
					hideTabContent();
					showTabContent(index);
				}
			});
		}
	});
}

export default tabs;