//To generate multiplication table
const prompt = require("prompt-sync")();

const num = parseInt(prompt('Enter an integer: '));
for(let i = 1; i <= 10; i++) {
    const res = i * num;

    console.log(`${num} * ${i} = ${res}`);
}