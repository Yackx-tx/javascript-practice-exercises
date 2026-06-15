/*
Write a JavaScript conditional statement to sort three numbers.
Display an alert box to show the results.
*/
let x = 12;
let y = -20;
let z = 4;

if (x <= y && x <= z) {
    if (y <= z) {
        console.log(x + ', ' + y + ', ' + z);
    } else {
        console.log(x + ', ' + z + ', ' + y);
    }
} else if (y <= x && y <= z) {
    if (x <= z) {
        console.log(y + ', ' + x + ', ' + z);
    } else {
        console.log(y + ', ' + z + ', ' + x);
    }
} else {
    if (x <= y) {
        console.log(z + ', ' + x + ', ' + y);
    } else {
        console.log(z + ', ' + y + ', ' + x);
    }
}
