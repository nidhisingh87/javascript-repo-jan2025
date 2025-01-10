//Convert Kilometers to Miles
// 1 kilometer is equal to 0.621371 miles.
// Formulla is miles = kilometers * 0.621371

const prompt = require('prompt-sync')();
let kilometers = prompt("Enter the value of kilometer");
const factor = 0.621371;
let res = kilometers * factor;

console.log (`There are ${res}miles in ${kilometers}kms.`);



