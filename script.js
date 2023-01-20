const buttons = document.getElementsByTagName("button");
const goHomeButton = document.getElementById("goHome");
const factorialPageButton = document.getElementById("factorialsPage");
const derivativePageButton = document.getElementById("derivativesPage");
const numeralPageButton = document.getElementById("numeralPage")
const goback = document.getElementById("go-back")

if(goback){
	goback.src = "/img/arrow_back.svg"
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

if(numeralPageButton){
	numeralPageButton.addEventListener("click", (e) => {
		window.location.href = "/html/converters/numeral.html"
	})
}

if(goHomeButton) {
	goHomeButton.addEventListener("click", function() {
		window.history.back();
	});	
}

if(factorialPageButton) {
	factorialPageButton.addEventListener("click", function() {
		window.location.href = "/html/math/factorials.html"
	});
}

if(derivativePageButton){
	derivativePageButton.addEventListener("click", function() {
		window.location.href = "/html/math/derivatives.html"
	});
}


function mathPage() {
	window.location.href = "/math.html";
}

function sciencePage() {
	window.location.href = "/science.html";
}

function numeralPage() {
	window.location.href = "/html/converters/numberal.html";
}

function percentErrorPage() {
	window.location.href = "/html/science/percent-error.html";
}

function converterPage() {
	window.location.href = "/converter.html"
}