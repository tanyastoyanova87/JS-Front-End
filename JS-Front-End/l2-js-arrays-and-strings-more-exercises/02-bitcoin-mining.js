function solve(arrayGoldInGrams) {
  let bitcoins = 0;
  let money = 0;
  let purchased = false;
  let dayPurchasedFirst = 0;
  let days = 0;
  for (let i = 0; i < arrayGoldInGrams.length; i++) {
    days++;
    let amount = arrayGoldInGrams[i] * 67.51;
    if (days % 3 === 0) {
      amount -= amount * 0.30;
    }
    money += amount;
    while (money >= 11949.16) {
      purchased = true;
      money -= 11949.16;
      bitcoins++;
      if (bitcoins === 1) {
        dayPurchasedFirst = days;
      }
    }
  }

  console.log(`Bought bitcoins: ${bitcoins}`);
  if (purchased) {
    console.log(`Day of the first purchased bitcoin: ${dayPurchasedFirst}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}

solve([3124.15, 504.212, 2511.124]);