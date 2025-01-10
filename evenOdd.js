// to Check if a Number is Odd or Even

const prompt = require("prompt-sync")();

let num = prompt("enter the number ");

if (num % 2 == 0) {
    console.log("The given number is even.");
} else{
    console.log("The given number is odd.");
}