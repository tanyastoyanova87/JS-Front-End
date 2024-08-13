function spellBookUnravelling(input) {
    let spell = input.shift();


    let inputLine = input.shift();
    while (inputLine !== 'End') {

        const [command, ...args] = inputLine.split('!');

        switch (command) {
            case 'RemoveEven':
                let newSpell = '';
                for (let i = 0; i < spell.length; i++) {
                    let char = String.fromCharCode(spell.charCodeAt(i));
                    if (i % 2 === 0) {
                        newSpell += char;
                    }
                }
                spell = newSpell;
                console.log(spell);
                break;

            case 'TakePart':
                const startIndex = args[0];
                const endIndex = args[1];

                spell = spell.substring(startIndex, endIndex);
                console.log(spell);
                break;

            case 'Reverse':
                const substring = args[0];
                if (spell.includes(substring)) {
                    spell = spell.replace(substring, '');
                    const reversedSubstring = substring.split('').reverse().join('');
                    spell += reversedSubstring;

                    console.log(spell);

                } else {
                    console.log('Error');
                }
                break;
        }

        inputLine = input.shift();
    }
    console.log(`The concealed spell is: ${spell}`);
};

spellBookUnravelling((["asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"])
)
