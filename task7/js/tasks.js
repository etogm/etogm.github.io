function getRandomInts(length, min, max) {
  let randomValues = new Array();
  min = Math.ceil(min);
  max = Math.floor(max);

  for (let i = 0; i < length; i++) {
    randomValues.push(Math.floor(Math.random() * (max - min) + min));
  }
  console.log(randomValues);
  return randomValues;
}

let symbols = 'abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRTUVWYZ1234567890';

let encodedSymbols = getRandomInts(getRandomInts(1, 5, 50), 0, symbols.length);
let decodingMessage = '';

encodedSymbols.forEach(code => {
  decodingMessage += symbols[code];
});

console.log('Ответ: ' + decodingMessage);
