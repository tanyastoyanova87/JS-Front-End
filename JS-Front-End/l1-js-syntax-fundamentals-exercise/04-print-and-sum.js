function printAndSum(startNumber, endNumber) {
  let output= '';
  let sum = 0;

  for (let currentNumber = startNumber; currentNumber <= endNumber; currentNumber++) {
    output += currentNumber + " ";
    sum += currentNumber;
  }

  console.log(output.trim());
  console.log(`Sum: ${sum}`);
}

printAndSum(0, 26);