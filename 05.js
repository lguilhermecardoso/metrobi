function findHighestSafeFloor() {
  const totalFloors = 100;
  
  let increment = Math.floor(Math.sqrt(totalFloors));
  let floor = increment;
  let previousFloor = 0;

  while (floor <= totalFloors && !dropEgg(floor)) {
    previousFloor = floor;
    increment--;
    if (increment <= 0) {
      increment = 1;
    }
    floor += increment;
  }

  for (let i = previousFloor + 1; i < floor && i <= totalFloors; i++) {
    if (dropEgg(i)) {
      return i - 1;
    }
  }
  return floor - 1;
}

function dropEgg(floor) {
  const highestSafeFloor = 75;
  return floor > highestSafeFloor;
}

console.log(findHighestSafeFloor());