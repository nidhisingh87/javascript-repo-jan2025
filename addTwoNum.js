//Add two num entered by user
const prompt = require('prompt-sync')();
const num1 = parseInt(prompt("Enter first num"));
const num2 = parseInt(prompt("Enter second num"));

const sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);

//Simple addition
const x = 23;
const y = 34;

const res = x+y;

console.log ("The sum of " + x + " and " + y + " is " + res);
