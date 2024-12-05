function getMaxValue(carrotTypes, capacity) {
  carrotTypes.sort((a, b) => (b.price / b.kg) - (a.price / a.kg));

  let maxValue = 0;
  for (let carrot of carrotTypes) {
    if (capacity === 0) {
      break;
    }
    let amount = Math.min(carrot.kg, capacity);
    maxValue += amount * (carrot.price / carrot.kg);
    capacity -= amount;
  }

  return maxValue;
}


const carrotTypes = [{ kg: 5, price: 100 }, { kg: 7, price: 150 }, { kg: 3, price: 70 }];
const capacity = 36;
console.log(getMaxValue(carrotTypes, capacity));
