const input = document.getElementById("factorialInput");
const output = document.getElementById("factorialResults");
const calculateButton = document.getElementById("calculateFactorial");

function factorialize(num) {
	if (num === 0 || num === 1)
		return 1;
	for (var i = num - 1; i >= 1; i--) {
		num *= i;
	}
	return num;
}

calculateButton.addEventListener("click", function() {
	const num = input.value;
	const factorial = factorialize(num);
	output.innerHTML = factorial;
});