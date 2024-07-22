function employees(employeesArr) {
    
    let employees = [];
    employeesArr.forEach(fullName => {
        const employee = {
            fullName,
            number: fullName.length,
        }
        employees.push(employee);
    });

    employees.forEach(employees => {
        console.log(`Name: ${employees.fullName} -- Personal Number: ${employees.number}`)
    });
}

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    )
