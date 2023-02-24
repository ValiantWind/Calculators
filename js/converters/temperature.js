const toCelciusBtn = document.getElementById("toCelcius");
const toFahrenheitBtn = document.getElementById("toFahrenheit");
const input = document.getElementById("tempInput");
const output = document.getElementById("tempOutput");

function roundNumber(num){
	return Math.round(num * 100) / 100
}

const celsiusToFahrenheit = degrees => 1.8 * degrees + 32;

const fahrenheitToCelsius = degrees => (degrees - 32) * 5 / 9;


toCelciusBtn.addEventListener("click", (e) => {
	output.innerHTML = `${roundNumber(fahrenheitToCelsius(input.value))} ℃`
})

toFahrenheitBtn.addEventListener("click", (e) => {
	output.innerHTML = `${roundNumber(celsiusToFahrenheit(input.value))} ℉`
})