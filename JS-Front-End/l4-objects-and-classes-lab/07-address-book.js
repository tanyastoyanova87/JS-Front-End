function solve(input) {
    const people = {};

    for (const info of input) {
        let [name, address] = info.split(':');
        people[name] = address;
    }

    Object
    .keys(people)
    .sort((a, b) => a.localeCompare(b))
    .forEach(entry => console.log(`${entry} -> ${people[entry]}`))
}

solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
    
   )
