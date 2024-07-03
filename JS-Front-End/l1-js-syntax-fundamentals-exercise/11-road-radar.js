function roadRadar(speed, area) {

  const motorway = 'motorway';
  const interstate = 'interstate';
  const city = 'city';
  const residential = 'residential';
  const motorwayLimit = 130;
  const interstateLimit = 90;
  const cityLimit = 50;
  const residentialLimit = 20;

  let difference = 0;
  let status = '';
  switch (area) {
    case motorway:
      if (speed <= 130) {
        console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`)
      } else {
        difference = speed - motorwayLimit;
        speedingStatus();
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`)
      }
      break;

    case interstate:
      if (speed <= 90) {
        console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`)
      } else {
        difference = speed - interstateLimit;
        speedingStatus();
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`)
      }
      break;

    case city:
      if (speed <= 50) {
        console.log(`Driving ${speed} km/h in a ${cityLimit} zone`)
      } else {
        difference = speed - cityLimit;
        speedingStatus();
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`)
      }
      break;

    case residential:
      if (speed <= 20) {
        console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`)
      } else {
        difference = speed - residentialLimit;
        speedingStatus();
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`)
      }
      break;
  }

  function speedingStatus() {
    if (difference <= 20) {
      status = 'speeding';
    } else if (difference <= 40) {
      status = 'excessive speeding';
    } else {
      status = 'reckless driving';
    }
  }
}

roadRadar(120, 'interstate');