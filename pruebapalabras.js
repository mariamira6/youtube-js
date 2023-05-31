function countCharacters(text) {
  let obj = [];
  for (let i = 0; i < text.length; i++) {
    let aux = false;
    for (let j = 0; j < obj.length; j++) {
      if (obj[j].character == text[i]) {
        obj[j].quantity++;
        aux = true;
      }
    }
    if (aux == false) {
      obj.push({
        character: `${text[i]}`,
        quantity: 1
      })
    }
  }
  let res = "";
  for (let k = 0; k < obj.length; k++) {
    //res = res + `"${obj[k].character}" = ${obj[k].quantity},\r\n`
    res = res + "'" + obj[k].character + "' = " + obj[k].quantity + ",\n";
  }
  console.log(res);
  return res
}



function validateSerieInteger(text) {
  let aux = true;
  let res = text.split(",");
  for (let i = 0; i < res.length && aux; i++) {
    console.log(parseInt(res[i].trim()));
    if (isNaN(parseInt(res[i].trim())) || res[i].trim() == "") {
      aux = false;
    }
  }
  return aux;
}

console.log(validateSerieInteger("--12, 3, 24, 6, 7"))


function returnNumbers(num) {
  let numFinal = num.split(",").map(Number);
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
}

