/*
Write a JavaScript conditional statement to find the sign of the product of three numbers.
Display an alert box with the specified sign.
*/

let num1 = 3;
let num2 = 7;
let num3 = 5;

if (num1 > 0 && num2 > 0 && num3 > 0) {
  alert("The sign is +");
} else if (num1 < 0 && num2 < 0 && num3 < 0) {
  console.log("The sign is -");
} else if (num1 > 0 && num2 < 0 && num3 < 0) {
  console.log("The sign is +");
} else if (num1 < 0 && num2 > 0 && num3 < 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}
