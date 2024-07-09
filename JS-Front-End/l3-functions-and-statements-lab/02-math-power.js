function mathPower(number, power) {
    const result = iterativePower(number, power);
    // const result = recursivePower(number, power);
    console.log(result);
}

mathPower(2, 8);


function iterativePower(number, power) {
    let result = 1;

    for (let i = 0; i < power; i++) {
        result *= number;
    }

    return result;
}

// function recursivePower(number, power) {
//     debugger
//     if(power === 1) {
//         return number;
//     }

//     return number * recursivePower(number, power - 1);
// }

