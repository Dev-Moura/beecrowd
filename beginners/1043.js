/*
Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X

Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a,b,c] = lines[0].trim().split(" ").map(Number);

let area = ((a + b) * c) / 2;

if (a + b > c &&
    b + c > a && 
    c + a > b) {
    let perimetro = a + b + c;
    console.log("Perimetro = "+ perimetro.toFixed(1));
} else {
    console.log("Area = " + area.toFixed(1));
}