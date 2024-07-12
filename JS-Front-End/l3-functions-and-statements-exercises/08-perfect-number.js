function perfectNumber(number) {
    const divisorsToNumber = getDivisors(number);
    
    function getDivisors(number) {
        let divisors = [];
        for (let i = 1; i <= number / 2; i++) {
            if (number % i !== 0) {
                continue;
            } else {
                divisors.push(i)
            }
        }
        
        return divisors;
    }

    const sumDivisors = (array) => array.reduce((a, b) => a + b, 0);
    const sumResult = sumDivisors(divisorsToNumber);

    console.log(sumResult === number ? `We have a perfect number!` : `It's not so perfect.`)
}

perfectNumber(6)
