function solve(input) {
    const countComposers = input.shift();

    let composers = {};
    for (let i = 0; i < countComposers; i++) {
        const [piece, composer, key] = input[i].split('|');
        composers[piece] = {
            composer,
            key,
        }
    }

    let commandLine = input.shift();
    while (commandLine !== 'Stop') {
        const [command, piece, ...args] = commandLine.split('|');

        switch (command) {
            case 'Add':
                const composer = args[0];
                const key = args[1];
                if (composers.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    composers[piece] = {
                        composer,
                        key,
                    }
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
                break;

            case 'Remove':
                if (!composers.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                } else {
                    delete composers[piece];
                    console.log(`Successfully removed ${piece}!`);
                }
                break;

            case 'ChangeKey':
                const newKey = args[0];
                if (composers.hasOwnProperty(piece)) {
                    composers[piece].key = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }
        commandLine = input.shift();
    }

    for (const composer in composers) {
        console.log(`${composer} -> Composer: ${composers[composer].composer}, Key: ${composers[composer].key}`);
    }
}

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)
