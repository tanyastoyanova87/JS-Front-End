function wildWestAdventure(input) {
    const charactersCount = input[0];
    const MAX_CAPACITY_BULLETS = 6;
    const MAX_CAPACITY_HP = 100;
    const LOST_BULLETS = 1;
    let heroes = [];

    getHeroes();
    fight();
    printAliveHeroes();

    function getHeroes() {
        for (let i = 1; i <= charactersCount; i++) {
            let [heroName, heroHP, heroBullets] = input[i].split(' ');
            heroes.push({
                heroName,
                heroHP: Number(heroHP),
                heroBullets: Number(heroBullets),
            });
        }
    }

    function fight() {
        for (let i = Number(charactersCount) + 1; i < input.length; i++) {
            const command = input[i];
            if (input[i] === 'Ride Off Into Sunset') {
                return;
            }
            const [action, charactersName, ...args] = command.split(' - ');
            const hero = heroes.find(hero => hero.heroName === charactersName);

            if (action === 'FireShot') {
                handleFireShot(hero, args[0]);

            } else if (action === 'TakeHit') {
                handleTakeHit(hero, Number(args[0]), args[1]);

            } else if (action === 'Reload') {
                handleReload(hero);

            } else if (action === 'PatchUp') {
                handlePatchUp(hero, Number(args[0]));
            }
        }
    }

    function handleFireShot(hero, target) {
        if (hero.heroBullets > 0) {
            hero.heroBullets -= LOST_BULLETS;
            console.log(`${hero.heroName} has successfully hit ${target} and now has ${hero.heroBullets} bullets!`);
        } else {
            console.log(`${hero.heroName} doesn't have enough bullets to shoot at ${target}!`);
        }
    }

    function handleTakeHit(hero, damage, attacker) {
        hero.heroHP -= damage;
        if (hero.heroHP > 0) {
            console.log(`${hero.heroName} took a hit for ${damage} HP from ${attacker} and now has ${hero.heroHP} HP!`);
        } else {
            console.log(`${hero.heroName} was gunned down by ${attacker}!`);
        }
    }


    function handleReload(hero) {
        if (hero.heroBullets < MAX_CAPACITY_BULLETS) {
            const neededBullets = MAX_CAPACITY_BULLETS - hero.heroBullets;
            hero.heroBullets += neededBullets;
            console.log(`${hero.heroName} reloaded ${neededBullets} bullets!`);
        } else {
            console.log(`${hero.heroName}'s pistol is fully loaded!`);
        }
    }

    function handlePatchUp(hero, amount) {
        if (hero.heroHP >= MAX_CAPACITY_HP) {
            console.log(`${hero.heroName} is in full health!`);
        } else {
            if (hero.heroHP + amount > MAX_CAPACITY_HP) {
                hero.heroHP = MAX_CAPACITY_HP;
            } else {
                hero.heroHP += amount;
                console.log(`${hero.heroName} patched up and recovered ${amount} HP!`);
            }
        }
    }

    function printAliveHeroes() {
        const aliveHeroes = heroes.filter((hero) => hero.heroHP > 0);
        aliveHeroes.forEach(hero => {
            console.log(`${hero.heroName}\n HP: ${hero.heroHP}\n Bullets: ${hero.heroBullets}`)
        });
    }
}

wildWestAdventure((["2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"])


)
