function solve(number, array) {
  array.length = number;
  for (let i = 0; i < number; i++) {
    array.push();
    
  }
  array.reverse();
  console.log(array.join(' '));
}

solve(2, [66, 43, 75, 89, 47]);