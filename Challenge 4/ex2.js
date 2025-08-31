// Exercice 2: Multiplication table
const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter a number between 2 and 9: "));
if (n >= 2 && n <= 9) {
  for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + n * i);
  }
} else {
  console.log("Number not valid.");
}
