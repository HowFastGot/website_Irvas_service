import checkPhoneInputs from "./checkPhoneInputs.js";

const changeModalState = (state) => {
	let windowForms = document.querySelectorAll(".balcon_icons_img"),
		 windowWidth = document.querySelectorAll("#width"),
		 windowHeight = document.querySelectorAll("#height"),
		 windowViewType = document.querySelectorAll("#view_type"),
		 windowProfile = document.querySelectorAll(".checkbox");

		checkPhoneInputs("#width");
		checkPhoneInputs("#height");

		function bindActionToElements(elem, event, prop) {
			elem.forEach((item, index) => {
				item.addEventListener(event, function(e) {
					switch (item.nodeName) {
						case "SPAN":
							state[prop] = index;
							break;
						case "INPUT":
							if (elem[index].getAttribute("type") === "checkbox") {
								state[prop] = item.nextElementSibling.id;
								elem.forEach( (item, n) => {
									item.checked = false;

									if (index === n) item.checked = true;
								})
							} else {
								state[prop] = item.value;
							}
							break;
						case "SELECT" :
							state[prop] = item.value;
							break;
					}
					console.log(state)
				});
			});
		}

		bindActionToElements(windowForms, "click", "form");
		bindActionToElements(windowWidth, "input", "width");
		bindActionToElements(windowHeight, "input", "height");
		bindActionToElements(windowViewType, "change", "type");
		bindActionToElements(windowProfile, "change", "profile");

};

export default changeModalState;