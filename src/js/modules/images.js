const images = () => {
	const contentArea = document.querySelector(".works"),
			 imgPopup = document.createElement("div"),
			 bigImg =  document.createElement("img");

	imgPopup.classList.add("popup");
	contentArea.append(imgPopup);

	imgPopup.style.cssText = `display:none;
	align-items: center; justify-content: center;`;

	imgPopup.append(bigImg);

	contentArea.addEventListener("click", function(e) {
		e.preventDefault();

		let target = e.target;

		if (target && target.classList.contains("preview")) {
			imgPopup.style.display = "flex";
			document.body.style.overflow = "hidden";
			bigImg.style.cssText = `max-width: 36%;
			min-height: 80%;`

			let puth = target.parentElement.getAttribute("href");
			bigImg.setAttribute("src", puth);
		}

		if (target && target.matches("div.popup")) {
			imgPopup.style.display = "none";
			document.body.style.overflow = "";
		}
	});

	

};

export default images;