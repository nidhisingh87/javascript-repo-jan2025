//Program to Calculate the Area of a Triangle
//Formula area = (base * height) / 2 When base and height are known.

const prompt = require('prompt-sync')(); //to import prompt sync
const base = prompt("Enter the base of triangle");
const height = prompt("Enter the height of the triangle");
const res = (base * height) / 2;

console.log (`Area of triangle1 is ${res}`);

//When All sides are known
/* herons formula s = (a+b+c)/2
area = √(s(s-a)*(s-b)*(s-c))
*/


const side1 = parseint(prompt("Enter the value of side1"));
const side2 = parseint(prompt("Enter the value of side2"));
const side3 = parseint(prompt("Enter the value of side3"));

const s = (side1+side2+side3)/2;
const area = Math.sqrt(s(s-side1)*(s-side2)*(s-side3));

console.log (`The Area of Trianglle2 is ${area}`);