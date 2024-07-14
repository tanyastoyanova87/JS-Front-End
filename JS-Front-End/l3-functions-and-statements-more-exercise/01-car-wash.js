function carWash(stringArray) {
    let value = 0;
    iterateArray();

    function iterateArray() {
        for (let i = 0; i < stringArray.length; i++) {
            changeValue(i);
        }

        function changeValue(i) {
            switch (stringArray[i]) {
                case 'soap':
                    value += 10;
                    break;
                case 'water':
                    value += value * 0.20;
                    break;
                case 'vacuum cleaner':
                    value += value * 0.25;
                    break;
                case 'mud':
                    value -= value * 0.10;
                    break;
            }
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`)
}

carWash(["soap", "water", "mud", "mud", "water", "mud",

    "vacuum cleaner"]);
