function solve(array = []) {
  array.sort((a, b) => a - b);
  let arrayLength = array.length;
  let newArray = [];

  for (let i = 0; i < arrayLength; i++) {
    if(i % 2 === 0) {
      newArray.push(Math.min(...array));
      array.shift();
    } else {
      newArray.push(Math.max(...array));
      array.pop();
    }
  }

  return newArray;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])