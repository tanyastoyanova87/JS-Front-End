function wordsTracker(input) {
    const [specialWords, ...restOfTheWords] = input;

    let words = specialWords.split(' ').reduce((acc, word) => {
        acc[word] = 0;
        return acc;
    }, {});

    for(let word of restOfTheWords) {
        if(words.hasOwnProperty(word)) {
            words[word] += 1
        }
    }

    Object
        .entries(words)
        .sort(([, a], [, b]) => b - a)
        .forEach(word => console.log(`${word[0]} - ${word[1]}`));

}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)
