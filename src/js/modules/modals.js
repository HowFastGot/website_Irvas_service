const modals = (state) => {
	function bindModal(triggerSelector, modalSelector, closeSelector, clickCloseOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			closeModal = document.querySelector(closeSelector),
			windows = document.querySelectorAll("[data-modals]");
			scroll = calcScroll();

		trigger.forEach(item => {
			item.addEventListener("click", function(e) {
				if (e.target) {
					e.preventDefault();
				}

				windows.forEach(item => {
					item.style.display = "none";
				});

				modal.style.display = "block";
				document.body.style.overflow = "hidden";
				document.body.style.marginRight = `${scroll}px`;
			});

			closeModal.addEventListener("click", function(e) {
				windows.forEach(item => {
					item.style.display = "none";
					document.body.style.marginRight = `0px`;
				});

				modal.style.display = "none";
				document.body.style.overflow = "";
			});
		});

		modal.addEventListener("click", function (e) {
			if (e.target === modal && clickCloseOverlay) {
				windows.forEach(item => {
					item.style.display = "none";
					document.body.style.marginRight = `0px`;
				});

				modal.style.display = "none";
				document.body.style.overflow = "";
			}
			
		})
	}

	function showModal(selector, time) {
		setTimeout( () => {
				 document.querySelector(selector).style.display = "block";
				document.body.style.overflow = "hidden";
				document.body.style.marginRight = `${scroll}px`;
			}, time)
	}

	function calcScroll() {
		return 17;
	};


	bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
	bindModal(".phone_link", ".popup", ".popup .popup_close");
	/*showModal(".popup", 60000);*/
	bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc .popup_calc_close");
	bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile .popup_calc_profile_close", false);
	bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
}

export default modals;