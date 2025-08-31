// Exercice 3: Array operations
let values = [3, 11, 7, 2, 9, 10];

let sum = values.reduce((a, b) => a + b, 0);
console.log("Sum:", sum);

function average(arr) {
  return sum / arr.length;
}
console.log("Average:", average(values));

function minMax(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}
console.log("Min and Max:", minMax(values));
