/*
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.
Entrada

O arquivo de entrada contém um valor inteiro N.
Saída

Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

*/

let n = parseInt(lines.shift());

let h = Math.floor(n / 3600);
let m = Math.floor(h / 60);
let s = Math.floor(m / 60);
console.log(`${h}:${m}:${s}`)