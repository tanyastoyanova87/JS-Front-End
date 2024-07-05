function solve(text = '') {
  text = text.split(' ');
  let regex = /^#[a-zA-Z]+$/;
  for (let i = 0; i < text.length; i++) {
    if(text[i].match(regex)){
      console.log(text[i].substring(1));
    }    
  }
}
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')