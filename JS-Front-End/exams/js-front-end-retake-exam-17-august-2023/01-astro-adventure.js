function astroAdventure(input) {
    const MAX_ENERGY = 200;
    const MAX_OXYGEN_LEVEL = 100;
    const astronautsCount = input[0];
    
    let astronauts = [];
    getAstronauts();
    adventuring();
    printAstronauts();
    
    function getAstronauts() {
        for (let i = 1; i <= astronautsCount; i++) {
            const [name, oxygenLevel, energy] = input[i].split(' ');
            astronauts.push({
                name,
                oxygenLevel: Number(oxygenLevel),
                energy: Number(energy),
            });
        }
    }

    function adventuring() {
        for (let i = astronauts.length + 1; i < input.length; i++) {
            if (input[i] === 'End') {
                return;
            }
            const [action, name, ...args] = input[i].split(' - ');
            const astronaut = astronauts.find(astronaut => astronaut.name === name);

            switch (action) {
                case 'Explore':
                    exploreHandler(astronaut, Number(args[0]));
                    break;
    
                case 'Refuel':
                    refuelHandler(astronaut, Number(args[0]));
                    break;
    
                case 'Breathe':
                    breathe(astronaut, Number(args[0]));
                    break;
            }
        }
    }

    function exploreHandler(astronaut, energy) {
        if(astronaut.energy >= energy) {
            astronaut.energy -= energy;
            console.log(`${astronaut.name} has successfully explored a new area and now has ${astronaut.energy} energy!`);
        } else {
            console.log(`${astronaut.name} does not have enough energy to explore!`);
        }
    }

    function refuelHandler(astronaut, amount) {
        const currentEnergy = astronaut.energy;
        astronaut.energy += amount;
        
        if(astronaut.energy > MAX_ENERGY) {
            astronaut.energy = MAX_ENERGY;
            console.log(`${astronaut.name} refueled their energy by ${MAX_ENERGY - currentEnergy}!`);
        } else {
            console.log(`${astronaut.name} refueled their energy by ${amount}!`);
        }
    }

    function breathe(astronaut, amount) {
        const currentOxygen = astronaut.oxygenLevel;
        astronaut.oxygenLevel += amount;
        
        if(astronaut.oxygenLevel > MAX_OXYGEN_LEVEL) {
            astronaut.oxygenLevel = MAX_OXYGEN_LEVEL;
            console.log(`${astronaut.name} took a breath and recovered ${MAX_OXYGEN_LEVEL - currentOxygen} oxygen!`);
        } else {
            console.log(`${astronaut.name} took a breath and recovered ${amount} oxygen!`);
        }
    }

    function printAstronauts() {
        astronauts.forEach(astronaut => {
            console.log(`Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygenLevel}, Energy: ${astronaut.energy}`);
        })
    }
}

astroAdventure([  '3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End']
  
)
