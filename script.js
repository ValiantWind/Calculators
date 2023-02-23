const buttons = document.getElementsByTagName("button");
const goHomeButton = document.getElementById("goHome");
const factorialPageButton = document.getElementById("factorialsPage");
const derivativePageButton = document.getElementById("derivativesPage");
const tempPageButton = document.getElementById("tempPage");
const goback = document.getElementById("go-back");
const degreeRadianButton = document.getElementById("degreeRadianPage");
const primeFactorsButton = document.getElementById("primeFactorsPage")

if(goback){
	goback.src = "https://ValiantWind.github.io/Calculators/img/arrow_back.svg"
}

function createRipple(event) {
	const button = event.currentTarget;

	const circle = document.createElement("span");
	const diameter = Math.max(button.clientWidth, button.clientHeight);
	const radius = diameter / 2;

	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
	circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
	circle.classList.add("ripple");

	const ripple = button.getElementsByClassName("ripple")[0];

	if (ripple) {
		ripple.remove();
	}

	button.appendChild(circle);
}


for (const button of buttons) {
	button.addEventListener("click", createRipple);
}

if(degreeRadianPageButton){
	tempPageButton.addEventListener("click", (e) => {
		window.location.href = "https://ValiantWind.github.io/Calculators/pages/converters/degrees-radians.html"
	})
}

if(tempPageButton){
	tempPageButton.addEventListener("click", (e) => {
		window.location.href = "https://ValiantWind.github.io/Calculators/pages/converters/temperature.html"
	})
}

if(primeFactorsButton){
	primeFactorsButton.addEventListener("click", (e) => {
		window.location.href = "https://ValiantWind.github.io/Calculators/pages/Math/prime-factors.html"
	})
}



if(goHomeButton) {
	goHomeButton.addEventListener("click", function() {
		window.history.back();
	});	
}

if(factorialPageButton) {
	factorialPageButton.addEventListener("click", function() {
		window.location.href = "https://ValiantWind.github.io/Calculators/pages/math/factorials.html"
	});
}

if(derivativePageButton){
	derivativePageButton.addEventListener("click", function() {
		window.location.href = "https://ValiantWind.github.io/Calculators/pages/math/derivatives.html"
	});
}


function mathPage() {
	window.location.href = "https://ValiantWind.github.io/Calculators/math.html";
}

function sciencePage() {
	window.location.href = "https://ValiantWind.github.io/Calculators/science.html";
}

function limitsPage() {
	window.location.href = "https://ValiantWind.github.io/Calculators/pages/math/limits.html";
}

function percentErrorPage() {
	window.location.href = "https://ValiantWind.github.io/Calculators/pages/science/percent-error.html";
}

function converterPage() {
	window.location.href = "https://ValiantWind.github.io/Calculators/converter.html"
}

