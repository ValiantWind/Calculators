const toDegreesBtn = document.getElementById("toDegrees");
const toRadiansBtn = document.getElementById("toRadians");
const input = document.getElementById("degree-radian-input");
const output = document.getElementById("degree-radian-output");

function roundNumber(num){
	return Math.round(num * 100) / 100
}

const radiansToDegrees = rad => (rad * 180.0) / Math.PI;

const degreesToRadians = degrees => (degrees * Math.PI) / 180.0;


toDegreesBtn.addEventListener("click", (e) => {
	output.innerHTML = `${roundNumber(radiansToDegrees(input.value))} °`
})

toRadiansBtn.addEventListener("click", (e) => {
	output.innerHTML = `${roundNumber(degreesToRadians(input.value))}`
})