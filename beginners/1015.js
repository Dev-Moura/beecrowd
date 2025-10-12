
let [x1, y1] = lines.shift().trim().split(" ").map((x) => parseFloat(x))
let [x2, y2] = lines.shift().trim().split(" ").map((x) => parseFloat(x))
let distancia = Math.sqrt(Math.pow((x2-x1), 2.0) + Math.pow((y2-y1), 2.0));

console.log(distancia.toFixed(4));