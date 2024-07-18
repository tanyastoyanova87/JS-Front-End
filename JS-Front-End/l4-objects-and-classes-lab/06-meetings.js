function solve(array) {
    let meetings = {};

    for(let weekday of array) {
        let [day, name] = weekday.split(' ');

        if(!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
            continue;
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
   for (const day in meetings) {
    console.log(`${day} -> ${meetings[day]}`)
   }
}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
   )
