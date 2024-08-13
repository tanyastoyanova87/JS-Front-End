function horseRacing(input) {
    const horses = input.shift().split('|');
    startRacing();
    printHorses();

    function startRacing() {
        let commandLine = input.shift();
        while (commandLine !== 'Finish') {
            const [command, name, ...args] = commandLine.split(' ');

            switch (command) {
                case 'Retake':
                    retakeHandler(name, args[0]);
                    break;

                case 'Trouble':
                    troubleHandler(name);
                    break;

                case 'Rage':
                    rageHandler(name);
                    break;

                case 'Miracle':
                    miracleHandler();
                    break;
            }
            commandLine = input.shift();
        }
    }
    function retakeHandler(overtakingHorse, overtakenHorse) {
        let overtakingHorsePosition = horses.indexOf(overtakingHorse);
        let overtakenHorsePosition = horses.indexOf(overtakenHorse);

        if (overtakingHorsePosition < overtakenHorsePosition) {
            horses[overtakingHorsePosition] = overtakenHorse;
            horses[overtakenHorsePosition] = overtakingHorse;
            console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
        }
    }

    function troubleHandler(horseName) {
        let index = horses.indexOf(horseName);
        if (index > 0) {
            const horseBefore = horses[index - 1];
            horses[index - 1] = horseName;
            horses[index] = horseBefore;
            console.log(`Trouble for ${horseName} - drops one position.`);
        }
    }

    function rageHandler(horseName) {
        for (let j = 0; j < 2; j++) {
            const index = horses.indexOf(horseName);
            if (index < horses.length - 1) {
                horses[index] = horses[index + 1];
                horses[index + 1] = horseName;
            }
        }
        console.log(`${horseName} rages 2 positions ahead.`);
    }

    function miracleHandler() {
        let lastHorse = horses[0];
        horses.shift();
        horses.push(lastHorse);
        console.log(`What a miracle - ${lastHorse} becomes first.`);
    }

    function printHorses() {
        console.log(horses.join('->'));
        console.log(`The winner is: ${horses[horses.length - 1]}`);
    }
}
horseRacing((['Fancy|Lilly',
    'Retake Lilly Fancy',
    'Trouble Lilly',
    'Trouble Lilly',
    'Finish',
    'Rage Lilly'])

)
