/*let arra1 = [24, 41, 43, 66, 24];
cuántos pares hay en el array.
function pares(array1) {
  let pares1 = 0;
  for (let i=0; i<array1.length; i++) {
    if (array1[i]%2==0) {
      pares1 = pares1 + 1;
    }
    }
  return pares1;
}

console.log(pares(arra1));
*/


//sumar pares. esta con los tres bucles, for, for in, for of.
let arra1 = [24, 41, 43, 66, 24];
function sumapares(vector) {
  let parecillos = 0;
  for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 2 == 0) {
      parecillos = parecillos + vector[i];
    }
  }

  for (let i of vector) {
    if (i % 2 == 0) {
      parecillos += i;
    }
  }

  for (let i in vector) {
    if (vector[i] % 2 == 0) {
      parecillos += vector[i];
    }
  }
  return parecillos
}

console.log(sumapares(arra1));


/*
sumar primero y último
let arra1 = [24, 41, 43, 66, 24];
function sumapyu(vector) {
  let ultimo = vector.length - 1;
  let sumika = vector[0]+vector[ultimo];
  return sumika
}
console.log(sumapyu(arra1));
*/

//función que le pasemos un array y un número, y me devuelva cuántas veces está ese número dentro del array
/*let lista = [2, 5, 6, 7, 2, 2, 2, 2, 4, 6, 8, 9, 3, 4];

function cuantos(vector, num) {
  let numfinal = 0;
  for (let i=0; i<vector.length; i++) {
    if (vector[i]==num) {
      numfinal = numfinal + 1;
    }
    }
    if (numfinal == 0) {
      numfinal = "El número no está en la lista";
    }
    return numfinal;
}

console.log(cuantos(lista, 2));
*/

//función con 2 vectores, devuelve por pantalla el vector 1 tiene más casillas que el vector 2.
/*
let arra1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
let arra2 = ["a", "b", "c"];
let arra3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
let arra4 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

function medida(vector1, vector2) {
  let med1 = vector1.length;
  let med2 = vector2.length;
  let res = "";
  if (med1 == med2) {
    res = "Los dos vectores son iguales";
  } else if (med1 > med2) {
    res = `${vector1} es más largo que ${vector2}`;
  } else if (med2 > med1) {
    res =`${vector2} es más largo que ${vector1}`;
  }
  return res;
  }

console.log(medida(arra1, arra4));
*/

//2 vectores y un número, devolver si vector1 tiene más  veces ese número o no.
/*let arra1 = [2, 3, 5, 6, 3, 2, 2, 3];
let arra2 = [2, 4, 4, 4, 5, 6, 4];

function ganador(vector1, vector2, num) {
  let total1 = 0;
  let total2 = 0;
  let res = "";
  for (i=0; i<vector1.length; i++) {
  if (vector1[i]==num) {
    total1 = total1 + 1;
  }
  }
  for (i=0; i<vector2.length; i++) {
  if (vector2[i]==num) {
    total2 = total2 + 1;
  }
  }

  if (total1 == total2) {
    res = "Los dos vectores tienen la misma cantidad de ese número.";
  } else if (total1 > total2) {
    res = `El primer vector tiene ${total1} veces ${num} y el segundo vector tiene ${total2} veces ${num}, por lo tanto el primero tiene más cantidad que el segundo.`;
  } else if (total2 > total1) {
    res = `El segundo vector tiene ${total2} veces ${num} y el primer vector tiene ${total1} veces ${num}, por lo tanto el segundo tiene más cantidad que el primero.`;
  }
return res;
}

console.log(ganador(arra1, arra2, 4));
*/
//dado un array de cadena, devolver un texto con la cadena al revés
/*let arra1 = "Hola que tal";

function reves(vector) {
  let espejo = vector.length - 1;
  let res = "";
  for (i=espejo; i>=0; i--) {
  res = res + vector[i];
  }
  return res;
}
console.log(reves(arra1));
*/
//función que le pases un vector y una posición, y que le cambie a ese vector en la posición un 0.
/*
let arra1 = [0, 1, 2, 3, 4, 5, 6, 7];

function cambiar(vector, posicion) {
vector[posicion] = 0;
return vector;
}
console.log(cambiar(arra1, 5));
*/
/*función que reciba un vector de num y un num, devolver un array con 3 posiciones (1º cuantos son menores que num, 2º cuantos son iguales que num, 3º cuantos son mayores que num)*/
/*
let arra2 = [1, 2, 3, 4, 5, 6, 7, 8];
function pos(vector1, num) {
  let mayor = 0;
  let igual = 0;
  let menor = 0;
  for (i=0; i<vector1.length; i++) {
    if (vector1[i] > num) {
      mayor = mayor + 1;
    } else if (vector1[i] == num) {
      igual = igual + 1;
    } else if (vector1[i] < num) {
      menor = menor + 1;
    }
  }
  return [menor, igual, mayor];
}

console.log(pos(arra2, 3));
*/

