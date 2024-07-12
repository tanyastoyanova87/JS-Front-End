function palindromeIntegers(arrayIntegers) {
    for (let integer of arrayIntegers) {
        let reverseNum = reverseInteger(integer);

        if (integer === reverseNum) {
            console.log('true')
        } else {
            console.log('false')
        }
    }

    function reverseInteger(num) {
        let numToArray = num.toString().split('');
        let reverseArray = numToArray.reverse();
        let arrayToNum = Number(reverseArray.join(''));

        return arrayToNum;
    }
}

palindromeIntegers([123, 323, 421, 121])
