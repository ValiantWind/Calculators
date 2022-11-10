const einput = document.getElementById("expressionInput");
const dinput = document.getElementById("differentiateVariable");
const output = document.getElementById("derivativeOutput");
const calculateButton = document.getElementById("calculateDerivative");


calculateButton.addEventListener("click", function() {
	output.innerHTML = math.derivative(einput.value, dinput.value).toString();
});