function formatGrade(grade) {
  let result = '';
  if(grade < 3) {
    result = 'Fail';
  } else if(grade < 3.5) {
    result = 'Poor';
  } else if(grade < 4.5) {
    result = 'Good';
  } else if(grade < 5.5) {
    result = 'Very good';
  } else {
    result = 'Excellent';
  }

  console.log(`${result} (${grade < 3 ? 2 : grade.toFixed(2)})`);
}

formatGrade(2.99);
