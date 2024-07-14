function nxnMatrix(number) {
    
    function printNNumbers(number) {
        for (let i = 0; i < number; i++) {
            console.log(columns(number));
        }
    }

    const columns = (number) => {
        return `${number + ' '}`.toString().repeat(number).trim();
    }

    printNNumbers(number);
}

nxnMatrix(3);
