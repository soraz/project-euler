var prev = 1;
var prevPrev = 0;
var current = 1;
var sum = 0;
var temp = 0;
do {
  prevPrev = prev;
  temp = current;
  current = prev + current;
  prev = temp;
  if (!(current % 2)) {
    sum += current;
  }
} while (current < 4000000);

console.log(sum);
