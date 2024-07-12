function calculations(firstNum, secondNum, thirdNum) {

    function sum(first, second) {
        return first + second;
    }

    function subtract(firstNumber, secondNumber, thirdNumber) {
        return sum(firstNumber, secondNumber) - thirdNumber;
    }

    console.log(subtract(firstNum, secondNum, thirdNum));
}

calculations(23,

    6,
    
    10);
