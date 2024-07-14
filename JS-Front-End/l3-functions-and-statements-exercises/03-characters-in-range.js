function printCharactersInRange(firstChar, secondChar) {
    firstChar = getCharCode(firstChar);
    secondChar = getCharCode(secondChar);

    const minNumberChar = Math.min(firstChar, secondChar);
    const maxNumberChar = Math.max(firstChar, secondChar);
    
    function getCharCode(char) {
        char = char.charCodeAt(0);
        return char;
    }
    array = [];
    for (let i = minNumberChar + 1; i < maxNumberChar; i++) {
        let char = String.fromCharCode(i);
        array.push(char);
    }
    
    console.log(array.join(' '));
}

printCharactersInRange('a', 'd');
