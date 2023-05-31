function palinDromo(word) {
  let reves = "";
  let res = false;
  word = word.toLowerCase();
  word = word.replaceAll("á", "a").replaceAll("é", "e").replaceAll("í", "i").replaceAll("ó", "o").replaceAll("ú", "u").replaceAll("ü", "u").replaceAll(/[^\w/s]/g, "");
  for (let i = word.length - 1; i >= 0; i--) {
    reves = reves + word[i];
  }
  if (word == reves) {
    res = true;
  }
  return res;
}

console.log(palinDromo("¡Mi madre decía que la ïa mum´!!!@@"))
