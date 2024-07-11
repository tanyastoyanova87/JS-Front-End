function simpleCalculator(firstNum, secondNum, operator) {
    let operation = 0;

    switch (operator) {
        case 'multiply':
            operation = (a, b) => a * b;
            break;
        case 'divide':
            operation = (a, b) => a / b;
            break;
        case 'add':
            operation = (a, b) => a + b;
            break;
        case 'subtract':
            operation = (a, b) => a - b;
            break;
    }

    const result = operation(firstNum, secondNum);
    console.log(result);
}

simpleCalculator(5,
    5,
    'multiply'
);


