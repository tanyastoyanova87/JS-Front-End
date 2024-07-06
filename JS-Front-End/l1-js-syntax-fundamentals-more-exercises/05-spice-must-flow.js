function solve(startingYield) {
  let days = 0;
  let totalSpice = 0;
  while (startingYield >= 100) {
    let extractedSpices = startingYield;
    days++;
    if (extractedSpices >= 26) {
      extractedSpices -= 26;
    }
    startingYield -= 10;
    totalSpice += extractedSpices;
  }

  if (startingYield < 100) {
    if (totalSpice >= 26) {
      totalSpice -= 26;
    }
  }

  console.log(days);
  console.log(totalSpice);
}

solve(450);