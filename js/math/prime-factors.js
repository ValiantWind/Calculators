const input = document.getElementById("numToPrimeFactorInput");
const output = document.getElementById("primeFactorResults");
const calculateButton = document.getElementById("calculatePrimeFactors");

const getPrimeFactors = num => {
  let array = [],
    factor = 2;
  while (num > 1) {
    if (num % factor === 0) {
      array.push(factor);
      num /= factor;
    } else {
      factor++;
    }
  }
  return array;
};

calculateButton.addEventListener("click", (e) => {
	output.innerHTML = getPrimeFactors(input.value)
})