function solve(text = '') {
  let username = text[0];
  let password = '';
  let countTries = 0;
  for (let i = username.length; i >= 0; i--) {
    password += username.charAt(i);
  }
  
  for (let i = 1; i < text.length; i++) {
    if(text[i] !== password) {
      countTries++;
      if(countTries === 4) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log('Incorrect password. Try again.');
    } else {
      console.log(`User ${username} logged in.`);
    }
  }
}

solve(['Acer','login','go','let me in','recA']);