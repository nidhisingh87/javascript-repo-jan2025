//Find the squareroot of a number entered by user
const prompt = require('prompt-sync')(); //to import prompt sync
const num = prompt("Enter the number");
const sqrt = Math.sqrt(num);
console.log (`Square root of ${num} is ${sqrt}`);

// Square root of different types of numbers
const a = 64;
const b = -121;
const c = 16.6;

const result1 = Math.sqrt(a);
const result2 = Math.sqrt(b);
const result3 = Math.sqrt(c);


console.log(`Square root of ${a} is ${result1}`);
console.log(`Square root of ${b} is ${result2}`);
console.log(`Square root of ${c} is ${result3}`);



