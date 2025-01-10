//To to Check if a number is Positive, Negative, or Zero.

const prompt = require('prompt-sync')(); 
const num = parseInt(prompt("Enter the number"));

if (num > 0) {
    console.log("The number is positive");
} else if (num == 0) {
    console.log("The nmber is Zero");
} else {
    console.log("The number is negative");
}