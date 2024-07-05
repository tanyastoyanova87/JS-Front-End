function solve(wordsArray, text) {

  wordsArray = wordsArray.split(', ');
  for (const word of wordsArray) {
    text = text.replace('*'.repeat(word.length), word);
  }

  console.log(text);
}

solve('great, learning',

  'softuni is ***** place for ******** new programming languages')