/*The standard form of a quadratic equation is:

ax2 + bx + c = 0, where a, b and c are real numbers and a ≠ 0

To find the roots of such equation, we use the formula,

(root1,root2) = (-b ± √b2-4ac)/2

The term (b2-4ac) is known as the discriminant of a quadratic equation. It tells the nature of the roots.
If the discriminant is greater than 0, the roots are real and different.
If the discriminant is equal to 0, the roots are real and equal.
If the discriminant is less than 0, the roots are complex and different.

*/

const prompt = require("prompt-sync")();
let a = prompt("Enter the first num");
let b = prompt("Enter the second num");
let c = prompt("Enter the third num");

let root1;
let root2;

let discriminant = b*b - 4*a*c;

if (discriminant > 0){
    root1 = (-b + Math.sqrt(discriminant-4*a*c)) / (2*a);
    root2 = (-b - Math.sqrt(discriminant-4*a*c)) / (2*a);

    console.log (`The roots of the equation are real and different as ${root1} and ${root2}`);
} else if (discriminant == 0) {
    root1 = root2 = (-b / 2*a);

    console.log (`The roots of the equation are real and equal and are ${root1} and ${root2} `);
} else {
    let realpart = -b / (2*a);
    let imaginarypart = Math.sqrt(-discriminant) / (2 * a).toFixed(2);

    console.log (`The roots of quadratic equation are complex and different are ${realpart} + ${imaginarypart}i and ${realpart} - ${imaginarypart}i`);

}


