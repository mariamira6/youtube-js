function returnNumbers(num) {
  let numFinal = num.split(",").map(n => n.trim());
  numFinal = parseInt(numFinal)
  let max = numFinal[0];
  let min = numFinal[0];
  for (let i = 0; i < numFinal.length; i++) {
    if (max < numFinal[i]) {
      max = numFinal[i];
    }
    if (min > numFinal[i]) {
      min = numFinal[i];
    }
  }
  return { max, min };
};

returnNumbers(12, 2, 3, 56, 7);
