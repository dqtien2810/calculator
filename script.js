const equalFirst = 0;
const btnInput = document.querySelectorAll(".input-btn");
const input = document.getElementById("input");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");

btnInput.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (equalFirst == 1) {
		input.value = "";
		equalFirst = 0;
		}
		input.value += btn.value;
	});
});

equal.addEventListener("click", () => {
	let inputValue = input.value;
	try {
		let num = eval(inputValue);
		if (Number.isInteger(num)) {
		input.value = num;
		} else {
		input.value = num.toFixed(2);
		}
	} catch (err) {
		alert("Invalid Input");
	}
});

clear.addEventListener("click", () => {
  	input.value = "";
});

del.addEventListener("click", () => {
  	input.value = input.value.substr(0, input.value.length - 1);
});