'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  // let acc = 0;

  // for (let i = 0; i < num.length; i++) {
  //   acc += Math.pow(2,num.length-1-i)*num[i];  
  // }

  // return acc;
  var array = num.split('');
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + Math.pow(2, array.length - 1 - i) * array[i];
  }
  return sum;
}


function DecimalABinario(num) {
  // tu codigo aca

  // let valor='';

  // while (num) {
  //   valor = (num%2) + valor;
  //   num = Math.floor(num / 2);
  // }

  // return valor;

  if (num <= 0) return '0';

  var array = []

  while (num) {
    array.unshift(num % 2);
    num = Math.floor(num / 2);
  }

  return array.join('')
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}