/*función que reciba un vector de num y un num, a todos los elementos le incremente el num.*/
/* ESTÁ MAL let arra1 = [2, 3, 7, 10, 24, 5, 8];
arra1.forEach(function (vector, num) {
  vector[i]+=num;
  console.log(arra1);
});*/


let arra2 = [2, 3, 7, 10, 24, 5, 8];
function aumento(vector, num) {
  for (let i = 0; i < vector.length; i++) {
    vector[i] += num;
  }
  return vector;
}
console.log(aumento(arra2, 4));

/*función que me devuelva el factorial de un número.*/

function factorial(num) {
  let res = 1;
  for (let i = num; i >= 1; i--) {
    res = i * res;
  }
  return res;
}

console.log(factorial(4));

function factorial2(num) { //al revés
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res = i * res;
  }
  return res;
}

console.log(factorial2(4));


//array. función que devuelva el máx y mín en un array.
let listika = [11, 10, 23, 6, 8, 9, 14];
function maymeno(vector) {
  let max = vector[0];
  let min = vector[0];
  for (let i = 0; i < vector.length; i++) {
    if (max < vector[i]) {
      max = vector[i];
    }
    if (min > vector[i]) {
      min = vector[i];

    }
  }
  return [max, min];
}
console.log(maymeno(listika));

/*Igual que antes pero que la respuesta sea un solo objeto con 2 propiedades
y sus valores: máximo y mínimo. en vez de usar for, usar for of y otro con for in*/

let listika2 = [11, 10, 23, 6, 8, 9, 14];
function maymeno2(vector) {
  let max = vector[0];
  let min = vector[0];
  for (let i = 0; i < vector.length; i++) {
    if (max < vector[i]) {
      max = vector[i];
    }
    if (min > vector[i]) {
      min = vector[i];

    }
  }
  return { "max": max, "min": min };
}

let mires = maymeno2(listika2);
console.log(mires);
console.log(`El número mayor es ${mires.max} y el menor es ${mires.min}`);

let listika3 = [11, 10, 25, 1, 8, 9, 14];
function maymeno3(vector) {
  let max = vector[0];
  let min = vector[0];
  for (let value of vector) {
    if (max < value) {
      max = value;
    }
    if (min > value) {
      min = value;
    }
  }
  return { "max": max, "min": min };
}
console.log(maymeno3(listika3));

let listika4 = [11, 10, 25, 1, 8, 9, 14];
function maymeno4(vector) {
  let max = vector[0];
  let min = vector[0];
  for (let i in vector) {
    if (max < vector[i]) {
      max = vector[i];
    }
    if (min > vector[i]) {
      min = vector[i];
    }
  }
  return { "max": max, "min": min };
}
console.log(maymeno4(listika4));

/*"función que dado un array de lo que sea y un valor que se le pase a la función,
devuelva la posición en dónde se encuentra ese valordentro del array.
Si no lo encuentra, que devuelva un -1. (ej: [4,8,2,7,10,-3,9], 10 -> retorna: 4)*/

/*let numeritos = [1, -10, 4, 20, 45, 2, 3];
function andesta(vector, pos) {
  let numfinal = 0;
  for (let i in vector) {
    if (vector[i] == pos) {
      numfinal = i;
    } else (vector[i] !== pos) {
      numfinal = -1;
    }
  }
  return numfinal;
}
console.log(andesta(numeritos, 1));*/

let numeritos2 = [2, 4, 3, 7, 8, 9];
function donde(vector, num) {
  let elnumero = -1;
  for (let i = 0; i < vector.length; i++) {
    if (num == vector[i]) {
      elnumero = i;
    }
  }

  return elnumero;
}
console.log(donde(numeritos2, 11));
/*Array de objetos. Objetos van a tener nombre y edad. función(array, num). Tiene que
devolver un array de objetos relleno con los objetos que tengan la edad que he pasado
por parámetro.*/

let objetillos = [{ "nombre": "María", "edad": 29 }, { "nombre": "Ricardo", "edad": 45 }, { "nombre": "Germán", "edad": 39 }, { "nombre": "Evelyn", "edad": 48 }, { "nombre": "Divina", "edad": 29 }, { "nombre": "Eva", "edad": 39 }];
let resultadiko = objetillos.filter(objetillos => objetillos.edad == 39);

console.log(resultadiko);
function ilobjeto(vector, num) {
  let listafinal = [];
  for (let i = 0; i < vector.length; i++) {
    if (num == vector[i].edad) {
      listafinal.push(vector[i]);
    }
  }
  return listafinal;
}
console.log(ilobjeto(objetillos, 29));

