var startTime = Date.now();

function divisibleByOneToTwenty(input) {
  for (var i = 1; i <= 20; i++) {
    if (input % i) {
      return false;
    }
  }
  return true;
}

for (var i = 20; ; i++) {
  if (divisibleByOneToTwenty(i)) {
    console.log(i);
    break;
  }
}

var endTime = Date.now();
console.log("Total Time spent : " + (endTime - startTime) + "ms");
