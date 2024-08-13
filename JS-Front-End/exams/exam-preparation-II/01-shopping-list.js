function solve(input) {
    let groceries = input.shift().split('!');

    let commandLine = input.shift();
    while (commandLine !== 'Go Shopping!') {
        const [command, item, newItem] = commandLine.split(' ');

        switch (command) {
            case 'Urgent':
                if(!groceries.includes(item)) {
                    groceries.unshift(item);
                }
                break;

            case 'Unnecessary':
                if(groceries.includes(item)) {
                    const indexOfItem = groceries.indexOf(item);
                    groceries.splice(indexOfItem, 1);
                }
                break;

            case 'Correct':
                if(groceries.includes(item)) {
                    const indexItem = groceries.indexOf(item);
                    groceries[indexItem] = newItem;
                }
                break;

            case 'Rearrange':
                if(groceries.includes(item)) {
                    const indexOfItem = groceries.indexOf(item);
                    groceries.splice(indexOfItem, 1);
                    groceries.push(item)
                }
                break;
        }
        commandLine = input.shift();
    }
    console.log(groceries.join(', '));
}

solve((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
    
)
