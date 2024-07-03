function price(people, typeOfGroup, dayOfWeek) {
  let price = 0;

  const students = 'Students';
  const business = 'Business';
  const regular = 'Regular';

  switch (dayOfWeek) {
    case 'Friday':
      if (typeOfGroup === students) {
        price = 8.45;
      } else if (typeOfGroup === business) {
        price = 10.90;
      } else if (typeOfGroup === regular) {
        price = 15;
      }
      break;
    case 'Saturday':
      if (typeOfGroup === students) {
        price = 9.80;
      } else if (typeOfGroup === business) {
        price = 15.60;
      } else if (typeOfGroup === regular) {
        price = 20;
      }
      break;
    case 'Sunday':
      if (typeOfGroup === students) {
        price = 10.46;
      } else if (typeOfGroup === business) {
        price = 16;
      } else if (typeOfGroup === regular) {
        price = 22.50;
      }
      break;
  }
  debugger

  let totalPrice = 0;
  if(typeOfGroup === students && people >= 30) {
    totalPrice = (people * price) * 0.85;
  } else if (typeOfGroup === business && people >= 100) {
    totalPrice = (people -10) * price;
  } else if (typeOfGroup === regular && (people >= 10 && people <= 20)) {
    totalPrice = (people * price) * 0.95;
  } else {
    totalPrice = people * price;
  }

  console.log (`Total price: ${totalPrice.toFixed(2)}`);
}

price(40, "Regular", "Saturday");