function inventory(input) {
    let heroes = [];
    for(let hero of input) {
        const [heroName, level, ...items] = hero.split(' / ');
        heroes.push({
            heroName,
            level,
            items,
        })
    }

    const sorted = heroes.sort((a, b) => a.level - b.level)

    for(let hero of sorted) {
        console.log(`Hero: ${hero.heroName}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
    }
}

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]    
    )
