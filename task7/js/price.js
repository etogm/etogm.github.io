function getPrice(hours, isImportant) {
  let pay = 1500;

  if (isImportant) {
    hours /= 2;
    pay *= 2.5;
  }

  if (hours > 150) pay -= 250;

  return hours * pay;
}

getPrice(170, false);
