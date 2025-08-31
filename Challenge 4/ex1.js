// Exercice 1: VAT calculation
const prompt = require("prompt-sync")();

let price = parseFloat(prompt("Enter raw price: "));
let finalPrice = price * 1.185;
console.log("Final price with VAT:", finalPrice);
