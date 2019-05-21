var startTime = Date.now();
var max = 0;

function ispalindrome(input) {
  var arrayInput = ("" + input).split("");
  for (var i = 0; i < arrayInput.length / 2; i++) {
    if (arrayInput[i] !== arrayInput[arrayInput.length - i - 1]) {
      return false;
    }
  }
  return true;
}
for (var a = 999; a > 0; a--) {
  for (var b = 999; b > 0; b--) {
    if (ispalindrome(a * b) && a * b > max) {
      max = a * b;
    }
  }
}

var endTime = Date.now();
console.log(max);
console.log("Total Time spent : " + (endTime - startTime) + "ms");
