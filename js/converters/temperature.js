// TBF

const toCelciusBtn = document.getElementById("toCelcius");
const toFahrenheitBtn = document.getElementById("toFahrenheit");
const input = document.querySelector("tempInput");
const output = document.querySelector("tempOutput");

function roundNumber(num){
	return Math.round(num * 100) / 100
}

function toCelcius(f){
	return ((f-32)*5)/9
}

function toFahrenheit(c){
	return (5/9) * (c - 32)
}


toCelciusBtn.addEventListener("click", (e) => {
	const fInput = parseFloat(input.value)
	const celcius = toCelcius(fInput)
	output.innerHTML = roundNumber(celcius) + " °C"
})

toFahrenheitBtn.addEventListener("click", (e) => {
	const cInput = parseFloat(input.value)
	const fahrenheit = toFahrenheit(cInput)
	
	output.innerHTML = roundNumber(fahrenheit) + " °F"
})