
let value = parseInt(lines.shift());
let valueUpdate = value;
 
let notes100 = value / 100;
value -= notes100 * 100;

let notes50 = value / 50;
value -= notes50 * 50;

let notes20 = value / 20;
value -= notes20 * 20;

let notes10 = value / 10;
value -= notes10 * 10;

let notes5 = value / 5;
value -= notes5 * 5;

let notes2 = value / 2;
value -= value * 2;

let note1 = valueUpdate;

console.log(notes100 + " nota(s) de R$ 100.00");
console.log(notes50 + " nota(s) de R$ 50.00");
console.log(notes20 + " nota(s) de R$ 20.00");
console.log(notes10 + " nota(s) de R$ 10.00");
console.log(notes5 + " nota(s) de R$ 5.00");
console.log(notes2+ " nota(s) de R$ 2.00");
console.log(note1 + " nota(s) de R$ 1.00");
