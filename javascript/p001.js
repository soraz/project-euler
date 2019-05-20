var set = new Set();
var threes = 3;
var fives = 5;

while (threes < 1000) {
  set.add(threes);
  threes += 3;
}

while (fives < 1000) {
  set.add(fives);
  fives += 5;
}

console.log([...set.values()].reduce((a, b) => a + b));
