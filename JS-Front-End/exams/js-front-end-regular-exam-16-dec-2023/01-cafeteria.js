function cafeteria(input) {
    const baristasCount = input[0];

    let baristas = [];
    getBaristas();
    getBaristasToWork();
    printBaristas();

    function getBaristas() {
        for (let i = 1; i <= baristasCount; i++) {
            const [name, shift, coffeeTypes] = input[i].split(' ');
            const coffeeTypesArr = coffeeTypes.split(',');

            baristas.push({
                name,
                shift,
                coffeeTypesArr,
            });
        }
    }

    function getBaristasToWork() {
        for (let i = baristas.length + 1; i < input.length; i++) {
            if (input[i] === 'Closed') {
                return;
            }
            const [action, name, ...args] = input[i].split(' / ');
            const barista = baristas.find(barista => barista.name === name);

            switch (action) {
                case 'Prepare':
                    prepareHandler(barista, args[0], args[1]);
                    break;

                case 'Change Shift':
                    changeShiftHandler(barista, args[0]);
                    break;

                case 'Learn':
                    learnHandler(barista, args[0]);
                    break;
            }
        }
    }
    
    function learnHandler(barista, newCoffeeType) {
        const coffeeNeeded = getNeededCoffee(barista, newCoffeeType);

        if (coffeeNeeded === newCoffeeType) {
            console.log(`${barista.name} knows how to make ${newCoffeeType}.`);
        } else {
            barista.coffeeTypesArr.push(newCoffeeType);
            console.log(`${barista.name} has learned a new coffee type: ${newCoffeeType}.`);
        }
    }
    
    
    function changeShiftHandler(barista, newShift) {
        barista.shift = newShift;
        console.log(`${barista.name} has updated his shift to: ${barista.shift}`);
    }
    
    function prepareHandler(barista, shift, coffeeType) {
        const coffeeNeeded = getNeededCoffee(barista, coffeeType);

        if (barista.shift === shift && coffeeNeeded !== undefined) {
            console.log(`${barista.name} has prepared a ${coffeeType} for you!`);
        } else {
            console.log(`${barista.name} is not available to prepare a ${coffeeType}.`);
            
        }
    }
    
    function getNeededCoffee(barista, coffeeNeeded) {
        return barista.coffeeTypesArr.find(coffee => coffee === coffeeNeeded);
    }

    function printBaristas() {
        baristas.forEach(barista => {
            console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.coffeeTypesArr.join(', ')}`);
        })
    }
}

cafeteria(['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino',
    'Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
    'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed']

)
