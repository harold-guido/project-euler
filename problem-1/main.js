var sum = 0,
  givenLimit = 0;
function sumOfMultiples(limit) {
  var sum = 0;
  for (i = limit - 1; i != 1; i--) {
    if (i % 5 == 0 || i % 3 == 0) {
      sum += i;
    }
  }
  return sum;
}
givenLimit = Number(prompt("Provide limit"));
sum = sumOfMultiples(givenLimit);
alert(`The sum of the multiples of 3 and 5, below ${givenLimit} is ${sum}`);
