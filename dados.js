function tirarDado(caras, dados) {
  let tirada = [];
  for (let i = 0; i < dados; i++) {
    let res = Math.floor(Math.random() * caras) + 1;
    tirada.push(res);
  }
  return tirada;
}



function numPrimos(num) {
  let primos = [];
  let number = 1;
  while (primos.length < num) {
    let isPrimo = true;
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrimo = false;
      }
    }

    if (isPrimo == true) {
      primos.push(number);
    }
    number++;
  }
  return primos;
}

console.log(numPrimos(20));

function priMo(num) {
  let res = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      res = false;
    }
  }
  return res;
}

function cuantosPrimos(num) {
  let final = [];
  for (let i = 1; i <= num; i++) {
    if (priMo(i) == true) {
      final.push(i);
    }
  }
  return final;
}

