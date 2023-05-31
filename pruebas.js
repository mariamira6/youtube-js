let c = 7.2856;
console.log(c.toFixed(1));

let d = 7.197867;
console.log(d.toFixed(1));
console.log(d.toFixed(2));
console.log(d.toFixed(3));

let firstName = "Moi";
console.log(`Hola ${1}!`);

let name = "Moi";
console.log(`Hola ${"name"}!`)

let name1 = "Moi";
console.log(`Hola ${name1}!`);

let aa = "Hola";
let bb = 1.34;
let cc = -2;
console.log(typeof aa);
console.log(typeof bb);
console.log(typeof cc);

let myString = "Hola Mundo";
console.log(typeof myString);
console.log(typeof "Hola Mundo");


let nombre = "Maria";
let apellido = "Mira";
let age = 29;
let region = "Kanto";
let pokemon = "Squirtle";

console.log(`"La entrenadora ${nombre} ${apellido}, de ${age} años de la región de ${region}, ha iniciado su aventura con su inseparable compañero ${pokemon}."`);
console.log("Hola soy \"María\"");

let aaa = 2, bbb = 3;
let ccc = ++aaa; // si el operador está antes, se suma 1+valor variable en la nueva.
let ddd = bbb++; // si la variable está antes y el operador después, sólo aumenta la variable original.

console.log(aaa, bbb, ccc, ddd);
console.log(2, 3, 3, 4)

let x = 2;
let y = 1 + (x *= 2);
console.log(x, y);
console.log (2, 5);

function hola() {
  return "Hola que tal"
}

let valorhola = hola();

console.log(valorhola);
console.log(hola());
console.log("--------------------------------------------------");

/*const miVariableConFuncionAnonima = (a, b) => {
  return a + b;
};

function Restar(a, b) {
  return a - b;
}

const miVariableConFuncion = Restar;

console.log(miVariableConFuncionAnonima(2, 5));
console.log(miVariableConFuncion(8, 2));
console.log(Restar(5, 4)); */

const miVariableConFuncionAnonima = (a, b) => {
  return a + b;
};

const miVariableConFuncionAnonima2 = function (a, b) {
  return a + b;
};

function Restar(a, b) {
  return a - b;
}

const miVariableConFuncion = Restar;

console.log(miVariableConFuncionAnonima(2, 5));
console.log(miVariableConFuncionAnonima2(2, 5));
console.log(miVariableConFuncion(8, 2));

console.log(Number.parseInt("40"));


let h=4;
let k=h++;
console.log(`H es igual a : ${h}`);
console.log(`K es igual a : ${k}`);
let f=5;
let g= ++f;
console.log(`F es igual a : ${f}`);
console.log(`G es igual a : ${g}`);


let comida = ["manzana", "pera", "mandarina", "jamón", "salchicha"];

for (i=0; i<comida.length; i++) {
  console.log(comida[i]);
}
/*
for (let i in comida) {
  console.log(comida[i]);
}

for (let i of comida) {
  let elegida = comida[2];

}
*/

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */

function miFuncion(word, num) {
  let i = 0;
  for (i=0; i<num; i++) {
    console.log(word[i]);
  }

}
miFuncion("hola amigo", 5);

/*
let lista = [3, 45, 7, 876, 34, 6];
function sumar(cosa) {
  let yaesta = 1;
  for (let i=0; i<cosa.length; i++) {
    yaesta = yaesta * cosa[i];
  }
  return yaesta;
}

console.log(sumar(lista));
*/

/*1º nºpares, 2º suma pares, 3º suma primero y último)*/
let arra1 = [24, 42, 46, 66, 24];

function pares(array1) {
  let pares1 = 0;
  for (let i=0; i<array1.length; i++) {
    if (i%2==0) {
      pares1 = pares1 + 1;
    }
    }
  return pares1;
}

console.log(pares(arra1));
