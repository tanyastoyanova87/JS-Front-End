function solve(input) {
    const superHeroesCount = input.shift();

    let superHeroes = [];
    for (let i = 0; i < superHeroesCount; i++) {
        const hero = input.shift().split('-');
        const name = hero[0];
        const superPower = hero[1].split(',');
        const energy = hero[2];

        superHeroes.push({
            name,
            superPower,
            energy: Number(energy),
        })
    }

    let line = input.shift();

    while (line != 'Evil Defeated!') {
        const [command, name, ...args] = line.split(' * ');
        const superHero = superHeroes.find(hero => hero.name === name);

        switch (command) {
            case 'Use Power':
                const superPowerHero = args[0];
                const energyHero = Number(args[1]);

                if (superHero.superPower.includes(superPowerHero) && superHero.energy > energyHero) {
                    superHero.energy -= energyHero;
                    console.log(`${name} has used ${superPowerHero} and now has ${superHero.energy} energy!`);
                } else {
                    console.log(`${name} is unable to use ${superPowerHero} or lacks energy!`);
                }
                break;

            case 'Train':
                const trainingEnergy = Number(args[0]);

                if (superHero.energy === 100) {
                    console.log(`${name} is already at full energy!`);
                } else {
                    const initialEnergy = superHero.energy;
                    superHero.energy += trainingEnergy;

                    if (superHero.energy > 100) {
                        superHero.energy = 100;
                        console.log(`${name} has trained and gained ${100 - initialEnergy} energy!`);
                    } else {
                        console.log(`${name} has trained and gained ${trainingEnergy} energy!`);
                    }
                }
                break;

            case 'Learn':
                const newSuperPower = args[0];

                if (superHero.superPower.includes(newSuperPower)) {
                    console.log(`${name} already knows ${newSuperPower}.`);
                } else {
                    superHero.superPower.push(newSuperPower);
                    console.log(`${name} has learned ${newSuperPower}!`);
                }
                break;
        }

        line = input.shift();
    }

    superHeroes.forEach(superHero => {
        console.log(`Superhero: ${superHero.name}`);
        console.log(`- Superpowers: ${superHero.superPower.join(', ')}`);
        console.log(`- Energy: ${superHero.energy}`);
    });
}

solve(([
    "3",
    "Iron Man-Repulsor Beams,Flight-80",
    "Thor-Lightning Strike,Hammer Throw-10",
    "Hulk-Super Strength-60",
    "Use Power * Iron Man * Flight * 30",
    "Train * Thor * 20",
    "Train * Hulk * 50",
    "Learn * Hulk * Thunderclap",
    "Use Power * Hulk * Thunderclap * 70",
    "Evil Defeated!"
])
)

solve(([
    "2",
    "Iron Man-Repulsor Beams,Flight-20",
    "Thor-Lightning Strike,Hammer Throw-100",
    "Train * Thor * 20",
    "Use Power * Iron Man * Repulsor Beams * 30",
    "Evil Defeated!"
])
)

solve(([
    "2",
    "Iron Man-Repulsor Beams,Flight-100",
    "Thor-Lightning Strike,Hammer Throw-50",
    "Train * Thor * 20",
    "Learn * Thor * Hammer Throw",
    "Use Power * Iron Man * Repulsor Beams * 30",
    "Evil Defeated!"
])
)
