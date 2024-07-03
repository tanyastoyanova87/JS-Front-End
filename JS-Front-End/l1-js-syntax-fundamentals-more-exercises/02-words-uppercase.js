function wordsToUppercase(text) {
  let words = text.split(/[, !?.]+/);

  for (let word = 0; word < words.length; word++) {
    words[word] = words[word].toUpperCase();
  }

  let result = words.join(', ');
  console.log(result.replace(/, $/, ''));
}

wordsToUppercase('Hi, how are you?');