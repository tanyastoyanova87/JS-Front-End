function solve(text, word) {
  let count = 0;
  text = text.split(' ');
  for (let i = 0; i < text.length; i++) {
    if(text[i] === word) {
      count++;
    }
  }
  console.log(count);
}

solve('softuni is great place for learning new programming languages', 'softuni');