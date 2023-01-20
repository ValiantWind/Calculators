// TBF

const toNumeralButton = document.getElementById("toNumeral");
let toNumeralInput = document.getElementById("toNumeralInput");
const numeralOutput = document.getElementById("numeralOutput");

const numerals = {
	I : 1,
	IV : 4,
	V : 5,
	IX : 9,
	X : 10,
	XL : 40,
	L : 50,
	XC : 90,
	C : 100,
	CD: 400,
	D: 500,
	CM: 900,
	M: 1000
}


let tonumber = Number(toNumeralInput.innerHTML)

toNumeralButton.addEventListener("click", (e) => {
	
	for(const value in numerals){
		console.log(numerals[value])
	}
})