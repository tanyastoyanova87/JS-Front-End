function solve(word, text = '') {
  text = text.toLowerCase();
  text = text.split(' ');
  
  let found = false;
  for (let i = 0; i < text.length; i++) {
    if(text[i] === word) {
      console.log(word);
      found = true;
      break;
    }
  }

  if(found === false) {
    console.log(`${word} not found!`)
  }
}

solve('javascript',

'JavaScript is the best programming language')