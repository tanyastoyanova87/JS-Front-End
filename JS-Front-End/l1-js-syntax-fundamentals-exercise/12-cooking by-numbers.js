function cookingTheNumbers(number, ...operators) {

  number = parseInt(number);
 
  for (let operator = 0; operator < operators.length; operator++) {
    switch(operators[operator]) {
      case 'chop':
        number /= 2;
         break;
      case 'dice':
        number = Math.sqrt(number);
         break;
      case 'spice':
        number += 1;
         break;
      case 'bake':
        number *= 3;
         break;
      case 'fillet':
        number = number - (number * 0.2);
         break;
    }
    console.log(number);
  }
}

cookingTheNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');