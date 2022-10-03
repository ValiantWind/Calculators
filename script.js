const gitHubPagesUrl = 'https://ValiantWind.github.io/'
const buttons = document.getElementsByTagName("button");

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

const goHomeButton = document.getElementById("goHome");

goHomeButton.addEventListener("click", function() {
	window.location.href = "https://ValiantWind.github.io/"
});

const factorialPageButton = document.getElementById("factorialPage");

factorialPageButton.addEventListener("click", function() {
	window.location.href = "https://ValiantWind.github.io/Calculators/factorial"
});

function mathPage(){
	window.location.href = "https://ValiantWind.github.io/Calculators/math";
}

function sciencePage(){
	window.location.href = "https://ValiantWind.github.io/Calculators/science";
}

function limitsPage(){
	window.location.href = "https://ValiantWind.github.io/Calculators/limits";
}