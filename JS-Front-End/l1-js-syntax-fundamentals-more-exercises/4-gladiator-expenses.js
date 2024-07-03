function expenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let helmetBroken = false;
  let helmetBrokenCount = 0;
  let swordBroken = false;
  let swordBrokenCount = 0;
  let shieldBrokenCount = 0;
  let armorBrokenCount = 0;

  for (let index = 1; index <= lostFights; index++) {
    if (index % 2 === 0) {
      helmetBroken = true;
      helmetBrokenCount++;
    }

    if (index % 3 === 0) {
      swordBroken = true;
      swordBrokenCount++;
    }

    if (swordBroken && helmetBroken) {
      shieldBrokenCount++;
      if (shieldBrokenCount % 2 == 0) {
        armorBrokenCount++;
      }
    }
    helmetBroken = false;
    swordBroken = false;
  }

  let totalExpenses = helmetBrokenCount * helmetPrice + swordBrokenCount * swordPrice
    + shieldBrokenCount * shieldPrice + armorBrokenCount * armorPrice;
  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

expenses(23, 12.50, 21.50, 40, 200);