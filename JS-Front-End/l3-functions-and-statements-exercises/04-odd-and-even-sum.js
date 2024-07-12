function calculations(number) {
    let evenDigits = [];
    let oddDigits = [];

    function evenOrOddNum(number) {
        while (number > 0) {
            let currentNum = number % 10;
            if (currentNum % 2 === 0) {
                evenDigits.push(currentNum);
            } else {
                oddDigits.push(currentNum);
            }
            number = parseInt(number / 10);
        }
    }

    evenOrOddNum(number);

    const sumDigits = (array) => array.reduce((a, b) => a + b, 0);
    const evenSum = sumDigits(evenDigits);
    const oddSum = sumDigits(oddDigits);

    const printOutput = (evenSum, oddSum) => console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    printOutput(evenSum, oddSum);
}

calculations(1000435)
