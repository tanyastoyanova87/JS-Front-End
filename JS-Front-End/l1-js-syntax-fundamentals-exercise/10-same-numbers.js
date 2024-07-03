function sameNumbers(number) {

  let isFalse = false;
  let sum = 0;
  let firstDigit = number % 10;
  
  while (number > 0) {
    let lastNum = number % 10;
    sum += lastNum;
    number = parseInt(number / 10);
    
    if (lastNum !== firstDigit) {
      isFalse = true;
    }
  }
  
  if (isFalse) {
    console.log('false');
  } else {
    console.log('true');
  }
  console.log(sum);
}

sameNumbers(2222222);