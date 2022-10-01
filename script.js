const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
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

//derivative calculator
function derivative(x, y, x0, y0) {
	return (y - y0) / (x - x0);
}

function factorialPage(){
	window.location.href = "https://Calculators.valiantwind.repl.co/factorial.html";
}

function goToPowerRule(){
	window.location.href = "https://ValiantWind.github.io/derivative-calculator/product-rule";
}

function backToHome(){
	window.location.href = "https://ValiantWind.github.io/Calculators/factorial";
}