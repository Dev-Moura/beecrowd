let [a,b,c] = lines[0].trim().split(" ").map(Number);

let lowerAb = (a - b - Math.abs(a+b)) / 2;