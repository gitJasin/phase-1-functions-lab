const hqLocation = 42;

function distanceFromHqInBlocks(someValue) {
    if (someValue >= hqLocation) {
      return someValue -  hqLocation;
    } 
    else {
      return hqLocation - someValue;
    }
  }

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
      return (destination - start) * 264
    } 
    else {
      return (start - destination) * 264
    }
  }

  function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
      return distanceFromHqInFeet(start, destination) - 264;
    } 
    else if (distanceTravelledInFeet(start, destination) >= 400 && (distanceTravelledInFeet(start, destination) <= 2000)) {
      return (distanceTravelledInFeet(start, destination) - 400) * .02;
    } 
    else if (distanceTravelledInFeet(start, destination) >= 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
      return 25;
    }
    else if (distanceTravelledInFeet(start, destination) >= 2500) {
      return 'cannot travel that far';
    }
  }