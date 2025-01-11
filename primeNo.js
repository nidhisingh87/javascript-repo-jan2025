//Check the given number is prime or not.

const prompt = require ("prompt-sync") ();

let num = parseInt(prompt("Enter the number"));
let isPrime = true;

if (num === 1) {
    console.log ("The number is not prime");
} else if (num > 1){
    for(let i= 2; i <= num/2; i++){
        if(num % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        console.log (`${num} is prime number.`);
    } else{
        console.log (`${num} is not prime number.`);
    }
}
else {
    console.log("The number is not a prime number.");
}