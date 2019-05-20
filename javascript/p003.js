var startTime = Date.now();

function isPrimeNum(input) {
  let probe = 2;
  while (probe < input / 2) {
    if (!(input % probe++)) {
      return false;
    }
  }
  return true;
}
var current = 2;
var value = 600851475143;

// Largest prime factor should be value squared.
while (current < Math.sqrt(value)) {
  if (value % current === 0 && isPrimeNum(current)) {
    console.log(current);
  }
  current++;
}
var endTime = Date.now();

console.log("Total Time spent : " + (endTime - startTime) + "ms");
