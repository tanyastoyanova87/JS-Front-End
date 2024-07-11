function signCheck(firstNum, secondNum, thirdNum) {
    const array = [firstNum, secondNum, thirdNum];
    let negatives = 0;

    for (let num of array) {
        if (num < 0) {
            negatives++;
        }
    }

    if (negatives == 1 || negatives == 3) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}

signCheck(5,
    12,
    -15
);
