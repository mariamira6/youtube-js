
/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */

function medida(word) {
  return word.length;
}

console.log(medida("María"));
console.log(medida("Estoy estudiando Javascript."));
console.log("*******************Ejercicio 1 hecho *******************");

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */

function elcorte(word, slice) {
  if (slice > word.length) {
    return "Has excedido el límite de caracteres. La operación no se puede realizar."
  } else {
    return word.substring(0, slice);
  }
}

console.log(elcorte("Hola que tal", 78));

function corta2(word, slice) {
  let final = "";
  for (let i = 0; i < slice; i++) {
    if (i <= slice) {
      final = final + word[i];
    }
  }
  return final;
}
console.log(corta2("Hola amigo", 3));


/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
 miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

function separar(palabra, symbol) {
  return palabra.split(symbol);
}

console.log(separar("Hola como estás", " "));

function separao(palabra, symbol) {
  let mipalabra = "";
  for (let i = 0; i < palabra.length; i++) {
    mipalabra = mipalabra + (palabra[i] + symbol);
  }
  return mipalabra;
}
console.log(separao("Hola amigo", "?"));


/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */

function repeat(text, num) {
  return text.repeat(num);
}

console.log(repeat("Hola cari ", 3));

function repite(text, num) {
  let rep = "";
  for (let i = 0; i < num; i++) {
    rep = rep + text + " ";
  }
  return rep;
}

console.log(repite("Hola", 3));
/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */

function alreves(word1) {
  let paso1 = word1.split("");
  let paso2 = paso1.reverse("");
  let paso3 = paso2.join("");
  return paso3;
}
console.log(alreves("Hola María"));
/*se puede hacer con bucles*/

function reveh(word) {
  let palabrita = "";
  for (let i = word.length - 1; i >= 0; i--) {
    palabrita = palabrita + word[i];
  }
  return palabrita;
}
console.log(reveh("Hola"));

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */
let trozo = "Hola mi ordenador es mi tesoro";
function prog(text, palabro) {
  let partido = text.split(" ");
  let fin = 0;
  for (let i = 0; i < partido.length; i++) {
    if (partido[i] == palabro) {
      fin = fin + 1;
    }
  }
  return fin;
}
console.log(prog(trozo, "mi"));

function prog1(text, palabro) { /*añadiendo split se arregla también*/
  let guardado = 0;
  for (let elemento of text) {
    if (elemento == palabro) {
      guardado = guardado + 1;
    }
  }
  return guardado;
}
console.log(prog1(trozo, "m"));
/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */

function palin(palindromo) {
  let p1 = "";
  let p2 = "";
  let p3 = palindromo.split("");
  let p4 = false;
  for (let i = 0; i < p3.length; i++) {
    p1 = p1 + p3[i];
  }
  for (let i = p3.length - 1; i >= 0; i--) {
    p2 = p2 + p3[i];
  }
  if (p1 == p2) {
    p4 = true;
  }
  return p4;
}
console.log(palin("mosca"));


function pali2(palindromo) {
  let reves = "";
  let resultadiko = false;
  for (let i = palindromo.length - 1; i >= 0; i--) {
    reves = reves + palindromo[i];
  }
  if (palindromo == reves) {
    resultadiko = true;
  }
  return resultadiko;
}
console.log(pali2("mosca"));


/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */
let cadena = "elmando1, elmando2, elmando3, elmando4 y elmando5";
function quito(vector, trozo) {
  let cortao = cadena.split(trozo);
  let juntao = "";
  for (let i = 0; i < cortao.length; i++) {
    juntao = juntao + cortao[i];
  }
  return juntao;
}

console.log(quito(cadena, "elmando"));
    /* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */



/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */



/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */



/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */



/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */



/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */



/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */



/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */



/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */



/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */



/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */



/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */



/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */



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

    /* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
    */
