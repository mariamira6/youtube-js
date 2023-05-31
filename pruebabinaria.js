function binaRia(num, base) {
  let number = num.toString();
  number = (number.split(''));
  let res = 0;
  for (let i = number.length - 1; i >= 0; i--) {
    res = res + (number[i] * (base ** ((number.length - 1) - i)))
  }
  // for (let i = number.length - 1; i >= 0; i--) {
  //   numberFinal = numberFinal + number[i];
  // }
  // for (let j = 0; j < numberFinal.length; j++) {
  //   res = res + (numberFinal[j] * (base ** j))
  // }
  return res;
}



function decToBin(num, base) {
  let res = [];
  while (num >= base) {
    res.push(num % base);
    console.log(num % base);
    num = parseInt((num) / (base));
    console.log(num)
  }
  res.push(num);
  res.reverse()
  return res.join('');
}
console.log(decToBin(5, 2))
