/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */

function miFuncion(word) {
  return word.length;
};

//FUNCIONA


/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */

function miFuncion1(word, num) {
  let resultado = "";
  for (let i = 0; i < num; i++) {
    resultado = resultado + word[i];
  }
  return resultado
};

// FUNCIONA



/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
 miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

function sepaRa(word, symbol) {
  return word.split(symbol);
}

//FUNCIONA



/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */

function repeTir(word, num) {
  let rep = "";
  for (let i = 0; i < num; i++) {
    rep = rep + word + " ";
  }
  return rep;
}

// FUNCIONA - Este me ha costado un poco más

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */

function alReves(word) {
  let reves = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reves = reves + word[i];
  }
  return reves;
}

//FUNCIONA

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

function cuantasVeces(word, repeat) {
  // let nueva = word.split(repeat); //esta forma se puede hacer en js, porque siempre que haces split te lo divide en un trozo más que lo que quitas.
  // return nueva.length - 1; //si quito 4 espacios, me quedan 5 trozos. por eso es length - 1, porque he quitado 4 espacios, y por lo tanto hay 4 espacios que se repiten. :)
  let nueva = word.split(" ");
  let nueva2 = 0;
  for (let i = 0; i <= nueva.length; i++) {
    if (nueva[i] == repeat) {
      nueva2++;
    }
  }
  return nueva2;
}

//FUNCIONA



/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */

// function PalinDromo(word) {
//   let wordReverse = "";
//   let res = false;
//   for (let i = word.length - 1; i >= 0; i--) {
//     wordReverse = wordReverse + word[i];
//   }
//   if (wordReverse == word) {
//     res = true;
//   }
//   return res;
// }

function palinDromo(word) {
  let res = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      res = false;
    }
  }
  return res;
}

//FUNCIONA



/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */

function elCortao(frase, corte) {
  let corta = frase.split(corte);
  let corta2 = corta.join("");
  return corta2;
}


//FUNCIONA


/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */

function aleaTorio() {
  let min = 501;
  let max = 600
  let res = Math.floor(Math.random() * (max - min + 1) + min);
  return res;
}

//FUNCIONA



/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */

function capiCua(num) {
  let numeroTrans = num.toString();
  let numeroNuevo = "";
  let res = false;
  for (let i = numeroTrans.length - 1; i >= 0; i--) {
    numeroNuevo = numeroNuevo + numeroTrans[i];
  }
  if (numeroNuevo == numeroTrans) {
    res = true;
  }
  return res;
}

//FUNCIONA



/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */

function facTorial(num) {
  let numPrimero = 1;
  for (let i = 1; i <= num; i++) {
    numPrimero = numPrimero * i;
  }
  return numPrimero;
}

// 5 = 1 x 2 x 3 x 4 x 5


/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

function priMo(num) {
  let res = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      res = false;
    }
  }
  return res;
}

//FUNCIONA



/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */

function esPar(num) {
  if (num % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

//FUNCIONA


/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */

function celFah(grados, t) {
  if (t == "C") {
    return (grados * 9 / 5) + 32 + "ºF";
  }
  if (t = "F") {
    return (grados - 32) * 5 / 9 + "ºC";
  }
}

//FUNCIONA




/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */

function binaRia(num, base) {
  let number = num.toString();
  number = (number.split(''));
  let numberFinal = "";
  let res = 0;
  for (let i = 0; i < number.length; i++) {
    res = res + (number[i] * (base ** (number.length - i)))
  }
  // for (let i = number.length - 1; i >= 0; i--) {
  //   numberFinal = numberFinal + number[i];
  // }
  // for (let j = 0; j < numberFinal.length; j++) {
  //   res = res + (numberFinal[j] * (base ** j))
  // }
  return res;
}

console.log(binaRia(100, 2))



//FUNCIONA A MEDIAS



/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */

function descuenTito(precio, rebaja) {
  let discount = (precio * rebaja) / 100;
  return precio - discount;
}

//FUNCIONA



/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */



/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */

function vocalConso(text) {
  // let aux = text.toLowerCase();
  // let vocals = 0;
  // let consonants = 0;
  // for (let j = 0; j < aux.length; j++) {
  //   if (aux[j] == "a" || aux[j] == "e" || aux[j] == "i" || aux[j] == "o" || aux[j] == "u") {
  //     vocals = vocals + 1;
  //   } else {
  //     if (aux[j] !== " ") {
  //       consonants = consonants + 1;
  //     }
  //   }
  // }
  // return `Vocales: ${vocals}. Consonantes: ${consonants}.`

  let aux = text.toLowerCase();
  let vocals = 0;
  let consonants = 0;
  for (let i = 0; i < aux.length; i++) {
    if (aux[i] >= "a" && aux[i] <= "z") {
      if (aux[i] == "a" || aux[i] == "e" || aux[i] == "i" || aux[i] == "o" || aux[i] == "u") {
        vocals = vocals + 1;
      } else {
        consonants = consonants + 1;
      }
    }
    if (aux[i] == "á" || aux[i] == "é" || aux[i] == "í" || aux[i] == "ó" || aux[i] == "ú") {
      vocals = vocals + 1;
    }
  }
  return `Vocales: ${vocals}, Consonantes: ${consonants}.`
}

//FUNCIONA



/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */

function validaNombre(text) {

}

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */



/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

function elevaDo(num) {
  let res = [];
  for (let i = 0; i < num.length; i++) {
    res.push(num[i] ** 2);
  }
  return res;
}

//FUNCIONA


/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */



/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */



/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/



/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */



/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */



/* 27) Programa una clase llamada Pelicula.
    La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
      - Todos los datos del objeto son obligatorios.
      - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
      - Valida que el título no rebase los 100 caracteres.
      - Valida que el director no rebase los 50 caracteres.
      - Valida que el año de estreno sea un número entero de 4 dígitos.
      - Valida que el país o paises sea introducidos en forma de arreglo.
      - Valida que los géneros sean introducidos en forma de arreglo.
      - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
      - Crea un método estático que devuelva los géneros aceptados*.
      - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
      - Crea un método que devuelva toda la ficha técnica de la película.
      - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

    * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
    */
