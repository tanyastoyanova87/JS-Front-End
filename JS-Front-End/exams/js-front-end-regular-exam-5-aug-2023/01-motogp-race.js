function motoRace(input) {
    const ridersCount = input[0];

    let riders = [];
    getRiders();
    startRace();
    printRiders();

    function getRiders() {
        for (let i = 1; i <= ridersCount; i++) {
            const [name, fuelCapacity, position] = input[i].split('|');
            riders.push({
                name,
                fuelCapacity,
                position,
            });
        }
    }

    function startRace() {
        for (let i = riders.length + 1; i < input.length; i++) {
            if (input[i] === 'Finish') {
                return;
            }

            const [command, riderName, ...args] = input[i].split(' - ');
            const rider = riders.find(riders => riders.name === riderName);

            switch (command) {
                case 'StopForFuel':
                    stopForFuelHandler(rider, Number(args[0]), Number(args[1]));
                    break;

                case 'Overtaking':
                    overTakingHandler(rider, args[0]);
                    break;

                case 'EngineFail':
                    engineFailHandler(rider, Number(args[0]));
                    break;
            }
        }
    }

    function stopForFuelHandler(rider, minimumFuel, changedPosition) {
        if (rider.fuelCapacity < minimumFuel) {
            rider.position = changedPosition;
            console.log(`${rider.name} stopped to refuel but lost his position, now he is ${rider.position}.`);
        } else {
            console.log(`${rider.name} does not need to stop for fuel!`);
        }
    }

    function overTakingHandler(rider1, rider2) {
        rider2 = riders.find(rider => rider.name === rider2);
        let rider1Position = rider1.position;
        let rider2Position = rider2.position;

        if (rider1Position < rider2Position) {
            rider2.position = rider1Position;
            rider1.position = rider2Position;
            console.log(`${rider1.name} overtook ${rider2.name}!`);
        }
    }

    function engineFailHandler(rider, lapsLeft) {
        riders.splice(riders.indexOf(rider), 1);
        console.log(`${rider.name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
    }

    function printRiders() {
        riders.forEach(rider => {
            console.log(`${rider.name}\nFinal position: ${rider.position}`);
        })
    }
}

motoRace((["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
    
)
