let [a, b, c] = lines[0].trim().split(" ").map(number)


let delta = Math.pow(b, 2) -4 * a * c ;

if (delta < 0) {
    console.log("Impossivel calcular");
}

let R1 = (-b + Math.sqrt(delta)) / (2 * a);
let R2 = (-b - Math.sqrt(delta)) / (2 * a);

console.log("R1 = " + R1.toFixed(5))
console.log("R2 = " + R2.toFixed(5))
