//Find the lagrest among among three.

const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Enter first number"));
let num2 = parseFloat(prompt("Enter second number"));
let num3 = parseFloat(prompt("Enter third number"));

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
}else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}else {
    largest = num3;
}

console.log (`The largest number is ${largest}`)