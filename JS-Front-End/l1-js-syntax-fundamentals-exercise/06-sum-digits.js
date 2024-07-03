function sum(number) {

  let sum = 0;
  while (number > 0) {
    let lastNum = number % 10;
    sum += lastNum;
    number = parseInt(number / 10);
  }

  console.log(sum);
}

sum(97561);