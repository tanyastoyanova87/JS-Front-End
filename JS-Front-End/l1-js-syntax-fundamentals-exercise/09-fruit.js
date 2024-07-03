function moneyForFruit(fruit, weightInGrams, pricePerKg) {

  let kgs = weightInGrams / 1000;
  let totalPrice = kgs * pricePerKg;
  console.log(`I need $${totalPrice.toFixed(2)} to buy ${kgs.toFixed(2)} kilograms ${fruit}.`)
}

moneyForFruit('orange', 2500, 1.80);