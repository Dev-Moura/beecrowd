/*

Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.
Entrada

Leia três valores de ponto flutuante (double) A, B e C.
Saída

Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.


*/

let [a, b, c] = lines[0].trim().split(" ").map(Number);


let delta = Math.pow(b, 2) -4 * a * c ;

if (a === 0 || delta < 0) {
    console.log("Impossivel calcular");
} else {

let R1 = (-b + Math.sqrt(delta)) / (2 * a);
let R2 = (-b - Math.sqrt(delta)) / (2 * a);

console.log("R1 = " + R1.toFixed(5));
console.log("R2 = " + R2.toFixed(5));

}
