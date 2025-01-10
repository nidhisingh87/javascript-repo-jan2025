//Celsius to Fahrenheit
//fahrenheit = celsius * 1.8 + 32
//celsius = (fahrenheit - 32) / 1.8

const prompt = require("prompt-sync")();
let celsius = prompt("Enter the celsius value");
const fahrenheit = celsius * 1.8 + 32;
let res = celsius * 1.8 + 32;

console.log(`The value of ${celsius}C in fahrenheit is ${res}F.`);
