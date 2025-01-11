//Find the factorial of a given number.

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter the number"));
if (num < 0) {
    console.log("Factorial of a given number doesnot exist.")
}else if (num === 0) {
    console.log(`The factorial of given ${num} is 1.`);
}else {
    let fact = 1;
    for(i=1; i<=num; i++) {
        fact = fact*i;
    }
    console.log(`The factorial of ${num} is ${fact}.`);
}


