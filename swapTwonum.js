//Program to Swap Two Variables

//By using temp variable
let a = 34;
let b = 67;
let temp;

temp = a;
a = b;
b = temp;

console.log ("The value of a after swapping is " + a);
console.log ("The value of b after swapping is " + b);

//By using Destructuring assighment

let x = 12;
let y = 34;

[x,y]=[y,x];

console.log ("The value of x after swapping is " + x);
console.log ("The value of y after swapping is " + y);