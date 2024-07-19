function solve(input) {
    class Cat {
        constructor(nameCat, age) {
            this.nameCat = nameCat;
            this.age = age;
        }

        meow() {
            console.log(`${this.nameCat}, age ${this.age} says Meow`)
        }
    }

    let cats = [];
    for(let cat of input) {
        let [name, age] = cat.split(' ');
        cats.push(new Cat(name, age));
    }

    cats.forEach((cat) => cat.meow());
}

solve(['Mellow 2', 'Tom 5'])
