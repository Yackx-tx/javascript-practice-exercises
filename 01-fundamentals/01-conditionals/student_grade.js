/* Write a JavaScript program that computes the average marks of the following students.
Then, this average is used to determine the corresponding grade. */
let students = [
['David', 80],
['Vinoth', 77],
['Divya', 88],
['Ishitha',95],
['Thomas', 68]
];
let avgMarks = 0;
let avg;
for (let i = 0; i < students.length; i++) {
    avgMarks += students[i][1];
}
avg = avgMarks / students.length;
console.log("Average grade: " + avg);

if (avg >= 90) {
    console.log('Grade: A');
} else if (avg >= 80) {
    console.log('Grade: B');
} else if (avg >= 70) {
    console.log('Grade: C');
} else if (avg >= 60) {
    console.log('Grade: D');
} else {
    console.log('Grade: F');
}
