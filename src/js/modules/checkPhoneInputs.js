const checkPhoneInputs = (selector) => {
	let inputs = document.querySelectorAll(selector);

	inputs.forEach(item => {
		item.addEventListener("input", function(e) {
			item.value = item.value.replace(/\D/, "");
		});
	});
};

export default checkPhoneInputs;