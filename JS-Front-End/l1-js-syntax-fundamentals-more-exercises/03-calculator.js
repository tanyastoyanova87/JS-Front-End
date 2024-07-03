function calculate(firstNumber, operator, secondNumber) {
  let result = 0;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '/':
      result = firstNumber / secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
  }

  console.log(result.toFixed(2));
}


calculate(25.5,

  '-',
  
  3)