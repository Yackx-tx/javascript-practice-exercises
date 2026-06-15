// Write a JavaScript conditional statement to find the largest of five numbers.
// Display an alert box to show the results.
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

if(a > b && a > c && a > d && a > e) {
    console.log(`${a} if the greatest`);
} else if(b > a && b > c && b > d && b > e) {
    console.log(`${b} if the greatest`);
}  else if(c > a && c > b && c > d && c > e) {
    console.log(`${c} if the greatest`);
} else if(d > a && d > b && d > c && d > e) {
    console.log(`${d} if the greatest`);
} else if(e > a && e > b && e > c && e > d) {
    console.log(`${e} if the greatest`);
}
