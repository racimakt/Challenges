// Exercice 4: Temperature conversion
const prompt = require("prompt-sync")();

let celsius = parseFloat(prompt("Enter temperature in Celsius: "));
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(celsius + "°C =", fahrenheit + "°F");

function toCelsius(f) {
  return ((f - 32) * 5) / 9;
}
console.log("32°F =", toCelsius(32), "°C");
