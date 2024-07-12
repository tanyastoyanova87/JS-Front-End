function factorialDivision(firstNum, secondNum) {

    function getFactorial(number) {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        return result;
    }

    const division = getFactorial(firstNum) / getFactorial(secondNum);

    const printResult = (division) => console.log(division.toFixed(2));

    printResult(division);
}

factorialDivision(5,

    2)
