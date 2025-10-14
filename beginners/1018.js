/*

Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.
Entrada

O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).
Saída

Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

*/
let value = parseInt(lines.shift());
let valueUpdate = value;
 
let notes100 = Math.floor(valueUpdate / 100);
valueUpdate -= notes100 * 100;

let notes50 = Math.floor(valueUpdate / 50);
valueUpdate -= notes50 * 50;

let notes20 = Math.floor(valueUpdate / 20);
valueUpdate -= notes20 * 20;

let notes10 = Math.floor(valueUpdate / 10);
valueUpdate -= notes10 * 10;

let notes5 = Math.floor(valueUpdate / 5);
valueUpdate -= notes5 * 5;

let notes2 = Math.floor(valueUpdate / 2);
valueUpdate -= notes2 * 2;

let note1 = valueUpdate;

console.log(value);
console.log(notes100 + " nota(s) de R$ 100,00");
console.log(notes50 + " nota(s) de R$ 50,00");
console.log(notes20 + " nota(s) de R$ 20,00");
console.log(notes10 + " nota(s) de R$ 10,00");
console.log(notes5 + " nota(s) de R$ 5,00");
console.log(notes2 + " nota(s) de R$ 2,00");
console.log(note1 + " nota(s) de R$ 1,00");
