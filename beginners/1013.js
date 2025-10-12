/*

Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.
Entrada

formula -> maiorAB = (a+b + abs(a-b)) / 2; 

O arquivo de entrada contém três valores inteiros.
Saída

Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

*/

let values = lines.shift().trim().split(" ");
let [a,b,c] = [parseInt(values.shift()),parseInt(values.shift()),parseInt(values.shift())]
let biggestAB = (a + b + Math.abs(a-b)) / 2;

let isBiggest = (biggestAB + c + Math.abs(biggestAB - c)) / 2;

console.log(isBiggest + " eh o maior");