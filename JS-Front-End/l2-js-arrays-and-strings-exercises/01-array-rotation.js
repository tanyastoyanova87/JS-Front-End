function solve(array, numberRotations) {
  for (let i = 0; i < numberRotations; i++) {
    let removed = array.shift();
    array.push(removed);
  }
  console.log(array.join(' '));
}

solve([32, 21, 61, 1], 4);