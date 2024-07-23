function movies(input) {
    let movies = [];
    for (let command of input) {
        if (command.startsWith('addMovie')) {
            let [, name] = command.split('addMovie ');
            movies.push({
                name,
            })
        } else if (command.includes('directedBy')) {
            let [name, director] = command.split(' directedBy ')
            const movie = movies.find((x) => x.name === name);

            if (movie != undefined) {
                movie.director = director;
            }

        } else if (command.includes('onDate')) {
            let [name, date] = command.split(' onDate ')
            const movie = movies.find((x) => x.name === name);

            if (movie != undefined) {
                movie.date = date;
            }
        }
    }

    movies.forEach(movie => {
        if(movie.name && movie.date && movie.director) {
            console.log(JSON.stringify(movie))
        }
    });
}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
)
