function solve(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;
  let steps = 0;
  for (let i = base - 2; i >= 0; i -= 2) {
    stone += (i * i) * increment;
  }

  for (let i = base; i > 0; i -= 2) {
    steps++;
    if (steps % 5 === 0) {
      lapis += ((i * 4) - 4) * increment;
    } else if (i <= 2) {
      gold += (i * i) * increment;
    } else {
      marble += ((i * 4) - 4) * increment;

    }
  }

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}

solve(11,

  1)

