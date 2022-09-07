'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  let acc = 0;

  for (let i = 0; i < num.length; i++) {
    acc += Math.pow(2,num.length-1-i)*num[i];  
  }

  return acc;
}

function DecimalABinario(num) {
  // tu codigo aca

  let valor='';

  while (num) {
    valor = (num%2) + valor;
    num = Math.floor(num / 2);
  }

  return valor;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}