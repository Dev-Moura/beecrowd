let value = parseFloat(lines.shift());
let updatevalue = value;

notes100 = Math.floor( updatevalue / 100);
updatevalue -= notes100 * 100;

notes50 = Math.floor(updatevalue / 50);
updatevalue -= notes50 * 50;

notes20 = Math.floor(updatevalue / 20);
updatevalue -= notes20 * 20;

notes10 = Math.floor( updatevalue / 10);
updatevalue -= notes10 * 10;

notes5 = Math.floor(updatevalue / 5);
updatevalue -= notes5 * 5;

notes2 = Math.floor(updatevalue / 2);
updatevalue -= notes2 * 2;

coin1 = Math.floor(updatevalue / 1.00);
updatevalue -= coin1 * 1.00;

coin50 = Math.floor(updatevalue / 0.50);
updatevalue -= coin50 * 0.50;

coin25 = Math.floor(updatevalue / 0.25);
updatevalue -= coin25 * 0.25;

coin10 = Math.floor(updatevalue / 0.10);
updatevalue -= coin10 * 0.10;

coin05 = Math.floor(updatevalue / 0.05);
updatevalue -= coin05 * 0.05;

coin01 = Math.floor(updatevalue / 0.01);
updatevalue -= coin01 * 0.01;

console.log("NOTAS:")
console.log(notes100 + " nota(s) de R$ 100.00");
console.log(notes50 + " nota(s) de R$ 50.00");
console.log(notes20 + " nota(s) de R$ 20.00");
console.log(notes10 + " nota(s) de R$ 10.00");
console.log(notes5 + " nota(s) de R$ 5.00");
console.log(notes2 + " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(coin1 + " moeda(s) de R$ 1.00");
console.log(coin50 + " moeda(s) de R$ 0.50");
console.log(coin25 + " moeda(s) de R$ 0.25");
console.log(coin10 + " moeda(s) de R$ 0.10");
console.log(coin05 + " moeda(s) de R$ 0.05");
console.log(coin01 + " moeda(s) de R$ 0.01");