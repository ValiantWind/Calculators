const actualValue = document.getElementById('actualValueInput');
const measuredValue = document.getElementById('measuredValueInput');
const output = document.getElementById('percentErrorResults');
const calculate = document.getElementById('calculatePercentError');
const sigFigsInput = document.getElementById('sigFigsInput');

function calculatePercentError(m, a) {
	var error = m - a;
	var percentError = error / a * 100;
	return percentError;
}


calculate.addEventListener('click', function(e) {
	let mValue = measuredValue.value;
	let aValue = actualValue.value;
	const percentError = calculatePercentError(mValue, aValue);


	let parsedPercentError = parseFloat(percentError);

	if (isNaN(parsedPercentError)) {
		output.innerHTML = 'Error: The value entered is not a number';
	} else {
		output.innerHTML = Math.abs(parsedPercentError) + "%";
	}

});