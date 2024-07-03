function solve(word, firstNum, count) {
  let newWord = word.substring(firstNum, firstNum + count);
  console.log(newWord);
} 

solve('SkipWord', 4, 7);