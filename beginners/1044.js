/*
Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima.
*/

let [a, b] = lines[0].trim().split(" ").map(Number);

if (a % b === 0 ||
    b % a === 0
)
 {
    console.log("Sao Multiplos")
} 
else {
    console.log("Nao sao Multiplos")
}