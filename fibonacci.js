// To generate fibonacci series up to n terms

const prompt = require("prompt-sync")();

const num = parseInt(prompt('Enter the number of terms: '));

let n1 = 0;
let n2 = 1;
let nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= num; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}