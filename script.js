const buttons = document.getElementsByTagName("button");
const goHomeButton = document.getElementById("goHome");
const factorialPageButton = document.getElementById("factorialsPage");
const derivativePageButton = document.getElementById("derivativesPage");



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

if(goHomeButton) {
	goHomeButton.addEventListener("click", function() {
		window.history.back();
	});	
}

if(factorialPageButton) {
	factorialPageButton.addEventListener("click", function() {
		window.location.href = "https://valiantwind.github.io/Calculators/factorials"
	});
}

if(derivativePageButton){
	derivativePageButton.addEventListener("click", function() {
		window.location.href = "https://valiantwind.github.io/Calculators/derivatives"
	});
}


function mathPage() {
	window.location.href = "https://valiantwind.github.io/Calculators/math";
}

function sciencePage() {
	window.location.href = "https://valiantwind.github.io/Calculators/science";
}

function limitsPage() {
	window.location.href = "https://valiantwind.github.io/Calculators/limits";
}

function percentErrorPage() {
	window.location.href = "https://valiantwind.github.io/Calculators/percent-error";
}