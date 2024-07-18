function solve(firstName, lastName, hairColor) {
    const person = {
        name: firstName,
        lastName,
        hairColor,
    }

    const objToJson = JSON.stringify(person);
    console.logI(objToJson);
}

solve('George', 'Jones', 'Brown');
