function solve() {
    const textEl = document.getElementById('text');
    const namingConvention = document.getElementById('naming-convention');
    const resultEl = document.querySelector('.result-container #result')

    let modifiedTextEl = textEl.value.toLowerCase().split(' ');

    if(namingConvention.value === 'Camel Case') {
        let textWords = [];
        textWords.push(modifiedTextEl[0]);
        for (let i = 1; i < modifiedTextEl.length; i++) {
            modifyWord(i, textWords);
        }
        resultEl.textContent = textWords.join('');

    } else if(namingConvention.value === 'Pascal Case') {
        let textWords = [];
        for (let i = 0; i < modifiedTextEl.length; i++) {
            modifyWord(i, textWords);
        }
        resultEl.textContent = textWords.join('');

    } else {
        resultEl.textContent = 'Error!';
    }

    function modifyWord(i, textWords) {
        let word = modifiedTextEl[i]
        let firstLetter = word.substring(0, 1).toUpperCase();
        let restOfWord = word.substring(1);
        let wholeWord = firstLetter.concat(restOfWord);
        textWords.push(wholeWord);
    }
}
