function solve(array) {
  let even = 0;
  let odd = 0;
  for (const number of array) {
    if(number % 2 === 0) {
      even += number;
    } else {
      odd += number;
    }
  }

  console.log(even - odd);
}

solve([2,4,6,8,10]);